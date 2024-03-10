import React from "react"
import "./Package.css"
import { useParams } from "react-router-dom"
import packages from "../../variables/packages"
import { Link } from "react-router-dom"

export default function Package() {

    const { id } = useParams()
    console.log(id)

    let selectedPackage = packages.find( el => el.name === id  )

  return (
    <section className="selectedPackage-detail section-spacing">
      <div className="container">
        <div className="selectedPackage-detail-header d-block d-lg-none mt-5">
          <h1 className="text-purple font-bold text-4xl">{ selectedPackage.name[0].toLocaleUpperCase() + selectedPackage.name.slice(1) + " Package"}</h1>
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
            <div className="selectedPackage-detail-right-inner px-[100px] lg:px-0">
              <div className="selectedPackage-video-wrapper ">
                {
                  <img src={require('../../assets/silver-package.webp')} className="rounded" width="100%" alt="" />
                }
              </div>
              <Link
                to={"/price-plan/" + selectedPackage.slug}
                className="generic-btn-1 price-btn mt-4"
              >
                Fee: {selectedPackage.fee.toLocaleString()}
              </Link>
              <Link
                to={"/price-plan/" + selectedPackage.slug}
                className="generic-btn-1 mt-3"
              >
                Reserve Your Seat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
