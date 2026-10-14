import Link from "next/link";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-small-text">Hey, I'M</p>

            <h1>
              Areeba <span>Gull</span>
            </h1>

            <h2>Web Developer</h2>

            <p className="hero-description">
              I create clean, thoughtful and responsive websites that combine
              simple design with a smooth user experience.
            </p>

            <p className="hero-description second">
              I'm always learning, experimenting with new technologies and
              turning creative ideas into meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <Link href="#projects" className="gold-button">
                View My Work
              </Link>

              <Link href="#contact" className="outline-button">
                Contact Me
              </Link>
            </div>
          </div>


        </div>
      </section>

      <About />

      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="center-heading">
            <p className="section-tag">MY SKILLS</p>

            <h2>
              Technologies I
              <span> work with.</span>
            </h2>

            <p>
              These are some of the technologies and tools I use while building
              websites and applications.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span>01</span>
              <h3>HTML</h3>
              <p>
                Building clean and well-structured foundations for websites.
              </p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>CSS</h3>
              <p>
                Creating responsive layouts with elegant and modern styling.
              </p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>JavaScript</h3>
              <p>
                Adding interactive features and dynamic functionality.
              </p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>React</h3>
              <p>
                Building reusable components and interactive user interfaces.
              </p>
            </div>

            <div className="skill-card">
              <span>05</span>
              <h3>Next.js</h3>
              <p>
                Creating modern, fast and scalable web applications.
              </p>
            </div>

            <div className="skill-card">
              <span>06</span>
              <h3>Git & GitHub</h3>
              <p>
                Managing projects and keeping development work organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="center-heading">
            <p className="section-tag">MY PROJECTS</p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>

            <p>
              A selection of projects that represent my learning, creativity
              and development skills.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-number">01</div>

              <div className="project-content">
                <p className="project-type">WEB APPLICATION</p>

                <h3>Movie Website</h3>

                <p>
                  A responsive movie website with search functionality,
                  movie data and favorite features.
                </p>

                <div className="project-tech">
                  <span>React</span>
                  <span>API</span>
                  <span>CSS</span>
                </div>

                <div className="project-links">
                  <Link
                    href="https://github.com/areebagull926-source/movie-project.git"
                    target="_blank"
                    className="project-link"
                  >
                    GitHub Code ↗
                  </Link>

                  <Link
                    href="https://movie-project-virid.vercel.app/"
                    target="_blank"
                    className="project-link"
                  >
                    Live Demo ↗
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-number">02</div>

              <div className="project-content">
                <p className="project-type">BUSINESS WEBSITE</p>

                <h3>Floral Website</h3>

                <p>
                  A professional responsive website designed for a e-commerce store
                   with multiple sections and services.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                </div>

                <div className="project-links">
                  <Link
                    href="https://github.com/areebagull926-source/FloraVibe.git"
                    target="_blank"
                    className="project-link"
                  >
                    GitHub Code ↗
                  </Link>

                  <Link
                    href="https://flora-vibe.vercel.app/"
                    target="_blank"
                    className="project-link"
                  >
                    Live Demo ↗
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-number">03</div>

              <div className="project-content">
                <p className="project-type">Travel WEBSITE</p>

                <h3>Travel Website</h3>

                <p>
                  A Travel websited created to showcase my skills, projects
                  and experience as a web developer.
                </p>

                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                </div>

                <div className="project-links">
                  <Link
                    href="https://github.com/areebagull926-source/Responsive-multipage.git"
                    target="_blank"
                    className="project-link"
                  >
                    GitHub Code ↗
                  </Link>

                  <Link
                    href="https://areebagull926-source.github.io/Responsive-multipage/"
                    target="_blank"
                    className="project-link"
                  >
                    Live Demo ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <p className="section-tag">CONTACT ME</p>

          <h2>
            Let's create
            <span> something.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind or simply want to say hello? Feel free to
            get in touch. I'd be happy to connect with you.
          </p>

          <div className="contact-details">
            <p>
              <strong>Email</strong>
              <br />
              areebagull926@gmail.com
            </p>
          </div>

          <div className="social-links">
            <Link
              href="areebagull926@gmail.com"
              className="social-button"
            >
              Email
            </Link>

            <Link
              href="https://www.linkedin.com/in/areeba-gull-a9869a443"
              target="_blank"
              className="social-button"
            >
              LinkedIn ↗
            </Link>

            <Link
              href="https://github.com/areebagull926-source"
              target="_blank"
              className="social-button"
            >
              GitHub ↗
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}