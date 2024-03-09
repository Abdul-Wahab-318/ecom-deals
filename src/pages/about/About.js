import React from 'react'
import './About.css'
import umar from "../../assets/umer-afzal.jpg"
import shoaib from "../../assets/malik-shoaib.jpeg"
import linkedin from "../../assets/linkedin.png"

export default function About() {
  return (
    <div className='about-page page '>
        <section className="vision section-spacing pt-0">
            <div className="vision-inner ">
                <div className="vision-statement-parent container">
                    <div className="section-heading mt-5 pt-4">
                        <h6>OUR VISION</h6>
                        <h1 className='pb-10'>
                        The Story of
                         Ecom Deals
                        </h1>
                        <p>
                        At Ecom Deals, we specialize in e-commerce solutions, offering tailored strategies to cash up your investments, and providing comprehensive e-commerce training. Our mission is to empower our clients with the knowledge and tools they need to succeed in both local and international e-commerce markets.
                        <br /> <br />
                        Our mission is to “Create Future Enterpurners”
                        <br /> <br />
                        With over 250+ Successful entrepreneurs we have enabled 1000+ jobs in the market. Our students have earned at an average PKR 2 Lakhs to 4 Lakhs in their 1st month. 


                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="founder section-spacing pt-0" style={{'paddingTop' : '0'}}>
            <div className="container">
                <div className="section-heading mb-[50px]">
                    <h6>OUR FOUNDERS</h6>
                    <h1>About Our Founders</h1>
                </div>
                <div className="founder-card-wrapper grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="founder-card  ">
                        <a
                            className="founder-img-wrapper"
                            href="https://www.linkedin.com/in/umerafzal/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="founder-img-inner">
                            <img src={umar} alt="" />
                            </div>
                        </a>
                        <h3 className="mt-4 font-bold text-xl mb-2">Umer Afzal</h3>
                        <h4 className=" text-lg mb-2">Chief Operating Officer & Co-Founder</h4>
                        <h5 className="text-blue mb-6" style={{maxWidth : '70ch'}}>With over 25+ Years of experince in IT & Telecom Industry, Umer has indepth experience in all aspects of business, from IT/Technology to Marketing to Sales to Finance. Hardcore technologist at heart, Umer focuses on the detailed aspects of a digital E-Commerce Business and how to grow in this everchanging landscape. </h5>
                        <a
                            className="social-wrapper"
                            href="https://www.linkedin.com/in/umerafzal/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            src={linkedin}
                            width="20px"
                            alt=""
                            />
                        </a>
                    </div>
                    <div className="founder-card  ">
                        <a
                            className="founder-img-wrapper"
                            href="https://www.linkedin.com/in/umerafzal/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="founder-img-inner">
                            <img src={shoaib} alt="" />
                            </div>
                        </a>
                        <h3 className="mt-4 font-bold text-xl mb-2">Malik Shoaib </h3>
                        <h4 className=" text-lg mb-2">CEO & Co-Founder</h4>
                        <h5 className="text-blue mb-6" style={{maxWidth : '70ch'}}>15+ Years of experience in multiple industries. Enterpurner by nature, founded multiple companies including ECOM Deals, Cashup Deals & Retailigence. Shoaib has proven track record of building business and helping people start/develop businesses from scratch. </h5>
                        <a
                            className="social-wrapper"
                            href="https://www.linkedin.com/in/malik-shoaib-12575152/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                            src={linkedin}
                            width="20px"
                            alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
