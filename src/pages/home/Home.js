import React from 'react'
import hero from '../../assets/hero-2.svg'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div classNameName='home-page page'>

        <section className="hero-section bg-gray">
            <div className="container">
                <div className="hero-content">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="block lg:hidden mx-auto" style={{"max-width": "300px"}}>
                            <img src={hero} width="100%" className="mx-auto block" alt=""/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="hero-badge bg-yellow-light">
                                <p className='text-yellow'>Ecom Deals</p>
                            </div>
                            <h1 className="hero-title text-start">Kickstart your E-commerce business</h1>

                            <div className="hero-cta-wrapper flex items-center gap-4">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSePMN1WHd0IhwFs4PL8KaIlOS4rl_t90vE22XTe5i5_W78FwA/viewform" className="generic-btn bg-yellow text-white ">Book a Free Call</a>
                                <a href="" className="play-btn-wrapper">
                                    <div className="play-btn bg-yellow">
                                        <img src="./images/play.png" width="30px" alt=""/> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block ps-5">
                            <img src={hero} width="100%" className='max-w-[600px]' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="services section-spacing pt-5">
            <div className=" services-inner container">
                <div className="section-heading text-center">
                    <h6>Service Categories</h6>
                    <h1>What We Offer</h1>
                </div>
                <div className="services-grid  mt-5">
                    <div
                    className="service-card "
                    data-aos="fade-in"
                    data-aos-duration={800}
                    >
                    <div className="service-card-inner">
                        <img src="./images/trainings.avif" width="150px" alt="training icon" />
                        <h4 className="fw-bold mt-3 text-black mt-4">Gold Package</h4>
                        <p>
                        We offer best in class trainings both in Technical &amp; Non
                        Technical Domains for individuals as well as corporates
                        </p>
                        <Link
                        className="generic-btn-1 mt-4 mx-auto w-50"
                        to="/trainings"
                        >
                        Explore
                        </Link>
                    </div>
                    </div>
                    <div
                    className="service-card "
                    data-aos="fade-in"
                    data-aos-duration={800}
                    >
                    <div className="service-card-inner">
                        <img src="./images/consultancy.png" width="150px" alt="consultancy icon" />
                        <h4 className="fw-bold mt-3 text-black mt-4">Platinum Package</h4>
                        <p>
                        We offer a range of career support from Interview Prep to resume
                        building to support in finding the right job
                        </p>
                        <Link
                        className="generic-btn-1 mt-4 mx-auto w-50"
                        to="/counselling"
                        >
                        Explore
                        </Link>
                    </div>
                    </div>
                    <div
                    className="service-card "
                    data-aos="fade-in"
                    data-aos-duration={800}
                    >
                    <div className="service-card-inner">
                        <img src="./images/career.png" width="150px" alt="career icon" />
                        <h4 className="fw-bold mt-3 text-black mt-4">Platinum Package</h4>
                        <p>
                        {" "}
                        We offer services to help organizations leverage technology for
                        efficiency, productivity, and profitability.
                        </p>
                        <Link
                        className="generic-btn-1 mt-4 mx-auto w-50"
                        to="/consultancy"
                        >
                        Explore
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-section section-spacing">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="contact-body-wrapper py-[56px] px-[56px] bg-yellow-light">
                        <p className="tracking-[2px] text-text-contrast text-[18px] mb-8">CONTACT US</p>
                        <h4 className="text-2xl text-black mb-8">Visit us for a free Demo</h4>
                        <p className="text-text-light mb-8 text-[16px] md:text-[18px]">Feel free to visit during normal business hours.</p>
                        <p className="text-text-light mb-4 text-[16px] md:text-[18px]">ECOM Deals, 6th Road, D Block Block D Satellite Town, <br /> Rawalpindi, Pakistan</p>
                        <p className="text-text-light mb-8 text-[16px] md:text-[18px]">ECOM Deals, Wah Cantt, Main Grand Trunk Road, <br /> Rawalpindi, Pakistan</p>
                        <div className="flex items-center gap-4">
                            <img src="./images/email.png" width={'20px'} alt="" />
                            <span>hello@e-comdeals.com</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                            <img src="./images/phone.png" width={'20px'} alt="" />
                            <span>0328 8888 090</span>
                        </div>

                        <a href="https://wa.me/923288888090" className="bg-yellow mt-10 font-bold inline-block tracking-[2px] py-5 px-10">DROP US A LINE</a>

                    </div>
                    <div className="map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5788757739474!2d73.07174227619181!3d33.642159639271696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df955b91c57031%3A0xc069d4d9ab6db527!2sECOM%20Deals!5e0!3m2!1sen!2s!4v1708882816288!5m2!1sen!2s" width="100%" height="100%" className='min-h-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
