let btn = document.querySelector("button");
let api_key = "d02294b3855f41c283230cc15ada0732";

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    btn.textContent = "Allow to Detect location";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    btn.textContent = "Browser not supported";
  }
});

let onSuccess = (e) => {
  btn.textContent = "Detecting your location.........";
  btn.textContent = "Permission Granted";
  let { latitude, longitude } = e.coords;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`
  )
    .then((res) => res.json())
    .then((e) => {

      let { road, city, postcode, state_code, country } =
        e.results[0].components;
      btn.textContent = `${road} ${city}, ${postcode}, ${state_code} - ${country}`;
      console.table(e.results[0].components);
    });
};

let onError = (err) => {
  if (err.code === 1) {
    btn.textContent = "You Denied location";
  } else if (err.code === 2) {
    btn.textContent = "Location is unavailable";
  } else {
    btn.innerText = "Something went wrong";
  }
  btn.setAttribute("disabled", "true")
};
