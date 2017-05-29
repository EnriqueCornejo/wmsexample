var stamenLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});

var imageLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
        url: 'http://46.101.47.14:8080/rasdaman/ows',
        params: {'LAYERS': 'truemarble', "CRS":"EPSG:4326"}
    })
});


var layers = [stamenLayer, imageLayer];
var map = new ol.Map({
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({
            units: 'degrees'
        })
    ]),

    layers: layers,
    target: 'map',
    view: new ol.View({
	center: ol.proj.transform(
        [-117.619896, 33.430777], 'EPSG:4326', 'EPSG:3857'),
	zoom: 12
    })
});
