const convertToCelsius = function(farDeg) {
  const celsius = (farDeg - 32) * (5 / 9);
  const roundedCelsius =  Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
