const key = "npHLG3SDo4DP3wu45A3jtM4aZ4VxBk7x";

// get weather information
const getWeather = async (locID) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locID}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return (data[0]);
  

};

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return (data[0]);
  
};

getCity('San Francisco').then(data => {
    return getWeather(data.Key);
  }).then(data => {
    console.log(data);
  }).catch(err => console.log(err));

