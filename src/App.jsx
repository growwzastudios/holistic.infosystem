import { useState, useEffect } from 'react'
import './index.css'

/* ─── SVG ICON COMPONENTS ─────────────────────────── */
const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const IconWarning = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const IconFile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.49 2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

/* ─── CERTIFICATE DATA ────────────────────────────── */
const CERT = {
  id: 'CERT-2026-HIS-00847',
  name: 'Aayush Khandelwal',
  duration: '15 April 2026 – 15 May 2026',
  domain: 'MERN Stack Development',
  issuedBy: 'Mr. Chirag Chaudhary',
  designation: 'HR Manager, Holistic Infosystem',
  verificationDate: new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'long', year: 'numeric'
  }),
  hash: 'a3f9c1d7e2b84a6f3c9d1e74b2f8a1c6d9e3b7f2a8c4d6e1b9f3a7c2d8e4b6f0e8',
}

/* ─── QR CODE PLACEHOLDER ─────────────────────────── */
const QRCode = () => {
  // Deterministic pattern for a realistic-looking QR placeholder
  const pattern = [
    1,1,1,0,1,0,1,1,
    1,0,1,1,0,1,0,1,
    1,1,0,0,1,1,1,0,
    0,1,1,0,0,1,0,0,
    1,0,1,1,1,0,1,1,
    1,1,0,1,0,1,0,1,
    0,1,1,0,1,1,1,0,
    1,0,0,1,0,0,1,1,
  ]
  return (
    <div className="qr-box">
      <div className="qr-inner">
        {pattern.map((cell, i) => (
          <span key={i} className={cell === 0 ? 'w' : ''} />
        ))}
      </div>
    </div>
  )
}

/* ─── MODAL COMPONENT ─────────────────────────────── */
const Modal = ({ type, onClose }) => {
  const isLock = type === 'lock'

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>

        <div className={`modal-icon ${isLock ? 'lock' : 'warning'}`}>
          {isLock ? <IconLock /> : <IconWarning />}
        </div>

        {isLock ? (
          <>
            <h2>Authentication Required</h2>
            <p>
              You are not authenticated. Please log in to your account to access this section of the Holistic Infosystem portal.
            </p>
          </>
        ) : (
          <>
            <h2>Services Temporarily Unavailable</h2>
            <p>
              Our login services are currently undergoing scheduled maintenance. We apologize for the inconvenience. Please try again later.
            </p>
          </>
        )}

        <button className="modal-btn" onClick={onClose}>
          {isLock ? '🔑 Go to Login' : 'Understood'}
        </button>
        <button className="modal-btn secondary" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </div>
  )
}

/* ─── NAVBAR ──────────────────────────────────────── */
const navLinks = ['Home', 'Services', 'About Us', 'Blog', 'Careers', 'Contact']

const Navbar = ({ onNavClick, onLoginClick }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMobileNav = () => {
    setMenuOpen(false)
    onNavClick()
  }

  const handleMobileLogin = () => {
    setMenuOpen(false)
    onLoginClick()
  }

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Brand */}
          <a href="#" className="navbar-brand" onClick={e => e.preventDefault()}>
            <img src="/logo.png" alt="Holistic Infosystem Logo" className="navbar-logo" />
            <div>
              <div className="navbar-company-name">Holistic Infosystem</div>
              <div className="navbar-company-tagline">Technology · Innovation · Excellence</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar-nav" role="list">
            {navLinks.map(link => (
              <li key={link}>
                <button
                  className={`nav-link${link === 'Home' ? ' active' : ''}`}
                  onClick={() => link !== 'Home' && onNavClick()}
                  aria-label={`Navigate to ${link}`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar-actions">
            <button className="btn-login" id="login-btn" onClick={onLoginClick} aria-label="Login to portal">
              <IconUser />
              <span className="btn-login-text">Login</span>
            </button>
            {/* Hamburger — mobile only */}
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav-list" role="list">
          {navLinks.map(link => (
            <li key={link}>
              <button
                className={`mobile-nav-link${link === 'Home' ? ' active' : ''}`}
                onClick={() => link === 'Home' ? setMenuOpen(false) : handleMobileNav()}
              >
                {link}
                {link === 'Home' && <span className="mobile-nav-current">Current page</span>}
              </button>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <button className="btn-login mobile-login-btn" onClick={handleMobileLogin}>
            <IconUser />
            Login to Portal
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="mobile-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </>
  )
}

/* ─── HERO ────────────────────────────────────────── */
const Hero = () => (
  <section className="hero" aria-labelledby="hero-heading">
    <div className="hero-inner">
      <div className="hero-badge">
        <span>🔒</span>
        <span>Secure · Authenticated · Official</span>
      </div>
      <h1 id="hero-heading">Internship Certificate<br />Verification Portal</h1>
      <p className="hero-subtitle">
        Verify the authenticity of internship certificates issued by
        Holistic Infosystem Pvt. Ltd. through our official digital records system.
      </p>
      <div className="hero-pills">
        <span className="hero-pill">🛡️ SSL Encrypted</span>
        <span className="hero-pill">✅ Tamper-Proof</span>
        <span className="hero-pill">🕐 Real-time Verification</span>
      </div>
    </div>
  </section>
)

/* ─── CERTIFICATE CARD ────────────────────────────── */
const CertificateCard = () => (
  <section className="cert-card" aria-label="Certificate Verification Result">
    {/* Header */}
    <div className="cert-card-header">
      <div className="check-icon-wrap" aria-hidden="true">
        <IconCheck />
      </div>
      <div className="cert-header-text">
        <div className="cert-header-title">Certificate Verified ✓</div>
        <div className="cert-header-sub">
          Document integrity confirmed against official records
        </div>
      </div>
      <div className="authentic-badge" aria-label="Certificate status: Authentic">
        <span className="authentic-badge-label">Status</span>
        <span className="authentic-badge-status">AUTHENTIC</span>
      </div>
    </div>

    {/* Body */}
    <div className="cert-body">
      {/* Certificate ID */}
      <div className="cert-id-row">
        <span className="cert-id-label">Certificate ID</span>
        <span className="cert-id-value">{CERT.id}</span>
      </div>

      {/* Details Grid */}
      <div className="cert-details-grid">
        <div className="cert-detail-item">
          <span className="cert-detail-label">Intern Name</span>
          <span className="cert-detail-value highlight">{CERT.name}</span>
        </div>
        <div className="cert-detail-item">
          <span className="cert-detail-label">Duration</span>
          <span className="cert-detail-value">{CERT.duration}</span>
        </div>
        <div className="cert-detail-item">
          <span className="cert-detail-label">Domain / Role</span>
          <span className="cert-detail-value">{CERT.domain}</span>
        </div>
        <div className="cert-detail-item">
          <span className="cert-detail-label">Issued By</span>
          <span className="cert-detail-value">{CERT.issuedBy}</span>
        </div>
        <div className="cert-detail-item">
          <span className="cert-detail-label">Designation</span>
          <span className="cert-detail-value">{CERT.designation}</span>
        </div>
        <div className="cert-detail-item">
          <span className="cert-detail-label">Issuing Organisation</span>
          <span className="cert-detail-value">Holistic Infosystem Pvt. Ltd.</span>
        </div>
      </div>

      <div className="cert-divider" aria-hidden="true" />

      {/* Footer Row */}
      <div className="cert-footer-row">
        <span className="cert-verified-on">
          Date of Verification: <strong>{CERT.verificationDate}</strong>
        </span>
        <span className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          AUTHENTIC
        </span>
      </div>
    </div>
  </section>
)

/* ─── DOWNLOAD SECTION ────────────────────────────── */
const DownloadSection = () => (
  <section className="download-card" aria-label="Certificate Download">
    <div className="doc-preview" aria-hidden="true">
      <IconFile />
      <span className="doc-preview-label">PDF</span>
    </div>
    <div className="download-info">
      <h3>Internship Completion Certificate</h3>
      <p>
        Official certificate issued by Holistic Infosystem Pvt. Ltd. in PDF format.
        This document is digitally authenticated and suitable for submission to
        educational institutions and employers.
      </p>
      <a
        className="btn-download"
        href="/certificate.pdf"
        download="Holistic_Infosystem_Internship_Certificate.pdf"
        target="_blank"
        rel="noopener noreferrer"
        id="download-cert-btn"
        aria-label="Download internship certificate PDF"
      >
        <IconDownload />
        Download Certificate (PDF)
      </a>
    </div>
  </section>
)

/* ─── AUTHENTICITY SEAL ───────────────────────────── */
const AuthenticitySeal = () => (
  <section className="seal-section" aria-label="Authenticity Seal">
    <div className="seal-top">
      <div className="seal-brand">
        <img src="/logo.png" alt="Holistic Infosystem" className="seal-logo" />
        <div className="seal-brand-text">
          <h4>Holistic Infosystem Pvt. Ltd.</h4>
          <p>Digitally Verified · Official Records Database</p>
        </div>
      </div>
      <div className="seal-qr">
        <QRCode />
        <span className="qr-label">Scan to verify</span>
      </div>
    </div>

    <div className="seal-hash">
      <div className="seal-hash-label">SHA-256 Document Hash</div>
      <div className="seal-hash-value" aria-label="SHA-256 verification hash">
        {CERT.hash}
      </div>
    </div>

    <p className="seal-integrity">
      This certificate has been verified against our official records database hosted on Holistic
      Infosystem's secure HR management system. Document integrity has been confirmed and no
      alterations have been detected.
    </p>

    <div className="seal-bottom">
      <IconShield />
      <p>
        <strong>Secured with 256-bit SSL encryption.</strong>{' '}
        All verification requests are processed over a secure, encrypted connection.
        Unauthorised reproduction or modification of this certificate is a punishable offence.
      </p>
    </div>
  </section>
)

/* ─── FOOTER ──────────────────────────────────────── */
const Footer = ({ onNavClick }) => (
  <footer className="footer" role="contentinfo">
    <div className="footer-inner">
      <div className="footer-top">
        {/* Brand column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="Holistic Infosystem" />
            <span>Holistic Infosystem</span>
          </div>
          <p className="footer-desc">
            A technology solutions company delivering cutting-edge IT services,
            software development, and digital transformation for businesses worldwide.
          </p>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <IconMapPin />
              <span>Sector-63, Noida, Uttar Pradesh — 201301, India</span>
            </div>
            <div className="footer-contact-item">
              <IconMail />
              <span>hr@holisticinfosystem.com</span>
            </div>
            <div className="footer-contact-item">
              <IconPhone />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            {['Home', 'About Us', 'Services', 'Careers', 'Blog'].map(l => (
              <li key={l}>
                <a onClick={onNavClick} role="button" tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && onNavClick()}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-col">
          <h4>Legal & Support</h4>
          <ul className="footer-links">
            {['Privacy Policy', 'Terms of Service', 'Verification Help', 'Contact HR', 'Grievance Redressal'].map(l => (
              <li key={l}>
                <a onClick={onNavClick} role="button" tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && onNavClick()}>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © {new Date().getFullYear()} Holistic Infosystem Pvt. Ltd. All rights reserved.
        </span>
        <div className="footer-bottom-links">
          <a onClick={onNavClick} role="button" tabIndex={0}>Privacy Policy</a>
          <a onClick={onNavClick} role="button" tabIndex={0}>Terms</a>
          <a onClick={onNavClick} role="button" tabIndex={0}>Verification Help</a>
        </div>
      </div>
    </div>
  </footer>
)

/* ─── APP ROOT ────────────────────────────────────── */
export default function App() {
  const [modal, setModal] = useState(null) // 'lock' | 'service' | null

  const handleNavClick = () => setModal('lock')
  const handleLoginClick = () => setModal('service')
  const closeModal = () => setModal(null)

  return (
    <>
      <Navbar onNavClick={handleNavClick} onLoginClick={handleLoginClick} />

      <main>
        <Hero />
        <div className="main-content">
          <CertificateCard />
          <DownloadSection />
          <AuthenticitySeal />
        </div>
      </main>

      <Footer onNavClick={handleNavClick} />

      {modal && <Modal type={modal} onClose={closeModal} />}
    </>
  )
}
