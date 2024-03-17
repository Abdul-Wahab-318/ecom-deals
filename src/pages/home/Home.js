import React, { useState, useEffect } from "react"
import hero from "../../assets/hero-2.svg"
import "./Home.css"
import { Link } from "react-router-dom"
import silverStar from "../../assets/silver-star.png"
import goldStar from "../../assets/gold-star.png"
import platinumCrown from "../../assets/platinum-crown.png"
import clock from "../../assets/clock.png"
import chevronLeft from "../../assets/chevron-left.png"
import chevronRight from "../../assets/chevron-right.png"
// import LazyLoad from 'react-lazyload';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import axios from "axios"
import URL from "../../api"
import StatCards from "../../components/StatCards/StatCards"

export default function Home() {
  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      let { data } = await axios.get(URL)
      setVideos(data.data)
      console.log(data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const testimonialsResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1399, min: 992 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 991, min: 0 },
      items: 1,
    },
  }
  
  const packagesResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1440, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  }

  const partnersResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  }


  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="home-page page">
      <section className="hero-section bg-gray">
        <div className="container">
          <div className="hero-content">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="block lg:hidden mx-auto"
                style={{ "max-width": "300px" }}
              >
                <img src={hero} width="100%" className="mx-auto block" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="hero-badge bg-yellow-light">
                  <p className="text-yellow">Ecom Deals</p>
                </div>
                <h1 className="hero-title text-start">
                  Kickstart your E-commerce business
                </h1>

                <div className="hero-cta-wrapper flex items-center gap-4">
                  <a
                    href="#packages"
                    className="generic-btn bg-yellow text-white "
                  >
                    View Packages
                  </a>
                  <Link to={"/stories"} className="play-btn-wrapper">
                    <div className="play-btn bg-yellow">
                      <img src="./images/play.png" width="30px" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block ps-5">
                <img src={hero} width="100%" className="max-w-[600px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="choose-us section-spacing">
            <div className="container">
                <div className="row grid grid-cols-1 lg:grid-cols-2 gap-4" >
                    <div className="col-xl-6">
                        <div className="section-heading ">
                            <h6>Why Choose Us</h6>
                            <h1>Learn From The Best In The Industry</h1>
                        </div>
                        <div className="choose-us-content">
                            <p className="mt-5 text-gray " style={{ textAlign: "justify" }}>
                            Transformatics Pvt Ltd offers high-quality training programs and
                            IT consultancy services to bridge the gap between academia and the
                            industry. Our unique approach trains individuals on relevant tools
                            and technologies, providing in-depth understanding of the
                            industry, and making them job-ready from day one. <br /> <br /> We
                            also offer corporate training programs leading to certification
                            paths to help companies improve the skills and knowledge of their
                            staff, leading to increased productivity and a competitive edge in
                            the market.
                            </p>
                        </div>
                    </div>
                    <div className="items-center flex flex-col justify-center" data-aos="fade-in" data-aos-duration={1000}>
                        <div className="choose-us-highlights flex items-center gap-5 xl:mt-8">
                            <div className="choose-us-rounded-wrapper ">
                            <img src="./images/choose-1.png" width="38px" alt="" />
                            </div>
                            <h5 className="text-purple fw-bold">
                            Cutting-edge IT Training and Consultancy Services
                            </h5>
                        </div>
                        <div className="choose-us-highlights flex items-center gap-3 mt-4" data-aos="fade-in"
                        >
                            <div className="choose-us-rounded-wrapper ">
                            <img src="./images/choose-2.png" width="39px" alt="" />
                            </div>
                            <h5 className="text-purple fw-bold">
                            Elevate Your Team's Skills and Productivity
                            </h5>
                        </div>
                    <div className="choose-us-highlights flex items-center gap-3 mt-4" data-aos="fade-in">
                        <div className="choose-us-rounded-wrapper ">
                        <img src="./images/choose-3.png" width="39px" alt="" />
                        </div>
                        <h5 className="text-purple fw-bold">
                        Partnerships with major Corporations
                        </h5>
                    </div>
                    </div>
                </div>
                <StatCards/>
            </div>
        </section>


      <section className="services section-spacing" id="packages">
        <div className=" services-inner container">
          <div className="section-heading text-center">
            <h6>Package Categories</h6>
            <h1>What We Offer</h1>
          </div>
          <div className="services-grd  mt-10 ">
            <Carousel
              className="mt-10 "
              containerClass="pb-[120px]"
              responsive={packagesResponsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={2500}
              customRightArrow={<CustomRightArrow />}
              customLeftArrow={<CustomLeftArrow />}
              itemClass="px-[10px] lg:px-[25px]"
              
            >
              <div
                className="service-card "
                data-aos="fade-in"
                data-aos-duration={800}
              >
                <div className="service-card-inner">
                  <div>
                    <img
                      src={silverStar}
                      className="mx-auto"
                      alt="training icon"
                    />
                    <h4 className="fw-bold mt-3 text-black mt-4">
                      Silver Package
                    </h4>
                  </div>
                  <ul className="package-list">
                    <li>
                      <span>2 Weeks Program</span>
                    </li>
                    <li>
                      <span> 2 hours a day on-site bootcamp</span>
                    </li>
                  </ul>
                  <Link
                    className="generic-btn-1 mt-2 mx-auto w-50"
                    to="/package/silver"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <div className="service-card "
                data-aos="fade-in"
                data-aos-duration={800}
              >
                <div className="service-card-inner">
                    <div>
                        <img
                            src={goldStar}
                            className="mx-auto"
                            alt="consultancy icon"
                        />
                        <h4 className="fw-bold mt-3 text-black mt-4">Gold Package</h4>
                    </div>
                  <ul className="package-list">
                    <li>
                      <span>1 Month Program</span>
                    </li>
                    <li>
                      <span>30 Days access to ECOM Facilities</span>
                    </li>
                    <li>
                      <span>1x1 Mentorship (No Classroom Session)</span>
                    </li>

                  </ul>
                  <Link
                    className="generic-btn-1 mt-2 mx-auto w-50"
                    to="/package/gold"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <div className="service-card "
                data-aos="fade-in"
                data-aos-duration={800}
              >
                <div className="service-card-inner">
                    <div>
                        
                        <img
                            src={platinumCrown}
                            className="mx-auto"
                            style={{ width: "100px !important" }}
                            alt="career icon"
                        />
                        <h4 className="fw-bold mt-3 text-black mt-4">
                            Platinum Package
                        </h4>
                    </div>
                  <ul className="package-list">
                    <li>
                      <span>1 Month Program</span>
                    </li>
                    <li>
                      <span>30 Days access to ECOM Facilities</span>
                    </li>
                    <li>
                      <span>1x1 Exclusive Mentorship</span>
                    </li>
                    <li>
                      <span>Private Label Focused</span>
                    </li>
                    <li>
                      <span>Influencer Access & Strategies</span>
                    </li>
                    <li>
                      <span>Detailed Meta strategies</span>
                    </li>
                  </ul>
                  <Link
                    className="generic-btn-1 mt-2 mx-auto w-50"
                    to="/package/platinum"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <div className="service-card"
                data-aos="fade-in"
                data-aos-duration={800}
              >
                <div className="service-card-inner">
                    <div>
                        <img src={clock} className="mx-auto" alt="career icon" />
                        <h4 className="fw-bold mt-3 text-black mt-4">
                            Live Bootcamp
                        </h4>
                    </div>
                  <ul className="package-list">
                    <li>
                      <span>3 Weeks Program</span>
                    </li>
                    <li>
                      <span>3 Days a week - 2 Hours Session</span>
                    </li>
                    <li>
                      <span>Exclusive ECOM Fulfilment Support</span>
                    </li>
                    <li>
                      <span>Free Inventory Support</span>
                    </li>
                  </ul>
                  <Link
                    className="generic-btn-1 mt-2 mx-auto w-50"
                    to="/package/bootcamp"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </Carousel>
            <div className="service-card  mx-auto mt-16 ">
              <div className="service-card-inner">
                <h3 className="text-2xl md:text-4xl text-center font-bold">All our packages include</h3>
                <ul className="md:px-20 xl:ps-[170px] mx-auto lg:mx-[0] text-start mt-8 common-points-list grid  lg:grid-cols-2 xl:grid-cols-3" style={{'listStyle' : 'number'}}>
                <li>  Shopify Local & International Store Creation </li>
                <li> Ad Creation & Placement (Tiktok & Meta)</li>
                <li>Product Hunting</li>
                <li> Product Sourcing Strategies</li>
                <li> White Label vs Private Label</li>
                <li> Operations & Logistics</li>
                <li> International Dropshipping</li>
                <li> Guaranteed Sale Generation</li>
              
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partners section-spacing">
        <div className="container">
         <div className="section-heading text-center">
            <h6>Our Partners</h6>
            <h1>Partnerships</h1>
          </div>
            <Carousel
            className="mt-10"
            responsive={partnersResponsive}
            infinite={true}
            autoPlay={false}
            containerClass="pt-[60px] pb-[140px] partner-slide"
            itemClass="flex-center"
            autoPlaySpeed={2500}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            <div >
              <img src="./images/partner-1.jpeg" className="mx-auto" width={'270px'} alt="" />
            </div>
            <div>
              <img src="./images/partner-2.jpeg" className="mx-auto" width={'200px'} alt="" />
            </div>
            <div>
              <img src="./images/partner-3.jpeg" className="mx-auto" width={'200px'} alt="" />
            </div>
            <div>
              <img src="./images/partner-4.jpeg" className="mx-auto" width={'200px'} alt="" />
            </div>
            <div>
              <img src="./images/partner-5.png" className="mx-auto" width={'200px'} alt="" />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="testimonials section-spacing">
        <div className="container">
          <div className="section-heading text-center">
            <h6>Our Customers</h6>
            <h1>Testimonials</h1>
          </div>
          {/* <LazyLoad height={'500'}> */}
          <Carousel
            className="mt-10"
            responsive={testimonialsResponsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
          >
            {videos.map((videoLink) => {
              return (
                <div className="testimonial-video-wrapper  h-[800px]">
                  <iframe
                    src={videoLink}
                    width={"400"}
                    height={"800"}
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen="true"
                  ></iframe>
                </div>
              )
            })}
          </Carousel>
          {/* </LazyLoad> */}
        </div>
      </section>

      <section className="contact-section section-spacing">
        <div className="container">
          <div className="section-heading text-start mb-10">
            <h6>Need Help ?</h6>
            <h1>Get In Touch With Us</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="contact-body-wrapper py-[56px] px-[56px] bg-yellow-light">
              <p className="tracking-[2px] text-text-contrast text-[18px] mb-8">
                CONTACT US
              </p>
              <h4 className="text-2xl text-black mb-8">
                Visit us for a free Demo
              </h4>
              <p className="text-text-light mb-8 text-[16px] md:text-[18px]">
                Feel free to visit during normal business hours.
              </p>
              <p className="text-text-light mb-4 text-[16px] md:text-[18px]">
                ECOM Deals, 6th Road, D Block Block D Satellite Town, <br />{" "}
                Rawalpindi, Pakistan
              </p>
              <p className="text-text-light mb-8 text-[16px] md:text-[18px]">
                ECOM Deals, Wah Cantt, Main Grand Trunk Road, <br /> Rawalpindi,
                Pakistan
              </p>
              <div className="flex items-center gap-4">
                <img src="./images/email.png" width={"20px"} alt="" />
                <span>hello@e-comdeals.com</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <img src="./images/phone.png" width={"20px"} alt="" />
                <span>0328 8888 090</span>
              </div>

              <a
                href="https://wa.me/923288888090"
                className="bg-yellow mt-10 font-bold inline-block tracking-[2px] py-5 px-10"
              >
                DROP US A LINE
              </a>
            </div>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5788757739474!2d73.07174227619181!3d33.642159639271696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df955b91c57031%3A0xc069d4d9ab6db527!2sECOM%20Deals!5e0!3m2!1sen!2s!4v1708882816288!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="min-h-[600px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className="slider-arrow-right slider-arrow"
      onClick={() => onClick()}
    >
      {" "}
      <img src={chevronRight} width={"40px"} alt="" />{" "}
    </button>
  )
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className="slider-arrow-left slider-arrow"
      onClick={() => onClick()}
    >
      {" "}
      <img src={chevronLeft} width={"40px"} alt="" />{" "}
    </button>
  )
}
