const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", function () {

        let value = button.innerText;

        if (value === "C") {

            expression = "";
            display.value = "";

        }

        else if (value === "=") {

            expression = expression.replace(/×/g, "*");
            expression = expression.replace(/÷/g, "/");

            display.value = eval(expression);

            expression = display.value;

        }

        else {

            expression += value;
            display.value = expression;

        }

    });

});