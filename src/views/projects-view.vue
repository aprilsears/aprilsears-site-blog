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
          title: 'Personal Portfolio',
          description: 'A modern portfolio site built with Vue.js and hosted on GitHub Pages.',
          link: 'https://your-portfolio-link.com'
        },
        {
          title: 'Blog Platform',
          description: 'A simple blog platform with Markdown support and responsive design.',
        link: 'https://your-blog-link.com'
        },
        {
          title: 'Chronically Well',
          description: 'A blog focused on chronic illness and provides information to take your health into your own hands.',
          link: 'https://github.com/aprilsears/chronically-well'
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
  margin-bottom: 2rem;
  color: var(--color-primary);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.project-card {
  background: #fff;
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
  max-width: 320px;
  border-radius: var(--radius);
  margin-bottom: 1rem;
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
