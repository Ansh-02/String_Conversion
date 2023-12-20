function convertString() {
  var inputElement = document.getElementById("inputString");
  var resultElement = document.getElementById("result");

  // Get the input value
  var inputString = inputElement.value.trim();

  // Check if the input is not empty
  if (inputString !== "") {
    // Convert the first letter to uppercase
    var convertedString =
      inputString.charAt(0).toUpperCase() + inputString.slice(1);

    // Display the result
    resultElement.textContent = "Converted String: " + convertedString;
  } else {
    // Display an error message if the input is empty
    resultElement.textContent = "Please enter a valid string.";
  }
}
