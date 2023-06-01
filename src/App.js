import { Box, Button, Grid, Paper } from "@mui/material";
import { Form } from "react-final-form";
import FormInput from "./components/FormInput";

function App() {
  const onSubmit = () => {

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
                  rowSpacing={3}
                  sx={{
                    padding: "2.5rem",
                    // justifyContent: "center ",
                    // width: "40rem",
                  }}
                >
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
                        type="text"
                        width="100%"
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormInput
                        name="phone"
                        label={<Box>Phone Number <Box sx={{ color: 'red !important', display: 'inline' }}>*</Box> </Box>}
                        type="text"
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
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Button
                    variant="contained"
                    sx={{ width: "100%" }}
                    type="submit"
                  >
                    Submit
                  </Button>

                </Grid>
              </form>
            );
          }}
        />
      </Box>
    </Paper>
  );
}

export default App;
