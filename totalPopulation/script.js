// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onload = () => {
  const parsedData = JSON.parse(request.response);

  // d. Print the total population of countries using reduce function
  const totalPopulation = parsedData
    .map((country) => country.population)
    .reduce((accumulator, currvalue) => accumulator + currvalue);
  console.log("Total Population --->", totalPopulation);
};
