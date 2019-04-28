/**
 * Converts the given number to a singly left-padded string
 *
 * e.g. num = 5, return = "05"
 *
 * @param num Number to pad
 */
export function leftPadNumber(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }

  return num.toString();
}
