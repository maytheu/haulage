import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import { useDispatch, useSelector } from "react-redux";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import useForm from "formControls/useForm";
import formValidate from "formControls/formValidate";
import { getSaveInvoice, getInvoices } from "store/invoice";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function InvoiceSection() {
  const classes = useStyles();
  const [checkedA, setCheckedA] = React.useState(false);
  const [invoice, setInvoice] = useState(null);
  //const [invoices, setInvoices] = useState(null);
  const invoices = useSelector((state) => state.invoice);

  const { values, handleSubmit, handleChange, errors } = useForm(
    submit,
    formValidate
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvoices());
  }, []);

  function submit(event) {
    if (errors) {
      const data = {
        amount: values.amount,
        amountInWords: values.amountInWords,
        delivery: checkedA,
        consignment: values.consignment,
        company: values.company,
        location: values.location,
      };
      dispatch(getSaveInvoice(data)).then((res) => {
        if (res.payload === undefined) {
          setInvoice("Please Check your data");
        } else {
          setInvoice(`Invoice Number: ${res.payload.invoice.number}`);
        }
      });
    } else {
      setInvoice("Please Check your data");
    }
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Add Invoice</h2>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem>
                <CustomInput
                  labelText="Company"
                  id="company"
                  change={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Consignment"
                  id="consignment"
                  change={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Location"
                  id="location"
                  change={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedA}
                      onChange={(event) => setCheckedA(event.target.checked)}
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                  }}
                  id="delivery"
                  label={`Delivery Status is ${checkedA}`}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Amount"
                  id="amount"
                  change={handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Amount in Words"
                  id="amountInWords"
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
                  Add New Invoice
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
        <h5 className={classes.description} color="danger">
          {invoice}
        </h5>
      </GridContainer>
      <GridContainer>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>View All Invoices</h2>
          {invoices.invoice.invoices === undefined
            ? null
            : invoices.invoice.invoices.map((number, i) => (
                <div key={i}>
                  <h4 className={classes.description}>
                    <Link
                      to={`/${number.number}`}
                    >{`${number.company}-${number.consignment}-${number.location}`}</Link>
                  </h4>
                </div>
              ))}
        </GridItem>{" "}
      </GridContainer>
    </div>
  );
}
