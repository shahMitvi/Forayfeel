import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
    return (
        <Carousel className="image-carousel-main">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/4429333/pexels-photo-4429333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Enjoy moments in Goa</h3>
                    <p>Goa: where sun, sand, and sea come together.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 "
                    src="https://images.pexels.com/photos/1157386/pexels-photo-1157386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Explore Kashmir</h3>
                    <p>Mountains, lakes, and heaven.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Let's go to Assam</h3>
                    <p>
                        Assam: where the wildlife is as diverse as the people.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImageCarousel;