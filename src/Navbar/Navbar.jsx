import "./Navbar.css"


function Navbar() {
  return (
    <div className="Nav">
      <header className="navigation-wrap">
        <div className="logo">
          <img src="path/to/logo.png" alt="Restaurant Logo" />
        </div>
        <nav className="navbar-collapse collapse">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#explore" className="nav-link">Explore Foods</a></li>
            <li><a href="#reviews" className="nav-link">Reviews</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
          </ul>
          <div className="contact-number">
            1200 345 123
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
