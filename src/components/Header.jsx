import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Logo cliccabile che riporta alla Home */}
        <Link className="navbar-brand fw-bold" to="/">
          BooRoad
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item p-3">
              <Link className="nav-link underline-hover" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link className="nav-link underline-hover" to="/travels">
                Viaggi
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link className="nav-link underline-hover" to="/contacts">
                Contatti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
