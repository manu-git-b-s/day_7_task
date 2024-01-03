// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onload = () => {
  const parsedData = JSON.parse(request.response);

  // e. Print the country that uses US dollars as currency.
  let count = 0;
  parsedData.forEach((country) => {
    if (country?.currencies?.hasOwnProperty("USD")) {
      console.log(++count, country.name.common);
    }
  });
};
