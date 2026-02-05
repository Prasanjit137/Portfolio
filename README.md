# Portfolio

A modern, interactive personal portfolio website built with React. Showcase your professional experience, projects, skills, and accomplishments in a sleek, responsive design.

## Features

- **Hero Section**: Eye-catching landing section with interactive 3D elements
- **About**: Professional introduction and background
- **Experience**: Timeline of work experience and career highlights
- **Projects**: Showcase your best work with descriptions and links
- **Skills**: Organized display of technical and professional skills
- **Contact**: Easy-to-use contact form for potential employers and collaborators
- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and transitions with Aurora effects
- **3D Elements**: Spline scene integration for enhanced visual appeal

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3 with custom themes
- **Animation**: Custom Aurora effects and CSS animations
- **3D Graphics**: Spline embedded scenes
- **Deployment**: Ready for GitHub Pages or any static hosting

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

## Getting Started

### Development

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload when you make changes.

### Build

Create an optimized production build:
```bash
npm run build
```

The build folder will contain the optimized production build ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── Layout/          # Header and footer components
│   ├── Sections/        # Main page sections (Hero, About, Experience, etc.)
│   └── UI/              # Reusable UI components (Card, Button, Aurora, etc.)
├── assets/              # Images, documents, and media files
├── hooks/               # Custom React hooks
├── styles/              # Global styles and theme configuration
├── utils/               # Helper functions and constants
└── App.js              # Main application component
```

## Customization

### Update Theme
Edit [src/styles/theme.js](src/styles/theme.js) to customize colors and styling.

### Add Your Content
- Update section components in `src/components/Sections/`
- Add your projects, experience, and skills in relevant sections
- Update constants in [src/utils/constants.js](src/utils/constants.js)

### Add Assets
Place your images, resume, and certificates in `src/assets/`

## Deployment

### Deploy to GitHub Pages

1. Update `homepage` in `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

### Deploy to Other Platforms

The `build/` folder is production-ready and can be deployed to:
- Vercel
- Netlify
- AWS S3
- Azure Static Web Apps
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Prasanjit Sarkar

---

Feel free to fork this project and customize it for your own portfolio!
