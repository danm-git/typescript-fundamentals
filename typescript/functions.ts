const sum = (num: number, num2: number) => {
  return num + num2;
};

console.log(sum(42, 41));

const sum2 = (num: string | number, num2: string | number): number => {
  typeof num == "string" ? (num = parseInt(num)) : null;
  typeof num2 == "string" ? (num2 = parseInt(num2)) : null;
  return num + num2;
};

console.log(sum2(42, "42"));
