
let finalTemp = 0;
const toCelsius =  (temp) => {
    const tempC = (temp - 32) * (5/9);
    finalTemp = tempC;
 };



const toFahrenheit = (temp) => {
    const tempF = temp * (9/5) + 32;
    finalTemp = tempF;
};


// Print to DOM function 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

// Get a reference to the button element in the DOM
const button = document.getElementById("convertBtn");
const clearBtn = document.getElementById('clearBtn');


// This function should determine which conversion should
// happen based on which radio button is selected.

let temp = document.getElementById('tempInput').value;
let unit = "";

const determineConverter = (e) => {

    const temp = document.getElementById('tempInput').value;


    if (document.getElementById('tempC').checked === true) {
    unit = 'C'
    toCelsius(temp);
    domStringBuilder(finalTemp, unit);
    }
    else if (document.getElementById('tempF').checked === true) {
        unit = 'F'
        toFahrenheit(temp);
        domStringBuilder(finalTemp, unit);
    }

    //tempValue = document.getElementById('tempInput').value;
    //printToDom('tempOutput', tempValue);
};

// Assign a function to be executed when the button is clicked


button.addEventListener("click", determineConverter);

domString = "";
const domStringBuilder = (temperature, unitOfTemp) => {
    domString += `${finalTemp} degrees ${unit}`;
    printToDom('tempOutput', domString);
};

const clear = () => {
    document.getElementById('tempInput').value = "";
    document.getElementById('tempOutput').innerHTML = "";

};

clearBtn.addEventListener('click', clear);




