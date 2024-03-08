import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "react-final-form";
import PhoneFormat from "./components/formating/phoneFormat";
import FormInput from "./components/FormInput";
import { lead } from "./webhook";
import { useState } from "react";

function App() {
  const [submited, setSubmited] = useState(false);
  const onSubmit = async (vals) => {
    const newVals = { name: vals.firstName + " " + vals.lastName, ...vals };
    await lead(newVals);
    setSubmited(true);
    console.log(window.innerWidth);
  };
  return (
    <Paper
      sx={{
        background: "#fffff",

        width: "100%",
        height: submited ? null : "100%",
        // minHeight: submited ? '100vh' : null,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "5.5rem",
          background: "#13152b",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "100%" }}
            src="/logo.png"
            alt="cardpoint miami logo"
          />
          <Typography sx={{ color: "#ffffff", fontWeight: 700 }}>
            Slice Dual Pricing Plan <span style={{ color: "#60cef4" }}>0%</span>{" "}
            <span style={{ textDecoration: "line-through" }}>
              2.7 per swipe
            </span>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#fffff",
          borderRadius: submited ? "0.6rem" : null,
          marginTop: submited ? null : window.innerWidth > 600 ? "100px" : '20px',
          width: submited ? "fit-content" : "100%",
          maxWidth: 950,
          height: "100%",
          margin: submited ? "0 1.5rem" : null,
        }}
      >
        {submited ? (
          <Box sx={{ maxWidth: "366px", padding: "2rem" }}>
            <Typography
              sx={{
                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                fontWeight: "700",
                textAlign: "center",
                color: "#33475b",
              }}
              variant="h6"
            >
              Thank you for your interest in our company. One of our
              representative will contact you within 24 to 48 hours
            </Typography>
          </Box>
        ) : (
          <Form
            onSubmit={onSubmit}
            render={({ form, values, handleSubmit }) => {
              return (
                <form onSubmit={(vals) => handleSubmit(vals, form)}>
                  <Grid
                    container
                    direction={"row"}
                    rowSpacing={5}
                    sx={{
                      padding: "3rem"
                      // justifyContent: "center ",
                      // width: "40rem",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        paddingTop: "0 !important",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: 'center'
                      }}
                    >
                      <Typography sx={{
                        marginBottom: '1rem'
                      }} variant='h3' >Let’s get started</Typography>
                      <Typography sx={{
                        marginBottom: '1rem',
                        textAlign: 'center'

                      }} >Please tell us about your business and see how much you could save with Slice</Typography>
                    </Grid>
                    <Grid container spacing={2} direction={window.innerWidth > 600 ? 'row' : 'column'}>
                      <Grid item xs={6}>
                        <FormInput
                          name="bussinessName"
                          label={
                            <Box>
                              Business legal name{" "}
                              <Box
                                sx={{
                                  color: "red !important",
                                  display: "inline",
                                }}
                              >
                                *
                              </Box>{" "}
                            </Box>
                          }
                          placeholder="Your Bussiness Name"
                          type="text"
                          width="100%"
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormInput
                          name="businessStarted"
                          label={
                            <Box>
                              Year business started{" "}
                              <Box
                                sx={{
                                  color: "red !important",
                                  display: "inline",
                                }}
                              >
                                *
                              </Box>{" "}
                            </Box>
                          }
                          type="number"
                          placeholder="YYYY"
                          width="100%"
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid container spacing={2} direction={window.innerWidth > 600 ? 'row' : 'column'}>
                      <Grid item xs={6}>
                        <FormInput
                          name="businessEmail"
                          label={
                            <Box>
                              Business email
                              <Box
                                sx={{
                                  color: "red !important",
                                  display: "inline",
                                }}
                              >
                                *
                              </Box>{" "}
                            </Box>
                          }
                          placeholder="example@email.com"
                          type="email"
                          width="100%"
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormInput
                          name="phone"
                          label={
                            <Box>
                              Business phone number{" "}
                              <Box
                                sx={{
                                  color: "red !important",
                                  display: "inline",
                                }}
                              >
                                *
                              </Box>{" "}
                            </Box>
                          }
                          type="tel"
                          cformat={PhoneFormat}
                          placeholder="(000) 000 0000"
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
                    <Grid container spacing={2} direction={window.innerWidth > 600 ? 'row' : 'column'}>
                      <Grid item xs={6}>
                        <FormInput
                          name="anualVolume"
                          label="Annual Visa/MC/Discover/Amex volume"
                          placeholder="Please Select Estimated volume"
                          helpertext='Estimated annual credit card sales volume'
                          isSelect={true}
                          width="100%"
                          value=''
                          selectOptions={[
                            {
                              value: "$0 - $9 999 (New business)",
                              label: "$0 - $9 999 (New business)",
                            },
                            {
                              value: "$10 000 - $99 999",
                              label: "$10 000 - $99 999",
                            },
                            {
                              value: "$100 000 - $249 999",
                              label: "$100 000 - $249 999",
                            },
                            {
                              value: "$250 000 - $499 999",
                              label: "$250 000 - $499 999",
                            },
                            {
                              value: "$500 000 - $999 999",
                              label: "$500 000 - $999 999",
                            },
                            {
                              value: "$1 000 000+",
                              label: "$1 000 000+",
                            },
                          ]}
                          validate={(value) => {
                            return value &&
                              value !== "" ? undefined
                              : "This field is required";
                          }}
                          required
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormInput
                          name="averageSale"
                          adorment='dollar'
                          label={
                            <Box>
                              Average sale ${" "}
                              <Box
                                sx={{
                                  color: "red !important",
                                  display: "inline",
                                }}
                              >
                                *
                              </Box>{" "}
                            </Box>
                          }
                          type="number"
                          minLength="1"
                          validate={(value) => {
                            return value &&
                              value !== ""
                              ? undefined
                              : "This Field is required";
                          }}
                          helpertext='Average purchase size by a customer in your business'
                          width="100%"
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: '#f90',
                          backgroundImage: 'linear-gradient(to right,#ec8402 0,#f6b94a 60%)',
                          borderRadius: "3px",
                          boxShadow: '0 4px 17px rgba(146,99,28,.58)',
                          transition: "color .15s ease-in-out,background-position .25s ease-in-out,box-shadow .15s ease-in-out",
                          textTransform: "none",
                          maxWidth: '425px',
                          width: '100%',
                          padding: "25px 25px",
                          lineHeight: "12px",
                          fontSize: "18px",
                          fontWeight: "700",
                          fontFamily:
                            "Helvetica Neue,Helvetica,Arial,sans-serif",
                          "&:hover": {
                            backgroundColor: "#e86824",
                          },
                        }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          />
        )}
      </Box>
    </Paper >
  );
}

export default App;
