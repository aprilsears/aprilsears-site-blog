export const blogPosts = [
  {
    id: 1,
    slug: 'starting-my-journey',
    title: 'Starting My Development Journey',
    date: '2025-07-08',
    excerpt: 'Today marks the beginning of my documented development journey. I\'m starting a new project and plan to share everything I learn...',
    content: `


<br><strong> # What I'm Building </strong> <br>

I'm starting work on a personal portfolio website with an integrated blog. The goal is to document my learning process and share insights with other developers.

<br>My Learning Goals:

- Learn Vue.js framework
- Understand component-based architecture
- Build a responsive, modern website
- Practice writing technical content

<br> Initial Setup:

Today I set up my development environment and created the basic project structure using Vue CLI.

![Initial Setup](../images/vue-setup.png)<br>

<br>Technologies I'm Using:

- **Vue.js 3** - For the frontend framework
- **Vue Router** - For navigation
- **GitHub Pages** - For hosting

<br>Useful Resources

- [Vue.js Documentation](https://vuejs.org/)
- [Vue Router Guide](https://router.vuejs.org/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages) <br>
    `,
    tags: ['vue', 'javascript', 'learning']
  },
  {
    id: 2,
    slug: 'building-components',
    title: 'Building Reusable Vue Components',
    date: '2025-07-09',
    excerpt: 'This week I focused on creating reusable components for my site. Here\'s what I learned about Vue component architecture...',
    content: `
<br><strong> # Building Reusable Vue Components </strong> <br>

<br>This Week's Goals:

- Create navigation component 
- Build blog post card component 
- Implement responsive design
- Add proper routing  <br>

<br>What I Accomplished:

Successfully created a responsive navigation component that works across all screen sizes. The component includes:

- Site Deployment 
- Active route highlighting 
- Smooth transitions

<br> What I Learned: 

- Vue's reactivity system is powerful for UI state management 
- CSS Grid and Flexbox work great together for responsive layouts 
- Component composition makes code much more maintainable <br>


<br>Next Week's Plan: 

- Implement blog post filtering 
- Add search functionality 
- Optimize for performance 
- Add animations and transitions <br>
    `,
    tags: ['vue', 'components', 'css']
  },
  {
    id: 3,
    slug: 'exploring-markdown-wpforms',
    title: 'Exploring Markdown and WPForms for a Non-Profit Note App',
    date: '2025-08-03',
    excerpt: 'I’m working on a pro bono note-taking app for a non-profit, exploring Markdown for formatting and WPForms for easy data entry.',
    content: `
<br><strong> # Exploring Markdown and WPForms </strong> <br>

This week, I started a pro bono project: building a simple note-style app for a local non-profit. My main goals:

- Allow users to write and format notes using Markdown
- Integrate WPForms for easy data collection and management

<br>Why Markdown?

Markdown is intuitive for non-technical users and keeps formatting simple. I’m using a Vue markdown editor component to let users preview their notes in real time.

<br>Integrating WPForms

WPForms is a user-friendly form builder. I’m experimenting with embedding forms and connecting submissions to the app’s backend.

<br>Next Steps

- Finalize the Markdown editor integration
- Set up WPForms submission handling
- Test with real users at the non-profit
  `,
    tags: ['vue', 'markdown', 'wpforms', 'non-profit']
  }
]