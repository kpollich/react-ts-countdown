import parseMs from "parse-ms";
import toMilliseconds from "@sindresorhus/to-milliseconds";

import { padParsedMsValues } from "../pad-parsed-ms-values";

test("pads values from parseMs", () => {
  const ms = toMilliseconds({ hours: 3, minutes: 2, seconds: 1 });
  const parsed = parseMs(ms);

  const paddedParsed = padParsedMsValues(parsed);

  expect(paddedParsed.hours).toBe("03");
  expect(paddedParsed.minutes).toBe("02");
  expect(paddedParsed.seconds).toBe("01");
});
