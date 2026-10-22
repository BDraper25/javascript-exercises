const convertToCelsius = function(temp) {
    temp = ((temp - 32) * (5/9));
    temp = Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
    temp = ((temp * (9/5)) + 32);
    temp = Math.round(temp * 10) / 10;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
