import React from 'react'
import hero from '../../assets/hero-2.svg'
import './Home.css'
import { Link } from 'react-router-dom'
import silverStar from '../../assets/silver-star.png'
import goldStar from '../../assets/gold-star.png'
import platinumCrown from '../../assets/platinum-crown.png'
import clock from '../../assets/clock.png'
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import LazyLoad from 'react-lazyload';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1440 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1399, min: 992 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 991, min: 0 },
          items: 1
        }
    }


  return (
    <div className='home-page page'>

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

        <section className="services section-spacing pt-5" id='packages'>
            <div className=" services-inner container">
                <div className="section-heading text-center">
                    <h6>Package Categories</h6>
                    <h1>What We Offer</h1>
                </div>
                <div className="services-grid  mt-10">
                    <div className="service-card "
                    data-aos="fade-in"
                    data-aos-duration={800}
                    >
                    <div className="service-card-inner">
                        <img src={silverStar} className='mx-auto' alt="training icon" />
                        <h4 className="fw-bold mt-3 text-black mt-4">Silver Package</h4>
                        <ul className='package-list'>
                            <li><span>2 Weeks Program</span></li>
                            <li><span> 2 hours a day on-site bootcamp</span></li>
                            <li><span> Shopify Local & International Store Creation</span></li>
                            <li><span> Ad Creation & Placement (Tiktok & Meta)</span></li>
                            <li><span> Product Hunting</span></li>
                            <li><span> Product Sourcing Strategies </span></li>
                            <li><span> White Label vs Private Label</span></li>
                            <li><span> Operations & Logistics </span></li>
                            <li><span> International Dropshipping </span></li>
                            <li><span> Guaranteed Sale Generation</span></li>
                        </ul>
                        <Link
                        className="generic-btn-1 mt-4 mx-auto w-50"
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
                        <img src={goldStar} className='mx-auto'  alt="consultancy icon" />
                        <h4 className="fw-bold mt-3 text-black mt-4">Gold Package</h4>
                        <ul className='package-list'>
                            <li><span>1 Month Program</span></li>
                            <li><span>30 Days access to ECOM Facilities</span></li>
                            <li><span>1x1 Mentorship (No Classroom Session)</span></li>
                            <li><span>Shopify Local & International Store Creation</span></li>
                            <li><span>Ad Creation & Placement (Tiktok & Meta)</span></li>
                            <li><span>Product Hunting</span></li>
                            <li><span>Product Sourcing Strategies</span></li>
                            <li><span>White Label vs Private Label</span></li>
                            <li><span>Operations & Logistics</span></li>
                            <li><span>International Dropshipping</span></li>
                            <li><span>Guaranteed Sale Generation</span></li>
                        </ul>

                        <Link
                        className="generic-btn-1 mt-4 mx-auto w-50"
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
                            <img src={platinumCrown} className='mx-auto' style={{width:'100px !important'}} alt="career icon" />
                            <h4 className="fw-bold mt-3 text-black mt-4">Platinum Package</h4>
                            <ul className='package-list'>
                                <li><span>1 Month Program</span></li>
                                <li><span>30 Days access to ECOM Facilities</span></li>
                                <li><span>1x1 Exclusive Mentorship</span></li>
                                <li><span>Shopify Local & International Store Creation</span></li>
                                <li><span>Ad Creation & Placement (Tiktok & Meta)</span></li>
                                <li><span>Private Label Focused</span></li>
                                <li><span>Influencer Access & Strategies</span></li>
                                <li><span>Detailed Meta strategies</span></li>
                                <li><span>Operations & Logistics</span></li>
                                <li><span>International Dropshipping</span></li>
                            </ul>
                            <Link
                            className="generic-btn-1 mt-4 mx-auto w-50"
                            to="/package/platinum"
                            >
                            Explore
                            </Link>
                        </div>
                    </div>
                    <div className='d-none d-lg-none'></div>
                    <div className="service-card" 
                        data-aos="fade-in"
                        data-aos-duration={800}
                        >
                            <div className="service-card-inner">
                                <img src={clock} className='mx-auto' alt="career icon" />
                                <h4 className="fw-bold mt-3 text-black mt-4">Live Bootcamp</h4>
                                <ul className='package-list'>
                                    <li><span>3 Weeks Program</span></li>
                                    <li><span>2 Hours Session</span></li>
                                    <li><span>3 Days a week</span></li>
                                    <li><span>Shopify Local & International Store Creation</span></li>
                                    <li><span>Ad Creation & Placement (Tiktok & Meta)</span></li>
                                    <li><span>Product Hunting</span></li>
                                    <li><span>Product Sourcing Strategies</span></li>
                                    <li><span>White Label vs Private Label</span></li>
                                    <li><span>Operations & Logistics</span></li>
                                    <li><span>Exclusive ECOM Fulfilment Support</span></li>
                                    <li><span>Free Inventory Support</span></li>
                                    <li><span>International Dropshipping</span></li>
                                    <li><span>Guaranteed Sale Generation</span></li>
                                </ul>
                                <Link
                                className="generic-btn-1 mt-4 mx-auto w-50"
                                to="/package/bootcamp"
                                >
                                Explore
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonials section-spacing">
            <div className="container">
                <div className="section-heading text-center">
                    <h6>Our Customers</h6>
                    <h1>Testimonials</h1>
                </div>
                <LazyLoad height={'500'}>
                    <Carousel className='mt-10' 
                    responsive={responsive} 
                    infinite={true} 
                    autoPlay={true}
                    autoPlaySpeed={2500}
                    customRightArrow={<CustomRightArrow/>} 
                    customLeftArrow={<CustomLeftArrow/>} >
                        <div className='testimonial-video-wrapper       h-[800px]'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F787550973241625%2F&show_text=false&width=267&t=0"  width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                        <div className='testimonial-video-wrapper       h-[800px]'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3537947003090325%2F&show_text=false&width=267&t=0"  width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                        <div className='testimonial-video-wrapper       h-[800px]'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3537947003090325%2F&show_text=false&width=267&t=0"width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                        <div className='testimonial-video-wrapper       h-[800px]'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3537947003090325%2F&show_text=false&width=267&t=0"width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                        <div className='testimonial-video-wrapper   h-[800px]'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3537947003090325%2F&show_text=false&width=267&t=0"width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>
                        <div className='testimonial-video-wrapper   h-[800px]'>
                            <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3537947003090325%2F&show_text=false&width=267&t=0"width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        </div>

                    </Carousel>
                </LazyLoad>
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


const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className='slider-arrow-right slider-arrow' onClick={() => onClick()} > <img src={chevronRight} width={'40px'} alt="" /> </button>;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className='slider-arrow-left slider-arrow' onClick={() => onClick()} > <img src={chevronLeft} width={'40px'} alt="" /> </button>;
  };