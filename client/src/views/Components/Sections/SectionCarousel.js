import React, { useState, useEffect } from "react";
// react component for creating beautiful carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import { useDispatch } from "react-redux";

import { getSliderText } from "store/carousel";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const dispatch = useDispatch();

  const [isImage, setIsImage] = useState([]);

  useEffect(() => {
    dispatch(getSliderText()).then((res) => {
      if (res.payload !== undefined) {
        setIsImage(res.payload);
      }
    });
  }, []);

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const viewSlide = () => {
    return isImage.map((image) => {
      return (
        <div key={image.img}>
          <img
            src={`/api/carousel/${image.img}`}
            alt={image.img}
            className="slick-image"
          />
          <div className="slick-caption">
            <h4>{image.desc}</h4>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <Card carousel>
              <Slider {...settings}>{viewSlide()}</Slider>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
