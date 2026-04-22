/* ═══════════════════════════════════════════
   SISTEMA DE "VER MÁS" POR CATEGORÍAS
   Chao Pescao - Sistema de organización de productos
   
   CARACTERÍSTICAS:
   - No modifica el HTML existente
   - Se puede activar/desactivar fácilmente
   - Agrupa productos automáticamente por categoría
   - Muestra inicialmente 6 productos por categoría
   - Botón "Ver más" para expandir
   
   INSTALACIÓN:
   1. Agregar este archivo: <script src="productsViewMore.js"></script>
   2. Listo - funciona automáticamente
═══════════════════════════════════════════ */

(function() {
  'use strict';
  
  // ═══════════════════════════════════════════
  // CONFIGURACIÓN
  // ═══════════════════════════════════════════
  const CONFIG = {
    productsPerCategory: 6,  // Productos visibles inicialmente por categoría
    animationSpeed: 300,      // Velocidad de animación en ms
    categories: {
      'gato': { emoji: '🐱', name: 'Gatos', color: '#F28C28' },
      'perro': { emoji: '🐶', name: 'Perros', color: '#1A6FC4' },
      'pez': { emoji: '🐟', name: 'Peces', color: '#2A9D3B' },
      'hamster': { emoji: '🐹', name: 'Pequeños', color: '#F5C518' },
      'otros': { emoji: '🐾', name: 'Otros', color: '#4A4A4A' }
    }
  };
  
  // ═══════════════════════════════════════════
  // FUNCIONES PRINCIPALES
  // ═══════════════════════════════════════════
  
  /**
   * Detecta la categoría de un producto basándose en el emoji
   */
  function detectCategory(productCard) {
    const emoji = productCard.getAttribute('data-product-emoji') || '';
    const categoryText = productCard.querySelector('.p-cat')?.textContent.toLowerCase() || '';
    
    if (emoji.includes('🐱') || categoryText.includes('gato') || categoryText.includes('felino')) {
      return 'gato';
    } else if (emoji.includes('🐶') || categoryText.includes('perro') || categoryText.includes('canino')) {
      return 'perro';
    } else if (emoji.includes('🐟') || categoryText.includes('pez') || categoryText.includes('peces')) {
      return 'pez';
    } else if (emoji.includes('🐹') || categoryText.includes('hamster')) {
      return 'hamster';
    }
    return 'otros';
  }
  
  /**
   * Agrupa productos por categoría
   */
  function groupProductsByCategory() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) {
      console.warn('No se encontró .products-grid');
      return null;
    }
    
    const allProducts = Array.from(productsGrid.querySelectorAll('.p-card'));
    const grouped = {};
    
    allProducts.forEach(product => {
      const category = detectCategory(product);
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(product);
    });
    
    return grouped;
  }
  
  /**
   * Crea un botón "Ver más"
   */
  function createViewMoreButton(category, hiddenCount) {
    const btn = document.createElement('button');
    btn.className = 'view-more-btn';
    btn.setAttribute('data-category', category);
    btn.innerHTML = `
      <span class="view-more-icon">▼</span>
      Ver más productos de ${CONFIG.categories[category].name} (${hiddenCount} ocultos)
    `;
    
    // Estilos inline para no depender de CSS externo
    Object.assign(btn.style, {
      gridColumn: '1 / -1',
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)',
      border: '2px solid ' + CONFIG.categories[category].color,
      borderRadius: '12px',
      fontSize: '0.95rem',
      fontWeight: '700',
      color: CONFIG.categories[category].color,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      marginTop: '8px',
      marginBottom: '24px'
    });
    
    // Hover effect
    btn.addEventListener('mouseenter', () => {
      btn.style.background = CONFIG.categories[category].color;
      btn.style.color = '#FFFFFF';
      btn.style.transform = 'translateY(-2px)';
      btn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.background = 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)';
      btn.style.color = CONFIG.categories[category].color;
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = 'none';
    });
    
    return btn;
  }
  
  /**
   * Crea un separador de categoría
   */
  function createCategorySeparator(category) {
    const separator = document.createElement('div');
    separator.className = 'category-separator';
    separator.setAttribute('data-category', category);
    
    const categoryInfo = CONFIG.categories[category];
    separator.innerHTML = `
      <span class="category-emoji">${categoryInfo.emoji}</span>
      <span class="category-name">${categoryInfo.name}</span>
    `;
    
    // Estilos inline
    Object.assign(separator.style, {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '20px 0',
      marginTop: '32px',
      borderBottom: '3px solid ' + categoryInfo.color,
      fontSize: '1.3rem',
      fontWeight: '900',
      color: '#1C1C1C'
    });
    
    separator.querySelector('.category-emoji').style.fontSize = '1.8rem';
    separator.querySelector('.category-name').style.color = categoryInfo.color;
    
    return separator;
  }
  
  /**
   * Reorganiza el grid de productos
   */
  function reorganizeProducts() {
    const grouped = groupProductsByCategory();
    if (!grouped) return;
    
    const productsGrid = document.querySelector('.products-grid');
    const fragment = document.createDocumentFragment();
    
    // Orden de categorías
    const categoryOrder = ['perro', 'gato', 'pez', 'hamster', 'otros'];
    
    categoryOrder.forEach(category => {
      const products = grouped[category];
      if (!products || products.length === 0) return;
      
      // Agregar separador de categoría
      const separator = createCategorySeparator(category);
      fragment.appendChild(separator);
      
      // Agregar productos
      products.forEach((product, index) => {
        // Marcar productos ocultos inicialmente
        if (index >= CONFIG.productsPerCategory) {
          product.classList.add('product-hidden');
          product.setAttribute('data-category', category);
          product.style.display = 'none';
        } else {
          product.setAttribute('data-category', category);
        }
        fragment.appendChild(product);
      });
      
      // Si hay productos ocultos, agregar botón "Ver más"
      if (products.length > CONFIG.productsPerCategory) {
        const hiddenCount = products.length - CONFIG.productsPerCategory;
        const viewMoreBtn = createViewMoreButton(category, hiddenCount);
        fragment.appendChild(viewMoreBtn);
      }
    });
    
    // Limpiar el grid y agregar todo reorganizado
    productsGrid.innerHTML = '';
    productsGrid.appendChild(fragment);
    
    // Agregar event listeners a los botones "Ver más"
    addViewMoreListeners();
  }
  
  /**
   * Agrega listeners a los botones "Ver más"
   */
  function addViewMoreListeners() {
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');
    
    viewMoreBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        toggleCategoryProducts(category, this);
      });
    });
  }
  
  /**
   * Muestra/oculta productos de una categoría
   */
  function toggleCategoryProducts(category, btn) {
    const hiddenProducts = document.querySelectorAll(
      `.p-card.product-hidden[data-category="${category}"]`
    );
    
    const isExpanded = btn.classList.contains('expanded');
    
    if (isExpanded) {
      // Ocultar productos
      hiddenProducts.forEach((product, index) => {
        setTimeout(() => {
          product.style.display = 'none';
        }, index * 30);
      });
      
      btn.classList.remove('expanded');
      btn.querySelector('.view-more-icon').textContent = '▼';
      btn.innerHTML = btn.innerHTML.replace('Ver menos', 'Ver más');
      
      // Scroll suave al inicio de la categoría
      const separator = document.querySelector(
        `.category-separator[data-category="${category}"]`
      );
      if (separator) {
        separator.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Mostrar productos
      hiddenProducts.forEach((product, index) => {
        setTimeout(() => {
          product.style.display = '';
          product.style.animation = 'fadeIn 0.4s ease forwards';
        }, index * 30);
      });
      
      btn.classList.add('expanded');
      btn.querySelector('.view-more-icon').textContent = '▲';
      const categoryInfo = CONFIG.categories[category];
      btn.innerHTML = `
        <span class="view-more-icon">▲</span>
        Ver menos productos de ${categoryInfo.name}
      `;
    }
  }
  
  // ═══════════════════════════════════════════
  // AGREGAR ANIMACIÓN CSS
  // ═══════════════════════════════════════════
  function addAnimationStyles() {
    if (document.getElementById('viewmore-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'viewmore-styles';
    style.textContent = `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .view-more-icon {
        display: inline-block;
        transition: transform 0.3s ease;
        margin-right: 8px;
      }
      
      .view-more-btn.expanded .view-more-icon {
        transform: rotate(180deg);
      }
    `;
    document.head.appendChild(style);
  }
  
  // ═══════════════════════════════════════════
  // INICIALIZACIÓN
  // ═══════════════════════════════════════════
  function init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    console.log('🐾 Inicializando sistema de "Ver más" - Chao Pescao');
    
    // Agregar estilos de animación
    addAnimationStyles();
    
    // Reorganizar productos
    reorganizeProducts();
    
    console.log('✅ Sistema de "Ver más" activado correctamente');
  }
  
  // Ejecutar inicialización
  init();
  
})();