import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo">
          <span className="logo-icon">🎓</span>
          <span>
            Internship<span className="logo-highlight">Portal</span>
          </span>
        </NavLink>

        <div className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            🏠 <span>Home</span>
          </NavLink>

          <NavLink
            to="/internships"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            💼 <span>Internships</span>
          </NavLink>

          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📝 <span>Registration</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            👤 <span>My Profile</span>
          </NavLink>

          <NavLink
            to="/application-status"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📋 <span>Status</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ℹ️ <span>About</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📞 <span>Contact</span>
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;