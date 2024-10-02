import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Pagination } from "swiper";
import { FaMapMarkerAlt } from "react-icons/fa";

const SwiperCard = () => {
    return (
        <>
            <Row className="featured-card-main">
                <Row className="featured-title">
                    <p>
                        Some <span> Featured </span> Tours You May Like
                    </p>
                </Row>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/14572857/pexels-photo-14572857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Snow Trekking in Manali</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Manali</p>
                                    <p className='price-details'>From <span> &#8377;7999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/12064459/pexels-photo-12064459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title><span>'Dev Bhoomi'</span> Of India</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Himachal Pradesh</p>
                                    <p className='price-details'>From <span> &#8377;9999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/8377242/pexels-photo-8377242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title> A Brew-tiful Place</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Kerala</p>
                                    <p className='price-details'>From <span> &#8377;12999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/10783023/pexels-photo-10783023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Let's Go To 'Ishwar's dwar'</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Haridwar</p>
                                    <p className='price-details'>From <span> &#8377;8999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/13524697/pexels-photo-13524697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>The Land Of Love</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Sikkim</p>
                                    <p className='price-details'>From <span> &#8377;11999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/10487148/pexels-photo-10487148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Pink City of India</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Jodhpur</p>
                                    <p className='price-details'>From <span> &#8377;14999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='col-md-3'>
                            <Card style={{ width: '300px' }}>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Hydrabad</Card.Title>
                                    <p className='location-details'><FaMapMarkerAlt />Hydrabad</p>
                                    <p className='price-details'>From <span> &#8377;7999</span></p>
                                </Card.Body>
                            </Card>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Row>
        </>
    )
}

export default SwiperCard;