import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Input from "@material-ui/core/Input";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Parallax from "components/Parallax/Parallax";

import useForm from "formControls/useForm";
import formValidate from "formControls/formValidate";

import { useDispatch, useSelector } from "react-redux";
import { getPostSliderText } from "store/carousel";
import { getDelete } from "store/carousel";

const useStyles = makeStyles(styles);

function CarouselSection(props) {
  const classes = useStyles();

  const [upload, setUpload] = useState(false);
  const [imgName, setImgName] = useState(null);
  const [success, setSuccess] = useState(true);
  const [carousel, setCarousel] = useState(null);
  const dispatch = useDispatch();
  const images = useSelector((state) => state.carousel);

  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    formValidate
  );

  useEffect(() => {}, [images]);

  function submit(event) {
    if (errors) {
      dispatch(getPostSliderText(values)).then((res) => {
        if (res.payload === undefined) {
          setSuccess(false);
        } else {
          props.history.push("/");
        }
      });
    }
  }

  function handleUpload(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("file", carousel);
    axios.post("/api/admin/carousel", data).then((res) => {
      if (res.data === undefined) {
        setImgName("Invalid Image Type");
      } else {
        setImgName(res.data.img);
        setUpload(true);
      }
    });
  }

  function handleDelete(img) {
    dispatch(getDelete(img));
    props.history.push("/");
  }

  return (
    <div>
      <Parallax filter image={require("assets/img/contact1.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>Add new Carousel</h2>
              <h4 className={classes.description}>
                This page add image slider to the homepage.
              </h4>
              {!upload ? (
                <GridContainer>
                  <GridItem>
                    <Input
                      id="file"
                      type="file"
                      name="file"
                      onChange={(event) => setCarousel(event.target.files[0])}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Button color="primary" onClick={handleUpload}>
                      Upload Slider
                    </Button>
                  </GridItem>
                  <h4 className={classes.description}>
                    View Slides <em>Click to delete</em>
                  </h4>
                  {images.carousel === undefined
                    ? ""
                    : images.carousel.map((image) => (
                        <div
                          key={image.img}
                          onClick={() => handleDelete(image.img)}
                        >{`${image.img}-${image.headline}`}</div>
                      ))}
                </GridContainer>
              ) : (
                <form onSubmit={handleSubmit}>
                  <GridContainer>
                    <h4 className={classes.description}>
                      Image Name: {imgName}
                    </h4>
                    <GridItem>
                      <CustomInput
                        labelText="Image File"
                        id="img"
                        change={handleChange}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem>
                      <CustomInput
                        labelText="Headline"
                        id="headline"
                        change={handleChange}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem>
                      <CustomInput
                        labelText="Description "
                        id="desc"
                        change={handleChange}
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <Button
                        color="primary"
                        type="submit"
                        onSubmit={(event) => handleSubmit(event)}
                      >
                        Submit Slide Detail
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              )}
              {!success ? "Please Check your data" : ""}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
export default withRouter(CarouselSection);
