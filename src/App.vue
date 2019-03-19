<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Grace City Group Finder</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <CgDataTable/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <CgMap/>
      </div>
    </div>
  </div>
</template>


<script>


import CgDataTable from './components/CgDataTable.vue'
import CgMap from './components/CgMap.vue'

export default {
  name: 'app',
  components: {
    CgDataTable, 
    CgMap
  }
}

</script>