class BadNetworkResponseError extends Error {}

const http = async function (url, param = {}) {
  const response = await fetch(url, param)
  if (response.ok) {
    return await response.json()
  }
  const error = `${response.statusText}: ${response.status}`
  throw new BadNetworkResponseError(error)
}

export const getCountries = async function () {
  return await http('https://restcountries.com/v3.1/all')
}

export function numberFormat(number) {
  return new Intl.NumberFormat().format(number)
}
