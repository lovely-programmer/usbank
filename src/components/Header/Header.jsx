import "./Header.css";
import flowerMan from "../../assets/photo-man-with-flower-arrangement-420x420.jpg";
import couple from "../../assets/photo-couple-looking-at-table-with-coffee-420x420.jpg";
import photoCouple from "../../assets/photo-couple-looking-at-phone-smiling-420x420.jpg";
import accountant from "../../assets/photo_banker_customer-420x420.jpg";
import { AiOutlineRight } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__image"></div>
        <div className="header__card">
          <div className="header__card-content ">
            <h1>PERSONAL BANKING</h1>
            <h2>Savings made simple.</h2>
            <p>
              Planning for the future is easier with a guaranteed rate of return
              on a CD.
            </p>
            <div className="header__buttons">
              <button className="first__btn">Get started</button>
              <button className="second__btn">Browse CDs</button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__multi-cards container">
        <div className="header__column">
          <div className="card">
            <div className="card__img">
              <img src={flowerMan} alt="" />
            </div>
            <div className="card__details">
              <h2>U.S BANCORP INVESTMENTS</h2>
              <h3>
                Bonus? Refund? Put extra cash to work with Automated Investor.
              </h3>
              <div className="card__link">
                <a href="">
                  Find out how <AiOutlineRight />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={photoCouple} alt="" />
            </div>
            <div className="card__details">
              <h2>U.S BANCORP INVESTMENTS</h2>
              <h3>Get tax tools, tips and up to $20 off TurboTax.</h3>
              <div className="card__link">
                <a href="">
                  Learn more <AiOutlineRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header__row">
          <div className="card">
            <div className="card__img">
              <img src={couple} alt="" />
            </div>
            <div className="card__details">
              <div>
                <h2>BANK SMARTLY™ CHECKING</h2>
                <h3>Spend confidently. Automated budgeting has your back.</h3>
              </div>
              <div className="card__link">
                <a href="">
                  Bank the smart way <AiOutlineRight />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__img">
              <img src={accountant} alt="" />
            </div>
            <div className="card__details">
              <div>
                <h2>WELCOME UNION BANK</h2>
                <h3>Stay informed as your accounts transition.</h3>
              </div>
              <div className="card__link">
                <a href="">
                  Helpful resources <AiOutlineRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__mini-cards container">
        <div className="header__mini-card">
          <a href="">
            <div className="mini__card-content">
              <svg
                id="a6e85dc7-1971-44af-ad76-da6f777b1cb2"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M28,5H4A3,3,0,0,0,1,8V24a3,3,0,0,0,3,3H28a3,3,0,0,0,3-3V8A3,3,0,0,0,28,5ZM4,7H28a1,1,0,0,1,1,1v4H3V8A1,1,0,0,1,4,7ZM28,25H4a1,1,0,0,1-1-1V14H29V24A1,1,0,0,1,28,25ZM6,20H16v2H6Z"
                  fill="#0c2074"
                ></path>
              </svg>
              <div className="mini__card-title">Credit Card</div>
            </div>
          </a>
        </div>
        <div className="header__mini-card">
          <a href="">
            <div className="mini__card-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Outlined"
                viewBox="0 0 32 32"
              >
                <path
                  d="M31 13.5V28a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V13.5a1 1 0 0 1 1-1h8v2H3V27h26V14.5h-2v-2h3a1 1 0 0 1 1 1zM6 25h20v-2H6zm4.87-5l.7-3.53a1 1 0 0 1 .28-.51L22.48 5.29a1 1 0 0 0-1.4 0l-2.16 2.15L17.5 6l2.15-2.15a3 3 0 0 1 4.2 0 3 3 0 0 1 4.21 4.27l-12 12a.94.94 0 0 1-.51.27l-3.55.76h-.19a1 1 0 0 1-1-1.2zM25.28 5.32l-2.83 2.83 1.42 1.42 2.83-2.83a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0zM13.12 18.9l1.77-.36L22.45 11 21 9.56l-7.57 7.57z"
                  fill="#0c2074"
                ></path>
              </svg>
              <div className="mini__card-title">Checking</div>
            </div>
          </a>
        </div>
        <div className="header__mini-card">
          <a href="">
            <div className="mini__card-content">
              <svg
                id="a6e85dc7-1971-44af-ad76-da6f777b1cb2"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M14,17.12c0,.46.44.64,2.14.89,1.54.22,3.86.56,3.86,2.87a2.88,2.88,0,0,1-2.88,2.87H17V25H15V23.75h-.12A2.88,2.88,0,0,1,12,20.88h2a.87.87,0,0,0,.87.87h2.25a.87.87,0,0,0,.88-.86h0c0-.46-.44-.64-2.14-.89-1.54-.22-3.86-.56-3.86-2.87a2.88,2.88,0,0,1,2.88-2.87H15V13h2v1.25h.12A2.88,2.88,0,0,1,20,17.12H18a.87.87,0,0,0-.87-.87H14.88a.87.87,0,0,0-.88.86Zm14.15,6.44A12.58,12.58,0,0,1,17,31H15A12.58,12.58,0,0,1,3.85,23.56,10.57,10.57,0,0,1,5.72,12.35l5.6-6.47-2-3.38A1,1,0,0,1,10.18,1H21.77a1,1,0,0,1,.86,1.5L20.68,5.88l5.6,6.47A10.57,10.57,0,0,1,28.15,23.56ZM12,3l1.16,2h5.76L20,3ZM24.77,13.66,19,7H13L7.23,13.66a8.64,8.64,0,0,0-1.54,9.13A10.64,10.64,0,0,0,15.11,29a13.22,13.22,0,0,0,1.78,0,10.64,10.64,0,0,0,9.42-6.18A8.6,8.6,0,0,0,24.77,13.66Z"
                  fill="#0c2074"
                ></path>
              </svg>
              <div className="mini__card-title">Savings</div>
            </div>
          </a>
        </div>
        <div className="header__mini-card">
          <a href="">
            <div className="mini__card-content">
              <svg
                id="a6e85dc7-1971-44af-ad76-da6f777b1cb2"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M29.61 12.21l-13-10a1 1 0 0 0-1.22 0l-13 10 1.22 1.58L5 12.72V29a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7h4v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V12.72l1.39 1.07zM25 28h-5v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7H7V11.18l9-6.92 9 6.92z"
                  fill="#0c2074"
                ></path>
              </svg>
              <div className="mini__card-title">Mortgage</div>
            </div>
          </a>
        </div>
        <div className="header__mini-card">
          <a href="">
            <div className="mini__card-content">
              <svg
                id="a6e85dc7-1971-44af-ad76-da6f777b1cb2"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  id="Outlined"
                  d="M7.5 7.5C12 3.1 19 2.9 23.7 6.8l-2.5 2.5c-.3.3-.4.7-.2 1.1.2.4.5.6.9.6h6.4c.6 0 1-.4 1-1V3.6c0-.4-.2-.8-.6-.9-.4-.2-.8-.1-1.1.2l-2.5 2.5C19.7.7 11.3.9 6.1 6.1 3.4 8.8 1.9 12.4 2 16.2h2c-.1-3.3 1.2-6.4 3.5-8.7zM27.4 9h-3l3-3v3zm.6 6.8c.1 3.3-1.2 6.4-3.5 8.7-4.5 4.4-11.5 4.6-16.2.7l2.5-2.5c.3-.3.4-.7.2-1.1-.2-.4-.6-.6-1-.6H3.6c-.6 0-1 .4-1 1v6.4c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3l2.5-2.5C9.5 28.8 12.7 30 16 30c3.6 0 7.2-1.4 9.9-4.1 2.7-2.7 4.2-6.3 4.1-10.1h-2zM4.6 23h3l-3 3v-3z"
                  fill="#0c2074"
                ></path>
              </svg>
              <div className="mini__card-title">Refinance</div>
            </div>
          </a>
        </div>
        <div className="header__mini-card">
          <a href="">
            <div className="mini__card-content">
              <svg
                id="a6e85dc7-1971-44af-ad76-da6f777b1cb2"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path
                  d="M26,22a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H2A1,1,0,0,0,1,7V21a1,1,0,0,0,1,1ZM10,14c0-3.25,1.83-6,4-6s4,2.75,4,6-1.83,6-4,6S10,17.25,10,14Zm15,6H18a9.31,9.31,0,0,0,2-6,9.31,9.31,0,0,0-2-6h7ZM3,8h7a9.31,9.31,0,0,0-2,6,9.31,9.31,0,0,0,2,6H3Zm28,3V25a1,1,0,0,1-1,1H7V24H29V11Z"
                  fill="#0c2074"
                ></path>
              </svg>
              <div className="mini__card-title">Investing</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
