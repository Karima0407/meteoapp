//api.openweathermap.org/data/2.5/weather?q=paris&appid=d55111eb453ab8daeeaf937d2a6d18ee
// requete http vers l'api pour recuperer la meteo d'une ville
function getweather(city) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d55111eb453ab8daeeaf937d2a6d18ee`
  )
    .then((response) => {
      response
        .json()
        .then((data) => {
          document.getElementById("city").textContent=data.name;
           document.getElementById("icon").setAttribute("src", "https://openweathermap.org/img/wn/"+data.weather[0].icon+".png");
          document.getElementById("min").textContent="Temperature min"+ Math.round(data.main.temp_min-273.15)+"C";
          document.getElementById("real").textContent="Temperature Réelle"+ Math.round(data.main.temp-273.15)+"C";
          document.getElementById("max").textContent="Temperature max"+Math.round(data.main.temp_max-273.15)+"C";
         
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
//appel de la fonction
getweather("Paris");
