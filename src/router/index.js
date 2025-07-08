import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home-view.vue'
import Blog from '../views/blog-view.vue'
import About from '../views/about-view.vue'
import Projects from '../views/projects-view.vue'
import BlogPost from '../views/blog-post-view.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router