var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_RRZEOpenStreetMapStandardHD_1 = new ol.layer.Tile({
            'title': 'RRZE OpenStreetMap Standard HD',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://a.osm.rrze.fau.de/osmhd/{z}/{x}/{y}.png'
            })
        });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_2, 
                style: style_building_2,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });
var format_highway_pointshighway_4 = new ol.format.GeoJSON();
var features_highway_pointshighway_4 = format_highway_pointshighway_4.readFeatures(json_highway_pointshighway_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_pointshighway_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_pointshighway_4.addFeatures(features_highway_pointshighway_4);
var lyr_highway_pointshighway_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_pointshighway_4, 
                style: style_highway_pointshighway_4,
                popuplayertitle: 'highway_points — highway',
                interactive: true,
                title: '<img src="styles/legend/highway_pointshighway_4.png" /> highway_points — highway'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_RRZEOpenStreetMapStandardHD_1.setVisible(true);lyr_building_2.setVisible(true);lyr_highway_3.setVisible(true);lyr_highway_pointshighway_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RRZEOpenStreetMapStandardHD_1,lyr_building_2,lyr_highway_3,lyr_highway_pointshighway_4];
lyr_building_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'religion': 'religion', 'ref:sobory.ru': 'ref:sobory.ru', 'name:ru': 'name:ru', 'denomination': 'denomination', 'layer': 'layer', 'building:levels': 'building:levels', 'addr:postcode': 'addr:postcode', 'type': 'type', 'start_date': 'start_date', 'official_name': 'official_name', 'name': 'name', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:fax': 'contact:fax', 'contact:email': 'contact:email', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'maxspeed:forward': 'maxspeed:forward', 'oneway': 'oneway', 'source:maxspeed': 'source:maxspeed', 'maxspeed': 'maxspeed', 'lanes:forward': 'lanes:forward', 'lanes': 'lanes', 'surface': 'surface', 'ref': 'ref', 'name': 'name', });
lyr_highway_pointshighway_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'barrier': 'barrier', 'access': 'access', 'crossing': 'crossing', 'name': 'name', 'public_transport': 'public_transport', 'bus': 'bus', 'railway': 'railway', });
lyr_building_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'religion': 'TextEdit', 'ref:sobory.ru': 'TextEdit', 'name:ru': 'TextEdit', 'denomination': 'TextEdit', 'layer': 'TextEdit', 'building:levels': 'TextEdit', 'addr:postcode': 'TextEdit', 'type': 'TextEdit', 'start_date': 'TextEdit', 'official_name': 'TextEdit', 'name': 'TextEdit', 'contact:website': 'TextEdit', 'contact:phone': 'TextEdit', 'contact:fax': 'TextEdit', 'contact:email': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': '', });
lyr_highway_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'maxspeed:forward': 'TextEdit', 'oneway': 'TextEdit', 'source:maxspeed': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes:forward': 'TextEdit', 'lanes': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'name': 'TextEdit', });
lyr_highway_pointshighway_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'crossing': 'TextEdit', 'name': 'TextEdit', 'public_transport': 'TextEdit', 'bus': 'TextEdit', 'railway': 'TextEdit', });
lyr_building_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'religion': 'no label', 'ref:sobory.ru': 'no label', 'name:ru': 'no label', 'denomination': 'no label', 'layer': 'no label', 'building:levels': 'no label', 'addr:postcode': 'no label', 'type': 'no label', 'start_date': 'no label', 'official_name': 'no label', 'name': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:fax': 'no label', 'contact:email': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'maxspeed:forward': 'no label', 'oneway': 'no label', 'source:maxspeed': 'no label', 'maxspeed': 'no label', 'lanes:forward': 'no label', 'lanes': 'no label', 'surface': 'no label', 'ref': 'no label', 'name': 'no label', });
lyr_highway_pointshighway_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'barrier': 'no label', 'access': 'no label', 'crossing': 'no label', 'name': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'railway': 'no label', });
lyr_highway_pointshighway_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});