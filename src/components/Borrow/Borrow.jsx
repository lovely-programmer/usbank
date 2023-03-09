import "./Borrow.css";
import ilH from "../../assets/illus-home-lock3-800x450.png";
import ilC from "../../assets/illus-car3-800x450.png";
import ilH3 from "../../assets/illus-house3-800x450.png";
import { AiOutlineRight } from "react-icons/ai";

function Borrow() {
  return (
    <div className="borrow">
      <div className="container">
        <div className="borrow__header">
          <h2>Borrowing money is a big deal. We’re ready to help.</h2>
        </div>
        <div className="borrow__p">
          <p>
            From calculators and rate charts to get you started, to experienced
            loan officers and bankers, U.S. Bank has answers for all your loan
            and mortgage questions.
          </p>
        </div>
        <div className="borrow__content">
          <div className="borrow__content-left">
            <div className="borrow__content-card">
              <div className="borrow__content-container">
                <div>
                  <img src={ilH3} alt="" />
                </div>
                <h3>Home mortgage</h3>
              </div>
              <div className="borrow__link">
                <a href="">
                  Learn more <AiOutlineRight />
                </a>
                <a href="">
                  Calculate your mortgage payment <AiOutlineRight />
                </a>
              </div>
            </div>
            <div>
              <div className="borrow__content-container">
                <div className="borrow__content-card">
                  <img src={ilC} alt="" />
                </div>
                <h3>Auto Loan</h3>
              </div>
              <div className="borrow__link">
                <a href="">
                  Learn more <AiOutlineRight />
                </a>
                <a href="">
                  Calculate your auto loan payment <AiOutlineRight />
                </a>
              </div>
            </div>
          </div>
          <div className="borrow__content-right">
            <div>
              <div className="borrow__content-container">
                <div className="borrow__content-card">
                  <img src={ilH} alt="" />
                </div>
                <h3>Home equity line of credit</h3>
              </div>
              <div className="borrow__link">
                <a href="">
                  Learn more <AiOutlineRight />
                </a>
                <a href="">
                  Calculate your home equity rates <AiOutlineRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Borrow;
