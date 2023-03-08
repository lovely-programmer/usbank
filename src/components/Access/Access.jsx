import "./Access.css";
import mobileApp from "../../assets/photo-mobile-app-account-screen-375x705.png";
import { AiOutlineRight } from "react-icons/ai";

function Access() {
  return (
    <div className="access">
      <div className="container">
        <h2>Access us wherever you go.</h2>
        <div className="access__content">
          <div className="access__content-left">
            <img src={mobileApp} alt="" />
          </div>
          <div className="access__content-center">
            <div className="access__center-header">
              <h3>Bank from almost anywhere with the U.S. Bank Mobile App.</h3>
            </div>
            <div className="access__center-list">
              <ul>
                <li>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      color="#6E6E6E"
                      fill="currentColor"
                      version="1.1"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      enable-background="new 0 0 24 24"
                      xml:space="preserve"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path d="M20.196 8l-3.6-3.586L18.01 3 24 9l-6 6-1.404-1.408L20.197 10H10V8h10.196zM3.804 14H14v2H3.803l3.6 3.592L6 21l-6-6 5.99-6 1.414 1.414L3.804 14z"></path>
                    </svg>
                  </div>
                  <div>Transfer money between your accounts.</div>
                </li>
                <li>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      color="#6E6E6E"
                      fill="currentColor"
                      version="1.1"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      enable-background="new 0 0 24 24"
                      xml:space="preserve"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path d="M19.5 7.5v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2zM14.1 7A5.002 5.002 0 0124 8a5.002 5.002 0 01-4 4.9V21H0V7h14.1zm0 2H2v10h16v-6.1A5.006 5.006 0 0114.1 9zM4 11h6v2H4v-2zm0 4h12v2H4v-2z"></path>
                    </svg>
                  </div>
                  <div>Deposit checks.</div>
                </li>
                <li>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      color="#6E6E6E"
                      fill="currentColor"
                      version="1.1"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      enable-background="new 0 0 24 24"
                      xml:space="preserve"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path d="M3 2h18v20H3V2zm2 2v16h14V4H5zm2 3h10v2H7V7zm0 4h4v2H7v-2zm0 4h4v2H7v-2zm6.74.549a.992.992 0 00.088.315.926.926 0 00.295.34c.134.093.285.16.445.2.183.043.37.064.56.062.185.004.37-.02.549-.07.13-.036.252-.096.36-.176a.634.634 0 00.249-.513.572.572 0 00-.131-.416.79.79 0 00-.301-.196 7.33 7.33 0 00-.72-.205 70.994 70.994 0 01-1.03-.255 2.36 2.36 0 01-.655-.255 1.573 1.573 0 01-.422-.36 1.27 1.27 0 01-.226-.425 1.634 1.634 0 01-.065-.454c-.007-.27.06-.536.196-.772.129-.214.305-.398.517-.539.22-.145.465-.251.723-.315.12-.03.24-.053.363-.07V10.5h.949v.946c.131.017.261.044.39.078a2.3 2.3 0 01.745.353c.215.157.392.357.517.586.082.162.13.338.138.517h-1.21a.698.698 0 00-.286-.378 1.526 1.526 0 00-.834-.208c-.119.001-.237.013-.353.035-.114.019-.225.055-.327.107a.676.676 0 00-.23.199.573.573 0 00.079.709c.137.112.3.193.474.236l.259.066.507.13.55.138.386.098c.19.054.368.137.53.246.146.099.274.22.38.359a1.461 1.461 0 01.3.895c.008.294-.065.584-.212.842a1.76 1.76 0 01-.56.57 2.492 2.492 0 01-.778.315 3.6 3.6 0 01-.459.073v.945h-.948v-.945a3.474 3.474 0 01-.449-.085 2.385 2.385 0 01-.804-.376 1.867 1.867 0 01-.756-1.383c-.033-.315-.033-.457-.033-.457h1.204l.036.438z"></path>
                    </svg>
                  </div>
                  <div>Manage and pay bills.</div>
                </li>
                <li>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      color="#6E6E6E"
                      fill="currentColor"
                      version="1.1"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      enable-background="new 0 0 24 24"
                      xml:space="preserve"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path d="M5 15h6v2H5v-2zm-3-4h7v2H2v-2zm3-4h6v2H5V7zm10.27 7.282c.02.221.075.438.16.641.125.275.31.513.54.694.245.188.521.325.814.404.335.089.679.132 1.024.128.34.009.679-.039 1.006-.141a1.97 1.97 0 00.658-.36c.15-.128.27-.293.347-.48.071-.18.108-.371.108-.566a1.254 1.254 0 00-.24-.847 1.442 1.442 0 00-.55-.398 12.38 12.38 0 00-1.317-.417 119.16 119.16 0 01-1.886-.52 4.07 4.07 0 01-1.198-.52 2.985 2.985 0 01-.772-.731 2.693 2.693 0 01-.413-.867c-.079-.3-.12-.611-.12-.924a3.273 3.273 0 01.36-1.572c.235-.436.558-.811.945-1.098.403-.294.85-.512 1.323-.641.22-.061.441-.109.665-.142V4h1.736v1.925c.24.037.479.09.713.16.492.148.955.392 1.365.72.393.318.716.726.946 1.193.15.33.236.687.251 1.053H19.52a1.418 1.418 0 00-.52-.77c-.46-.3-.99-.448-1.528-.424a3.248 3.248 0 00-.646.07c-.21.04-.411.113-.599.219-.166.099-.31.237-.419.404a1.267 1.267 0 00.144 1.444c.251.23.548.394.868.482l.473.135.928.263 1.006.282.706.199c.347.11.674.279.97.5.267.202.502.45.695.732.184.269.326.568.419.886.086.304.13.62.131.937.015.598-.12 1.19-.389 1.714a3.435 3.435 0 01-1.024 1.161 4.31 4.31 0 01-1.424.642c-.277.07-.557.118-.839.148V20h-1.736v-1.925a5.785 5.785 0 01-.82-.174 4.179 4.179 0 01-1.473-.763 3.725 3.725 0 01-1.012-1.323 4.301 4.301 0 01-.371-1.495c-.06-.642-.06-.93-.06-.93h2.203l.066.892z"></path>
                    </svg>
                  </div>
                  <div>Send, receive and request money.</div>
                </li>
              </ul>
            </div>
            <div className="access__center-btn">
              <button>Download the app</button>
            </div>
          </div>

          <hr className="hr" />

          <div className="access__content-right">
            <div className="access__right-container">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  color="#0C2074"
                  fill="currentColor"
                  y="0"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="graphics-symbol img"
                  aria-hidden="true"
                >
                  <rect x="0" y="0" opacity="0"></rect>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M26 28h3v2H3v-2h3V14h2v14h4V14h2v14h4V14h2v14h4V14h2zm-8-18a2 2 0 1 0-2 2 2 2 0 0 0 2-2zm11.52.15l-13-8a1 1 0 0 0-1 0l-13 8A1 1 0 0 0 2 11v4h2v-3.44l12-7.39 12 7.39V15h2v-4a1 1 0 0 0-.48-.85z"
                  ></path>
                </svg>
              </div>
              <div className="access__right-content">
                <h3>Branches & ATMs</h3>
                <div className="access__right-link">
                  <a href="">Search locations</a>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
            <div className="access__right-container">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  color="#0C2074"
                  fill="currentColor"
                  y="0"
                  width="40"
                  height="40"
                  viewBox="0 0 32 32"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                  role="graphics-symbol img"
                  aria-hidden="true"
                >
                  <rect x="0" y="0" opacity="0"></rect>
                  <path d="M27 2H5C3.34 2 2 3.34 2 5v16c0 1.66 1.34 3 3 3h10v4H9v2h14v-2h-6v-4h10c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3zM5 4h22c.55 0 1 .45 1 1v13H4V5c0-.55.45-1 1-1zm22 18H5c-.55 0-1-.45-1-1v-1h24v1c0 .55-.45 1-1 1z"></path>
                </svg>
              </div>
              <div className="access__right-content">
                <h3>Online banking</h3>
                <div className="access__right-link">
                  <a href="">Log in to your account(s)</a>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
            <div className="access__right-container">
              <div>
                <svg
                  id="b1168353-04c7-4345-9c87-b60bc606fb21"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M23,1H9A3,3,0,0,0,6,4V28a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V4A3,3,0,0,0,23,1Zm1,27a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V4A1,1,0,0,1,9,3H23a1,1,0,0,1,1,1Zm-6.5-2.5A1.5,1.5,0,1,1,16,24,1.5,1.5,0,0,1,17.5,25.5ZM12,5h8V7H12Z"
                    fill="#0c2074"
                  ></path>
                </svg>
              </div>
              <div className="access__right-content">
                <h3>24-hour banking</h3>
                <div className="access__right-link">
                  <a href="">Call 800-USBANKS(872-2657)</a>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
            <div className="access__right-container">
              <div>
                <svg
                  id="ac8eb927-51e5-4b7e-8648-62b56dbf54cd"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M8,14h2v2H8Zm7,2h2V14H15Zm7,0h2V14H22ZM8,20h2V18H8Zm7,0h2V18H15Zm7,0h2V18H22ZM8,24h2V22H8Zm7,0h2V22H15Zm7,0h2V22H22ZM10,5V2H8V6h2ZM30,6V27a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V6A3,3,0,0,1,5,3H6V5H5A1,1,0,0,0,4,6V8H28V6a1,1,0,0,0-1-1H26V3h1A3,3,0,0,1,30,6ZM28,27V10H4V27a1,1,0,0,0,1,1H27A1,1,0,0,0,28,27ZM20,3H12V5h8Zm4,2V2H22V6h2Z"
                    fill="#0c2074"
                  ></path>
                </svg>
              </div>
              <div className="access__right-content">
                <h3>Appointments</h3>
                <div className="access__right-link">
                  <a href="">Make an appointment</a>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Access;
