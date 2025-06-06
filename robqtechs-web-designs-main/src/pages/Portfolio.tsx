
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Fashion Store',
      description: 'Modern online fashion store with shopping cart, payment integration, and inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'E-Commerce',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Corporate Business Website',
      description: 'Professional corporate website with company portfolio, team showcase, and contact management.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'CSS3', 'Responsive Design'],
      category: 'Corporate',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Restaurant Booking System',
      description: 'Online reservation system with table management, menu display, and customer reviews.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      category: 'Booking System',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search, virtual tours, and agent contact system.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'PostgreSQL'],
      category: 'Real Estate',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      description: 'Creative portfolio website for a graphic designer with interactive galleries and animations.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      category: 'Portfolio',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Educational Learning Platform',
      description: 'Online learning platform with course management, progress tracking, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Express.js', 'MySQL', 'Socket.io'],
      category: 'Education',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-header text-center">
          <h1 className="fade-in-up">Our Portfolio</h1>
          <p className="portfolio-subtitle fade-in-up">
            Explore our recent projects and see how we bring ideas to life. 
            Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <div className="card-actions">
                    <a href={project.liveUrl} className="card-btn" aria-label="View Live Site">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="card-btn" aria-label="View Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="card-category">{project.category}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                
                <div className="card-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta text-center">
          <h2 className="fade-in-up">Ready to Start Your Project?</h2>
          <p className="fade-in-up">
            Let's discuss your vision and bring it to life with a custom web solution.
          </p>
          <a href="/booking" className="btn btn-primary fade-in-up">
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
