import React from "react"
import Heading from "../../common/Heading"
import "./Banner.css"
// import { img } from "./city-5.png"
// import FeaturedCard from "./FeaturedCard"

const Banner = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
        <div><img src={"./city-5.png"} alt='' /></div>
          <Heading title='We make it easy for sellers and buyers.' subtitle='pertyFind All Type of Pro.' />
          
          
          {/* <FeaturedCard /> */}
        </div>
      </section>
    </>
  )
}

export default Banner
