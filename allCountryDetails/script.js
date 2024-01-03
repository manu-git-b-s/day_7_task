// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onload = () => {
  const parsedData = JSON.parse(request.response);
  // c. Print the following details name, capital, flag, using forEach function
  parsedData.forEach((country) => {
    console.log(country.name.common, country.capital?.[0], country.flags.png);
  });
};
