export function main() {
    function processFeatureRow(table, feature) {
        const row = table.insertRow();
        const nameCell = row.insertCell(0);
        const coordinatesCell = row.insertCell(1);
        const typeCell = row.insertCell(2);

        // Set nameCell based on properties
        if (feature.properties.Alamat && feature.properties.Jalan) {
            nameCell.innerText = `${feature.properties.Point}, ${feature.properties.Alamat}, ${feature.properties.Jalan}`;
        } else if (feature.properties.Alamat) {
            nameCell.innerText = `${feature.properties.Alamat}`;
        } else if (feature.properties.Jalan) {
            nameCell.innerText = `${feature.properties.Jalan}`;
        } else {
            nameCell.innerText = feature.properties.Point;
        }

        coordinatesCell.innerText = JSON.stringify(feature.geometry.coordinates);
        typeCell.innerText = feature.geometry.type;
    }

    const pointTable = document.getElementById("pointTable").getElementsByTagName('tbody')[0];
    const polygonTable = document.getElementById("polygonTable").getElementsByTagName('tbody')[0];
    const polylineTable = document.getElementById("polylineTable").getElementsByTagName('tbody')[0];

    fetch("./Aceh.json")
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {
                if (feature.geometry.type === "Point") {
                    processFeatureRow(pointTable, feature);
                } else if (feature.geometry.type === "Polygon") {
                    processFeatureRow(polygonTable, feature);
                } else if (feature.geometry.type === "LineString") {
                    processFeatureRow(polylineTable, feature);
                }
            });
        })
        .catch(error => console.error("Terjadi kesalahan:", error));
}