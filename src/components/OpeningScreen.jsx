import "./OpeningScreen.css";
import logo from "../assets/logo.png";

function OpeningScreen() {
  return (
    <main className="opening-screen">

      {/* Top Label */}
      <div className="opening-top">
        <span className="opening-line"></span>

        <span className="opening-top-text">
          ROOTED IN BENGAL
        </span>

        <span className="opening-line"></span>
      </div>


      {/* Decorative Left */}
      <div className="opening-decoration opening-decoration-left">
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Decorative Right */}
      <div className="opening-decoration opening-decoration-right">
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Main Content */}
      <div className="opening-center">

        <img
          src={logo}
          alt="Silpam"
          className="opening-logo"
        />

        <h1 className="opening-title">
          SILPAM
        </h1>

        <div className="opening-divider">
          <span></span>
          <i></i>
          <span></span>
        </div>

        <p className="opening-tagline">
          HANDMADE WITH HERITAGE
        </p>

        <p className="opening-heart">
          Made with Heart
        </p>

      </div>


      {/* Bottom Label */}
      <div className="opening-bottom">

        <span className="opening-line"></span>

        <span className="opening-bottom-text">
          ENTER THE WORLD OF SILPAM
        </span>

        <span className="opening-line"></span>

      </div>

    </main>
  );
}

export default OpeningScreen;