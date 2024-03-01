/*
 * Created Date: 09-05-2023, 2:42:35 pm
 * Author: TheAnh58_DELL
 * Email: you@you.you
 * -----
 * Last Modified: Tue May 09 2023
 * Modified By: TheAnh58_DELL
 * -----
 * Copyright (c) 2023 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import isFunction from 'lodash/isFunction'
import React, { useCallback } from 'react'
import { NumericFormat } from 'react-number-format'

export const NumberFormatCustom = React.forwardRef((props, ref) => {
	const { onChange, ...other } = props

	const handleChange = useCallback(
		value => {
			if (isFunction(onChange)) {
				onChange({
					target: {
						name: props.name,
						value: value.value
					}
				})
			}
		},
		[props.name, onChange]
	)

	return (
		<NumericFormat
			{...other}
			decimalSeparator="."
			isNumericString
			// thousandSeparator="."
			getInputRef={ref}
			onValueChange={handleChange}
		/>
	)
})
