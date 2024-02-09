import { fromLonLat } from 'https://cdn.skypack.dev/ol/proj.js';
import { container } from 'https://jscroot.github.io/element/croot.js';

const attributions = '<a href="https://msyahidalfajri.github.io/" target="_blank">&copy; syahid Indonesia</a> ';

const place = [95.31698479581092,5.556675903644546];

const basemap = new ol.layer.Tile({
    source: new ol.source.OSM({
        attributions: attributions,
    }),
});

const defaultstartmap = new ol.View({
    center: fromLonLat(place),
    zoom: 15.2,
});

export const overlay = new ol.Overlay({
    element: container('popup'),
    autoPan: {
        animation: {
        duration: 250,
        },
    },
  });

export const popupinfo = new ol.Overlay({
    element: container('popupinfo'),
    autoPan: {
        animation: {
        duration: 250,
        },
    },
});

export let map = new ol.Map({
    layers: [
        basemap
    ],
    overlays: [overlay,popupinfo],
    target: 'map',
    view: defaultstartmap,
});