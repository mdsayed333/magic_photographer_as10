import React from "react";
import { Carousel } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import image1 from "../../../img/photo1.jpeg";
import image3 from "../../../img/photo3.jpg";
import image2 from "../../../img/photo2.jpeg";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="pb-5">
        <Carousel fade className="mt-3 -5">
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "450px" }}
              className="d-block w-100 img-fluid rounded"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className="banner-title">My Experience</h2>
              <p>
                I am a Professional photographer and multidisciplinary artist
                who has worked for the past 6 years in advertising, fashion,
                product, reportage & fine art projects.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "450px" }}
              className="d-block w-100 img-fluid rounded"
              src={image2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className="banner-title">Quality Shot</h2>
              <p>
                I will shoot different types of visual content, for your brand
                or company whether you are a small business or a renowned brand.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              // height={400}
              style={{ width: "100%", height: "450px" }}
              className="d-block img-fluid rounded"
              src={image3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h2 className="banner-title">
                I can provide Photographic coverage for any Product launch Event
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
