import React from "react";

import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUs__container">
        <h1>Contact Us Today</h1>

        <div className="contactUs__bankName">
          FirstTrust Bank, RSA Lynchwood Park Peterborough PE2 6GG.
        </div>

        <div className="contactUs__email">
          E-mail: customer_care@firstrustfinance.com{" "}
        </div>

        <div className="contactUs__email">
          E-mail: info@firstrustfinance.com{" "}
        </div>

        <div>
          <form>
            <div className="form__group">
              <input type="text" required />
              <label htmlFor="">Name</label>
            </div>
            <div className="form__group">
              <input type="email" required />
              <label htmlFor="">Email</label>
            </div>
            <div className="form__group">
              <input type="text" required />
              <label htmlFor="">Your Subject</label>
            </div>
            <div className="form__group">
              <textarea
                placeholder="Your message"
                required
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="form__group">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
