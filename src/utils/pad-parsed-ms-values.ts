import { Parsed } from "parse-ms";
import { leftPadNumber } from "./left-pad-number";

export interface PaddedParsed {
  [key: string]: string;
  hours: string;
  minutes: string;
  seconds: string;
}

/**
 * Converts a time partial object from `parseMs` to an object containing left-padded values
 * for all the contained time values.
 *
 * @param parsed An object from `parseMs` containing time partials for a millisecond value
 *
 * @returns An object containing left-padded values for all time partials in the original parsed object
 */
export function padParsedMsValues(parsed: Parsed): PaddedParsed {
  const padded = Object.entries(parsed).reduce(
    (acc, [key, value]) => {
      acc[key] = leftPadNumber(value);

      return acc;
    },
    {} as PaddedParsed
  );

  return padded;
}
