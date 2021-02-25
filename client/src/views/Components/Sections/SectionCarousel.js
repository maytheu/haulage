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

import { useDispatch } from "react-redux";

import { getSlider, getSliderText } from "store/carousel";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const dispatch = useDispatch();
  let rootUrl = "http://localhost:3000/uploads/";

  //const images = useSelector((state) => state.carousel);
  const [isImage, setIsImage] = useState("");
  console.log(isImage);

  useEffect(() => {
    /// dispatch(getSlider());
    dispatch(getSliderText()).then((res) => {
      if (res.payload !== undefined) {
        setIsImage(res.payload);
      }
    });
  }, []);

  function imgSrc(img) {
    dispatch(getSlider(img)).then((img) => {
      console.log(img);
    });
  }

  console.log(isImage);

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  function viewSlide() {
    return (
      <div>
        {isImage.length === 0
          ? ""
          : isImage.map((image, i) => (
              <div key={i}>
                {/* {imgSrc(image.img)} */}
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
  }

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <Card carousel>
              <Carousel {...settings}>
                <div>{viewSlide()}</div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
