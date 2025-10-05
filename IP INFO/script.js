const form = document.querySelector("#ipForm");
const ipInput = document.querySelector("#ipInput");
const ipInfoDiv = document.querySelector("#ipInfo");

const getdata = async (ip) => {
  try {
    let res = await fetch(`https://ipinfo.io/${ip}/geo`);
    let data = await res.json();
    console.log(data);
    

    ipInfoDiv.innerHTML = `
      <p><b>IP:</b> ${data.ip}</p>
      <p><b>City:</b> ${data.city}</p>
      <p><b>Region:</b> ${data.region}</p>
      <p><b>Country:</b> ${data.country}</p>
      <p><b>Location:</b> ${data.loc}</p>
      <p><b>Org:</b> ${data.org}</p>
    `;
  } catch (error) {
    ipInfoDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault(); // form reload hone se rokna
  const ip = ipInput.value.trim();
  if (ip) {
    getdata(ip);
  } else {
    ipInfoDiv.innerHTML = `<p style="color:red;">⚠️ Please enter a valid IP address!</p>`;
  }
});
