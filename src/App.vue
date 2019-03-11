<template>
  <div id="app">
    <div class="cg-List">
      <dataTable />
    </div>
  </div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import dataTable from './components/dataTable.vue'

export default {
  name: 'app',
  components: {
    dataTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cg-list {
  padding: 100px;
}


</style>
