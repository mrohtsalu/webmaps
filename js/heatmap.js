let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm =
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: 'OpenStreetMap contributors',
})
osm.addTo(map)

// add geoJSON polygons layer*
async function addDistrictsGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const polygons = L.geoJson(data)
 polygons.addTo(map)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')

addGeoJson('geojson/tartu_city_celltowers_edu.geojson')
// add geoJSON layer
async function addGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 console.log(data.features[0])
}

addGeoJson('geojson/tartu_city_celltowers_edu.geojson')
// add geoJSON layer
async function addGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const heatData = data.features.map(heatDataConvert)
 console.log(heatData)
}
function heatDataConvert(feature) {
 return [
 feature.geometry.coordinates[1],
 feature.geometry.coordinates[0],
 feature.properties.area,
 ]
}

addGeoJson('geojson/tartu_city_celltowers_edu.geojson')
// add geoJSON layer
async function addGeoJson(url) {
 const response = await fetch(url)
 const data = await response.json()
 const heatData = data.features.map(heatDataConvert)
 const heatMap = L.heatLayer(heatData, { radius: 10 })
 heatMap.addTo(map)
}
// prepare spatial data for Leaflet heat
function heatDataConvert(feature) {
 return [
 feature.geometry.coordinates[1],
 feature.geometry.coordinates[0],
 feature.properties.area,
 ]
}

// default map settings
function defaultMapSettings() {
 map.setView([58.373523, 26.716045], 12)
}
