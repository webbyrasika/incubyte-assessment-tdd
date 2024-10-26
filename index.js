function strCalculator(inputString) {
  try {
    let str = inputString.replace("//;\n,-", "");
    console.log(str, "str");

    const result = eval(str);

    console.log(result);
  } catch {
    console.error("negative numbers are not allowed");
  }
}

strCalculator("1,5");
