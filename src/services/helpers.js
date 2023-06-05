import dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc'
import * as timezone from 'dayjs/plugin/timezone'
import * as localizedFormat from 'dayjs/plugin/localizedFormat'

// Call plugin for dayjs
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(localizedFormat)

/**
 *  Set local storage item with time stamp
 */
export function setHtmlStorage(name, value, expires) {
  if (value) {
    // Set default expiration to 1 hour if undefined or null
    if (expires === undefined || expires === 'null') {
      expires = 3600
    }
    // Schedule when the token should be expired
    const date = new Date()
    const schedule = Math.round(date.setSeconds(date.getSeconds() + expires) / 1000)
    // Set the actual value as well as the time
    localStorage.setItem(name, value)
    localStorage.setItem(`${name}_time`, schedule)
  }
}

/**
 *  Remove local storage item and time stamp
 */
export function removeHtmlStorage(name) {
  localStorage.removeItem(name)
  localStorage.removeItem(`${name}_time`)
}

/**
 *  Check the expiration status of a local storage item
 */
export function statusHtmlStorage(name) {
  // Get current time
  const date = new Date()
  const current = Math.round(+date / 1000)
  // Pull the storage item's expiration
  let stored_time = parseInt(localStorage.getItem(`${name}_time`))
  if (!stored_time === undefined || stored_time === 'null') {
    stored_time = 0
  }
  // Determine if it is expired
  if (isNaN(stored_time)) {
    // If expired, remove it and return false
    return false
  }
  if (stored_time < current) {
    // If expired, remove it and return false
    return false
  }
  // If not, return true
  return 1
}

/**
 *  Thousand separator
 */
export function numberWithCommas(number, fixed = 2) {
  number = number !== null ? parseFloat(number).toFixed(fixed) : 0
  const parts = number.toString().split('.')
  const numberPart = parts[0]
  const decimalPart = parts[1]
  const thousands = /\B(?=(\d{3})+(?!\d))/g
  const newNumber = numberPart.replace(thousands, ',') + (decimalPart ? '.' + decimalPart : '')

  return newNumber
}

/**
 *  Capitalize First Letter
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 *  Convert Date Timezone
 */
export function convertTZ(date = dayjs(), format = 'LLLL', tz = dayjs.tz.guess()) {
  return dayjs.tz(date, tz).format(format)
}
