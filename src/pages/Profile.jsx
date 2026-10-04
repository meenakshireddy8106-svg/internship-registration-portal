import { Link } from "react-router-dom";

function Profile({ studentData }) {
  return (
    <div className="profile-page">

      <section className="page-hero">
        <div className="page-hero-content">

          <span className="page-badge">
            👤 STUDENT PROFILE
          </span>

          <h1>
            My <span>Profile</span>
          </h1>

          <p>
            View your registered student information and internship details.
          </p>

        </div>
      </section>

      <section className="profile-section">

        {studentData ? (
          <div className="profile-card">

            <div className="profile-avatar">
              👤
            </div>

            <h2>{studentData.studentName}</h2>

            <p className="profile-subtitle">
              Internship Applicant
            </p>

            <div className="profile-details">

              <div className="profile-item">
                <span>📧 Email</span>
                <strong>{studentData.email}</strong>
              </div>

              <div className="profile-item">
                <span>📱 Phone</span>
                <strong>{studentData.phone}</strong>
              </div>

              <div className="profile-item">
                <span>🎓 College</span>
                <strong>{studentData.college}</strong>
              </div>

              <div className="profile-item">
                <span>🏫 Department</span>
                <strong>{studentData.department}</strong>
              </div>

              <div className="profile-item">
                <span>📚 Year</span>
                <strong>{studentData.year}</strong>
              </div>

              <div className="profile-item">
                <span>💼 Internship Domain</span>
                <strong>{studentData.internshipDomain}</strong>
              </div>

              <div className="profile-item">
                <span>🛠️ Skills</span>
                <strong>{studentData.skills}</strong>
              </div>

              <div className="profile-item">
                <span>🆔 Application ID</span>
                <strong>{studentData.applicationId}</strong>
              </div>

            </div>

            <Link to="/registration" className="edit-profile-button">
              ✏️ Edit Profile
            </Link>

          </div>
        ) : (
          <div className="empty-profile-card">

            <div className="empty-profile-icon">
              👤
            </div>

            <h2>No Student Registration Data Available</h2>

            <p>
              Please register for an internship to create your profile.
            </p>

            <Link to="/registration" className="primary-btn">
              📝 Register Now
            </Link>

          </div>
        )}

      </section>

    </div>
  );
}

export default Profile;