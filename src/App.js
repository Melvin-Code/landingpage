import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Form } from "react-final-form";
import PhoneFormat from "./components/formating/phoneFormat";
import FormInput from "./components/FormInput";
import { lead } from "./webhook";

function App() {
  const onSubmit = async (vals) => {
    const newVals = { name: vals.firstName + ' ' + vals.lastName, ...vals }
    await lead(newVals)
  }
  return (
    <Paper
      sx={{
        background: "#f4f8fa",
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          boxShadow:
            "0 4px 8px 0 rgba(53,105,128,.3), 0 6px 20px 0 rgba(165,200,213,.41)",
          marginTop: "100px",
          width: "100%",
          maxWidth: 800,
          height: "400",
        }}
      >
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
                    padding: "2.5rem",
                    // justifyContent: "center ",
                    // width: "40rem",
                  }}
                >
                  <Grid item xs={12}><Typography sx={{ margin: '10px 0 20px 0', fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", fontWeight: '700', textAlign: 'center', color: '#272729', }} variant='h4'><span>Earn</span> passive income now</Typography></Grid>
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
                        backgroundColor: '#f89f4e', borderRadius: '3px', border: '1px solid #f89f4e', textTransform: 'none', padding: '12px 24px', lineHeight: '12px', fontSize: '12px', fontWeight: '700', fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif", '&:hover': {
                          backgroundColor: '#f89f4e'
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
        />
      </Box >
    </Paper >
  );
}

export default App;
