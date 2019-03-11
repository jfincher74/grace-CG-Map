<template>
  <div class="cgList">  
    <vue-good-table
    @on-selected-rows-change="selectionChanged"
    :columns="columns"
    :rows="rows"
    :select-options="{ enabled: true }"
    :search-options="{ enabled: true }"
    ref="myTable">
    <div slot="selected-row-actions">
    <button @click="action()">Action 1</button>
  </div>
    </vue-good-table>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'


export default {
  components:{
      VueGoodTable
  },
  methods:{
    action: function(){
        // this.$refs['my-table'].selectedRows
      console.log(this.$refs.myTable.selectedRows)
    }
  },
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '201-10-31:9: 35 am',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>
<style scoped>

.cgList {
  size: 80%;
}

</style>