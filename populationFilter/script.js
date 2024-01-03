// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onload = () => {
  const parsedData = JSON.parse(request.response);

  // b. Get all the countries with a population of less than 2 lakhs using Filter function
  const populationGreater = parsedData.filter((country) => country.population > 200000);
  console.log(populationGreater);
};
