// DOM Manipulation
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {

  // const cityInfo = data.cityInfo;
  // const weather = data.weather;
  
  // destructure props
  const { cityInfo, weather } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityInfo.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
  `;

  // remove d-none class if present to display info
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};


// Search Bar Functionality
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
  .then(data => updateUI(data))
  .catch(err => console.log(err));
});
