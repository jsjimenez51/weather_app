class Forecast {
  constructor() {
    this.key = "D4XKAQGbA58GSDzXyNJ8dGw3tbW9X6cw";
    this.weatherURI =
      "https://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
  }

  async updateCity(city) {
    const cityInfo = await this.getCity(city);
    const weather = await this.getWeather(cityInfo.Key);
    // object returned { prop: value } is same name == object shorthand
    return { cityInfo, weather };
  }

  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }

  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }
}
