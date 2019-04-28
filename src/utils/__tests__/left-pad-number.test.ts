import { leftPadNumber } from "../left-pad-number";

test("left pads number with a single zero", () => {
  const num = 5;

  const result = leftPadNumber(num);

  expect(result).toBe("05");
});

test("does not left pad number over 10", () => {
  const num = 12;

  const result = leftPadNumber(12);

  expect(result).toBe("12");
});
