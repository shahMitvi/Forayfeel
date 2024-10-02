import Carousel from "react-bootstrap/Carousel";

function CaroselGallery() {
  return (
    <Carousel fade className="carousel-main">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-inner"
          src="https://images.pexels.com/photos/5733079/pexels-photo-5733079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Travel far enough, you meet yourself</h3>
          <p>A tribute to undying love</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-inner"
          src="https://images.pexels.com/photos/570026/pexels-photo-570026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Travel far enough, you meet yourself</h3>
          <p>
            Don't worry about getting older; you still have a long way to go
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-inner"
          src="https://images.pexels.com/photos/11305767/pexels-photo-11305767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Travel far enough, you meet yourself</h3>
          <p>One of the most revered temple towns of India</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-inner"
          src="https://images.pexels.com/photos/14940427/pexels-photo-14940427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Travel far enough, you meet yourself</h3>
          <p>Pink City is the pride of India</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-inner"
          src="https://images.pexels.com/photos/8844759/pexels-photo-8844759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Travel far enough, you meet yourself</h3>
          <p>Feel the sand under your feet</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CaroselGallery;
