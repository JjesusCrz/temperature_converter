document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = clearFields;

function tempConvert() {
    let fahrenheit = document.getElementById("fahrenheit").value.trim();
    let celsius = document.getElementById("celsius").value.trim();

    if (fahrenheit === "" && celsius === "") {
        alert("Please enter a value in either Fahrenheit or Celsius.");
        return;
    }

    if (fahrenheit !== "" && celsius === "") {
        fahrenheit = parseFloat(fahrenheit);
        if (isNaN(fahrenheit)) {
            alert("Please enter a valid number in Fahrenheit.");
            return;
        }
        celsius = (fahrenheit - 32) / 1.8;
    } else if (celsius !== "" && fahrenheit === "") {
        celsius = parseFloat(celsius);
        if (isNaN(celsius)) {
            alert("Please enter a valid number in Celsius.");
            return;
        }
        fahrenheit = celsius * 1.8 + 32;
    } else {
        alert("Please fill only one field at a time.");
        return;
    }

    document.getElementById("fahrenheit").value = fahrenheit.toFixed(1);
    document.getElementById("celsius").value = celsius.toFixed(1);
}

function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}


function clearFields() {
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}
