function ApplicationStatus({ studentData }) {
  return (
    <div className="status-page">

      <section className="page-hero">
        <div className="page-hero-content">

          <span className="page-badge">
            📋 APPLICATION TRACKER
          </span>

          <h1>
            Application <span>Status</span>
          </h1>

          <p>
            Track the current status of your internship application.
          </p>

        </div>
      </section>

      <section className="status-section">

        {studentData ? (
          <div className="status-card">

            <div className="status-icon">
              ✅
            </div>

            <h2>Application Submitted Successfully!</h2>

            <p className="status-text">
              Your internship application has been received.
            </p>

            <div className="status-details">

              <div className="status-item">
                <span>👤 Student Name</span>
                <strong>{studentData.studentName}</strong>
              </div>

              <div className="status-item">
  <span>🏢 Internship / Company</span>
  <strong>
    {studentData.internshipTitle} — {studentData.company}
  </strong>
</div>

              <div className="status-item">
                <span>🆔 Application ID</span>
                <strong>{studentData.applicationId}</strong>
              </div>

              <div className="status-item">
                <span>📌 Status</span>
                <strong>{studentData.status}</strong>
              </div>

            </div>

          </div>
        ) : (
          <div className="empty-status-card">

            <div className="empty-icon">
              📋
            </div>

            <h2>No Application Found</h2>

            <p>
              Please complete the student registration form first.
            </p>

          </div>
        )}

      </section>

    </div>
  );
}

export default ApplicationStatus;