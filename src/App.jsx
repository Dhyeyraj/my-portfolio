
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ArrowDown,
  Code2,
  Menu,
  X,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import "./App.css";

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.34.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.33h2.97v9.57ZM6.45 8.02a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.45 10.88h-2.97v-4.66c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H9.62V9.33h2.85v1.31h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.26Z" />
    </svg>
  );
}

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  "C#",
  "ASP.NET Core",
  "ASP.NET MVC",
  "Web API",
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SQL Server",
  "PostgreSQL",
  "Entity Framework",
  "Git & GitHub",
  "Azure",
  "REST APIs",
];

const projects = [
  {
    number: "01",
    title: "Institute Management System",
    description:
      "A learning platform with student management, study materials, video streaming, and timed tests.",
    tags: ["ASP.NET MVC", "SQL Server", "C#"],
  },
  {
    number: "02",
    title: "Quotation Management System",
    description:
      "A business application for customers, items, pricing, quotations, and Zoho API integration.",
    tags: [".NET MVC", "PostgreSQL", "Zoho API"],
  },
  {
    number: "03",
    title: "R3K Techno Solutions Website",
    description:
      "A professional software company website featuring Home, About, Contact, and Careers sections.",
    tags: ["React.js", "CSS", "Responsive Design"],
    link: "https://r3ktech.com/",
    image: "/r3k.png",
    linkLabel: "Live Website",
  },
  {
    number: "04",
    title: "Skyline Broadband Website",
    description:
      "A responsive broadband website showcasing internet plans, services, and contact information.",
    tags: ["React.js", "CSS", "Vercel"],
    link: "https://skyline-website-hazel.vercel.app/",
    image: "/skyline.png",
    linkLabel: "Live Website",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-bracket">&lt;</span>
          Dhyeyraj<span className="logo-bracket"> /&gt;</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HOME */}
        <section className="hero section-container" id="home">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-intro">HELLO, I'M</p>

            <h1>
              Dhyeyraj
              <br />
              <span className="gradient-text">Mali.</span>
            </h1>

            <h2>
              .NET Full Stack <span>Developer</span>
            </h2>

            <p className="hero-description">
              I build modern web applications using React, ASP.NET Core,
              C#, and SQL. I enjoy turning ideas into practical digital
              solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <ExternalLink size={17} />
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me <Mail size={17} />
              </a>
            </div>

            <div className="social-links">
              <a
                 href="https://github.com/Dhyeyraj"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>

              <a
                href="https://www.linkedin.com/in/dhyeyraj-mali-236952256"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
           
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dhyeyrajm%40gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Mail size={18} /> Email Me
              </a>

              <span className="social-divider" />
              <span className="social-caption">
                Let's build something great
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-frame">
              <img
                src="/profile.jpg"
                alt="Dhyeyraj Mali"
                className="profile-image"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 5,
                }}
              />

              <div className="profile-placeholder">
                <Code2 size={70} />
                <span>YOUR PHOTO</span>
                <small>Add public/profile.jpg</small>
              </div>
            </div>

            <div className="floating-card card-top">
              <span className="floating-icon">{"{ }"}</span>
              <div>
                <strong>Clean Code</strong>
                <small>Built with passion</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span className="online-indicator" />
              <div>
                <strong>Full Stack</strong>
                <small>Frontend + Backend</small>
              </div>
            </div>

            <div className="tech-bubble bubble-one">C#</div>
            <div className="tech-bubble bubble-two">React</div>
            <div className="tech-bubble bubble-three">.NET</div>
          </motion.div>

          <a href="#about" className="scroll-indicator">
            <ArrowDown size={16} />
            <span>SCROLL TO EXPLORE</span>
          </a>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip">
          <span>DEVELOPMENT</span>
          <span className="strip-dot">✳</span>
          <span>CREATIVITY</span>
          <span className="strip-dot">✳</span>
          <span>INNOVATION</span>
          <span className="strip-dot">✳</span>
          <span>PROBLEM SOLVING</span>
        </section>

        {/* ABOUT */}
        <section
          className="section-container content-section"
          id="about"
        >
          <p className="section-label">01 / ABOUT ME</p>

          <h2 className="section-title">
            Developer by profession,
            <br />
            <span className="gradient-text">creator by passion.</span>
          </h2>

          <p className="section-description">
            I'm a Computer Science graduate and .NET Full Stack Developer
            with experience building web applications, APIs, database-driven
            systems, and responsive user interfaces.
          </p>
        </section>

        {/* SKILLS */}
        <section
          className="section-container content-section"
          id="skills"
        >
          <p className="section-label">02 / TECHNICAL SKILLS</p>

          <h2 className="section-title">
            Technologies I <span className="gradient-text">work with.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
              >
                <Code2 size={19} />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className="section-container content-section"
          id="projects"
        >
          <p className="section-label">03 / SELECTED WORK</p>

          <h2 className="section-title">
            Projects that bring ideas
            <br />
            <span className="gradient-text">to life.</span>
          </h2>

          <p className="section-description">
            Explore my software projects, including business applications
            and live websites built with modern web technologies.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <Code2 size={23} />
                </div>

                {project.image && (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                  </div>
                )}

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.linkLabel} <ExternalLink size={16} />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE */}
        <section
          className="section-container content-section"
          id="education"
        >
          <p className="section-label">04 / EDUCATION & EXPERIENCE</p>

          <h2 className="section-title">
            My <span className="gradient-text">journey.</span>
          </h2>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />

              <div className="timeline-card">
                <GraduationCap size={24} />
                <span className="timeline-type">EDUCATION · 2024</span>
                <h3>B.E. Computer Science</h3>
                <p>
                  Dr. Babasaheb Ambedkar Technological University, Lonere
                </p>
                <small>Graduated in 2024</small>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot" />

              <div className="timeline-card">
                <BriefcaseBusiness size={24} />
                <span className="timeline-type">
                  PROFESSIONAL EXPERIENCE
                </span>
                <h3>.NET Full Stack Developer</h3>
                <p>R3VISION Technology Pvt Ltd</p>
                <small>
                  ASP.NET Core, C#, React, SQL, REST APIs, and
                  database-driven application development.
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
       
<section className="contact-section" id="contact">
  <div className="section-container contact-inner">
    <p className="section-label">05 / GET IN TOUCH</p>

    <h2 className="section-title">
      Have a project in
      <br />
      <span className="gradient-text">mind?</span>
    </h2>

    <p className="section-description">
      I'm open to discussing developer opportunities and interesting
      projects. Let's connect.
    </p>

   
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=dhyeyrajm%40gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail size={20} /> Email
      </a>


    <div className="contact-socials">
      <a
        href="https://github.com/Dhyeyraj"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon /> GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/dhyeyraj-mali-236952256"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon /> LinkedIn
      </a>

 
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dhyeyrajm%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={20} /> Email
        </a>


      <a href="/resume.pdf" download>
        <Download size={20} /> Download Resume
      </a>
    </div>
  </div>
</section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-bracket">&lt;</span>
          Dhyeyraj<span className="logo-bracket"> /&gt;</span>
        </a>

        <p>Designed & built with React.</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
