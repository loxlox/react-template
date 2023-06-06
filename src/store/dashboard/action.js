import * as constant from './constant'

export function setLoading(payload) {
	return { type: constant.LOADING, payload: payload }
}
