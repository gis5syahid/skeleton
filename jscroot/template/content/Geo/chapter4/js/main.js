import { get } from "https://jscroot.github.io/api/croot.js";
import { URLGeoJson } from "./template/template.js";
import { MakeGeojsonFromAPI, responseData, AddLayerToMAP } from "./controller/controller.js";
import { map } from './config/configpeta.js';
import { onClosePopupClick, onDeleteMarkerClick, onSubmitMarkerClick, onMapClick, onMapPointerMove, disposePopover } from './controller/popup.js';
import { onClick } from 'https://jscroot.github.io/element/croot.js';
import { getAllCoordinates } from './controller/cog.js';

export function main() {
    // Event listeners
    onClick('popup-closer', onClosePopupClick);
    onClick('insertmarkerbutton', onSubmitMarkerClick);
    onClick('hapusbutton', onDeleteMarkerClick);
    onClick('hitungcogbutton', getAllCoordinates);

    map.on('click', onMapClick);
    map.on('pointermove', onMapPointerMove);
    map.on('movestart', disposePopover);

    // Array to store all coordinates
    let allCoordinates = [];
    map.on('click', function (event) {
        let lonLat = ol.proj.toLonLat(event.coordinate);
        allCoordinates.push(lonLat);
        console.log(lonLat);
    });

    // Fetch GeoJSON data and process
    get(URLGeoJson, data => {
        responseData(data);
        let link = MakeGeojsonFromAPI(data);
        AddLayerToMAP(link);
        drawer(link);
    });
}

// Call the main function
main();