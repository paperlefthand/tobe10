type Op = "plus" | "minus" | "multiply" | "divide" | "none";

export const calculate = (nums: Array<number>, opes: Array<string>) => {
  let result = nums[0];
  for (let i = 0; i < 3; i++) {
    let [op, num] = [opes[i], nums[i + 1]];
    if (op === "plus") {
      result += num;
    } else if (op === "minus") {
      result -= num;
    } else if (op === "multiply") {
      result *= num;
    } else if (op === "divide") {
      result /= num;
    } else {
      return 0;
    }
  }
  return result;
};
