import { setInner, addChild } from "https://jscroot.github.io/element/croot.js";
import { tableTemplate, tableRowClass, tableTag } from "../template/geocf.js";
import { map } from '../config/peta.js';
import ol from 'https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js';  // Import OpenLayers library

export function isiRowPoint(value) {
    if (value.geometry.type === "Point") {
        let content = tableTemplate
            .replace("#TYPE#", value.geometry.type)
            .replace("#NAME#", value.properties.name)
            .replace("#KORDINAT#", JSON.stringify(value.geometry.coordinates));
        addChild("lokasi", tableTag, tableRowClass, content);
    }
}

export function isiRowPolygon(value) {
    if (value.geometry.type === "Polygon") {
        let content = tableTemplate
            .replace("#TYPE#", value.geometry.type)
            .replace("#NAME#", value.properties.name)
            .replace("#KORDINAT#", JSON.stringify(value.geometry.coordinates));
        addChild("polygon", tableTag, tableRowClass, content);
    }
}

export function isiRowPolyline(value) {
    if (value.geometry.type === "LineString") {
        let content = tableTemplate
            .replace("#TYPE#", value.geometry.type)
            .replace("#NAME#", value.properties.name)
            .replace("#KORDINAT#", JSON.stringify(value.geometry.coordinates));
        addChild("line", tableTag, tableRowClass, content);
    }
}

export function MakeGeojsonFromAPI(value) {
    const geojsonFeatureCollection = {
        type: "FeatureCollection",
        features: value
    };

    const geojsonString = JSON.stringify(geojsonFeatureCollection, null, 2);

    // Convert to Blob
    const blob = new Blob([geojsonString], { type: "application/json" });

    // Create object URL
    const url = URL.createObjectURL(blob);

    // Return URL
    return url;
}

export function AddLayerToMAP(geojson) {
    const sourceData = new ol.source.Vector({
        url: geojson,
        format: new ol.format.GeoJSON(),
    });

    const layerPoint = new ol.layer.Vector({
        source: sourceData,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                src: 'img/icog.png',
                scale: 0.5,
                opacity: 1
            })
        })
    });

    const polyLayer = new ol.layer.Vector({
        source: sourceData,
        style: function (feature) {
            const featureType = feature.getGeometry().getType();

            if (featureType === 'Polygon') {
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'blue',
                        width: 2
                    })
                });
            } else {
                return new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'red',
                        width: 3
                    })
                });
            }
        }
    });

    map.addLayer(polyLayer);
    map.addLayer(layerPoint);
}

export function responseData(results) {
    results.forEach(isiRowPoint);
    results.forEach(isiRowPolygon);
    results.forEach(isiRowPolyline);
}
