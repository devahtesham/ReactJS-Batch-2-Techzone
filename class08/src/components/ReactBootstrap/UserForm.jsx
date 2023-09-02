import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function UserForm(props) {
    const navigate = useNavigate()
    const { isSignup, heading,submitHandler } = props
    // console.log(isSignup,heading);
    return (
        <>
            <h1 className='text-center'>{heading}</h1>
            <Container className='mt-5'>
                <Row>
                    <Col lg={8}>
                        <Form onSubmit={submitHandler}>
                            {
                                isSignup && (
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" />
                                    </Form.Group>
                                )
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            {
                                isSignup ? <h6 className='text-danger' style={{cursor:"pointer"}} onClick={()=>{navigate("/login")}}>Already Logged In ?</h6>: null

                            }
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default UserForm;