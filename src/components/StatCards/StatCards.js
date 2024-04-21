import React , { useEffect } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';
import 'aos/dist/aos.css';
import student from "../../assets/student.png"
import job from "../../assets/job.png"
import revenue from "../../assets/revenue.png"
import partner from "../../assets/partnership.png"

export default function StatCards() {

  const [viewPortEntered, setViewPortEntered] = React.useState(false);
  
  useEffect( () => {
    AOS.init({ once : true });
    } , [] )

  return (
    <div className="choose-us-feature-list mt-10 xl:mt-20">
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
        <img src={student} width="65px" alt="" />
        <div>
            <h1 className="mt-4 text-3xl lg:text-4xl font-bold text-purple">
            {" "}
            
            <span className="counter">
            <CountUp start={viewPortEntered ? null : 0} end={300}>
                {({ countUpRef }) => {
                    return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                        if (isVisible) {
                            setViewPortEntered(true);
                        }
                        }}
                        delayedCall
                    >
                        <span  ref={countUpRef} />
                    </VisibilitySensor>
                    );
                }}
            </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray">Students</p>
        </div>
        </div>
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
        <img
            src={revenue}
            width="65px"
            alt=""
        />
        <div>
            <h1 className="mt-4 text-3xl lg:text-4xl font-bold text-purple">
            <span className="counter" >
            <CountUp start={viewPortEntered ? null : 0} end={400}>
                {({ countUpRef }) => {
                    return (
                    <VisibilitySensor
                        active={!viewPortEntered}
                        onChange={isVisible => {
                        if (isVisible) {
                            setViewPortEntered(true);
                        }
                        }}
                        delayedCall
                    >
                        <>
                            <span>PKR {" "}</span>
                            <span  ref={countUpRef} />
                        </>
                    </VisibilitySensor>
                    );
                }}
            </CountUp>
            </span>
                M+
            </h1>
            <p className="text-gray">Revenue</p>
        </div>
        </div>
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
        <img src={job} width="68px" alt="" />
        <div>
            <h1 className="mt-4 text-3xl lg:text-4xl  font-bold text-purple">
            {" "}
            <span className="counter" data-target={1000}>
                <CountUp start={viewPortEntered ? null : 0} end={1000}>
                    {({ countUpRef }) => {
                        return (
                        <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                            }}
                            delayedCall
                        >
                            <span  ref={countUpRef} />
                        </VisibilitySensor>
                        );
                    }}
                </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray">Jobs Created</p>
        </div>
        </div>
        <div className="choose-us-feature-item" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
        <img src={partner} width="65px" alt="" />
        <div>
            <h1 className="mt-4 text-3xl lg:text-4xl font-bold text-purple">
            {" "}
            <span className="counter" data-target={10}>
                <CountUp start={viewPortEntered ? null : 0} end={10}>
                    {({ countUpRef }) => {
                        return (
                        <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={isVisible => {
                            if (isVisible) {
                                setViewPortEntered(true);
                            }
                            }}
                            delayedCall
                        >
                            <span  ref={countUpRef} />
                        </VisibilitySensor>
                        );
                    }}
                </CountUp>
            </span>{" "}
            +
            </h1>
            <p className="text-gray">Brand Collaborations</p>
        </div>
        </div>
    </div>
  )
}
