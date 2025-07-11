<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">
        <h1>April Sears - Website Developer</h1>
      </router-link>
      
      <div class="nav-menu" :class="{ active: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">About</router-link>
        <router-link to="/projects" class="nav-link" @click="closeMenu">Projects</router-link>
        <router-link to="/blog" class="nav-link" @click="closeMenu">Blog</router-link>
      </div>
      
      <div class="nav-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation-bar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.navbar {
  background: var(--color-surface-dark);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo h1 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
}

.nav-logo {
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #3498db;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    display: flex;
    top: 70px;
    flex-direction: column;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0,0,0,0.05);
    padding: 2rem 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }
}
</style>
