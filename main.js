
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
    //document.getElementById('tempOutput').innerHTML = "";
    unit = 'C'
    toCelsius(temp);
    domStringBuilder(finalTemp, unit);
    }
    else if (document.getElementById('tempF').checked === true) {
        //document.getElementById('tempOutput').innerHTML = "";
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
    if (finalTemp > 32 && unit === 'C'){
    domString = `<div class='textRed'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
    printToDom('tempOutput', domString);
    }
    else if (finalTemp > 90 && unit === 'F'){
    domString = `<div class='textRed'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
    printToDom('tempOutput', domString);
    }
    else if (finalTemp < 0 && unit === 'C'){
        domString = `<div class='textBlue'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
        printToDom('tempOutput', domString);
        }
        else if (finalTemp < 32 && unit === 'F'){
        domString = `<div class='textBlue'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
        printToDom('tempOutput', domString);
        }
    else {
        domString = `<div class='textGreen'>${finalTemp.toFixed(2)} degrees ${unit}</div>`;
        printToDom('tempOutput', domString);
    }
};

const clear = () => {
    document.getElementById('tempInput').value = "";
    document.getElementById('tempOutput').innerHTML = "";

};

clearBtn.addEventListener('click', clear);





