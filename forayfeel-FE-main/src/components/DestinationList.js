import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";
function DestinationList() {
    return (
        <div className='destination-list-main'>
            <Row className='destination-list-inner'>
                <div className='col-md-6 destination-title'>
                    <span>OUR DESTINATION LISTS</span>
                    <p>Checkout Beautiful Places in the <br /><span>'INDIA'</span></p>
                </div >
                <div className='col-md-3'>
                    <Card style={{ width: '300px' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/11835216/pexels-photo-11835216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Gujarat</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '300px' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/4481330/pexels-photo-4481330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Maharashtra</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Row className='destination-list-inner'>
                <div className='col-md-3'>
                    <Card style={{ width: '300px' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/14572857/pexels-photo-14572857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Kashmir</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '300px' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/12064459/pexels-photo-12064459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Himachal Pradesh</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '300px' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/8377242/pexels-photo-8377242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Kerela</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ width: '300px' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/11750442/pexels-photo-11750442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <Card.Body>
                            <Card.Title>Rajasthan</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            <Row className='view-more-section'>
                <div className='view-more-section-inner'>
                    <Button>View More <FaArrowRight /></Button>
                </div>
            </Row>

        </div>
    );
}

export default DestinationList;