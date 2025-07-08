export const blogPosts = [
  {
    id: 1,
    slug: 'starting-my-journey',
    title: 'Starting My Development Journey',
    date: '2025-07-08',
    excerpt: 'Today marks the beginning of my documented development journey. I\'m starting a new project and plan to share everything I learn...',
    content: `
# Starting My Development Journey

## What I'm Building

I'm starting work on a personal portfolio website with an integrated blog. The goal is to document my learning process and share insights with other developers.

## My Learning Goals

- Learn Vue.js framework
- Understand component-based architecture
- Build a responsive, modern website
- Practice writing technical content

## Initial Setup

Today I set up my development environment and created the basic project structure using Vue CLI.

![Initial Setup](../images/vue-setup.png)

## Technologies I'm Using

- **Vue.js 3** - For the frontend framework
- **Vue Router** - For navigation
- **GitHub Pages** - For hosting
- **Markdown** - For blog content

## What's Next

Tomorrow I plan to:
- Create the main layout components
- Set up the blog post system
- Add responsive design
- Deploy to GitHub Pages

## Useful Resources

- [Vue.js Documentation](https://vuejs.org/)
- [Vue Router Guide](https://router.vuejs.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
    `,
    tags: ['vue', 'javascript', 'learning']
  },
  {
    id: 2,
    slug: 'building-components',
    title: 'Building Reusable Vue Components',
    date: '2025-01-20',
    excerpt: 'This week I focused on creating reusable components for my site. Here\'s what I learned about Vue component architecture...',
    content: `
# Building Reusable Vue Components

## This Week's Goals

- Create navigation component
- Build blog post card component
- Implement responsive design
- Add proper routing

## What I Accomplished

Successfully created a responsive navigation component that works across all screen sizes. The component includes:

- Mobile hamburger menu
- Active route highlighting
- Smooth transitions

## Challenges I Faced

The biggest challenge was handling the mobile menu state properly. I initially had issues with the menu staying open when navigating between routes.

## Solution

I implemented a \`closeMenu\` method that triggers on route changes:

\`\`\`javascript
methods: {
  closeMenu() {
    this.isMenuOpen = false
  }
}
\`\`\`

## What I Learned

- Vue's reactivity system is powerful for UI state management
- CSS Grid and Flexbox work great together for responsive layouts
- Component composition makes code much more maintainable

## Next Week's Plan

- Implement blog post filtering
- Add search functionality
- Optimize for performance
- Add animations and transitions
    `,
    tags: ['vue', 'components', 'css']
  }
]