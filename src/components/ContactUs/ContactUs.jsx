import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { toast } from "react-toastify";

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_37p0wce",
        "template_lmifd7p",
        form.current,
        "user_AnjF4Y8dbderf60LOsMSF"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          toast.success("message sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="contactUs">
      <div className="contactUs__container">
        <h1>Contact Us Today</h1>

        <div className="contactUs__bankName">
          FirstTrust Bank, RSA Lynchwood Park Peterborough PE2 6GG.
        </div>

        <div className="contactUs__email">
          E-mail: customer_care@firstrustbk.com{" "}
        </div>

        <div className="contactUs__email">
          E-mail: info@firstrustbk.com{" "}
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form__group">
              <input type="text" name="user_name" required />
              <label htmlFor="">Name</label>
            </div>
            <div className="form__group">
              <input type="email" required name="user_email" />
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
                name="message"
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
