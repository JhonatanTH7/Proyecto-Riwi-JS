require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

    esriConfig.apiKey = "AAPKfa09e355e18540518953e490d7c73beeGA0EC15Nc1X7XbB-PoTqGPjKB3PEdh5l9aR4Zt1AHVtSF6hDdc7PJvU8AMmugCpT";

    const map = new Map({
      basemap: "arcgis/topographic" // basemap styles service
    });

    const view = new MapView({
      map: map,
      center: [-75.5635900, 6.2518400], // Longitude, latitude
      zoom: 13, // Zoom level
      container: "viewDiv" // Div element
    });

  });