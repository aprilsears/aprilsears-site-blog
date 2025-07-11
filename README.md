# April Sears - Personal Portfolio & Blog

A modern, responsive portfolio website built with Vue.js featuring an integrated blog to document my development journey and showcase my projects.

## 🌟 Features

- **Responsive Design** - Mobile-first approach with modern CSS Grid and Flexbox
- **Blog System** - Integrated blog with tag filtering and post management
- **Project Showcase** - Grid layout displaying projects with images and descriptions
- **Navigation** - Clean navigation with active route highlighting
- **Modern UI** - Contemporary design with smooth transitions and hover effects

## 🚀 Live Demo

[View Live Site](https://aprilsears.github.io/aprilsears-site-blog)

## 🛠️ Built With

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue.js
- **CSS3** - Modern styling with custom properties and responsive design
- **GitHub Pages** - Static site hosting

## 📁 Project Structure

```
src/
├── components/
│   └── navigation-bar.vue
├── views/
│   ├── home-view.vue
│   ├── about-view.vue
│   ├── blog-view.vue
│   ├── blog-post-view.vue
│   └── projects-view.vue
├── data/
│   └── blogPost.js
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   └── reset.css
│   └── images/
├── App.vue
├── main.js
└── router/
```

## 🎯 Key Pages

### Home
- Hero section with call-to-action buttons
- Featured content preview
- Latest blog posts showcase

### About
- Personal introduction and background
- Professional experience and goals
- Social media links (LinkedIn, GitHub)

### Blog
- Tag-based filtering system
- Post excerpts with read more functionality
- Responsive card layout for blog posts

### Projects
- Grid layout showcasing development projects
- Project descriptions and GitHub links
- Screenshots and live demo links

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aprilsears/aprilsears-site-blog.git
   cd aprilsears-site-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run serve
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Adding New Blog Posts

Blog posts are stored in `src/data/blogPost.js`. To add a new post:

1. Add a new object to the `blogPosts` array
2. Include required fields: `id`, `slug`, `title`, `date`, `excerpt`, `content`, `tags`
3. Use HTML formatting in the `content` field for rich text

Example:
```javascript
{
  id: 3,
  slug: 'new-blog-post',
  title: 'My New Blog Post',
  date: '2025-07-11',
  excerpt: 'Brief description of the post...',
  content: `<strong>Main content here...</strong>`,
  tags: ['vue', 'javascript', 'tutorial']
}
```

## 🎨 Customization

### CSS Variables
The site uses CSS custom properties for consistent theming:
- `--color-primary` - Primary brand color
- `--color-secondary` - Secondary accent color
- `--color-text` - Main text color
- `--color-surface-light` - Light surface color
- `--font-size-large` - Large font size

### Adding Projects
Projects are defined in `src/views/projects-view.vue` in the component's data. Add new projects to the `projects` array with:
- `title` - Project name
- `description` - Brief description
- `image` - Screenshot or logo
- `link` - GitHub repository or live demo URL

## 🚀 Deployment

The site is deployed using GitHub Pages:

1. Build the project: `npm run build`
2. Push to the `gh-pages` branch
3. GitHub Pages automatically serves the site

## 🔗 Connect With Me

- **LinkedIn**: [april-sears](https://www.linkedin.com/in/april-sears/)
- **GitHub**: [aprilsears](https://github.com/aprilsears)
- **Email**: [Contact through LinkedIn]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Fork the repository for your own portfolio
- Submit pull requests for improvements

## 📊 Project Status

This is an ongoing project where I document my development journey. Regular updates include:
- New blog posts about learning experiences
- Additional projects as I complete them
- UI/UX improvements and feature additions

---

*Built with ❤️ by April Sears - A developer passionate about building things and sharing what I learn.*
