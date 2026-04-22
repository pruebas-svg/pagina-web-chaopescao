/* ═══════════════════════════════════════════
   TARJETAS DE CATEGORÍAS CLICKEABLES
   Chao Pescao - Navegación por categorías
   
   CARACTERÍSTICAS:
   - Hace que las tarjetas de categorías sean clickeables
   - Al hacer clic, hace scroll suave a los productos de esa categoría
   - Funciona con el sistema de "Ver más"
   - Cursor pointer en hover
   - No modifica HTML
   
   INSTALACIÓN:
   Agregar después de productsViewMore.js:
   <script src="categoryNavigation.js"></script>
═══════════════════════════════════════════ */

(function() {
  'use strict';
  
  // ═══════════════════════════════════════════
  // MAPEO DE CATEGORÍAS
  // ═══════════════════════════════════════════
  const CATEGORY_MAP = {
    'perros': 'perro',
    'perro': 'perro',
    '🐶': 'perro',
    'gatos': 'gato',
    'gato': 'gato',
    '🐱': 'gato',
    'peces': 'pez',
    'pez': 'pez',
    '🐟': 'pez',
    'hamsters': 'hamster',
    'hámsters': 'hamster',
    'hamster': 'hamster',
    '🐹': 'hamster',
    'accesorios': 'otros',
    'otros': 'otros',
    '🎁': 'otros'
  };
  
  // ═══════════════════════════════════════════
  // DETECTAR CATEGORÍA DE UNA TARJETA
  // ═══════════════════════════════════════════
  function detectCategoryFromCard(card) {
    // Buscar en el nombre de la categoría
    const catName = card.querySelector('.cat-name')?.textContent.toLowerCase().trim() || '';
    
    // Buscar coincidencias
    for (const [key, value] of Object.entries(CATEGORY_MAP)) {
      if (catName.includes(key)) {
        return value;
      }
    }
    
    return null;
  }
  
  // ═══════════════════════════════════════════
  // SCROLL SUAVE A LA CATEGORÍA
  // ═══════════════════════════════════════════
  function scrollToCategory(category) {
    // Buscar el separador de categoría que creó el script de "Ver más"
    const separator = document.querySelector(
      `.category-separator[data-category="${category}"]`
    );
    
    if (separator) {
      // Calcular posición (restar altura del navbar)
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 72;
      const targetPosition = separator.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
      
      // Scroll suave
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Mostrar feedback visual
      showFeedback(category);
    } else {
      console.warn('No se encontró la sección de productos para:', category);
      // Fallback: ir a la sección de productos general
      const productsSection = document.getElementById('productos');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
  
  // ═══════════════════════════════════════════
  // MOSTRAR FEEDBACK VISUAL
  // ═══════════════════════════════════════════
  function showFeedback(category) {
    const categoryNames = {
      'perro': 'Perros 🐶',
      'gato': 'Gatos 🐱',
      'pez': 'Peces 🐟',
      'hamster': 'Pequeños 🐹',
      'otros': 'Otros 🐾'
    };
    
    // Crear toast de feedback
    const toast = document.createElement('div');
    toast.textContent = `Mostrando productos de ${categoryNames[category] || category}`;
    toast.style.cssText = `
      position: fixed;
      bottom: 100px;
      right: 20px;
      background: linear-gradient(135deg, #1A6FC4 0%, #0F4F8F 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.5s;
      pointer-events: none;
    `;
    
    document.body.appendChild(toast);
    
    // Remover después de 3 segundos
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  
  // ═══════════════════════════════════════════
  // AGREGAR ESTILOS DE ANIMACIÓN
  // ═══════════════════════════════════════════
  function addAnimationStyles() {
    if (document.getElementById('category-nav-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'category-nav-styles';
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      
      .cat-card {
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .cat-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 12px 32px rgba(0,0,0,0.18) !important;
      }
      
      .cat-card:active {
        transform: translateY(-4px) scale(1.01);
      }
    `;
    document.head.appendChild(style);
  }
  
  // ═══════════════════════════════════════════
  // HACER TARJETAS CLICKEABLES
  // ═══════════════════════════════════════════
  function makeCardsClickable() {
    const categoryCards = document.querySelectorAll('.cat-card');
    
    categoryCards.forEach(card => {
      // Detectar categoría de esta tarjeta
      const category = detectCategoryFromCard(card);
      
      if (!category) {
        console.warn('No se pudo detectar categoría para:', card);
        return;
      }
      
      // Agregar atributo para referencia
      card.setAttribute('data-target-category', category);
      
      // Agregar evento click
      card.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToCategory(category);
      });
      
      // Feedback visual en hover
      card.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.cat-overlay');
        if (overlay) {
          overlay.style.opacity = '1';
        }
      });
    });
    
    console.log(`✅ ${categoryCards.length} tarjetas de categorías ahora son clickeables`);
  }
  
  // ═══════════════════════════════════════════
  // HACER ENLACES DEL FOOTER CLICKEABLES
  // ═══════════════════════════════════════════
  function makeFooterLinksClickable() {
    // Buscar todos los enlaces del footer en la sección de Mascotas
    const footerLinks = document.querySelectorAll('footer a');
    
    footerLinks.forEach(link => {
      const text = link.textContent.toLowerCase().trim();
      let category = null;
      
      // Detectar categoría por el texto del enlace
      if (text.includes('perro')) {
        category = 'perro';
      } else if (text.includes('gato')) {
        category = 'gato';
      } else if (text.includes('pez') || text.includes('peces') || text.includes('acuario')) {
        category = 'pez';
      } else if (text.includes('pequeño') || text.includes('hamster')) {
        category = 'hamster';
      } else if (text.includes('alimento') || text.includes('juguete') || 
                 text.includes('accesorio') || text.includes('higiene')) {
        // Estos van a la sección general de productos
        link.href = '#productos';
        return;
      }
      
      // Si detectó una categoría, agregar evento
      if (category) {
        link.setAttribute('data-category', category);
        link.addEventListener('click', function(e) {
          e.preventDefault();
          scrollToCategory(category);
        });
      }
    });
    
    console.log('✅ Enlaces del footer configurados');
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
    
    console.log('🔗 Inicializando navegación de categorías - Chao Pescao');
    
    // Agregar estilos
    addAnimationStyles();
    
    // Esperar un poco para asegurar que el script de "Ver más" ya corrió
    setTimeout(() => {
      makeCardsClickable();
      makeFooterLinksClickable(); // ← NUEVO: Enlaces del footer
      console.log('✅ Navegación de categorías activada (tarjetas + footer)');
    }, 500);
  }
  
  // Ejecutar
  init();
  
})();