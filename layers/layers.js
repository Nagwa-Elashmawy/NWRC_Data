var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'الجهة المستفيدة',
                interactive: true,
    title: 'الجهة المستفيدة<br />\
    <img src="styles/legend/_1_0.png" /> وزارة الموارد المائية والرى<br />\
    <img src="styles/legend/_1_1.png" /> جهات حكومية<br />\
    <img src="styles/legend/_1_2.png" /> جهات أخرى (افراد / مؤسسات)<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'العام المالي',
                interactive: true,
    title: 'العام المالي<br />\
    <img src="styles/legend/_2_0.png" /> 23/24<br />\
    <img src="styles/legend/_2_1.png" /> 24/25<br />\
    <img src="styles/legend/_2_2.png" /> 23/24 - 24/25<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'الإنجاز',
                interactive: true,
    title: 'الإنجاز<br />\
    <img src="styles/legend/_3_0.png" /> تحت التنفيذ<br />\
    <img src="styles/legend/_3_1.png" /> دراسة منتهية<br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'المعاهد',
                interactive: true,
    title: 'المعاهد<br />\
    <img src="styles/legend/_4_0.png" /> CLEQM<br />\
    <img src="styles/legend/_4_1.png" /> CMRI<br />\
    <img src="styles/legend/_4_2.png" /> CORI<br />\
    <img src="styles/legend/_4_3.png" /> CRI<br />\
    <img src="styles/legend/_4_4.png" /> DRI<br />\
    <img src="styles/legend/_4_5.png" /> ECRI<br />\
    <img src="styles/legend/_4_6.png" /> HRI<br />\
    <img src="styles/legend/_4_7.png" /> MERI<br />\
    <img src="styles/legend/_4_8.png" /> NRI<br />\
    <img src="styles/legend/_4_9.png" /> NWRC<br />\
    <img src="styles/legend/_4_10.png" /> RIGW<br />\
    <img src="styles/legend/_4_11.png" /> SRI<br />\
    <img src="styles/legend/_4_12.png" /> WMRI<br />\
    <img src="styles/legend/_4_13.png" /> WRRI<br />' });

lyr_GoogleMap_0.setVisible(true);lyr__1.setVisible(false);lyr__2.setVisible(false);lyr__3.setVisible(false);lyr__4.setVisible(true);
var layersList = [lyr_GoogleMap_0,lyr__1,lyr__2,lyr__3,lyr__4];
lyr__1.set('fieldAliases', {'Institute': 'Institute', 'Proj_Num': 'Proj_Num', 'Proj_Name': 'Proj_Name', 'Budget': 'Budget', 'Remain': 'Remain', 'Proj_Goal': 'Proj_Goal', 'Strt_Date': 'Strt_Date', 'Plan_end_D': 'Plan_end_D', 'Act_end_Da': 'Act_end_Da', 'Achievemen': 'Achievemen', 'Constrain': 'Constrain', 'Benef_Cate': 'Benef_Cate', 'Beneficial': 'Beneficial', 'Study_Area': 'Study_Area', 'Outcomes': 'Outcomes', 'Study_Type': 'Study_Type', 'Year': 'Year', 'Fiscal_yea': 'Fiscal_yea', 'Long': 'Long', 'Lat': 'Lat', 'From_GE': 'From_GE', 'Study_Stat': 'Study_Stat', });
lyr__2.set('fieldAliases', {'Institute': 'Institute', 'Proj_Num': 'Proj_Num', 'Proj_Name': 'Proj_Name', 'Budget': 'Budget', 'Remain': 'Remain', 'Proj_Goal': 'Proj_Goal', 'Strt_Date': 'Strt_Date', 'Plan_end_D': 'Plan_end_D', 'Act_end_Da': 'Act_end_Da', 'Achievemen': 'Achievemen', 'Constrain': 'Constrain', 'Benef_Cate': 'Benef_Cate', 'Beneficial': 'Beneficial', 'Study_Area': 'Study_Area', 'Outcomes': 'Outcomes', 'Study_Type': 'Study_Type', 'Year': 'Year', 'Fiscal_yea': 'Fiscal_yea', 'Long': 'Long', 'Lat': 'Lat', 'From_GE': 'From_GE', 'Study_Stat': 'Study_Stat', });
lyr__3.set('fieldAliases', {'Institute': 'Institute', 'Proj_Num': 'Proj_Num', 'Proj_Name': 'Proj_Name', 'Budget': 'Budget', 'Remain': 'Remain', 'Proj_Goal': 'Proj_Goal', 'Strt_Date': 'Strt_Date', 'Plan_end_D': 'Plan_end_D', 'Act_end_Da': 'Act_end_Da', 'Achievemen': 'Achievemen', 'Constrain': 'Constrain', 'Benef_Cate': 'Benef_Cate', 'Beneficial': 'Beneficial', 'Study_Area': 'Study_Area', 'Outcomes': 'Outcomes', 'Study_Type': 'Study_Type', 'Year': 'Year', 'Fiscal_yea': 'Fiscal_yea', 'Long': 'Long', 'Lat': 'Lat', 'From_GE': 'From_GE', 'Study_Stat': 'Study_Stat', });
lyr__4.set('fieldAliases', {'Institute': 'Institute', 'Proj_Num': 'Proj_Num', 'Proj_Name': 'Proj_Name', 'Budget': 'Budget', 'Remain': 'Remain', 'Proj_Goal': 'Proj_Goal', 'Strt_Date': 'Strt_Date', 'Plan_end_D': 'Plan_end_D', 'Act_end_Da': 'Act_end_Da', 'Achievemen': 'Achievemen', 'Constrain': 'Constrain', 'Benef_Cate': 'Benef_Cate', 'Beneficial': 'Beneficial', 'Study_Area': 'Study_Area', 'Outcomes': 'Outcomes', 'Study_Type': 'Study_Type', 'Year': 'Year', 'Fiscal_yea': 'Fiscal_yea', 'Long': 'Long', 'Lat': 'Lat', 'From_GE': 'From_GE', 'Study_Stat': 'Study_Stat', });
lyr__1.set('fieldImages', {'Institute': 'TextEdit', 'Proj_Num': 'TextEdit', 'Proj_Name': 'TextEdit', 'Budget': 'TextEdit', 'Remain': 'TextEdit', 'Proj_Goal': 'TextEdit', 'Strt_Date': 'TextEdit', 'Plan_end_D': 'TextEdit', 'Act_end_Da': 'TextEdit', 'Achievemen': 'TextEdit', 'Constrain': 'TextEdit', 'Benef_Cate': 'TextEdit', 'Beneficial': 'TextEdit', 'Study_Area': 'TextEdit', 'Outcomes': 'TextEdit', 'Study_Type': 'TextEdit', 'Year': 'TextEdit', 'Fiscal_yea': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'From_GE': 'TextEdit', 'Study_Stat': 'TextEdit', });
lyr__2.set('fieldImages', {'Institute': 'TextEdit', 'Proj_Num': 'TextEdit', 'Proj_Name': 'TextEdit', 'Budget': 'TextEdit', 'Remain': 'TextEdit', 'Proj_Goal': 'TextEdit', 'Strt_Date': 'TextEdit', 'Plan_end_D': 'TextEdit', 'Act_end_Da': 'TextEdit', 'Achievemen': 'TextEdit', 'Constrain': 'TextEdit', 'Benef_Cate': 'TextEdit', 'Beneficial': 'TextEdit', 'Study_Area': 'TextEdit', 'Outcomes': 'TextEdit', 'Study_Type': 'TextEdit', 'Year': 'TextEdit', 'Fiscal_yea': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'From_GE': 'TextEdit', 'Study_Stat': 'TextEdit', });
lyr__3.set('fieldImages', {'Institute': 'TextEdit', 'Proj_Num': 'TextEdit', 'Proj_Name': 'TextEdit', 'Budget': 'TextEdit', 'Remain': 'TextEdit', 'Proj_Goal': 'TextEdit', 'Strt_Date': 'TextEdit', 'Plan_end_D': 'TextEdit', 'Act_end_Da': 'TextEdit', 'Achievemen': 'TextEdit', 'Constrain': 'TextEdit', 'Benef_Cate': 'TextEdit', 'Beneficial': 'TextEdit', 'Study_Area': 'TextEdit', 'Outcomes': 'TextEdit', 'Study_Type': 'TextEdit', 'Year': 'TextEdit', 'Fiscal_yea': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'From_GE': 'TextEdit', 'Study_Stat': 'TextEdit', });
lyr__4.set('fieldImages', {'Institute': 'TextEdit', 'Proj_Num': 'TextEdit', 'Proj_Name': 'TextEdit', 'Budget': 'TextEdit', 'Remain': 'TextEdit', 'Proj_Goal': 'TextEdit', 'Strt_Date': 'TextEdit', 'Plan_end_D': 'TextEdit', 'Act_end_Da': 'TextEdit', 'Achievemen': 'TextEdit', 'Constrain': 'TextEdit', 'Benef_Cate': 'TextEdit', 'Beneficial': 'TextEdit', 'Study_Area': 'TextEdit', 'Outcomes': 'TextEdit', 'Study_Type': 'TextEdit', 'Year': 'TextEdit', 'Fiscal_yea': 'TextEdit', 'Long': 'TextEdit', 'Lat': 'TextEdit', 'From_GE': 'TextEdit', 'Study_Stat': 'TextEdit', });
lyr__1.set('fieldLabels', {'Institute': 'inline label - always visible', 'Proj_Num': 'inline label - visible with data', 'Proj_Name': 'inline label - visible with data', 'Budget': 'hidden field', 'Remain': 'hidden field', 'Proj_Goal': 'hidden field', 'Strt_Date': 'hidden field', 'Plan_end_D': 'hidden field', 'Act_end_Da': 'hidden field', 'Achievemen': 'hidden field', 'Constrain': 'hidden field', 'Benef_Cate': 'inline label - visible with data', 'Beneficial': 'inline label - visible with data', 'Study_Area': 'hidden field', 'Outcomes': 'hidden field', 'Study_Type': 'inline label - visible with data', 'Year': 'hidden field', 'Fiscal_yea': 'inline label - visible with data', 'Long': 'hidden field', 'Lat': 'hidden field', 'From_GE': 'hidden field', 'Study_Stat': 'no label', });
lyr__2.set('fieldLabels', {'Institute': 'inline label - visible with data', 'Proj_Num': 'inline label - visible with data', 'Proj_Name': 'inline label - visible with data', 'Budget': 'hidden field', 'Remain': 'hidden field', 'Proj_Goal': 'hidden field', 'Strt_Date': 'hidden field', 'Plan_end_D': 'hidden field', 'Act_end_Da': 'hidden field', 'Achievemen': 'hidden field', 'Constrain': 'hidden field', 'Benef_Cate': 'inline label - visible with data', 'Beneficial': 'inline label - visible with data', 'Study_Area': 'hidden field', 'Outcomes': 'hidden field', 'Study_Type': 'hidden field', 'Year': 'hidden field', 'Fiscal_yea': 'inline label - visible with data', 'Long': 'hidden field', 'Lat': 'hidden field', 'From_GE': 'hidden field', 'Study_Stat': 'no label', });
lyr__3.set('fieldLabels', {'Institute': 'inline label - visible with data', 'Proj_Num': 'inline label - visible with data', 'Proj_Name': 'inline label - visible with data', 'Budget': 'hidden field', 'Remain': 'hidden field', 'Proj_Goal': 'hidden field', 'Strt_Date': 'hidden field', 'Plan_end_D': 'hidden field', 'Act_end_Da': 'hidden field', 'Achievemen': 'hidden field', 'Constrain': 'hidden field', 'Benef_Cate': 'inline label - visible with data', 'Beneficial': 'inline label - visible with data', 'Study_Area': 'hidden field', 'Outcomes': 'hidden field', 'Study_Type': 'inline label - visible with data', 'Year': 'hidden field', 'Fiscal_yea': 'inline label - visible with data', 'Long': 'hidden field', 'Lat': 'hidden field', 'From_GE': 'hidden field', 'Study_Stat': 'no label', });
lyr__4.set('fieldLabels', {'Institute': 'inline label - visible with data', 'Proj_Num': 'inline label - visible with data', 'Proj_Name': 'inline label - visible with data', 'Budget': 'hidden field', 'Remain': 'hidden field', 'Proj_Goal': 'hidden field', 'Strt_Date': 'hidden field', 'Plan_end_D': 'hidden field', 'Act_end_Da': 'hidden field', 'Achievemen': 'hidden field', 'Constrain': 'hidden field', 'Benef_Cate': 'inline label - visible with data', 'Beneficial': 'inline label - visible with data', 'Study_Area': 'hidden field', 'Outcomes': 'hidden field', 'Study_Type': 'inline label - visible with data', 'Year': 'hidden field', 'Fiscal_yea': 'inline label - visible with data', 'Long': 'hidden field', 'Lat': 'hidden field', 'From_GE': 'hidden field', 'Study_Stat': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});