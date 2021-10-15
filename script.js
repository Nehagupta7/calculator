const historyValue = document.querySelector("#histroy-value");
const outputValue = document.querySelector("#output-value");
const numberBtn = document.querySelectorAll(".number");
const operratorBtn = document.querySelectorAll(".operator");
let result = "";
let hasOperator = false;
let hasdot = true;

//number
numberBtn.forEach((number) => {
  number.addEventListener("click", () => {
    let idOfNumber = outputfunction(number.id);

    if (idOfNumber !== "") {
      hasOperator = false;
      result = result + idOfNumber;
      outputfunction(result);
    }
  });
});

//oprator

operratorBtn.forEach((operrator) => {
  operrator.addEventListener("click", (e) => {
    let value = e.target.id;
    switch (value) {
      case "clear":
        historyfunction("");
        outputfunction("0");
        result = "";
        break;
      case "back-space":
        result.toString();
        if (result) {
          result = result.substr(0, result.length - 1);
          outputfunction(result);
        }
        break;
      case "equal":
        result = eval(historyfunction(result));
        historyfunction(outputValue.innerHTML);
        outputfunction(result);
        break;
      case ".":
        if (e.target.id === "." && !hasdot) {
          hasdot = true;
          console.log("true");
          let operator = outputfunction(operrator.id);
          result = result + operator;
          outputfunction(result);
        } else if (e.target.id === "." && hasdot) {
          console.log("false");

          hasdot = false;
        }
        break;
      default:
        console.log(e.target.id.length);
        if (e.target.id.length === 1 && !hasOperator) {
          hasOperator = true;
          hasdot = true;
          let operator = outputfunction(operrator.id);
          result = result + operator;
          outputfunction(result);
        } else if (e.target.id.length === 1 && hasOperator) {
          hasdot = false;
        }
    }
  });
});
//output function
function outputfunction(num) {
  return (outputValue.innerHTML = num);
}
//histryfunction
function historyfunction(num) {
  return (historyValue.innerHTML = num);
}
