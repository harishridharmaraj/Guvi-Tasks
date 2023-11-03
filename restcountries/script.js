const restUrl = "https://restcountries.com/v3.1/all";

var ui = document.getElementById("demo");

ui.setAttribute("class", "container");
let row = document.createElement("div");

row.setAttribute("class", "row");

ui.append(row);

async function restData(callback) {
  let res = await fetch(restUrl, {
    method: "GET",
  });
  let dataa = await res.json();
  let data = dataa.splice(5, 10);
  data.map((ele) => {
    let newData = ele;
    callback(newData);
  });
}
restData(getWeather);

async function getWeather(newData) {
  console.log(newData);
  let newCity = newData.name.common;
  let res1 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=ba533a82debd97c789ec1431a21cbc17`,
    { method: "GET" }
  );
  let data1 = await res1.json();
  let capital = newData.capital[0];
  let temp = data1.main.temp;
  let region = newData.region;
  let ccode = newData.idd.root + newData.idd.suffixes;
  let flag = newData.flags.png;
  console.log(flag);
  function getTemp() {
    document.getElementById("tempp").innerHTML = `Current Weather: ${temp}`;
  }
  let card = document.createElement("div");
  card.setAttribute("class", "col-lg-4 col-sm-12");
  card.innerHTML = ` 
    
    <div class="card" style="width: 18rem;margin-top:50px;background-image:linear-gradient(to right,#DBC8A2,black);">
      <div class="card-header text-center" style="background-color:#000;color:#fff">${newCity}</div>
      <img src=${flag} class="card-img-top" style='width:100%;height:200px;margin-top:10px' alt=${flag} />
      <div class="card-body text-center" style="color:#fff">
        <p class="card-text">
        Capital:${capital}<br>Region:${region}<br>Contry Code:${ccode}<br>
        </p>
        <button href="#" onClick="showWeather(this, ${temp})" class="btn btn-primary">Click for Weather</button>
        <p id="tempp"></p>
      </div>`;

  row.append(card);
}
function showWeather(button, temperature) {
  const tempPlaceholder = button.nextElementSibling;
  tempPlaceholder.textContent = `Temperature: ${temperature} °F`;
}
