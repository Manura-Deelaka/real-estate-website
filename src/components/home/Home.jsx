import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import FindHome from "./find/Find";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <FindHome />
      <Recent />
      
      
      <Team />
      
    </>
  )
}

export default Home
