const API_TOKEN =
  "cGsuZXlKMUlqb2lZV3R6WVdSeklpd2lZU0k2SW1OcmNUUnlPVFZtWlRBemNtSXllWE5rT1dwMVp6RjZPWElpZlEuczY1LU1Rcm5NekNEVFV2d192UkRkdw";

const locations = [
  { name: "United States", location: [37.09024, -95.712891] },
  { name: "United Kingdom", location: [55.378051, -3.435973] },
  { name: "India", location: [20.593684, 78.96288] },
  { name: "United Arab Emirates", location: [23.424076, 53.847818] },
  { name: "Columbia", location: [4.570868, -74.297333] },
  { name: "Canada", location: [56.130366, -106.346771] },
  { name: "Philippines", location: [12.879721, 121.774017] },
  { name: "Indonesia", location: [-0.789275, 113.921327] },
  { name: "Brazil", location: [-14.235004, -51.92528] },
  { name: "Singapore", location: [1.352083, 103.819836] },
  { name: "Barbados", location: [13.193887, -59.543198] },
  { name: "Netherlands", location: [52.132633, 5.291266] },
];

var map = L.map("reach-map", { scrollWheelZoom: false }).setView([0, 0], 2.5);
L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${atob(
    API_TOKEN
  )}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);

function addMarker(location) {
  console.table(location);
  L.marker(location.location, {
    title: location.name,
    alt: location.name,
  })
    .addTo(map)
    .bindPopup(`<b>${location.name}</b>`);
}

locations.forEach(addMarker);
