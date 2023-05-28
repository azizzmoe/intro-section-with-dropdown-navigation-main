function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./images/logo.svg" alt="" />
          </a>

          <button
            class="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <img src="./images/icon-menu.svg" alt="menu-icon" />
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
              <img
                src="./images/icon-close-menu.svg"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div class="offcanvas-body">
              <div class="dropdown">
                <div className="feature">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Features
                  </button>

                  <div class="collapse" id="collapseExample">
                    <ul class="dropdown-menu card card-body">
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="./images/icon-todo.svg" alt="icon" />
                          <span>Todo List</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="./images/icon-calendar.svg" alt="icon" />
                          <span>Calendar</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="./images/icon-reminders.svg" alt="icon" />
                          <span>Reminders</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src="./images/icon-planning.svg" alt="icon" />
                          <span>Planning</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="company">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample2"
                  >
                    Company
                  </button>

                  <div class="collapse" id="collapseExample2">
                    <ul class="dropdown-menu card card-body">
                      <li>
                        <a class="dropdown-item" href="#">
                          <span>History</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <span>Our Team</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <span>Blog</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="Careers">
                  <span>
                    Careers
                  </span>
                </div>

                <div className="About">
                  <span>
                    About
                  </span>
                </div>

                <div className="Signup">
                  <button type="button" class="btn login">Login</button>
                  <button type="button" class="btn register">Register</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <>
      <div className="hero">
        <img src="./images/image-hero-mobile.png" alt="hero" />
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="about">
        <h2 className="header">Make remote work</h2>
        <summary className="summary">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </summary>
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
      <Hero />
      <About />
      <Client />
    </>
  );
}
export default App;
