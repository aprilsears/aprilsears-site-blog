<template>
  <div class="projects-page">
    <h1>My Projects</h1>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <img :src="project.image" :alt="project.title" />
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener" class="view-link">View Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects-view',
  data() {
    return {
      projects: [
        {
          title: 'Personal Portfolio and Blog',
          description: 'A modern portfolio site built with Vue.js and hosted on GitHub Pages.',
         image: require('../assets/images/portfolio pic.png'),
          link: 'https://github.com/aprilsears/aprilsears-site-blog'
        },
        {
          title: 'Chronically Well (original)',
          description: 'A fitness application focused on chronic illness and provides information to take your health into your own hands.',
          image: require('../assets/images/Screenshot 2025-04-25 211137.png'),
          link: 'https://github.com/aprilsears/chronically-well'
        },

            {
          title: 'Chronically Well (using Vue)',
          description: 'A fitness application redesigned using Vue.js.',
          image: require('../assets/images/cwvue.png'),
          link: 'https://github.com/aprilsears/chronically-well-vue'
        },
        { 
            title: 'Quote Card Generator',
            description: 'A simple image and quote random generator built using JavaScript.',
            image: require('../assets/images/quotecard.png'),
            link: 'https://github.com/aprilsears/quote-card-generator'
        }

      ]
    }
  }
}
</script>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.projects-page h1 {
  text-align: center;
  font-size: 2.5rem;
  margin: 4rem 0;
  padding: 1rem;
  color: var(--color-primary);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.project-card {
  background: #111010ff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.project-card img {
  width: 100%;
  border-radius: var(--radius);
  margin: 1rem;
  box-shadow: var(--shadow);
}
.project-card h2 {
  margin: 0.5rem 0 1rem 0;
  color: var(--color-primary);
  font-size: var(--font-size-lg);
}
.project-card p {
  color: var(--color-text);
  margin-bottom: 1rem;
}
.view-link {
  color: #fff;
  background: var(--color-primary);
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  display: inline-block;
}
.view-link:hover {
  background: var(--color-secondary);
}
</style>
