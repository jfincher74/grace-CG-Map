<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Grace City Group Finder</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <dataTable/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <cgMap/>
      </div>
    </div>
  </div>
</template>


<script>


import dataTable from './components/dataTable.vue'
import cgMap from './components/cgMap.vue'

export default {
  name: 'app',
  components: {
    dataTable, cgMap
  }
}

</script>