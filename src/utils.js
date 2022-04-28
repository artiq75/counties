const http = async function (url, param = {}) {
  const response = await fetch(url, param)
  if (response.ok) {
    return await response.json()
  }
  const error = `${response.statusText}: ${response.status}`
  throw new Error(error)
}

export const getCountries = async function (endpoint = 'all') {
  return await http(`https://restcountries.com/v2/${endpoint}`)
}

export function numberFormat(number) {
  return new Intl.NumberFormat("en-EN").format(number)
}
