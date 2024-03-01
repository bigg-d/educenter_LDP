import { toast } from 'react-toastify'

/*
 * Created Date: 16-08-2022, 12:17:05 am
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */
export const successMsg = msg => {
	if (msg) toast.success(msg)
}

export const errorMsg = (error, defaultMsg = 'Có lỗi xảy ra') => {
	if (error instanceof Error) {
		toast.error(error)
		return false
	} else if (typeof error === 'string') {
		// NotificationManager.error(msg)
		toast.error(error)
	} else {
		toast.error(defaultMsg)
	}
}

export const handleErrorFieldBackend = (e, setError = () => {}) => {
	if (e?.errors) {
		Object.keys(e?.errors).forEach(key => {
			setError(key, { type: 'custome', message: e?.errors[key] })
		})
	}
}
