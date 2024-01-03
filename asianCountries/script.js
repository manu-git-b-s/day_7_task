// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
const url = "https://restcountries.com/v3.1/all";
const countryData = [];

const request = new XMLHttpRequest();

request.open("GET", url);
request.send();

request.onload = () => {
  const parsedData = JSON.parse(request.response);

  // a. Get all the countries from Asia continent /region using Filter function
  const asianCountry = parsedData.filter((country) => country.continents[0] === "Asia");
  console.log(asianCountry);
};
