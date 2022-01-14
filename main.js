var map = L.map("map").setView([51.505, -0.09], 12);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9leTc4NyIsImEiOiJja3liODR3YmQwY3dmMm5zMHF1NmQyeDNtIn0.k57qJ4CxsrYHU5U55xd1zQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: "mapbox/streets-v11",
    id: "joey787/ckybaudvb2pkq15ny9ym09zsv",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "your.mapbox.access.token",
  }
).addTo(map);
