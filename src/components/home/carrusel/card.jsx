import React from 'react'

export const Card = ({ image, title }) => {
  return (
    <div className="card rounded-0" >
      <img src={image} className="card-img-top rounded-0" alt="..." style={{height: '200px', objectFit:'cover', objectPosition:'center'}}/>
      <div className="card-body" style={{height:'150px', display:'flex', alignItems:'end'}}>
        <h5 className="card-text">{title}</h5>
      </div>
    </div>
  )
}
