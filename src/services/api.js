/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import config from '../config'

export default {
  fetchApi: async (
    url,
    method,
    customOptions = {},
    customHeaders = { 'Content-Type': 'application/json' },
    // blob = false
  ) => {

    const URI = config.urls.apiBaseUrl + url
    const token = localStorage.getItem('accessToken')

    try {
      const response = await axios(URI, {
        ...customOptions,
        method: method,
        headers: {
          ...customHeaders,
          'Authorization': token ? `Bearer ${token}` : undefined,
        },
      })

      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
