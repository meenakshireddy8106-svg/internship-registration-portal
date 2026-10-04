function About() {
  return (
    <div className="about-page">

      <section className="page-hero">
        <div className="page-hero-content">

          <span className="page-badge">
            ℹ️ ABOUT US
          </span>

          <h1>
            About <span>Internship Portal</span>
          </h1>

          <p>
            Connecting students with valuable internship opportunities
            to build skills, experience, and successful careers.
          </p>

        </div>
      </section>

      <section className="about-section">

        <div className="about-card">

          <div className="about-icon">
            🎓
          </div>

          <h2>
            Empowering Students Through Internships
          </h2>

          <p>
            Our Internship Registration & Management Portal is designed
            to make the internship search and registration process simple,
            organized, and student-friendly.
          </p>

          <p>
            Students can explore different internship opportunities,
            register for their preferred domain, manage their profile,
            and track their application status from one place.
          </p>

        </div>

        <div className="about-features">

          <div className="about-feature-card">
            <span>💼</span>
            <h3>Career Opportunities</h3>
            <p>
              Discover internships across different technology domains.
            </p>
          </div>

          <div className="about-feature-card">
            <span>🚀</span>
            <h3>Skill Development</h3>
            <p>
              Gain practical experience and improve your professional skills.
            </p>
          </div>

          <div className="about-feature-card">
            <span>📋</span>
            <h3>Easy Tracking</h3>
            <p>
              Track your internship application status easily.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;