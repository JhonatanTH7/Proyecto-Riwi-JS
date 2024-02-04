require(["esri/config", "esri/Map", "esri/Basemap", "esri/views/SceneView", "esri/layers/RouteLayer",
  "esri/widgets/Directions", "esri/widgets/Search", "esri/widgets/Locate"],
  function (esriConfig, Map, Basemap, SceneView, RouteLayer, Directions, Search, Locate) {

    esriConfig.apiKey = "AAPKfa09e355e18540518953e490d7c73beeGA0EC15Nc1X7XbB-PoTqGPjKB3PEdh5l9aR4Zt1AHVtSF6hDdc7PJvU8AMmugCpT";

    const routeLayer = new RouteLayer();

    /* streets, imagery, navigation, topography, light gray canvas, o outdoors */
    const scene = new Map({
      basemap: new Basemap({
        portalItem: {
          id: "1754f80e7e6644e28ce0c4d35066e392" // References the 3D Topographic Basemap
        }
      }),
      ground: "world-elevation",
      layers: [routeLayer]
    }
    );

    const view = new SceneView({
      map: scene,
      camera: {
        position: {
          x: -75.5635900,
          y: 6.2518400,
          z: 1900
        },
        tilt: 75
      },
      container: "viewDiv"
    });

    let directionsWidget = new Directions({
      layer: routeLayer,
      view
    });

    view.ui.add(directionsWidget, {
      position: "top-right"
    });

    // const locate = new Locate({
    //   view: view,
    //   useHeadingEnabled: false,
    //   goToOverride: function (view, options) {
    //     options.target.scale = 1500;
    //     return view.goTo(options.target);
    //   }
    // });
    // view.ui.add(locate, "top-left");

    // const searchWidget = new Search({
    //   view: view
    // });

    // view.ui.add(searchWidget, {
    //   position: "top-right"
    // });


  })

