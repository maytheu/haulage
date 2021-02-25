import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
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
import { getSaveInvoice, getInvoices, getInvoice } from "store/invoice";

const useStyles = makeStyles(styles);

function InvoiceSection(props) {
  const classes = useStyles();
  const [checkedA, setCheckedA] = React.useState(false);
  const [invoice, setInvoice] = useState(null);
  const invoices = useSelector((state) => state.invoice);
  const [isEdit, setIsEdit] = useState({});
  const [delivery, setDelivery] = useState(false);

  const { values, handleSubmit, handleChange, errors } = useForm(
    submit,
    formValidate
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.edit) {
      dispatch(getInvoice(props.edit)).then((res) => {
        setIsEdit({
          company: res.payload.update.company,
          amount: res.payload.update.amount,
          amountInWords: res.payload.update.amountInWords,
          location: res.payload.update.location,
          delivery: res.payload.update.delivery,
          consignment: res.payload.update.consignment,
        });
      });
    }
    dispatch(getInvoices());
  }, [props.edit]);

  function editChange(event) {
    setIsEdit({ ...isEdit, [event.target.id]: event.target.value });
  }

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

  function editSubmit(event) {
    event.preventDefault();
    if (formValidate(isEdit)) {
      dispatch(getInvoice(props.edit, isEdit)).then((res) => {
        if (res.payload === undefined) {
          setInvoice("Please Check your data, can't update info");
        } else {
          props.history.push("/admin-add-invoice");
        }
      });
    } else {
      setInvoice("Please Check your data, can't update info");
    }
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            {props.edit ? "Edit Invoice" : "Add Invoice"}
          </h2>
          <form
            onSubmit={
              props.edit
                ? (event) => editSubmit(event)
                : (event) => handleSubmit(event)
            }
          >
            <GridContainer>
              <GridItem>
                <CustomInput
                  labelText="Company"
                  id="company"
                  value={isEdit.company}
                  change={props.edit ? editChange : handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Consignment"
                  id="consignment"
                  value={isEdit.consignment}
                  change={props.edit ? editChange : handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Location"
                  id="location"
                  value={isEdit.location}
                  change={props.edit ? editChange : handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              {props.edit ? (
                <GridItem>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={delivery}
                        onChange={(event) => setDelivery(event.target.checked)}
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
                    label={`Delivery Status is ${isEdit.delivery}`}
                  />
                </GridItem>
              ) : (
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
              )}
              <GridItem>
                <CustomInput
                  labelText="Amount"
                  value={isEdit.amount}
                  id="amount"
                  change={props.edit ? editChange : handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem>
                <CustomInput
                  labelText="Amount in Words"
                  id="amountInWords"
                  value={isEdit.amountInWords}
                  change={props.edit ? editChange : handleChange}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  color="primary"
                  type="submit"
                  onSubmit={
                    props.edit
                      ? (event) => editSubmit(event)
                      : (event) => handleSubmit(event)
                  }
                >
                  {props.edit ? "Update Invoice" : "Add New Invoice"}
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
                      to={`/admin-edit-invoice/${number.number}`}
                    >{`${number.company}-${number.consignment}-${number.location}`}</Link>
                  </h4>
                </div>
              ))}
        </GridItem>{" "}
      </GridContainer>
    </div>
  );
}

export default withRouter(InvoiceSection);
