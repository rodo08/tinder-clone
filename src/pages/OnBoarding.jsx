import Nav from "../components/Nav/Nav";

const OnBoarding = () => {
  const handleSubmit = () => {
    console.log("submitted");
  };
  const handleChange = () => {
    console.log("change");
  };
  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>Create account</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="Fisrt name"
              required={true}
              value={""}
              onChange={handleChange}
            />
            <div className="multiple-input-container">
              <label htmlFor="first_name">Birthday</label>
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={""}
                onChange={handleChange}
              />

              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={""}
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender-identity"
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender-identity"
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender-identity"
                value="more"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              id="show-gender"
              type="checkbox"
              name="show-gender"
              onChange={handleChange}
              checked={false}
            />
            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender-interest"
                value="man"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender-interest"
                value="woman"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender-interest"
                value="everyone"
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks..."
              value={""}
              onChange={handleChange}
            />

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="about">Profile Picture</label>
            <div className="photo-container">
              <input
                type="url"
                name="url"
                id="url"
                onChange={handleChange}
                required={true}
              />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default OnBoarding;
