let Metercoredintalec = [44.96, -93.2]
let zoomLeval = 1

let map = L.map('college-map').setView(Metercoredintalec, zoomLeval)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let mctcCoordinates =[44.9724, -93.2844]
let mctcMarker = L.marker(mctcCoordinates)
    .bindPopup('minneopolse collage<br> <a href="https://minneapolis.edu">Website</a>')
    .addTo(map)

//let saintPaulCordent = [44.9423, -93.1099]
//let saintMarker = L.marker(saintPaulCordent)
   // .bindPopup('SaintPaul collage <br> <a href="https://www.saintpaul.edu"> website</a>')
    //.addTo(map)

let meterAreaCirrcle = L.circle(Metercoredintalec, {
    color: 'blue',
    radius : 30000,
    fillOpacity: 0.2
} )
    .bindPopup('Twin cities metro')
    .addTo(map)


//let NormandaleCommunityCollege = [44.8297, -93.3312]
//let Normark = L.marker(NormandaleCommunityCollege)
 //   .bindPopup('NormandaleCommunityCollege <br> <a href="https://www.normandale.edu"> websote</a>')
  //  .addTo(map)


//let NorthHennepinCommunityCollege = [45.1054232,-93.3767558]
//let Northmark = L.marker(NorthHennepinCommunityCollege)
  //  .bindPopup('NorthHennepinCommunityCollege <br> <a href="https://nhcc.edu">website</a>')
  //  .addTo(map)

//let CenturyCollege = [45.0438494,-92.9862026]
//let CenteyMarked = L.marker(CenturyCollege)
  //  .bindPopup('CenturyCollege <br> <a href="https://www.century.edu/"> website</a>')
   // .addTo(map)



campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
campuses.forEach(function(collegeCampus){
    let markerText =  `<b>${collegeCampus.name}</b><br> <a href="${collegeCampus.website}">website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)

})






