export function numberFormat(number) {
  return new Intl.NumberFormat().format(number)
}
