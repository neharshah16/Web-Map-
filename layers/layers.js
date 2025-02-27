var wms_layers = [];

var format_LandUse_0 = new ol.format.GeoJSON();
var features_LandUse_0 = format_LandUse_0.readFeatures(json_LandUse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandUse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandUse_0.addFeatures(features_LandUse_0);
var lyr_LandUse_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandUse_0, 
                style: style_LandUse_0,
                popuplayertitle: "LandUse",
                interactive: false,
    title: 'LandUse<br />\
    <img src="styles/legend/LandUse_0_0.png" /> Residential<br />\
    <img src="styles/legend/LandUse_0_1.png" /> <br />\
    <img src="styles/legend/LandUse_0_2.png" /> <br />\
    <img src="styles/legend/LandUse_0_3.png" /> Slum Cluster<br />\
    <img src="styles/legend/LandUse_0_4.png" /> Open Space<br />\
    <img src="styles/legend/LandUse_0_5.png" /> Commercial<br />\
    <img src="styles/legend/LandUse_0_6.png" /> Public Utility and Facility<br />\
    <img src="styles/legend/LandUse_0_7.png" /> Municipal Office<br />\
    <img src="styles/legend/LandUse_0_8.png" /> Under Construction<br />\
    <img src="styles/legend/LandUse_0_9.png" /> Social Amenities<br />\
    <img src="styles/legend/LandUse_0_10.png" /> Educational Amenities<br />\
    <img src="styles/legend/LandUse_0_11.png" /> Government Office<br />\
    <img src="styles/legend/LandUse_0_12.png" /> Law & Order<br />\
    <img src="styles/legend/LandUse_0_13.png" /> Other Offices<br />\
    <img src="styles/legend/LandUse_0_14.png" /> Vacant Land<br />\
    <img src="styles/legend/LandUse_0_15.png" /> Medical Amenities<br />'
        });
var format_BuildingFootprints_1 = new ol.format.GeoJSON();
var features_BuildingFootprints_1 = format_BuildingFootprints_1.readFeatures(json_BuildingFootprints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingFootprints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingFootprints_1.addFeatures(features_BuildingFootprints_1);
var lyr_BuildingFootprints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingFootprints_1, 
                style: style_BuildingFootprints_1,
                popuplayertitle: "Building Footprints",
                interactive: true,
                title: '<img src="styles/legend/BuildingFootprints_1.png" /> Building Footprints'
            });
var group_VectorLayers = new ol.layer.Group({
                                layers: [lyr_LandUse_0,lyr_BuildingFootprints_1,],
                                fold: "open",
                                title: "Vector Layers"});
var group_Roads = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Roads"});
var group_RasterLayers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Raster Layers"});

lyr_LandUse_0.setVisible(true);lyr_BuildingFootprints_1.setVisible(true);
var layersList = [group_VectorLayers];
lyr_LandUse_0.set('fieldAliases', {'id': 'id', 'CTS Number': 'CTS Number', 'Gaothan ?': 'Gaothan ?', 'LU-DP\'67': 'LU-DP\'67', 'LU-DP\'81': 'LU-DP\'81', 'LU-ELU\'14': 'LU-ELU\'14', 'LU-DP\'1634': 'LU-DP\'1634', 'LU-OnSite': 'LU-OnSite', });
lyr_BuildingFootprints_1.set('fieldAliases', {'id': 'id', 'bldg_ht': 'Height of building (in no. of storeys)', 'bldg_cond': 'Condition of building', 'bldg_use': 'Current use of building', 'heritage': 'Is it a classified heritage building ?', 'grade': 'Heritage grade of the building ', 'age': 'Age of the building in decades', 'redev': 'Has the building undergone redevelopment ?', 'occupied': 'Occupied or not ? (Y/N)', 'roof_type': 'Type of roof ', 'modif': 'Has the building undergone modifications ?', 'number_fam': 'Number of families occupying the building', 'number_sho': 'Number of shops in the building', 'semipublic': 'Does the building have a semi-public interface ? (verandah, balcao, etc)', 'bldg_owner': 'Ownership of the building', 'community': 'Community occupying the building', 'remarks': 'Remarks', });
lyr_LandUse_0.set('fieldImages', {'id': 'TextEdit', 'CTS Number': 'TextEdit', 'Gaothan ?': 'TextEdit', 'LU-DP\'67': 'TextEdit', 'LU-DP\'81': 'TextEdit', 'LU-ELU\'14': 'TextEdit', 'LU-DP\'1634': 'TextEdit', 'LU-OnSite': 'TextEdit', });
lyr_BuildingFootprints_1.set('fieldImages', {'id': 'Hidden', 'bldg_ht': 'Range', 'bldg_cond': 'ValueMap', 'bldg_use': 'UniqueValues', 'heritage': 'CheckBox', 'grade': 'ValueMap', 'age': 'Range', 'redev': 'CheckBox', 'occupied': 'CheckBox', 'roof_type': 'ValueMap', 'modif': 'CheckBox', 'number_fam': 'TextEdit', 'number_sho': 'TextEdit', 'semipublic': 'CheckBox', 'bldg_owner': 'UniqueValues', 'community': 'UniqueValues', 'remarks': 'TextEdit', });
lyr_LandUse_0.set('fieldLabels', {'id': 'no label', 'CTS Number': 'no label', 'Gaothan ?': 'no label', 'LU-DP\'67': 'no label', 'LU-DP\'81': 'no label', 'LU-ELU\'14': 'no label', 'LU-DP\'1634': 'no label', 'LU-OnSite': 'no label', });
lyr_BuildingFootprints_1.set('fieldLabels', {'bldg_ht': 'no label', 'bldg_cond': 'no label', 'bldg_use': 'no label', 'heritage': 'no label', 'grade': 'no label', 'age': 'no label', 'redev': 'no label', 'occupied': 'no label', 'roof_type': 'no label', 'modif': 'no label', 'number_fam': 'no label', 'number_sho': 'no label', 'semipublic': 'no label', 'bldg_owner': 'no label', 'community': 'no label', 'remarks': 'no label', });
lyr_BuildingFootprints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});