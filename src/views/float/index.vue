<template>
  <obj-table
  :thead-data="headerData"
  :tbody-data="bodyData"
  class="mt-20"
  ></obj-table>
</template>

<script>
export default {
  name: 'float-list',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyData: [
        ['float-left', '向左浮动', `<p class="float-left">向左浮动</p>`],
        ['float-right', '向右浮动', `<p class="float-right">向右浮动</p>`],
        [
          'float-none',
          '可以覆盖原本的浮动，让元素不浮动',
          `<p class="float-none">可以覆盖原本的浮动，让元素不浮动</p>`
        ],
        ['clearfix', '清除浮动', `<p class="clearfix">清除浮动</p>`]
      ]
    }
  }
}
</script>
