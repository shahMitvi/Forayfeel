import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PhotosCard() {
    return (
        <div >
            <Row className='Gallery-main'>

                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/3370598/pexels-photo-3370598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/4144015/pexels-photo-4144015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/10432964/pexels-photo-10432964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/11417335/pexels-photo-11417335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/270739/pexels-photo-270739.jpeg" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/4430322/pexels-photo-4430322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
                <Col className='col-md-4 Gallery-inner'>
                    <Card className='card-img'>
                        <Card.Img className='img-main' variant='top' src="https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default PhotosCard;