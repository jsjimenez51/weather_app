const key = "npHLG3SDo4DP3wu45A3jtM4aZ4VxBk7x";

const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return (data[0]);
  
};

getCity('San Francisco')
  .then(data => console.log(data))
  .catch(err => console.log(err));