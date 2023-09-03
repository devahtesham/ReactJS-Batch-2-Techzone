import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Card = (props) => {
    const {ProfileImg,title,content,btnContent,id} = props
  return (
    <div className='col-lg-3'>
        <Link to={`/user/${id}`}>
            <div className="card">
                <img src={ProfileImg} className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="#" className="btn btn-primary">{btnContent}</a>
                </div>
            </div>
        </Link>

    </div>

  )
}

export default Card