# 🏗️ ATØMIQ Framework Web v2.0

**Framework CSS minimaliste et souverain - Inspiré d'Open WebUI**

Version : **2.0.0** 🚀  
Poids total : **~12 KB** (non minifié)  
Dépendances : **0** ✅

---

## 📦 Installation

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <!-- Framework core -->
  <link rel="stylesheet" href="/framework/tokens.css">
  <link rel="stylesheet" href="/framework/components.css">
  <link rel="stylesheet" href="/framework/layout.css">
  
  <!-- Sidebar (optionnel) -->
  <link rel="stylesheet" href="/framework/sidebar.css">
</head>
<body>
  <!-- Votre contenu -->
  
  <script src="/framework/theme-toggle.js"></script>
</body>
</html>
```

---

## 🎨 Design System

### Couleurs ATØMIQ

```css
--primary-blue: #0044CC
--primary-red: #FF0505
```

### Palette de gris

```css
--gray-50: #fafafa    (fond principal clair)
--gray-100: #f5f5f5
--gray-200: #e5e5e5   (bordures)
--gray-850: #1c1c1c   (fond secondaire sombre)
--gray-900: #171717   (fond principal sombre)
--gray-950: #0f0f0f
```

### Tokens sémantiques

```css
/* S'adaptent automatiquement au thème */
--color-bg-primary
--color-bg-secondary
--color-bg-tertiary
--color-text-primary
--color-text-secondary
--color-text-muted
--color-border
```

---

## 🌓 Gestion du thème

**Détection automatique** via `prefers-color-scheme` + **switch manuel**.

### API JavaScript

```javascript
// Récupérer le thème actuel
window.AtomiqTheme.get() // 'light' ou 'dark'

// Définir un thème
window.AtomiqTheme.set('dark')

// Toggle
window.AtomiqTheme.toggle()
```

### Exemple de bouton

```html
<button id="theme-toggle" class="btn btn-ghost">
  <span id="icon-sun">☀️</span>
  <span id="icon-moon" style="display:none">🌙</span>
</button>

<script>
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = window.AtomiqTheme.toggle();
    
    document.getElementById('icon-sun').style.display = 
      newTheme === 'dark' ? 'none' : 'block';
    document.getElementById('icon-moon').style.display = 
      newTheme === 'dark' ? 'block' : 'none';
  });
</script>
```

---

## 🧩 Composants

### Boutons

```html
<button class="btn btn-primary">Primaire</button>
<button class="btn btn-secondary">Secondaire</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-danger">Danger</button>

<!-- Tailles -->
<button class="btn btn-primary btn-sm">Petit</button>
<button class="btn btn-primary btn-lg">Grand</button>

<!-- Icon button -->
<button class="btn btn-ghost btn-icon">🔍</button>
```

### Forms (style Open WebUI)

```html
<div class="form-group">
  <label class="label">Email</label>
  <input type="email" class="input" placeholder="jean@exemple.fr">
</div>

<!-- Textarea -->
<textarea class="textarea" placeholder="Votre message..."></textarea>

<!-- Select -->
<select class="select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- States -->
<input class="input input-error" placeholder="Erreur">
<input class="input input-success" placeholder="Succès">
```

### Cards modernes

```html
<div class="card">
  <div class="card-header">
    <span class="badge badge-blue">Nouveau</span>
    <h3 class="card-title">Titre</h3>
    <p class="card-subtitle">Sous-titre</p>
  </div>
  <div class="card-body">
    Contenu de la carte
  </div>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Action</button>
    <button class="btn btn-ghost btn-sm">Annuler</button>
  </div>
</div>

<!-- Card avec hover effect -->
<div class="card card-hover">...</div>
```

### Badges

```html
<span class="badge badge-blue">Bleu</span>
<span class="badge badge-red">Rouge</span>
<span class="badge badge-gray">Gris</span>
<span class="badge badge-success">Succès</span>
```

### Alerts

```html
<div class="alert alert-info">
  <strong>Info :</strong> Message informatif
</div>

<div class="alert alert-error">...</div>
<div class="alert alert-success">...</div>
<div class="alert alert-warning">...</div>
```

### Avatar

```html
<div class="avatar">JD</div>
<div class="avatar avatar-sm">JD</div>
<div class="avatar avatar-lg">JD</div>

<!-- Avec image -->
<div class="avatar">
  <img src="profile.jpg" alt="User">
</div>
```

---

## 📐 Sidebar réductible

**Nouveau dans v2.0** - Menu latéral style Open WebUI

### Structure HTML

```html
<div class="app-layout">
  
  <!-- Sidebar -->
  <aside class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <img src="logo.svg" width="24">
        <span>ATØMIQ</span>
      </div>
      <button class="sidebar-toggle" id="toggle-btn">☰</button>
    </div>
    
    <nav class="sidebar-nav">
      <div class="nav-section">
        <div class="nav-section-title">Menu</div>
        <ul class="nav-list">
          <li>
            <a href="#" class="nav-item active">
              <span class="nav-item-icon">🏠</span>
              <span class="nav-item-text">Accueil</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="avatar">JD</div>
        <div class="sidebar-user-info">
          <div class="sidebar-user-name">Jean Dupont</div>
          <div class="sidebar-user-email">jean@atomiq.ai</div>
        </div>
      </div>
    </div>
  </aside>
  
  <!-- Main content -->
  <main class="main-content">
    <div class="main-content-inner">
      <!-- Votre contenu -->
    </div>
  </main>
  
</div>
```

### JavaScript pour toggle

```javascript
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
```

---

## 🎯 Layout & Utilitaires

### Grid responsive

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

### Flexbox

```html
<div class="flex items-center justify-between gap-3">
  <div>Gauche</div>
  <div>Droite</div>
</div>
```

### Spacing

```html
<div class="p-4 mb-6">Padding 4, Margin bottom 6</div>
<div class="mx-auto">Centré horizontalement</div>
```

### Texte

```html
<h1 class="text-2xl font-bold text-center">Titre</h1>
<p class="text-sm text-secondary">Paragraphe secondaire</p>
<span class="text-muted">Texte en sourdine</span>
```

---

## 📊 Taille du framework

| Fichier | Taille |
|---------|--------|
| `tokens.css` | ~4 KB |
| `components.css` | ~5 KB |
| `layout.css` | ~2 KB |
| `sidebar.css` | ~3 KB |
| `theme-toggle.js` | ~2 KB |
| **TOTAL** | **~16 KB** |

---

## 🚀 Nouveautés v2.0

✅ **Palette de gris enrichie** (inspirée Tailwind)  
✅ **Sidebar réductible** avec animations  
✅ **Forms élégants** style Open WebUI  
✅ **Cards modernes** avec hover effects  
✅ **Scrollbars customisées** subtiles  
✅ **Tokens sémantiques** auto-adaptés au thème  
✅ **Transitions fluides** partout  
✅ **Avatar component**  
✅ **Badge variants** (success, warning...)  

---

## 🎓 Philosophie ATØMIQ

✅ **Souveraineté** : 0 dépendance externe  
✅ **Simplicité** : CSS vanilla + custom properties  
✅ **Performance** : < 20 KB total  
✅ **Accessibilité** : Focus visible, contrastes WCAG AA  
✅ **Responsive** : Mobile-first  
✅ **Moderne** : Inspiré des meilleurs (Open WebUI, Tailwind)  

---

## 📝 Exemples

- `example.html` - Exemple basique (v1.0)
- `example-sidebar.html` - Dashboard complet avec sidebar (v2.0)

---

## 🤝 Support

Pour toute question ou amélioration, contactez l'équipe ATØMIQ.

**Développé avec ⚛️ par ATØMIQ**

