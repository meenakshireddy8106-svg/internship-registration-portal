import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            🎓 Welcome to Your Career Journey
          </div>

          <h1>
            Internship Registration
            <span> & Management Portal</span>
          </h1>

          <p>
            Explore exciting internship opportunities, register for
            your preferred internship, build your professional profile,
            and track your application status — all in one place.
          </p>

          <div className="hero-buttons">

            <Link to="/internships" className="primary-btn">
              💼 Explore Internships
            </Link>

            <Link to="/registration" className="secondary-btn">
              📝 Register Now
            </Link>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <div className="stat-icon">💼</div>
              <h3>50+</h3>
              <p>Internships</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <h3>1000+</h3>
              <p>Students</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <h3>100+</h3>
              <p>Companies</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>

          </div>

        </div>

        <div className="hero-illustration">

          <div className="floating-card card-one">
            💻
            <span>Web Development</span>
          </div>

          <div className="floating-card card-two">
            📊
            <span>Data Science</span>
          </div>

          <div className="floating-card card-three">
            ☕
            <span>Java Development</span>
          </div>

          <div className="main-illustration">
            🎓
          </div>

        </div>

      </section>

      <section className="features-section">

        <div className="section-heading">
          <p>WHY CHOOSE US?</p>
          <h2>Everything You Need to Start Your Career</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Explore Opportunities</h3>
            <p>
              Discover internship opportunities from different
              domains and companies.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Easy Registration</h3>
            <p>
              Register for your preferred internship using our
              simple online form.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Student Profile</h3>
            <p>
              View and manage your submitted student information
              easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Track Application</h3>
            <p>
              Check your internship application status anytime.
            </p>
          </div>

        </div>

      </section>

      <section className="home-cta">

        <div>
          <p>READY TO START?</p>

          <h2>
            Take the First Step Towards Your Dream Career 🚀
          </h2>
        </div>

        <Link to="/registration" className="cta-button">
          Register for Internship →
        </Link>

      </section>

    </div>
  );
}

export default Home;