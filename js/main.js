//load map onload
window.onload = setMap();

//set up choropleth map
function setMap(){
    //load base datasets simultaneously
    d3_queue.queue()
        .defer(d3.json, "../../data/land.topojson") //load background spatial data
        //.defer(d3.json, "data/FranceProvinces.topojson") //load UK overlay
        //.defer(d3.json, "data/FranceProvinces.topojson") //load Spain overlay
        //.defer(d3.json, "data/FranceProvinces.topojson") //load Netherlands overlay
        //.defer(d3.json, "data/FranceProvinces.topojson") //load France overlay
		.await(callback);
        
        function callback(error, baseMap){
        console.log(error);
        console.log(baseMap);

    };
};