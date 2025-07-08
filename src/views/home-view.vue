<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Hi, I'm April Sears</h1>
        <p>A website developer documenting my learning journey</p>
        <div class="hero-buttons">
          <router-link to="/projects" class="btn btn-primary">View Projects</router-link>
          <router-link to="/blog" class="btn btn-secondary">Read Blog</router-link>
        </div>
      </div>
    </section>

    <section class="featured-content">
      <div class="container">
        <div class="content-grid">
          <div class="about-preview">
            <h2>About Me</h2>
            <p>I'm a developer passionate about building things and sharing what I learn. Follow my journey as I tackle new projects and technologies.</p>
            <router-link to="/about" class="read-more">Learn more →</router-link>
          </div>
          
          <div class="latest-posts">
            <h2>Latest Blog Posts</h2>
            <div class="post-preview" v-for="post in latestPosts" :key="post.id">
              <h3>
                <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
              </h3>
              <p class="date">{{ formatDate(post.date) }}</p>
              <p>{{ post.excerpt }}</p>
            </div>
            <router-link to="/blog" class="view-all">View all posts →</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { blogPosts } from '../data/blogPost.js'

export default {
  name: 'home-view',
  computed: {
    latestPosts() {
      return blogPosts.slice(0, 3)
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8rem 2rem 4rem;
  text-align: center;
  margin-top: 70px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.featured-content {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-preview, .latest-posts {
  background: #fff;
  color: #181a1b;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.about-preview h2,
.latest-posts h2 {
  color: #2563eb;
  font-weight: bold;
}

.about-preview p,
.latest-posts p,
.latest-posts .date {
  color: #181a1b;
  opacity: 1;
}

.latest-posts h3 a {
  color: #181a1b;
  font-weight: bold;
}

.latest-posts h3 a:hover {
  color: #2563eb;
}

.read-more, .view-all {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover, .view-all:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>