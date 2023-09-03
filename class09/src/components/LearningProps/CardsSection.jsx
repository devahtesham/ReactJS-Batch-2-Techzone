import React from 'react'
import Card from './Card'
import { CARD__DATA } from '../../data/data'

const CardsSection = () => {
  return (
    <>
        <div className="row justify-content-center gap-3 mt-5">
            {
                CARD__DATA.map((card,index)=>{
                    return <Card key={index} ProfileImg={card.img} title={card.title} content={card.description} btnContent={card.btnText} id={card.id} />
                })
            }
            
        </div>
    </>
  )
}

export default CardsSection