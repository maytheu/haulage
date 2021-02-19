import React, { useState, useEffect } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg4.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import { useSelector, useDispatch } from "react-redux";

import { getSlider, getSliderText } from "store/carousel";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const dispatch = useDispatch();
  let rootUrl = "http://localhost:3000/uploads/";

  const images = useSelector((state) => state.carousel);
  const [isImage, setIsImage] = useState(images);
  console.log(isImage);

  useEffect(() => {
    /// dispatch(getSlider());
    dispatch(getSliderText());
    setIsImage(images);
  }, []);
  console.log(images.carousel);
  console.log(isImage);

  // function viewSlide() {
  //   return images.carousel.length == 0 ? "" : "ap(image =>";
  // }

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  function viewSlide () {
    return (
      <div>
        {images.carousel.length === 0
          ? ""
          : images.carousel.map((image, i) => (
              <div key={i}>
                <img
                  src={`${rootUrl}${image.img}`}
                  alt={image.img}
                  className="slick-image"
                />
                <div className="slick-caption">
                  <h4>{image.desc}</h4>
                </div>
              </div>
            ))}
      </div>
    );
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <Card carousel>
                <Carousel {...settings}><div>{viewSlide()}</div></Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
