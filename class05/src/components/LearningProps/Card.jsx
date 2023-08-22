import React from 'react'

const Card = (props) => {
    const {ProfileImg,title,content,btnContent} = props
  return (
    <div className='col-lg-3'>
        <div className="card">
            <img src={ProfileImg} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="btn btn-primary">{btnContent}</a>
            </div>
        </div>

    </div>

  )
}

export default Card