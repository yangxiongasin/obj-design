<template>
  <obj-table :thead-data="headerData" :tbody-data="bodyData" class="mt-20"></obj-table>
</template>
<script>
export default {
  name: 'display',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyData: [
        [
          'd-inline', '以行内元素方式显示', `<code class="d-inline">d-inline</code>`
        ],
        [
          'd-inline-block', '以行内元素方式显示', `<code class="d-inline-block">d-inline-block</code>`
        ],
        [
          'd-block', '以块级元素方式显示', `<code class="d-block">d-block</code>`
        ],
        [
          'd-none', '隐藏元素', `<code class="d-none">d-none</code>`
        ],
        [
          'd-table', '以表格方式显示', `<code class="d-table">d-table</code>`
        ],
        [
          'd-table-cell', '以单元格方式显示', `<code class="d-table-cell">d-table-cell</code>`
        ]
      ]
    }
  }
}
</script>
