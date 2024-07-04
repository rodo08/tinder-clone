import whiteLogo from "../../images/white-logo.png";
import colorLogo from "../../images/color-logo.png";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? colorLogo : whiteLogo}
          alt="tinder logo"
          height={50}
        />
      </div>

      <button className="nav-button" onClick={handleClick} disabled={showModal}>
        Log in
      </button>
    </nav>
  );
};

export default Nav;
