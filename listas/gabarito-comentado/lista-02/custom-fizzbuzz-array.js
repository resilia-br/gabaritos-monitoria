const fizzBuzzCustom = (fizz = "Fizz", buzz = "Buzz", num1 = 3, num2 = 5) => {
  return Array.from(new Array(100), (nums, i) => i + 1).map((num) => {
    if (!(num % (num1 * num2))) return fizz + buzz;
    else if (!(num % num1)) return fizz;
    else if (!(num % num2)) return buzz;
    else return num;
  });
};
