function gettime(time){
  minute = 0;
  tim = time;
  while(time>60){
    time = time-60;
    minute = minute+1;
  }
  min = minute;
  hour = 0;
  while(minute>60){
    minute = minute-60;
    hour = hour+1;
  }
  console.log(hour+" : "+min+":"+tim);
}



async function getWeather(city) {
  document.getElementById("cityName").innerHTML = city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8e9af98440mshb19314a1e15e146p104b66jsn197628a1fa33',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      document.getElementById("temp").innerHTML= result.temp
      document.getElementById("wind_speed").innerHTML= result.wind_speed
      document.getElementById("feels_like").innerHTML= result.feels_like
      document.getElementById("humidity") .innerHTML= result.humidity

      if(result.cloud_pct>25 && result.cloud_pct<50){
        wet = "partly cloudly"
        document.getElementById('cloudpct').innerHTML = wet
        document.getElementById('weather').src = "./img/300ppi/half-cloudy@300x.png"
        console.log(wet);
      }
      if(result.cloud_pct>50 && result.cloud_pct<75){
        wet = "mostly cloudly"
        document.getElementById('cloudpct').innerHTML = wet
        document.getElementById('weather').src = "./img/300ppi/cloudy@300x.png"
        console.log(wet);
      }
      if(result.cloud_pct>75 && result.cloud_pct<=100){
        wet = "overcast"
        document.getElementById('cloudpct').innerHTML = wet
        document.getElementById('weather').src = "./img/300ppi/cloudy@300x.png"
        console.log(wet);
      }

    } catch (error) {
      console.error(error);
    }
  }
  function getcity(e){
    getWeather(city.value);
  }
  
  getWeather("Delhi");