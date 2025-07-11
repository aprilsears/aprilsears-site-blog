<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="date">{{ formatDate(post.date) }}</p>
    <div v-html="renderedContent"></div>
  </div>
  <div v-else>
    <p>Post not found.</p>
  </div>
</template>

<script>
import { blogPosts } from '../data/blogPost.js'
// This file is used to display a single blog post based on the slug passed in the route

export default {
  props: ['slug'],
  data() {
    return {
      post: null
    }
  },
  computed: {
    renderedContent() {
    
      return this.post ? this.post.content : ''
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
  },
  created() {
    this.post = blogPosts.find(p => p.slug === this.slug)
  }
}
</script>
<style scoped>
* {
  display: block;
  border: .5rem solid white;
  text-align: center;
}
div {
  font-size: var(--font-size-large);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 2rem;
  padding: 2rem;
  background-color: var(--color-surface-light);
  font-size: 2rem;
  justify-content: flex-start;
}
.date {
  color: var(--color-secondary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

</style>