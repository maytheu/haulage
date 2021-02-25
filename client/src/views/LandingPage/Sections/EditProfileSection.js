import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { useDispatch, useSelector } from "react-redux";
import formValidate from "formControls/formValidate";
import { getViewProfile, getEditProfile } from "store/auth";

const useStyles = makeStyles(styles);

function EditProfileSection(props) {
  const classes = useStyles();

  const [isValues, setIsValues] = useState({});
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const view = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getViewProfile());
    setIsValues({
      firstname: view.auth.admin.firstname,
      lastname: view.auth.admin.lastname,
      email: view.auth.admin.email,
      phone: view.auth.admin.phone,
    });
  }, []);

  function handleChange(event) {
    setIsValues({ ...isValues, [event.target.id]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //update data user
    if (formValidate(isValues)) {
      dispatch(getEditProfile(isValues)).then((res) => {
        if (res.payload !== undefined) {
          props.history.push("/admin/profile");
        } else {
          setSuccess(true);
          setMessage("Error updating form");
        }
      });
    }
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem>
                <CustomInput
                  labelText="First Name"
                  id="firstname"
                  change={handleChange}
                  value={isValues.firstname}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Last Name"
                  id="lastname"
                  change={handleChange}
                  value={isValues.lastname}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Phone Number"
                  id="phone"
                  change={handleChange}
                  value={isValues.phone}
                  change={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Email"
                  type="email"
                  id="email"
                  value={isValues.email}
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
                  Update Profile
                </Button>
              </GridItem>
            </GridContainer>
          </form>
          {success ? message : ""}
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withRouter(EditProfileSection);
