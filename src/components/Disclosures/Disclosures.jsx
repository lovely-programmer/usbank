import "./Disclosures.css";
import logoHousing from "../../assets/logo-equal-housing-lender.svg";

function Disclosures() {
  return (
    <div className="disclosure">
      <div className="container">
        <div className="disclosure__header">Disclosures</div>
        <div className="disclosure__content">
          <div className="disclosure__box">
            <p>
              Investment and insurance products and services including annuities
              are: <br /> Not a deposit ● Not FDIC insured ● May lose value ●
              Not bank guaranteed ● Not insured by any federal government
              agency.
            </p>
          </div>
          <div className="p-container">
            <p>
              Firtrust Bank, Firtrust Bancorp Investments and their
              representatives do not provide tax or legal advice. Each
              individual's tax and financial situation is unique. You should
              consult your tax and/or legal advisor for advice and information
              concerning your particular situation.
            </p>
          </div>
          <div className="p-bold">
            <p>
              <b>For Firtrust Bancorp Investments:</b>
            </p>
          </div>
          <div className="p-container">
            <p>
              Investment and insurance products and services including annuities
              are available through Firtrust Bancorp Investments, the marketing
              name for Firtrust Bancorp Investments, Inc., member and , an
              investment adviser and a brokerage subsidiary of Firtrust Bancorp
              and affiliate of Firtrust Bank.
            </p>
          </div>
          <div className="p-bold">
            <p>
              <b>For Firtrust Bank:</b>
            </p>
          </div>
          <div className="p-container">
            <p>
              Firtrust Bank is not responsible for and does not guarantee the
              products, services or performance of Firtrust Bancorp Investments,
              Inc.
            </p>
          </div>
          <div className="disclosure__box">
            <p>
              Mortgage, home equity and credit products are offered by Firtrust
              Bank National Association. Deposit products are offered by
              Firtrust Bank National Association. Member FDIC.
            </p>
          </div>
          <div className="p-container">
            <p>
              The creditor and issuer of Firtrust Bank credit cards is Firtrust
              Bank National Association, pursuant to separate licenses from Visa
              U.S.A. Inc., MasterCard International Inc. and American Express.
              American Express is a federally registered service mark of
              American Express.
            </p>
          </div>
          <div className="p-container p-last">
            <p>
              <img src={logoHousing} alt="" />
              Equal Housing Lender
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclosures;
