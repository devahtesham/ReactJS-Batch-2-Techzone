import React from 'react'
import { useParams } from 'react-router-dom';
import UserImg from "../../assets/images/profile.jpg";
import { Container, Row, Col } from 'react-bootstrap';
import { CARD__DATA } from '../../data/data';

const UserDetail = () => {
    const { id } = useParams()
    let item = CARD__DATA.filter((item,index)=>{
        return item.id == id
    })
    // let user = item[0]
    // let [user] = item;

    return (
        <>
            <Container className='mt-5'>
                <Row className='gap-2 align-items-center'>
                    <Col lg={6}>
                        <div>
                            <img src={user.img} alt="" className='w-100'style={{height:'550px'}} />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="card-body">
                            <h5 className="card-title">{user.title}</h5>
                            <p className="card-text">{user.description}</p>
                            <a href="#" className="btn btn-primary">{user.btnText}</a>
                        </div>

                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default UserDetail