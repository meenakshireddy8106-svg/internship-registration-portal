import { useState } from "react";
import { useLocation } from "react-router-dom";

function Registration({ setStudentData }) {
  const location = useLocation();

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "",
    internshipDomain: "",
    skills: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationId =
      "INT" + Math.floor(100000 + Math.random() * 900000);

    const submittedData = {
      ...formData,
      internshipTitle:
        location.state?.internshipTitle ||
        formData.internshipDomain,
      company: location.state?.company || "Not Selected",
      applicationId,
      status: "Application Submitted",
    };

    setStudentData(submittedData);

    setSuccessMessage(
      "🎉 Registration successful! Your application has been submitted."
    );
  };

  return (
    <div className="registration-page">

      <section className="page-hero">
        <div className="page-hero-content">

          <span className="page-badge">
            📝 STUDENT REGISTRATION
          </span>

          <h1>
            Register for an <span>Internship</span>
          </h1>

          <p>
            Complete the registration form and take the next step
            toward your career.
          </p>

        </div>
      </section>

      <section className="registration-section">

        <div className="registration-card">

          <div className="form-header">

            <div className="form-icon">
              🎓
            </div>

            <h2>
              Student Registration Form
            </h2>

            <p>
              Please enter your details carefully.
            </p>

          </div>

          {successMessage && (
            <div className="success-message">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">
                <label>Student Name *</label>

                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label>College *</label>

                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Department *</label>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Department
                  </option>

                  <option value="CSE">
                    CSE
                  </option>

                  <option value="CSE - Data Science">
                    CSE - Data Science
                  </option>

                  <option value="ECE">
                    ECE
                  </option>

                  <option value="EEE">
                    EEE
                  </option>

                  <option value="Mechanical">
                    Mechanical
                  </option>

                  <option value="Civil">
                    Civil
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Year *</label>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Year
                  </option>

                  <option value="1st Year">
                    1st Year
                  </option>

                  <option value="2nd Year">
                    2nd Year
                  </option>

                  <option value="3rd Year">
                    3rd Year
                  </option>

                  <option value="4th Year">
                    4th Year
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Internship Domain *</label>

                <select
                  name="internshipDomain"
                  value={formData.internshipDomain}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Internship Domain
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="Data Science">
                    Data Science
                  </option>

                  <option value="Java Development">
                    Java Development
                  </option>

                  <option value="Python Development">
                    Python Development
                  </option>

                  <option value="Machine Learning">
                    Machine Learning
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Skills *</label>

                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Example: Java, Python, React"
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="submit-button"
            >
              🚀 Submit Registration
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Registration;