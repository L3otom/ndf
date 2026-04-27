/**
 * ═══════════════════════════════════════════════════════════
 * ATØMIQ THEME TOGGLE
 * Version: 1.0.0
 * Description: Gestion du thème clair/sombre (auto + manuel)
 * ═══════════════════════════════════════════════════════════
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'atomiq-theme';
  
  /**
   * Récupère le thème préféré (ordre de priorité)
   * 1. Thème sauvegardé dans localStorage
   * 2. Préférence système (prefers-color-scheme)
   * 3. Défaut : light
   */
  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  /**
   * Applique le thème au document
   */
  function setTheme(theme) {
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem(STORAGE_KEY, theme);
    
    // Dispatch custom event pour notifier d'autres composants
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme } }));
  }

  /**
   * Toggle entre light et dark
   */
  function toggleTheme() {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    return newTheme;
  }

  /**
   * Initialise le thème au chargement
   */
  function initTheme() {
    const theme = getPreferredTheme();
    setTheme(theme);
  }

  /**
   * Écoute les changements de préférence système
   */
  function watchSystemTheme() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Ne pas override si l'utilisateur a fait un choix manuel
      if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    });
  }

  // ────────────────────────────────────────────────────────
  // AUTO-INIT au chargement de la page
  // ────────────────────────────────────────────────────────
  
  initTheme();
  watchSystemTheme();

  // ────────────────────────────────────────────────────────
  // API PUBLIQUE
  // ────────────────────────────────────────────────────────
  
  window.AtomiqTheme = {
    get: getPreferredTheme,
    set: setTheme,
    toggle: toggleTheme
  };

})();

/**
 * ═══════════════════════════════════════════════════════════
 * EXEMPLE D'UTILISATION
 * ═══════════════════════════════════════════════════════════
 * 
 * HTML pour le bouton de toggle :
 * 
 * <button id="theme-toggle" class="btn btn-ghost">
 *   <svg id="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
 *     <circle cx="12" cy="12" r="5"/>
 *     <line x1="12" y1="1" x2="12" y2="3"/>
 *     <line x1="12" y1="21" x2="12" y2="23"/>
 *     <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
 *     <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
 *     <line x1="1" y1="12" x2="3" y2="12"/>
 *     <line x1="21" y1="12" x2="23" y2="12"/>
 *     <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
 *     <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
 *   </svg>
 *   <svg id="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="display:none">
 *     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
 *   </svg>
 * </button>
 * 
 * JavaScript pour gérer le clic :
 * 
 * document.getElementById('theme-toggle').addEventListener('click', () => {
 *   const newTheme = window.AtomiqTheme.toggle();
 *   
 *   // Optionnel : mettre à jour les icônes
 *   const sunIcon = document.getElementById('icon-sun');
 *   const moonIcon = document.getElementById('icon-moon');
 *   
 *   if (newTheme === 'dark') {
 *     sunIcon.style.display = 'none';
 *     moonIcon.style.display = 'block';
 *   } else {
 *     sunIcon.style.display = 'block';
 *     moonIcon.style.display = 'none';
 *   }
 * });
 * 
 * // Mettre à jour les icônes au chargement initial
 * const currentTheme = window.AtomiqTheme.get();
 * if (currentTheme === 'dark') {
 *   document.getElementById('icon-sun').style.display = 'none';
 *   document.getElementById('icon-moon').style.display = 'block';
 * }
 * 
 */
