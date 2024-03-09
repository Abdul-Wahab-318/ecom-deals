import React from 'react'

export default function Contact() {
  return (
    <div className='page contact-page section-spacing'>
        <div className="container">
            <div className="section-heading  mb-5 pb-5 text-start">
                <h6>Need Help ?</h6>
                <h1>Get In Touch With Us </h1>
            </div>
            <section className="contact-section section-spacing pt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="contact-body-wrapper py-[56px] px-[56px] bg-yellow-light">
                        <p className="tracking-[2px] text-text-contrast text-[18px] mb-8">CONTACT US</p>
                        <h4 className="text-2xl text-black mb-8">Visit us for a free Demo</h4>
                        <p className="text-text-light mb-8 text-[16px] md:text-[18px]">Feel free to visit during normal business hours.</p>
                        <p className="text-text-light mb-4 text-[16px] md:text-[18px]">ECOM Deals, 6th Road, D Block Block D Satellite Town, <br /> Rawalpindi, Pakistan</p>
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
            </section>
            <section className="contact-section">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13268.136210548233!2d72.7348538!3d33.7597859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa75980ea23e5%3A0xd66057d42190f117!2sECOM%20Deals%20Wah%20Cantt!5e0!3m2!1sen!2s!4v1709974195651!5m2!1sen!2s" width="100%" height="100%" className='min-h-[600px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="contact-body-wrapper py-[56px] px-[56px] bg-yellow-light">
                        <p className="tracking-[2px] text-text-contrast text-[18px] mb-8">CONTACT US</p>
                        <h4 className="text-2xl text-black mb-8">Visit us for a free Demo</h4>
                        <p className="text-text-light mb-8 text-[16px] md:text-[18px]">Feel free to visit during normal business hours.</p>
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
                </div>
            </section>
        </div>
    </div>
  )
}
