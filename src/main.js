import Vue from 'vue'
import App from './Main.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  el: '#cgMap',
  data: { 
      map: null,
      tileLayer: null,
      layers: [
          {
              id: 0,
              name: 'Restaurants',
              active: false,
              features: [
                  {
                  id: 0,
                  name: 'Bogart\'s Smokehouse',
                  type: 'marker',
                  coords: [38.6109607, -90.2050322],
                  },{
                      id: 1,
                      name: 'Pappy\'s Smokehouse',
                      type: 'marker',
                      coords: [38.6350008, -90.2261532],
                  },{
                      id: 2,
                      name: 'Broadway Oyster Bar',
                      type: 'marker',
                      coords: [38.6188362, -90.1947098],
                  },{
                      id: 3,
                      name: 'Charlie Gitto\'s On the Hill',
                      type: 'marker',
                      coords: [38.617972, -90.2756436],
                  },{
                      id: 4,
                      name: 'Sugarfire',
                      type: 'marker',
                      coords: [38.6304077, -90.1916921],
                  },{
                      id: 5,
                      name: 'The Shaved Duck',
                      type: 'marker',
                      coords: [38.6036282, -90.2381407],
                  },{
                      id: 6,
                      name: 'Mango Restaurant',
                      type: 'marker',
                      coords: [38.6313642, -90.1961267],
                  },{
                      id: 7,
                      name: 'Zia\'s Restaurant',
                      type: 'marker',
                      coords: [38.6157376, -90.27716],
                  },{
                      id: 8,
                      name: 'Anthonio\'s Taverna',
                      type: 'marker',
                      coords: [38.6143846, -90.280048],
                  }
              ]
          },
      ]
  },
  mounted() {
      this.initMap();
      this.initLayers();
  },
  methods: {
      initMap() {
          this.map = L.map('map').setView([42.3314, -83.0458], 10);
          this.tileLayer = L.tileLayer(
          'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
          {
              maxZoom: 18,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
          });
          this.tileLayer.addTo(this.map);
      },
      initLayers() {
          this.layers.forEach((layer) => {
              const markerFeatures = layer.features.filter(feature => feature.type === 'marker');

              markerFeatures.forEach((feature) => {
                  feature.leafletObject = L.marker(feature.coords)
                    .bindPopup(feature.name);
              });
          });
      },
      layerChanged(layerId, active) {
          const layer = this.layers.find(layer => layer.id === layerId);

          layer.features.forEach((feature) => {
              if (active) {
                  feature.leafletObject.addTo(this.map);
              } else {
                feature.leafletObject.removeFrom(this.map);
        }
      });
    }
  },
})
