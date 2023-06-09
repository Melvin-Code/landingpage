import { InputLabel, TextField } from "@mui/material";
import React from "react";
import { Field } from "react-final-form";
import Flex from "./CustomFlex";
// import { DollarSign, PercentSign } from "../../../assets/icons";
// import Flex from "../../structure/CustomFlex";

const FormInput = ({
  fieldLess = false,
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
      backgroundColor: '#f5f8fa',
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
        color: "text.lightText",
        opacity: 1,
        fontSize: props.font,
        padding: props.padd,
      },
    },

    subLabel: {
      fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
      color: "text.lightText",
      fontSize: "1.2rem",
      marginBottom: ".5rem",
    },
  };

  const getHelperText = (meta) => {
    if (!meta.touched || !meta.error) {
      return null;
    }
    return meta.error;
  };

  return fieldLess ? (
    <Flex
      style={{
        flexDirection: "column",
        minWidth: minWidth,
        width: width,
      }}
    >
      {label ? (
        <InputLabel
          sx={{
            '& > *': {
              fontSize: "13px !important",
            },
            fontWeight: "500",
            color: "#272729",
            ...labelStyle,
          }}
          htmlFor={label ? label : ""}
        >
          {label}
        </InputLabel>
      ) : null}
      <TextField
        defaultValue={value}
        type={props.type}
        sx={classes.sizing}
        InputProps={{
          inputComponent: props.cformat,
          classes: {
            input: classes.placeStyle,
          },
        }}
        id={label}
        variant="outlined"
        size="small"
        {...props}
      />
    </Flex>
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
                fontSize: "13px",
                marginBottom: '4px',
                fontWeight: "500",
                color: "#fff",
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
            helperText={getHelperText(meta)}
            sx={classes.sizing}
            onBlur={(e) => {
              console.log(e.target.value);
            }}
            InputProps={{
              inputComponent: props.cformat,
              classes: {
                input: classes.placeStyle,
              },
              // startAdornment:
              //   adorment === "dollar" ? (
              //     <div style={{ width: "8px !important", height: "14px" }}>
              //       <DollarSign />
              //     </div>
              //   ) : null,
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
            size="small"
            {...input}
            {...props}
          />
        </Flex>
      )}
    />
  );
};

export default FormInput;
