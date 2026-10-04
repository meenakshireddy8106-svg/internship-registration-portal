import { Link } from "react-router-dom";

function InternshipCard({
  title,
  company,
  domain,
  duration,
  location,
  icon,
  description,
}) {
  return (
    <div className="internship-card">

      <div className="internship-icon">
        {icon}
      </div>

      <div className="internship-content">

        <span className="internship-badge">
          Internship Opportunity
        </span>

        <h3>{title}</h3>

        <p className="company-name">
          🏢 {company}
        </p>

        <p className="internship-description">
          {description}
        </p>

        <div className="internship-details">

          <div className="detail-item">
            <span>💻</span>
            <div>
              <small>Domain</small>
              <strong>{domain}</strong>
            </div>
          </div>

          <div className="detail-item">
            <span>⏳</span>
            <div>
              <small>Duration</small>
              <strong>{duration}</strong>
            </div>
          </div>

          <div className="detail-item">
            <span>📍</span>
            <div>
              <small>Location</small>
              <strong>{location}</strong>
            </div>
          </div>

        </div>

        <Link
  to="/registration"
  state={{
    internshipTitle: title,
    company: company,
  }}
  className="apply-button"
>
  Apply Now →
</Link>

      </div>

    </div>
  );
}

export default InternshipCard;