import React from "react"
import { list } from "../../data/Data"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
              <label style={{color: "green"}}className='btn2'>{price}</label> 
                {/* <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div> */}
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <img style={{ width: 30, height: 30 }} src={"../images/room_wash/room.png"}/>
                <label htmlFor=''>     4    </label>
                <img style={{ width: 30, height: 30 }} src={"../images/room_wash/wash.png"}/>
                <label htmlFor=''>     4     </label>
                <img style={{ width: 30, height: 30 }} src={"../images/room_wash/sq.png"}/>
                   <label htmlFor=''>   1200 sqft</label>
                </div>
                {/* <span>{type}</span> */}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
