<template>
  <!-- 顶部内容 -->
  <table class="font-14">
    <thead>
      <tr class="font-16">
        <th v-for="(item, index) in theadData" :key="'thead' + index">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tbodyData" :key="'tbodytr' + index">
        <td v-for="(items, indexs) in item" :key="'tbodytd' + indexs" v-html="items" class="align-items-center"></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default{
  name: 'objtable',
  props: {
    theadData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tbodyData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>
<style>
  table{
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;
  }
  table th, table td{
    border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
  }
  table th{
    background: #f7f7f7;
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 600;
  }
</style>
