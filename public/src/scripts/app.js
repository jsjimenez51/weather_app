// DOM Manipulation

const cityForm = document.querySelector('form');

const updateCity = async (city) => {

  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);
  // object returned { prop: value } is same name == object shorthand
  return { cityInfo, weather};

};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update UI with new city data
  updateCity(city)
  .then(data => console.log(data))
  .catch(err => console.log(err));
});
