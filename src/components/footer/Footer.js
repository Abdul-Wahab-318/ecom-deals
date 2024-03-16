import React from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container ">
        <div className="footer-shape-1">
          <img src="/images/shape-21-01.png" width="160px" alt="" />
        </div>
        <div className="footer-shape-2">
          <img src="/images/shape-35.png" width="120px" alt="" />
        </div>
        <div className="row footer-grid grid grid-cols-1  md:grid-cols-3" style={{color:"black"}}>
          <div className=" footer-col  pt-4">
            <h5 className="mb-8 font-bold">Find Us</h5>
            <p className="mb-8 text-black text-semibold pe-5">
            At Ecom Deals, we specialize in e-commerce solutions, offering tailored strategies to cash up your investments, and providing comprehensive e-commerce training. Our mission is to empower our clients with the knowledge and tools they need to succeed in both local and international e-commerce markets.
            </p>
            <div className="footer-social-links flex items-center gap-3">
              <a
                href="https://www.facebook.com/ecomdealspk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/facebook.png" width="25px" alt="facebook" />
              </a>
              <a
                href="https://www.linkedin.com/company/ecomdeal/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin-black.png" width="25px" alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/ecomdealspk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/insta.png" width="25px" alt="youtube" />
              </a>
              <a
                href="https://www.tiktok.com/@ecomdealspk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/tiktok.png" width="25px" alt="instagram" />
              </a>
              <a
                href="https://twitter.com/ecomdealspk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/twitter.png" width="27px" alt="twitter" />
              </a>
            </div>
          </div>
          <div className="footer-col  pt-4">
            <h5 className="mb-4 font-bold">Our Packages</h5>
            <ul className="pt-2">
              <li className="mt-0">
                <Link to="/package/silver">
                  <img src="/images/double-arrow.png" width="17px" alt="->" />
                  <span>Silver Package</span>
                </Link>
              </li>
              <li>
                <Link to="/package/gold">
                  <img src="/images/double-arrow.png" width="17px" alt="->" />
                  <span>Gold Package</span>
                </Link>
              </li>
              <li>
                <Link to="/package/platinum">
                  <img src="/images/double-arrow.png" width="17px" alt="->" />
                  <span>Platinum Package</span>
                </Link>
              </li>
              <li>
                <Link to="/package/bootcamp">
                  <img src="/images/double-arrow.png" width="17px" alt="->" />
                  <span>Bootcamp</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col  pt-4">
            <h5 className="mb-4 font-bold">Contact Info</h5>
            <ul className="pt-2">
              <li className="mt-0">
                <a href="https://www.facebook.com/ecomdealspk/">
                  <img
                    src="/images/location.png"
                    width="17px"
                    alt="location pin"
                  />
                  <span>Islamabad, Pakistan</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@e-comdeals.comk">
                  <img src="/images/email.png" width="17px" alt="email" />
                  <span>hello@e-comdeals.com</span>
                </a>
              </li>
              <li>
                <a href="tel:923288888090">
                  <img src="/images/phone.png" width="17px" alt="phone" />
                  <span>+92 328 8888 090</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
