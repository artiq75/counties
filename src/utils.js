export function numberFormat(number) {
  return new Intl.NumberFormat("en-EN").format(number)
}
