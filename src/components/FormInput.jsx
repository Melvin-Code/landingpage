import { InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { Field } from "react-final-form";
import Flex from "./CustomFlex";
// import { DollarSign, PercentSign } from "../../../assets/icons";
// import Flex from "../../structure/CustomFlex";

const FormInput = ({
  isSelect = false,
  width = "100%",
  minWidth = "2rem",
  parentWidth, // to target the parent of the input
  label,
  id,
  errMesgRemove = false,
  inputStyle,
  labelStyle,
  adorment,
  value,
  cEndAdorment = false,
  maxLength = 200,
  validate,
  helpertext,
  selectOptions,
  ...props
}) => {
  const [error, setError] = React.useState(false);

  const errorSetter = (err, touch) => {
    if (err && touch) {
      setError(true);
      return true;
    } else {
      setError(false);
      return false;
    }
  };
  const classes = {
    sizing: {
      backgroundColor: '#ffff',
      width: "100%",
      color: '#33475b',
      fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",

      // height: "5.5rem",
      // maxHeight: "5.5rem",
      borderRadius: "3px",
      "& > p": {
        display: `${errMesgRemove ? "none" : "block"}`,
        fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",

      },
      "& > * ": {
        height: props.height,
        ...inputStyle,
        fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif !important",

        borderColor: "#cbd6e2",
        // backgroundColor: '##f5f8fa'
      },
      "& > * > *": {
        // borderColor: theme.palette.#cbd6e2,
        borderWidth: `${error ? "1px !important" : "1px"}`,
        borderRadius: "3px",
        // backgroundColor: '##f5f8fa',
        fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
        color: '#33475b'

      },
    },
    placeStyle: {
      "&::placeholder": {
        color: "#4a5057",
        opacity: 1,
        fontWeight: 700,
        fontSize: '20px !important',
        padding: props.padd,
      },
    },

    subLabel: {
      fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
      color: "#4a5057",
      fontWeight: 700,
      fontSize: '20px !important',
      marginBottom: ".5rem",
    },
  };

  const getHelperText = (meta) => {
    if (!meta.touched || !meta.error) {
      return null;
    }
    return meta.error;
  };

  return isSelect ? (
    <Field
      validate={validate}
      format={props.format}
      component={React.ComponentType}
      name={props.name}
      render={({ input, meta }) => (
        <Flex
          id={id}
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: minWidth,
            width: width,
          }}
        >
          {label ? (
            <InputLabel
              sx={{
                fontSize: "16px",
                marginBottom: '4px',
                fontWeight: "700",
                color: "#333333",
                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                ...labelStyle,
              }}
              htmlFor={label ? label : ""}
            >
              {label}
            </InputLabel>
          ) : null}
          <TextField
            defaultValue={value}
            select
            error={errorSetter(meta.error, meta.touched)}
            helperText={getHelperText(meta) ? getHelperText(meta) : helpertext}
            sx={classes.sizing}
            onBlur={(e) => {
              console.log(e.target.value);
            }}
            id={label}
            onChange={props.onChange ? props.onChange : null}
            variant="outlined"
            size="normal"
            {...input}
            {...props}
            SelectProps={{
              native: true,
            }}
          >
            <option key='placeholder' value='' ><Typography sx={{
              color: "#4a5057 !important",
              opacity: 1,
              fontWeight: 700,
              fontSize: '20px !important',
              padding: props.padd,
            }} >{props.placeholder}</Typography></option>
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Flex>
      )}
    />
  ) : (
    <Field
      validate={validate}
      format={props.format}
      component={React.ComponentType}
      name={props.name}
      render={({ input, meta }) => (
        <Flex
          id={id}
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: minWidth,
            width: width,
          }}
        >
          {label ? (
            <InputLabel
              sx={{
                fontSize: "16px",
                marginBottom: '4px',
                fontWeight: "700",
                color: "#333333",
                fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
                ...labelStyle,
              }}
              htmlFor={label ? label : ""}
            >
              {label}
            </InputLabel>
          ) : null}
          <TextField
            defaultValue={value}
            type="field"
            error={errorSetter(meta.error, meta.touched)}
            helperText={getHelperText(meta) ? getHelperText(meta) : helpertext}
            sx={classes.sizing}
            onBlur={(e) => {
              console.log(e.target.value);
            }}
            InputProps={{
              inputComponent: props.cformat,
              classes: {
                input: classes.placeStyle,
              },
              startAdornment:
                adorment === "dollar" ? (
                  <InputAdornment position="start">$</InputAdornment>
                ) : null,
              // endAdornment:
              //   adorment === "percent" ? (
              //     <div style={{ width: "14px !important", height: "16px" }}>
              //       <PercentSign />
              //     </div>
              //   ) : cEndAdorment ? (
              //     cEndAdorment
              //   ) : null,
            }}
            id={label}
            onChange={props.onChange ? props.onChange : null}
            variant="outlined"
            size="normal"
            {...input}
            {...props}
          />
        </Flex>
      )}
    />
  );
};

export default FormInput;
