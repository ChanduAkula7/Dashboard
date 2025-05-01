import React from 'react'
import './Card.css'
import { cardsData } from '../../Data/Data'
import EachCard from '../EachCard/EachCard'

const Card = () => {
  //hceking the card
  return (
    <>
    <div className='Cards'>
      {cardsData.map((item,id)=>{
        return(
          <div className='parent-container'>
          <EachCard
          title={item.title}
          color={item.color}
          barValue={item.barValue}
          value={item.value}
          png={item.png}
          series={item.series}
          />
        </div>
        )
      })}

    </div>
    </>
  )
}

export default Card
