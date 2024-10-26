function strCalculator(inputString) {
  try {
    let result;
    let str = inputString.replace("//;\n,-", " ");
    console.log(str, "str");
    result = eval(str);

    console.log(result);
  } catch {
    console.error("negative numbers are not allowed");
  }
  // console.log(inputString);
}

strCalculator("1,5");
