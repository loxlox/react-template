/* eslint-disable import/no-anonymous-default-export */
import * as constant from './constant'

const INITIAL_STATE = {
	loading: false,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case constant.LOADING:
			return Object.assign({}, state, {
				loading: action.payload
			})
		default: return state
	}
}
