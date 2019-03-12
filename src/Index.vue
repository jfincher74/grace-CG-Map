<template>
  <div id="app">
    
      <dataTable/>
      <cgMap msg="let us prove we are still alive!"></cgMap>

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