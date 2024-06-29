import Nav from "../components/Nav/Nav";
import AuthModal from "../components/AuthModal/AuthModal";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSigUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log("click");
    setShowModal(true);
    setIsSigUp(true);
  };
  return (
    <div className="overlay">
      <Nav
        minimal={false}
        authToken={authToken}
        setShowModal={setShowModal}
        showModal={showModal}
        setIsSigUp={setIsSigUp}
      />
      <div className="home">
        <h1 className="primary-title">Swipe Right&reg;</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>

        {showModal && (
          <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
        )}
      </div>
    </div>
  );
};

export default Home;
