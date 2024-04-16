import React from "react"
import "./Package.css"
import { useParams } from "react-router-dom"
import packages from "../../variables/packages"

export default function Package() {

    const { id } = useParams()
    let selectedPackage = packages.find( el => el.slug === id  )

    if ( selectedPackage.comingSoon )
      return (
      <div className="container section-spacing flex justify-content-center 
      items-center text-center min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-76px)]">
        <h1 className="w-full text-5xl font-bold">Coming Soon</h1>
      </div> 
      )

  return (
    <section className="selectedPackage-detail section-spacing">
      <div className="container">
        <div className="selectedPackage-detail-header d-block d-lg-none mt-5">
          <h1 className="text-purple font-bold text-4xl">{ selectedPackage.name }</h1>
        </div>
        <div className="selectedPackage-detail-content grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">
          <div className="selectedPackage-detail-left col-lg-8">
            <main className="selectedPackage-detail-tab-parent mt-5">
              <h3 className="text-2xl font-bold">Overview</h3>
              <section className="tab-content" id="pills-tabContent">
                <div
                  className=" selectedPackage-overview tab-pane fade "
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <p className="max-w-[90ch] mt-10">{selectedPackage.overview}</p>
                   
                   <ul style={{listStyle : 'inherit'}} className="mt-10 ms-10">
                    {
                        selectedPackage.outline.map( point => {
                            return <li> {point} </li>
                        })
                    }
                   </ul>


                </div>

              </section>
            </main>
          </div>
          <div className="selectedPackage-detail-right col-lg-4 px-xl-4 mt-10 lg:mt-0">
            <div className="selectedPackage-detail-right-inner  lg:px-0">
              <div className="selectedPackage-video-wrapper ">
                {
                  <img src={selectedPackage.imgSrc} className="rounded" width="100%" alt="" />
                }
              </div>
              <a
                href={selectedPackage.formLink}
                className="generic-btn-1 price-btn mt-4 bg-yellow-light"
              >
                Fee: PKR {selectedPackage.fee.toLocaleString()}
              </a>
              <a
                href={selectedPackage.formLink}
                className="generic-btn-1 mt-3 bg-black text-yellow"
              >
                Reserve Your Seat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
