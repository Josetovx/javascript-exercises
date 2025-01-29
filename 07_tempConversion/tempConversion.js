const convertToCelsius = function(farDeg) {
  const celsius = (farDeg - 32) * (5 / 9);
  const roundedCelsius =  Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function(celDeg) {
  const fahrenheit = (celDeg * (9 / 5) + 32);
  const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
