var wms_layers = [];


        var lyr_GoogleEarthHybrid_0 = new ol.layer.Tile({
            'title': 'Google Earth Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Pathum_Thani_1 = new ol.format.GeoJSON();
var features_Pathum_Thani_1 = format_Pathum_Thani_1.readFeatures(json_Pathum_Thani_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pathum_Thani_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pathum_Thani_1.addFeatures(features_Pathum_Thani_1);
var lyr_Pathum_Thani_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pathum_Thani_1, 
                style: style_Pathum_Thani_1,
                interactive: true,
                title: '<img src="styles/legend/Pathum_Thani_1.png" /> Pathum_Thani'
            });
var format_Khlong_Luang_2 = new ol.format.GeoJSON();
var features_Khlong_Luang_2 = format_Khlong_Luang_2.readFeatures(json_Khlong_Luang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khlong_Luang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khlong_Luang_2.addFeatures(features_Khlong_Luang_2);
var lyr_Khlong_Luang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khlong_Luang_2, 
                style: style_Khlong_Luang_2,
                interactive: true,
                title: '<img src="styles/legend/Khlong_Luang_2.png" /> Khlong_Luang'
            });
var format_Khlong_Luang_Road_3 = new ol.format.GeoJSON();
var features_Khlong_Luang_Road_3 = format_Khlong_Luang_Road_3.readFeatures(json_Khlong_Luang_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khlong_Luang_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khlong_Luang_Road_3.addFeatures(features_Khlong_Luang_Road_3);
var lyr_Khlong_Luang_Road_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Khlong_Luang_Road_3, 
                style: style_Khlong_Luang_Road_3,
                interactive: true,
                title: '<img src="styles/legend/Khlong_Luang_Road_3.png" /> Khlong_Luang_Road'
            });
var format_AIT_Campus_4 = new ol.format.GeoJSON();
var features_AIT_Campus_4 = format_AIT_Campus_4.readFeatures(json_AIT_Campus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIT_Campus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIT_Campus_4.addFeatures(features_AIT_Campus_4);
var lyr_AIT_Campus_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AIT_Campus_4, 
                style: style_AIT_Campus_4,
                interactive: true,
                title: '<img src="styles/legend/AIT_Campus_4.png" /> AIT_Campus'
            });
var format_Thammasat_Campus_5 = new ol.format.GeoJSON();
var features_Thammasat_Campus_5 = format_Thammasat_Campus_5.readFeatures(json_Thammasat_Campus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thammasat_Campus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thammasat_Campus_5.addFeatures(features_Thammasat_Campus_5);
var lyr_Thammasat_Campus_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Thammasat_Campus_5, 
                style: style_Thammasat_Campus_5,
                interactive: true,
                title: '<img src="styles/legend/Thammasat_Campus_5.png" /> Thammasat_Campus'
            });
var format_Possible_Slum_polygon_6 = new ol.format.GeoJSON();
var features_Possible_Slum_polygon_6 = format_Possible_Slum_polygon_6.readFeatures(json_Possible_Slum_polygon_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possible_Slum_polygon_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possible_Slum_polygon_6.addFeatures(features_Possible_Slum_polygon_6);
var lyr_Possible_Slum_polygon_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Possible_Slum_polygon_6, 
                style: style_Possible_Slum_polygon_6,
                interactive: true,
                title: '<img src="styles/legend/Possible_Slum_polygon_6.png" /> Possible_Slum_polygon'
            });
var format_Possible_Slum_Points_7 = new ol.format.GeoJSON();
var features_Possible_Slum_Points_7 = format_Possible_Slum_Points_7.readFeatures(json_Possible_Slum_Points_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Possible_Slum_Points_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Possible_Slum_Points_7.addFeatures(features_Possible_Slum_Points_7);
var lyr_Possible_Slum_Points_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Possible_Slum_Points_7, 
                style: style_Possible_Slum_Points_7,
                interactive: false,
                title: '<img src="styles/legend/Possible_Slum_Points_7.png" /> Possible_Slum_Points'
            });

lyr_GoogleEarthHybrid_0.setVisible(true);lyr_Pathum_Thani_1.setVisible(false);lyr_Khlong_Luang_2.setVisible(false);lyr_Khlong_Luang_Road_3.setVisible(true);lyr_AIT_Campus_4.setVisible(true);lyr_Thammasat_Campus_5.setVisible(true);lyr_Possible_Slum_polygon_6.setVisible(true);lyr_Possible_Slum_Points_7.setVisible(true);
var layersList = [lyr_GoogleEarthHybrid_0,lyr_Pathum_Thani_1,lyr_Khlong_Luang_2,lyr_Khlong_Luang_Road_3,lyr_AIT_Campus_4,lyr_Thammasat_Campus_5,lyr_Possible_Slum_polygon_6,lyr_Possible_Slum_Points_7];
lyr_Pathum_Thani_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Khlong_Luang_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_TH': 'ADM2_TH', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM2ALT1TH': 'ADM2ALT1TH', 'ADM2ALT2TH': 'ADM2ALT2TH', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Khlong_Luang_Road_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_AIT_Campus_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Thammasat_Campus_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Possible_Slum_polygon_6.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Possible_Slum_Points_7.set('fieldAliases', {'Name': 'Name', });
lyr_Pathum_Thani_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Khlong_Luang_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_TH': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM2ALT1TH': 'TextEdit', 'ADM2ALT2TH': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_Khlong_Luang_Road_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AIT_Campus_4.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Thammasat_Campus_5.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Possible_Slum_polygon_6.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Possible_Slum_Points_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Pathum_Thani_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Khlong_Luang_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_TH': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM2ALT1TH': 'no label', 'ADM2ALT2TH': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Khlong_Luang_Road_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'header label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_AIT_Campus_4.set('fieldLabels', {'OID_': 'no label', 'Name': 'header label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Thammasat_Campus_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'header label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Possible_Slum_polygon_6.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Possible_Slum_Points_7.set('fieldLabels', {'Name': 'no label', });
lyr_Possible_Slum_Points_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});