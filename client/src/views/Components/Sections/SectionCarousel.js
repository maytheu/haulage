import React, {useState, useEffect} from "react";
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

import {useSelector, useDispatch} from 'react-redux'

import { getSlider } from "store/carousel";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
const useStyles = makeStyles(styles);


export default function SectionCarousel() {
  const dispatch = useDispatch()

const images = useSelector(state => state.carousel)
  const [isImage, setIsImage] = useState(images)

  useEffect(()=>{
    dispatch(getSlider())
  }, [])
  console.log(isImage)
  console.log(images)
  
  const classes = useStyles();
  const settings = {
     dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem 
          // xs={12} sm={12} md={8} className={classes.marginAuto}
          >
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4> */}
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    {/* <h4>
                      <LocationOn className="slick-icons" />
                      Somewhere Beyond, United States
                    </h4> */}
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>
                      <LocationOn className="slick-icons" />
                      Yellowstone National Park, United States
                    </h4> */}
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
