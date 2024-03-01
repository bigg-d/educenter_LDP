/*
 * Created Date: 08-10-2021, 10:03:37 am
 * Author: Trần Quang Hùng
 * Email: you@you.you
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2021 VNE E-COMMERCE, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormHelperText,
  IconButton,
  InputLabel,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { useRequest } from "ahooks";
import clsx from "clsx";
import { find, get, isObject, map } from "lodash";
import PropTypes from "prop-types";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CoreInput, { useStyles } from "./CoreInput";
import { generateGUID } from "@/@Common/Helpers/String";
import { useBreakpoints } from "@/@Common/hooks/useBreakpoints";

const CoreAutocomplete = ({
  className,
  control,
  name,
  options,
  label,
  placeholder,
  InputLabelProps,
  inputProps,
  InputProps,
  shrink,
  required,
  readOnly,
  fetchOptions,
  filter,
  valuePath = "value",
  labelPath = "label",
  loading,
  isCacheOption,
  returnValueType = "option",
  multiple,
  disabled,
  isCacheKey,
  cacheKey,
  helperText,
  isCreateable,
  AutoCompleteClassName,
  rules,
  size,
  mobileMode,
  showAdd,
  addDataKey,
  addMode,
  labelClassName = "",
  ...restProps
}: any) => {
  const customStyle = useStyles();
  const { mobile } = useBreakpoints();
  const [openMobileSelect, setOpenMobileSelect] = useState(false);

  const handleOpenMobileSelect = () => {
    if (mobile && mobileMode) {
      setOpenMobileSelect(true);
    }
  };

  const handleCloseMobileSelect = useCallback(() => {
    setOpenMobileSelect(false);
  }, []);

  const responsiveSize = () => {
    if (String(size)?.trim()?.length > 0) {
      return size;
    }
    return mobile ? "small" : "medium";
  };

  const {
    data: fetchedOptions = options,
    run: handleFetchOptions,
    loading: fetching,
  } = useRequest(fetchOptions, {
    manual: true,
  });

  const [customAddData, setCustomAddedData] = useState([]);

  const filterdOptions = useMemo(() => {
    if (!fetchedOptions) return options.concat(customAddData);

    if (filter) return filter(fetchedOptions).concat(customAddData);

    return fetchedOptions.concat(customAddData);
  }, [fetchedOptions, filter, JSON.stringify(customAddData)]);

  const checkHasCurrentOptions = () => {
    // TODO
    // check cached data and return it
    return null;
  };

  useEffect(() => {
    if (fetchOptions && !disabled && !readOnly) {
      if (isCacheOption) {
        if (!checkHasCurrentOptions()) {
          handleFetchOptions();
        }
      } else {
        handleFetchOptions();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchOptions, readOnly, disabled]);

  const getValueOption = useCallback(
    (value: any) => {
      if (multiple) {
        if (isCreateable) {
          return value;
        }
        const values = map(value, (v: any) => {
          if (!isObject(v)) {
            const option =
              find(filterdOptions, (item: any) => {
                return get(item, valuePath) === v;
              }) ?? null;
            return option;
          }
          return v;
        }).filter(Boolean);
        return values;
      }

      if (returnValueType === "enum") {
        return (
          find(filterdOptions, (item: any) => get(item, valuePath) === value) ??
          null
        );
      }

      return value;
    },
    [filterdOptions]
  );

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => {
          return (
            <>
              <Autocomplete
                size={responsiveSize()}
                label={null}
                className={clsx(
                  className,
                  AutoCompleteClassName,
                  customStyle.root
                )}
                multiple={multiple}
                isOptionEqualToValue={(option, value) => {
                  if (value instanceof Object) {
                    return get(option, valuePath) === get(value, valuePath);
                  }
                  return get(option, valuePath) === value;
                }}
                getOptionLabel={(option) => {
                  return get(option, labelPath) ?? "";
                }}
                loading={loading || fetching}
                options={filterdOptions}
                noOptionsText={"Không có sẵn lựa chọn nào"}
                disabled={disabled}
                onChange={(_, value: any) => {
                  if (value === null) {
                    return onChange(null);
                  }
                  return returnValueType === "enum"
                    ? onChange(
                        multiple
                          ? value.map((v: any) => get(v, valuePath))
                          : get(value, valuePath)
                      )
                    : onChange(value);
                }}
                onBlur={onBlur}
                // onInputChange={(e, newInput) => console.log('============= newInput', newInput)}
                value={getValueOption(value)}
                renderOption={(props, option: any) => (
                  <li {...props} key={option[valuePath] ?? generateGUID()}>
                    {get(option, labelPath)}
                  </li>
                )}
                // eslint-disable-next-line react/no-unstable-nested-components
                PaperComponent={({ children, ...rest }) => (
                  <Paper
                    {...rest}
                    // className={clsx({ hidden: mobile && mobileMode })}
                  >
                    {children}
                  </Paper>
                )}
                renderInput={(params) => (
                  <>
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
                      onClick={handleOpenMobileSelect}
                      {...params}
                      label={null}
                      placeholder={placeholder || "Chọn"}
                      inputRef={ref}
                      error={!!error}
                      helperText={error && error.message}
                      InputLabelProps={{
                        ...params.InputLabelProps,
                        shrink: true,
                        required,
                        ...InputLabelProps,
                      }}
                      inputProps={{
                        ...params.inputProps,
                        readOnly,
                        ...inputProps,
                      }}
                      // eslint-disable-next-line react/jsx-no-duplicate-props
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loading || fetching ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                        ...InputProps,
                      }}
                    />
                    {helperText && (
                      <FormHelperText>{helperText}</FormHelperText>
                    )}
                  </>
                )}
                {...restProps}
              />
            </>
          );
        }}
        rules={rules}
      />
    </div>
  );
};

export default React.memo(CoreAutocomplete);
