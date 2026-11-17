function Navbar() {
  const goTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="navbar">
      <button
        className="navbar-brand"
        onClick={() => goTo("/")}
      >
        Car<span>Scope</span>
      </button>

      <div className="navbar-links">
        
        <button onClick={() => goTo("/")}>
          Home
        </button>

        <button onClick={() => goTo("/saved")}>
          Saved Inspections
        </button>

        <button onClick={() => goTo("/buyers-guide")}>
          Buyer's Guide
        </button>

        <button onClick={() => goTo("/compare")}>
          Compare
        </button>
      </div>
    </nav>
  );
}

export default Navbar;