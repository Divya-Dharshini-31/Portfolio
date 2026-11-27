
import './index.css';
import profileImg from './assets/profile.jpg';

const projects = [
  {
    title: 'SkyNotes',
    subtitle: 'Cloud-Based Notes Management System',
    description:
      'Built a full-stack notes application using Java, Spring Boot, React, and MongoDB, featuring JWT authentication, secure REST APIs, and note version history.',
    github: 'https://github.com/Divya-Dharshini-31/SkyNotes',
    demo: 'https://skynotes-frontend.onrender.com',
  },
  {
    title: 'CloudCast',
    subtitle: 'Location-Aware Weather Web Application',
    description:
      'Developed an AWS-powered weather application using Lambda, API Gateway, and DynamoDB, with personalized weather preferences and AI-based recommendations.',
    github: 'https://github.com/Janani2077/Cloudcast-Weather-App',
    demo: 'https://cloudcast-weather-app.vercel.app',
  },
  {
    title: 'Portable Soil Testing Kit',
    subtitle: 'Smart Soil Monitoring System',
    description:
      'Built an Arduino-based soil monitoring system with temperature and moisture sensors, integrated with a Django application to display soil readings.',
    github: 'https://github.com/Divya-Dharshini-31/SOIL_TESTING_KIT',
    demo: 'https://soil-testing-kit.onrender.com',
  },
  {
    title: 'AI Face Recognition Attendance System',
    subtitle: 'Automated Attendance Management System',
    description:
      'Developed a React and Django application for automated attendance tracking using real-time face recognition.',
    github:
      'https://github.com/Divya-Dharshini-31/AI-smart-face-recognition-system',
  },
  {
    title: 'AI-Driven Smart Budgeting App',
    subtitle: 'Personal Budget Management Application',
    description:
      'Contributed to a Django-based budgeting application with expense-tracking features and user interface improvements.',
    github:
      'https://github.com/Divya-Dharshini-31/AI_driven_Budget_App',
  },
];

function App() {
  const socials = [
    {
      name: 'Gmail',
      url: 'https://mail.google.com/mail/?view=cm&to=sdivyadharshini315@gmail.com',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm1.7.1 7.3 5.86 7.3-5.86a.75.75 0 0 0-.95-1.2L12 10.4 5.65 5.65a.75.75 0 1 0-.95 1.2Z" fill="#D44638"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divyadharshini31',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.041-1.852-3.041-1.853 0-2.136 1.445-2.136 2.939v5.671H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.599 0 4.267 2.368 4.267 5.451v6.292z"/>
          <path fill="#0A66C2" d="M6.937 7.438a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88z"/>
          <path fill="#0A66C2" d="M7.13 20.452H3.75V9h3.38v11.452z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Divya-Dharshini-31',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.092 3.292 9.414 7.86 10.944.574.106.784-.249.784-.554 0-.274-.01-1-.016-1.96-3.197.695-3.873-1.54-3.873-1.54-.522-1.326-1.274-1.68-1.274-1.68-1.042-.712.08-.698.08-.698 1.15.081 1.754 1.181 1.754 1.181 1.025 1.756 2.69 1.249 3.344.955.104-.743.4-1.249.726-1.536-2.552-.29-5.238-1.276-5.238-5.677 0-1.254.448-2.279 1.183-3.084-.119-.291-.513-1.462.112-3.047 0 0 .965-.31 3.162 1.18.918-.255 1.902-.382 2.882-.387.98.005 1.964.132 2.882.387 2.196-1.49 3.16-1.18 3.16-1.18.627 1.585.233 2.756.114 3.047.737.805 1.182 1.83 1.182 3.084 0 4.412-2.691 5.383-5.255 5.667.412.355.78 1.055.78 2.128 0 1.536-.014 2.776-.014 3.153 0 .309.208.665.79.552C20.71 21.412 24 17.092 24 12c0-6.352-5.148-11.5-12-11.5z" fill="#111827"/>
        </svg>
      ),
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Divya_Dharshini31/',
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2zm3.707 14.293-1.414 1.414L8.586 12l5.707-5.707 1.414 1.414L11.414 12l4.293 4.293z" fill="#EF7A1A"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-mark">D</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div>
            <h1 className="hero-name">Divya Dharshini S</h1>
            <h2 className="hero-sub">Final year Computer Science student</h2>
            <p className="hero-copy">
              Computer Science undergraduate specializing in Cloud Computing, with hands-on experience in Java, full-stack development, and AWS. Skilled in building secure web applications, REST APIs, and cloud-based solutions.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button ghost">View projects</a>
              <a href="#contact" className="button ghost">Contact me</a>
            </div>
          </div>

          <div className="hero-photo" aria-hidden>
            <img src={profileImg} alt="profile" className="photo-img" />
          </div>
        </section>

        <section id="about" className="section section-panel">
          <h2>About</h2>
          <p>
            Computer Science undergraduate specializing in Cloud Computing, with hands-on experience in Java, full-stack development, and AWS.
          </p>
          <p>
            Currently pursuing B.E. Computer Science and Engineering with Honors in Cloud Computing at R.M.D. Engineering College, with a CGPA of 9.54/10.
          </p>
          <p>
            Holds ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD) certifications.
          </p>
          <div className="skill-badges" aria-label="Technical skills">
            <span>Java</span>
            <span>C++</span>
            <span>Python</span>
            <span>Spring Boot</span>
            <span>Django</span>
            <span>React.js</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>AWS</span>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </section>

        <section className="section section-panel">
          <h2>Education</h2>
          <div className="detail-card">
            <h3>B.E. Computer Science and Engineering</h3>
            <p><strong>R.M.D. Engineering College, Kavaraipettai</strong></p>
            <p>Honors in Cloud Computing • Sept 2023 – May 2027 • CGPA: 9.54/10</p>
          </div>
          <div className="detail-card">
            <h3>High School</h3>
            <p><strong>Velammal Vidhyashram, Surapet</strong></p>
            <p>Graduated 2023 • 94.4%</p>
          </div>
        </section>

        <section className="section section-panel">
          <h2>Achievements</h2>
          <div className="detail-card">
            <ul className="detail-list">
              <li>
                <a href="https://drive.google.com/file/d/12D5Lc07pF2um47twDUxbt2N3o6i-80xy/view?usp=sharing" target="_blank" rel="noreferrer">
                  Winner — LTM ServiceNow University Hackathon 2026
                </a>
              </li>
              <li>
                <a href="https://www.credly.com/badges/836b5521-26de-4760-bbf9-1f4dfb38aaa0/public_url" target="_blank" rel="noreferrer">
                  ServiceNow Certified System Administrator (CSA) — Mar 2026 — Servicenow CSA
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1scdycDoAFzQ0eeDd1xVPH4Slm1SX9MWt/view" target="_blank" rel="noreferrer">
                  ServiceNow Certified Application Developer (CAD) — Jun 2026 — Servicenow CAD
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/12hDuyT4ImLyR8ZY4Sk08w5v-m1ooVYoK/view?usp=sharing" target="_blank" rel="noreferrer">
                  TOEFL ITP: 617 — Mar 2026
                </a>
                {' | '}
                <a href="https://drive.google.com/file/d/1SmRJMNhrih1jfp6bxdIqpJiQRCE1owX8/view?usp=sharing" target="_blank" rel="noreferrer">
                  GATE qualified — Feb 2026
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1ZC3ksO26VKY8z4UXgrFaJML6ZR676Gob/view?usp=sharing" target="_blank" rel="noreferrer">
                  Secured 1st Place, Neo Codeathon — Sept 2024 — R.M.D. Engineering College
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1E2Y0nhl6Kq8G_NZpoY_4yxCqWRXc0F8w/view" target="_blank" rel="noreferrer">
                  NPTEL certification: Cloud Computing (78% - Topper 5%)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1wxIS6ttvseT3Rd8kR2I-t0NKI1HFofns/view" target="_blank" rel="noreferrer">
                  NPTEL certification: Java Programming (85% - Topper 1%)
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-panel">
          <h2>Experience</h2>
          <div className="detail-card">
            <h3>Oneyes Infotech Solutions — Full Stack Development Intern</h3>
            <p>May 2025 – June 2025</p>
            <p>Developed an AI-driven face recognition attendance system using React.js and Django to automate student and staff attendance tracking. Implemented backend logic for real-time identification and attendance recording.</p>
          </div>
          <div className="detail-card">
            <h3>Infosys Springboard — Web Developer Intern</h3>
            <p>Oct 2024 – Dec 2024</p>
            <p>Contributed to the development of a Smart Budget Tracker using Django as part of a collaborative project. Worked on expense-tracking features and user interface improvements.</p>
          </div>
        </section>

        <section className="section section-panel">
          <h2>International Conferences</h2>
          <div className="detail-card">
            <ul className="detail-list">
              <li>
                Presented “Smart Soil Analyzer: AI-Driven Soil Testing, Fertilizer &amp; Crop Advisor” at Bheema Institute of Science and Technology, Andhra Pradesh — Mar 27, 2026 —{' '}
                <a href="https://drive.google.com/file/d/1_Yo7gU-knqH-kHg4gJ9EYHdz_VkgIPUv/view?usp=sharing" target="_blank" rel="noreferrer">
                  Certificate
                </a>
              </li>
              <li>
                Presented “AI-Driven Smart Budgeting App” at Velammal Institute of Technology — Apr 9, 2025 —{' '}
                <a href="https://drive.google.com/file/d/1erS3rpbuH9DB1u5ClWN3J_OFMW5vCj9E/view?usp=sharing" target="_blank" rel="noreferrer">
                  Certificate
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="section section-panel">
          <h2>Leadership &amp; Campus Programs</h2>
          <div className="detail-card">
            <h3>AWS Student Builder Campus Leader</h3>
            <p>Amazon Web Services • Jul 2026 – Aug 2026</p>
            <p>Selected to promote cloud learning and AWS technologies within the student community. Led outreach initiatives through announcements, mini-pitches, and tabling events, driving 300 AWS Builder Center registrations during the six-week program.</p>
          </div>
          <div className="detail-card">
            <h3>Rendezvous 2k26 — The Da Vinci Code</h3>
            <p>Technical Symposium Organizing Team • Feb 2026</p>
            <p>Coordinated event logistics and participant engagement, successfully managing event execution with 25+ student registrations through collaborative planning and coordination.</p>
          </div>
        </section>

        <section id="projects" className="section section-panel">
          <div className="section-heading">
            <h2>Projects</h2>
            <a href="#contact" className="text-link">Let’s connect</a>
          </div>

          <div className="card-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p><strong>{project.subtitle}</strong></p>
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link ghost-link"
                >
                  GitHub
                </a>
                {project.demo && (
                  <>
                    {' '}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link ghost-link"
                    >
                      Live Demo
                    </a>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-panel contact-section">
          <h2>Contact</h2>
          <p>Open to collaboration, internships, and opportunities in software development, cloud systems, and AI-driven solutions.</p>
          <div className="contact-links">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="social-link" aria-label={social.name}>
                {social.svg}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
