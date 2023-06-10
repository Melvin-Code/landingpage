import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "react-final-form";
import PhoneFormat from "./components/formating/phoneFormat";
import FormInput from "./components/FormInput";
import { lead } from "./webhook";
import { useState } from "react";

function App() {
  const [submited, setSubmited] = useState(false)
  const onSubmit = async (vals) => {
    const newVals = { name: vals.firstName + ' ' + vals.lastName, ...vals }
    await lead(newVals)
    setSubmited(true)
    console.log(window.innerWidth)
  }
  return (
    <Paper
      sx={{
        background: "#f4f8fa",
        width: "100vw",
        height: submited ? null : "100vh",
        minHeight: submited ? '100vh' : null,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: submited ? 'center' : null
      }}
    >
      <Box
        sx={{
          background: "#173750",
          borderRadius: submited ? '0.6rem' : null,
          boxShadow:
            "0 4px 8px 0 rgba(53,105,128,.3), 0 6px 20px 0 rgba(165,200,213,.41)",
          marginTop: submited ? null : window.innerWidth > 600 ? "100px" : null,
          width: submited ? 'fit-content' : "100%",
          maxWidth: 750,
          minHeight: submited ? null : "650px",
          height: submited ? 'fit-content' : null,
          margin: submited ? '0 1.5rem' : null

        }}
      >
        {submited ? <Box sx={{ maxWidth: '366px', padding: '2rem' }}>
          <Typography sx={{ fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontWeight: '700', textAlign: 'center', color: '#fff', }} variant='h6'>Thank you for your interest in our company. One of our representative will contact you within 24 to 48 hours</Typography>
        </Box> : <Form
          onSubmit={onSubmit}
          render={({ form, values, handleSubmit }) => {
            return (
              <form onSubmit={(vals) => handleSubmit(vals, form)}>
                <Grid
                  container
                  direction={"row"}
                  rowSpacing={5}
                  sx={{
                    padding: window.innerWidth > 600 ? '3rem' : '1rem',
                    // justifyContent: "center ",
                    // width: "40rem",
                  }}
                >
                  <Grid item xs={12} sx={{
                    display: 'flex',
                    paddingTop: "0 !important",
                    justifyContent: 'center',
                    '& > *': {
                      width: '300px'
                    }
                  }}>
                    <img src="/logo.png" alt='cardpoint miami logo' />
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormInput
                        name="firstName"
                        label={<Box>First Name <Box sx={{ color: 'red !important', display: 'inline' }}>*</Box> </Box>}
                        //   placeholder="het"
                        type="text"
                        width="100%"
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormInput
                        name="lastName"
                        label={<Box>Last Name <Box sx={{ color: 'red !important', display: 'inline' }}>*</Box> </Box>}
                        type="text"
                        width="100%"
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}></Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormInput
                        name="email"
                        label={<Box>Email<Box sx={{ color: 'red !important', display: 'inline' }}>*</Box> </Box>}
                        //   placeholder="het"
                        type="email"
                        width="100%"
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormInput
                        name="phone"
                        label={<Box>Phone Number <Box sx={{ color: 'red !important', display: 'inline' }}>*</Box> </Box>}
                        type="tel"
                        cformat={PhoneFormat}
                        minLength="10"
                        validate={(value) => {
                          return value &&
                            value !== "" &&
                            value.split("").length === 10
                            ? undefined
                            : "Phone number must be 10 digits";
                        }}
                        width="100%"
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}></Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormInput
                        name="coments"
                        label='Coments'
                        //   placeholder="het"
                        multiline
                        rows='3'
                        type="text"
                        width="100%"
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={8}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#e86824', borderRadius: '3px', border: '1px solid #e86824', textTransform: 'none', padding: '12px 24px', lineHeight: '12px', fontSize: '12px', fontWeight: '700', fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", '&:hover': {
                          backgroundColor: '#e86824'
                        }
                      }}
                      type="submit"

                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form >
            );
          }}
        />}
      </Box >
    </Paper >
  );
}

export default App;
