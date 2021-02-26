import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { useDispatch } from "react-redux";
import useForm from "formControls/useForm";
import formValidate from "formControls/formValidate";
import { getPostInvoice, getPrintInvoice } from "store/invoice";

const useStyles = makeStyles(styles);

export default function TrackInvoiceSection() {
  const classes = useStyles();

  const { values, handleChange, handleSubmit, errors } = useForm(
    submit,
    formValidate
  );

  const dispatch = useDispatch();

  const [num, setNum] = useState(null);
  const [success, setSuccess] = useState(null);

  function submit(event) {
    if (errors) {
      setNum(values.number);
      dispatch(getPostInvoice(values)).then((res) => {
        if (res.payload === undefined) {
          setSuccess(false);
        } else {
          setSuccess(true);
        }
      });
    }
  }

  function download(event) {
    event.preventDefault();
    dispatch(getPrintInvoice(num));
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Track Your Invoice</h2>
          <h4 className={classes.description}>
            Track your witn your invoice number. Can't find your invoice number,
            please contact us.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem>
                <CustomInput
                  labelText="Invoice Number"
                  id="number"
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
                  Track Invoice
                </Button>
              </GridItem>
            </GridContainer>
          </form>
          {success === null ? (
            ""
          ) : success ? (
            <Button color="success" onClick={download}>
              Download
            </Button>
          ) : (
            <h5 className={classes.description} color="danger">
              Invalid Invoice Number
            </h5>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
