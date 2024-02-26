import React from 'react'
import './About.css'
import umar from "../../assets/umer-afzal.jpg"
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
                        Transformatics
                        </h1>
                        <p>
                        Transformatics Pvt Ltd was established in 2020 with a vision
                        to bridge the gap between academia and the industry.
                        <br /> <br />
                        We specialize in providing a range of services including
                        high-quality trainings and IT consultancy to individuals and
                        businesses looking to expand their knowledge and skills in the
                        technology industry. Our team of experienced instructors is
                        dedicated to delivering engaging and effective training
                        programs that cover a wide range of topics, from programming
                        languages to network security. In addition to training, our
                        consultancy services can help your business with IT strategy,
                        project management, system design and implementation, and
                        more. <br /> <br /> Our mission is to empower our clients with
                        the knowledge, skills, and expert guidance necessary to
                        succeed in a constantly evolving industry.
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
                        <h3 className="mt-4 font-bold text-xl mb-2">Malik Shoaib</h3>
                        <h4 className=" text-lg mb-2">Chief Executive Officer</h4>
                        <h5 className="text-blue mb-6">Senior IT & Telecom Executive | x-Jazz | x-Teradata </h5>
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
                            <img src={umar} alt="" />
                            </div>
                        </a>
                        <h3 className="mt-4 font-bold text-xl mb-2">Umer Afzal</h3>
                        <h4 className=" text-lg mb-2">Chief Operating Officer</h4>
                        <h5 className="text-blue mb-6">Senior IT & Telecom Executive | x-Jazz | x-Teradata </h5>
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
                </div>
            </div>
        </section>
    </div>
  )
}
