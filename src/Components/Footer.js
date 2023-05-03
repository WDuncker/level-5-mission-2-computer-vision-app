import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={["footer"]}>
      <div className={["footer__upper"]}>
        <div className={["footer__upper--cars"]}>
          <h4>Cars</h4>
          <p>How to Buy</p>
          <p>Sell Your Car</p>
          <p>Finance & Insurance</p>
          <p>Auctions & Events</p>
          <p>Buyer & Seller Fees</p>
          <p>Vehicle Sale Price History Tool</p>
          <p>Shipping Costs</p>
        </div>
        <div className={["footer__upper--finance"]}>
          <h4>Fincance & Insurance</h4>
          <p>Finance Homepage</p>
          <p>Car & Personal Finance</p>
          <p>Loan calculator</p>
          <p>Car Insurance</p>
          <p>Mechanical Breakdown Insurance</p>
          <p>General Insurances</p>
          <p>Trucks Finance</p>
          <p>Financial Information</p>
        </div>
        <div className={["footer__upper--Search"]}>
          <h4>Search For</h4>
          <p>Cars</p>
          <p>Trucks & Machinery</p>
          <p>Damaged & End of Life Cars</p>
          <p>Boats & Marine</p>
          <p>Motorcycles & Scooters</p>
          <p>General Goods</p>
          <p>Buses, Caravans & Motorhomes</p>
          <p>Turners Auction Schedule</p>
        </div>
        <div className={["footer__upper--about"]}>
          <h4>About Us</h4>
          <p>Overview</p>
          <p>Turners Careers</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Turners Live</p>
          <p>The Good Oil Blog</p>
          <p>Email Alerts</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className={["footer__lower"]}>
        <div className={["footer__lower--left"]}>
          <FontAwesomeIcon icon={faCopyright} size="sm" />
          <p>2022 Turners</p>
        </div>
        <div className={["footer__lower--right"]}>
          <div>
            <FontAwesomeIcon icon={faHouse} />
            <span>Branch Details</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Newsletter</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email Alerts</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}
