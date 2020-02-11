import React, { useState } from "react"
import { Formik, Field, Form, useField } from "formik"
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components"
import * as yup from "yup"

const StyledFormWrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 800px;
  font-size: 2rem;
  line-height: 2.8rem;
  margin: 0 auto;
  color: #999999;
`

const Wrapper = styled.div`
  display: block;
  text-align: center;
`

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: 500,
    },
  },
  button: {
    backgroundColor: "black",
    color: "white",
    margin: theme.spacing(1),
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    "&.disabled": {
      backgroundColor: "grey",
    },
  },
}))

const LargeTextArea = ({ placeholder, label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      multiline
      rows={8}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      inputProps={{ style: { fontSize: "1.3rem" } }}
    />
  )
}

const MyTextField = ({ placeholder, label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      {...field}
      variant="outlined"
      helperText={errorText}
      error={!!errorText}
      inputProps={{ style: { fontSize: "1.3rem" } }}
    />
  )
}
const validationSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(2)
    .max(30),
  message: yup
    .string()
    .required()
    .min(10)
    .max(200),
  email: yup
    .string()
    .email()
    .required(),
})

const Contact = () => {
  const classes = useStyles()
  return (
    <Wrapper>
      <StyledFormWrapper>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true)
            // make async call
            console.log(data)
            setSubmitting(false)
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form className={classes.root}>
              <div>
                <MyTextField
                  placeholder="Your Name"
                  name="name"
                  type="input"
                  label="Name*"
                />
              </div>
              <div>
                <MyTextField
                  label="Email Address*"
                  placeholder="Your Email Address..."
                  name="email"
                  type="input"
                />
              </div>
              <div>
                <LargeTextArea
                  placeholder="Your Message..."
                  label="Message*"
                  name="message"
                  type="input"
                />
              </div>
              <div>
                <Button
                  className={classes.button}
                  variant="contained"
                  size="large"
                  // style={{ backgroundColor: "black", color: "white" }}
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </StyledFormWrapper>
    </Wrapper>
  )
}

export default Contact
