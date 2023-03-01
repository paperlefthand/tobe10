import { calculate } from "../calculate";

test("1+2+3+4=10", () => {
  expect(calculate([1, 2, 3, 4], ["plus", "plus", "plus"])).toBe(10);
});
