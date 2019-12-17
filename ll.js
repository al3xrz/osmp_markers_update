var map = L.map('map', {
    center: [42.961903,47.549033],
    zoom: 13
});
var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(osm);
var layerGroup = L.layerGroup().addTo(map);
var markers = [];
var icons = [green_icon, yellow_icon, red_icon];

marker_1 = L.marker([42.959350,47.552572], {  icon: green_icon } ).bindPopup('text marker 1');
marker_2 = L.marker([42.961903,47.549033], {  icon: yellow_icon } ).bindPopup('text marker 2');
marker_3 = L.marker([42.961758,47.512626], {  icon: red_icon } ).bindPopup('text marker 3');


markers.push(marker_1);
markers.push(marker_2);
markers.push(marker_3);

for (m of markers) {
    m.addTo(layerGroup)
}

var counter = 0;
setInterval(function() {
    markers[0].setIcon(icons[counter]);
    markers[0].setPopupContent('Update ' + counter);
    console.log('Update '+ counter++);
    if(counter > 2) {counter = 0; }



    // $.ajax({
    //     type: 'GET',
    //     url: '/main/complexes_info',
    //     data: "",
    //     success: function(data) {
    //         prepare_map(data);
    //         draw_map(markers);
    //
    //
    //
    //         scrollPos = $(".dataTables_scrollBody").scrollTop();
    //         //console.log(scrollPos);
    //         $('#problem_table').dataTable().fnClearTable();
    //         $('#problem_table').dataTable().fnAddData(objects);
    //         $('#problem_table').dataTable().fnDraw(false);
    //
    //         $(".dataTables_scrollBody").scrollTop(scrollPos);
    //
    //
    //
    //     }
    // });

}, 5000);
