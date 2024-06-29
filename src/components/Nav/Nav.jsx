import flameLogo from "../../images/flame-logo.png";
import colorLogo from "../../images/color-logo.png";

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  const authToken = true;
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? flameLogo : colorLogo}
          alt="tinder logo"
          height={50}
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
