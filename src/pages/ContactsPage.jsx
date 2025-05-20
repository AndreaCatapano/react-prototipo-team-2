import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/FormStyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ContactsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 p-4 overflow-hidden bg-light">
      {/* Header */}
      <header className="text-center">
        <h1 className="mb-4">Contattaci</h1>
      </header>

      {/* Main content */}
      <main className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
        {/* Contatti aziendali */}
        <div className="mb-4 text-center">
          <p className="fw-bold">BooRoad Travel Agency</p>
          <p className="mb-1">
            <i className="bi bi-telephone-fill me-2"></i>
            <a href="tel:+393331234567" className="text-decoration-none">
              +39 333 123 4567
            </a>
          </p>
          <p className="mb-3">
            <i className="bi bi-envelope-fill me-2"></i>
            <a href="mailto:info@booroad.com" className="text-decoration-none">
              info@booroad.com
            </a>
          </p>
        </div>

        {/* Form contatto */}
        {formSubmitted ? (
          <div className="alert alert-success text-center w-100 text-wrap">
            ✅ Grazie per averci contattato! Ti risponderemo il prima possibile.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form w-100">
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Nome" required />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Cognome" required />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Telefono" required />
              </div>
            </div>

            <div className="mb-3">
              <textarea className="form-control" placeholder="Messaggio" rows="4" required></textarea>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="gdprCheck" required />
              <label className="form-check-label" htmlFor="gdprCheck">
                Ho letto e accettato la <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">
                Invia
              </button>
            </div>
          </form>
        )}
      </main>

      {/* Footer social */}
      <footer className="text-end">
        <div className="social-icons d-flex justify-content-end gap-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube fs-4"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
