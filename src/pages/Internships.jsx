import InternshipCard from "../components/InternshipCard";

function Internships() {
  const internships = [
    {
      title: "Full Stack Development",
      company: "ABC Technologies",
      domain: "Web Development",
      duration: "3 Months",
      location: "Remote",
      icon: "💻",
      description:
        "Build modern web applications using frontend and backend technologies.",
    },

    {
      title: "Data Science",
      company: "XYZ Solutions",
      domain: "Data Science",
      duration: "6 Months",
      location: "Bangalore",
      icon: "📊",
      description:
        "Work with data analysis, visualization, machine learning, and predictive models.",
    },

    {
      title: "Java Development",
      company: "Tech Solutions",
      domain: "Software Development",
      duration: "3 Months",
      location: "Hyderabad",
      icon: "☕",
      description:
        "Develop robust Java applications and strengthen your object-oriented programming skills.",
    },

    {
      title: "Python Development",
      company: "CodeCraft India",
      domain: "Python Programming",
      duration: "4 Months",
      location: "Remote",
      icon: "🐍",
      description:
        "Learn Python development and create real-world applications and automation projects.",
    },

    {
      title: "Machine Learning",
      company: "AI Innovations",
      domain: "Artificial Intelligence",
      duration: "6 Months",
      location: "Chennai",
      icon: "🤖",
      description:
        "Explore machine learning algorithms, data preprocessing, and intelligent applications.",
    },

    {
      title: "UI/UX Design",
      company: "Creative Minds",
      domain: "Design",
      duration: "3 Months",
      location: "Remote",
      icon: "🎨",
      description:
        "Design engaging digital experiences using modern UI/UX principles and design tools.",
    },
  ];

  return (
    <div className="internships-page">

      <section className="page-hero">

        <div className="page-hero-content">

          <span className="page-badge">
            💼 CAREER OPPORTUNITIES
          </span>

          <h1>
            Explore <span>Internship Opportunities</span>
          </h1>

          <p>
            Discover exciting internships, develop real-world skills,
            and take the next step toward your dream career.
          </p>

        </div>

      </section>

      <section className="internships-section">

        <div className="section-heading">

          <p>FIND YOUR OPPORTUNITY</p>

          <h2>Available Internships</h2>

          <span>
            Choose an internship that matches your interests and skills.
          </span>

        </div>

        <div className="internship-grid">

          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              company={internship.company}
              domain={internship.domain}
              duration={internship.duration}
              location={internship.location}
              icon={internship.icon}
              description={internship.description}
            />
          ))}

        </div>

      </section>

      <section className="internship-bottom">

        <div className="bottom-icon">
          🚀
        </div>

        <div>
          <h2>Can't find what you're looking for?</h2>

          <p>
            Register your profile and we'll help you discover
            suitable internship opportunities.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Internships;