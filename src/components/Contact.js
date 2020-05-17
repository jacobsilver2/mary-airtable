import React from "react"
import { Formik, Field, Form, useField } from "formik"
import Airtable from "airtable"
import { navigate } from "gatsby"
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { StyledFormWrapper, Wrapper } from "../styles/FormStyles"
import * as yup from "yup"

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appNleNEvC86qLO29"
)

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "90%",
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

const handleSubmit = data => {
  base("submissions").create(data),
    function(err, record) {
      if (err) {
        console.log(err)
        return
      }
    }
  navigate("/thanks")
}

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
            handleSubmit(data)
            setSubmitting(false)
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form
              className={classes.root}
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
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
