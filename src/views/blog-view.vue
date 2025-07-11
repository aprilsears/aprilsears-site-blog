<template>
  <div class="blog">
    <div class="container">
      <header class="blog-header">
        <h1>Development Blog</h1>
        <p>Follow my journey as I build projects and document what I learn along the way.</p>
      </header>

      <div class="blog-filters">
        <button 
          class="filter-btn"
          :class="{ active: selectedTag === 'all' }"
          @click="filterPosts('all')"
        >
          All Posts
        </button>
        <button 
          v-for="tag in availableTags" 
          :key="tag"
          class="filter-btn"
          :class="{ active: selectedTag === tag }"
          @click="filterPosts(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <div class="blog-posts">
        <article 
          v-for="post in filteredPosts" 
          :key="post.id"
          class="blog-post-card"
        >
          <h2>
            <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>
          </h2>
          <p class="date">{{ formatDate(post.date) }}</p>
          <p class="excerpt">{{ post.excerpt }}</p>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <router-link :to="`/blog/${post.slug}`" class="read-more">Read more →</router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { blogPosts } from '../data/blogPost.js'

export default {
  name: 'blog-view',
  data() {
    return {
      selectedTag: 'all'
    }
  },
  computed: {
    filteredPosts() {
      if (this.selectedTag === 'all') {
        return blogPosts
      }
      return blogPosts.filter(post => post.tags.includes(this.selectedTag))
    },
    availableTags() {
      const tags = new Set()
      blogPosts.forEach(post => {
        post.tags.forEach(tag => tags.add(tag))
      })
      return Array.from(tags)
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    filterPosts(tag) {
      this.selectedTag = tag
    }
  }
}
</script>

<style scoped>
.blog {
  padding: 6rem 2rem 4rem;
  background: #7db3e9b6;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-header h1 {
  color: #021f3be7;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.blog-filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #3498db;
  background: #3498db;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
  background:white;
  color:  #3498db;
}

.blog-posts {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.blog-post-card {
  background: rgba(255, 255, 255, 0.918);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.blog-post-card:hover {
  transform: translateY(-5px);
}

.blog-post-card h2 a {
  color: #023970;
  text-decoration: none;
}

.blog-post-card h2 a:hover {
  color: #3498db;
}

.date {
  color: #070046;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.excerpt {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tag {
  background: #e74c3c;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.read-more {
  color: #0580d3;
  text-decoration: none;
  font-weight: 500;
}

.read-more:hover {
  text-decoration: underline;
}
</style>