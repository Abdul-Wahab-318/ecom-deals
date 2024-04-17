import React , {useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import chevronLeft from '../../assets/chevron-left.png'
import chevronRight from '../../assets/chevron-right.png'
import axios from 'axios';
import loader from '../../assets/loader.png'
import './Stories.css'
import URL from "../../api"

export default function Stories() {

    const [videos , setVideos] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const fetchData = async () => {
        try{
            setIsLoading(true)
            let { data } = await axios.get(URL+"?sheet=Sheet2")
            setVideos(data.data)
            console.log(data)
        }
        catch(err)
        {
            console.error(err)
        }
        finally
        {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchData()
    },[])

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
    <div className='page stories-page section-spacing'>
        <section className="testimonials ">
            <div className="container">
                <div className="section-heading text-center">
                    <h6>Our Customers</h6>
                    <h1>Success Stories</h1>
                </div>
                    {
                        isLoading ? 
                        <div className="loader">
                            <img src={loader} width={'100px'} alt="" />
                        </div>
                        :
                        <Carousel className='mt-10' 
                        responsive={responsive} 
                        infinite={true} 
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        customRightArrow={<CustomRightArrow/>} 
                        customLeftArrow={<CustomLeftArrow/>} >
                            {
                                videos.map( ( videoLink , el ) => {
                                    return (
                                        <div className='testimonial-video-wrapper h-[800px]'>
                                            <iframe src={videoLink[0]}  width={'400'} height={'800'} style={{"border":"none" ,"overflow":"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    }

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