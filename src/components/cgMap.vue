<template>
 
  <div>
    <Mapbox
    access-token="pk.eyJ1IjoiamZpbmNoZXI3NCIsImEiOiJjanQ1OXE4ejgwNDZrM3lvZGJzMDVkbnlwIn0.q8lU93y6VdPytpbsK9DiOw"
    :map-options="{
		style: 'mapbox://styles/mapbox/light-v9',
		center: [-96, 37.8],
		zoom: 3
    }"
    :nav-control="{
    show: false,
    position: 'top-left',
    options: {}
    }"
    :scale-control="{
    show: false,
    position: 'top-left',
    options: {}
    }"
    :geo-locate-control="{
    show: false,
    position: 'top-left',
    options: {}
    }"
    :fullscreen-control="{
      show: true,
      position: 'top-left'
    }"
    :markers="[{
		location: [-96, 37.8],
		title: 'some location',
		body: 'some location description and popup body (it can also be html)'
	  }]">
    </Mapbox>
  </div>

</template>

<script>
import Mapbox from 'vue2-mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  components: {
		cgMap
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
