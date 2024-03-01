import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";
import { Box, FormHelperText, InputLabel, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { useController } from "react-hook-form";

export const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiInputBase-root": {
      borderRadius: 8,
      backgroundColor: "white",
      // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
      border: "1px solid #A6A9C6",
    },
    "& .MuiInputBase-root fieldset": {
      borderRadius: 8,
      border: "none",
    },
    "& .MuiInputBase-root:hover": {
      outline: "2px solid #9747FF33",
    },
    "& .MuiInputBase-root:hover fieldset": {
      border: "none",
    },
    "& .MuiInputBase-root.Mui-focused": {
      outline: "1.5px solid #9747FF33",
      borderRadius: "8px",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
    },
    "& .MuiInputBase-root.Mui-focused fieldset": {
      border: "2px solid #3E65FE",
      borderRadius: 6,
    },
    "& .MuiInputBase-root.Mui-error": {
      outline: "1.5px solid #fc8686",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
    },
    "& .MuiInputBase-root.Mui-error fieldset": {
      border: "none",
    },
    "& .MuiInputBase-root.Mui-error.Mui-focused fieldset": {
      border: "2px solid #FF480E",
    },
  },
}));

const CoreInput = (props: any) => {
  const customStyle = useStyles();
  const {
    className,
    control,
    name,
    label,
    placeholder,
    InputLabelProps,
    inputProps,
    InputProps,
    required,
    readOnly,
    type = "text",
    multiline,
    minRows = 5,
    hidden,
    helperText,
    disabled,
    rules,
    size,
    defaultValue,
    labelClassName = "",
    ...restProps
  } = props;

  const {
    field: { value, onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  let {
    transform = {
      input: (value: any) => value,
      output: (e: any) => e,
    },
  } = props;

  if (type === "number") {
    transform = {
      input: (value: any) => value,
      output: (e: any) => {
        const output = e.target.value;
        return Number.isNaN(output) ? 0 : Number(output);
      },
    };
  }

  const { mobile } = useBreakpoints();

  const responsiveSize = () => {
    if (String(size)?.trim()?.length > 0) {
      return size;
    }
    return mobile ? "small" : "medium";
  };

  return (
    <Box className={className}>
      {label ? (
        <InputLabel
          className={clsx(" font-600", labelClassName)}
          required={required}
          shrink
          htmlFor={name}
        >
          {label}
        </InputLabel>
      ) : null}
      <TextField
        className={clsx(className, customStyle.root)}
        label={null}
        size={responsiveSize()}
        fullWidth
        type={type === "number" ? "text" : type}
        placeholder={placeholder}
        onChange={(e) => onChange(transform.output(e))}
        onBlur={onBlur}
        value={transform.input(value)}
        inputRef={ref}
        multiline={multiline}
        minRows={minRows}
        disabled={disabled}
        error={!!error}
        helperText={error && error.message}
        InputLabelProps={{
          shrink: false,
          style: { position: "absolute", top: -8 },
          required,
          ...InputLabelProps,
        }}
        inputProps={{
          readOnly,
          ...inputProps,
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        InputProps={{
          ...InputProps,
        }}
        {...restProps}
      />
      {helperText && (
        <FormHelperText className="text-[1.2rem]">{helperText}</FormHelperText>
      )}
    </Box>
  );
};

export default React.memo(CoreInput);
