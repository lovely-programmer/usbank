import "./Happening.css";
import { AiOutlineRight } from "react-icons/ai";
import happyFamily from "../../assets/photo-happy-famiy-outside-675x450.jpg";
import groupSelfie from "../../assets/photo-work-goup-selfie-675x450.jpg";
import couple from "../../assets/photo-happy-couple-pointing-to-laptop-675x450.jpg";

function Happening() {
  return (
    <div className="happening">
      <div className="container">
        <div className="happening__header">
          <h2>Happening now</h2>
        </div>
        <div className="happening__content">
          <div>
            <div className="happening__content-container">
              <div className="happening__content-img">
                <img src={happyFamily} alt="" />
              </div>
              <div>
                <h3>COMMUNITY</h3>
              </div>
              <div>
                <h4>How Black families can pass down wealth</h4>
              </div>
            </div>
            <div className="happening__link">
              <a href="">
                See the tips <AiOutlineRight />
              </a>
            </div>
          </div>
          <div>
            <div className="happening__content-container">
              <div className="happening__content-img">
                <img src={groupSelfie} alt="" />
              </div>
              <div>
                <h3>CAREERS</h3>
              </div>
              <div>
                <h4>Your time to thrive at work</h4>
              </div>
            </div>
            <div className="happening__link">
              <a href="">
                Search jobs <AiOutlineRight />
              </a>
            </div>
          </div>
          <div>
            <div className="happening__content-container">
              <div className="happening__content-img">
                <img src={couple} alt="" />
              </div>
              <div>
                <h3>NEWS</h3>
              </div>
              <div>
                <h4>Where to invest now</h4>
              </div>
            </div>
            <div className="happening__link">
              <a href="">
                Read the outlook <AiOutlineRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Happening;
