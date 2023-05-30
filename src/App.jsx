function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./images/logo.svg" className="logo" alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img src="./images/icon-menu.svg" alt="menu-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <img
                src="./images/icon-close-menu.svg"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <div className="inner-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="featuresDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Features
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="featuresDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <img src="./images/icon-todo.svg" alt="icon" />
                          <span>Todo List</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img src="./images/icon-calendar.svg" alt="icon" />
                          <span>Calendar</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img src="./images/icon-reminders.svg" alt="icon" />
                          <span>Reminders</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <img src="./images/icon-planning.svg" alt="icon" />
                          <span>Planning</span>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="companyDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Company
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="companyDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          History
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Our Team
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Careers
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>

                <ul className="Signup">
                  <li type="button" className="btn login">
                    Login
                  </li>

                  <li type="button" className="btn register">
                    Register
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function Main() {
  return (
    <>
      <div className="container main">
        <div className="rightSide">
          <Hero />
        </div>
        <div className="leftSide">
          <About />
          <Client />
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <>
      <div className="hero">
        <img
          src="./images/image-hero-mobile.png"
          className="img-fluid d-block d-lg-none"
          alt="hero"
        />
        {/* <img src="./image-hero-mobile.png" className="img-fluid d-block d-sm-none"
          alt="illustration of hero in mobile" /> */}

        <img
          src="./images/image-hero-desktop.png"
          className="img-fluid d-none d-lg-block"
          alt="illustration of hero in desktop"
        />
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="about">
        <h2 className="header">Make <span>remote work</span></h2>
        <span className="summary">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </span>
        <button className="btn">Learn more</button>
      </div>
    </>
  );
}

function Client() {
  return (
    <>
      <div className="clients">
        <img src="./images/client-databiz.svg" alt="client-logo" />

        <img src="./images/client-audiophile.svg" alt="client-logo" />

        <img src="./images/client-meet.svg" alt="client-logo" />

        <img src="./images/client-maker.svg" alt="client-logo" />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Main />
    </>
  );
}
export default App;
