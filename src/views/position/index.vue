<template>
  <div
    class="d-flex position"
    style="height:500px;"
  >
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData"
      class="mt-20"
    ></obj-table>
  </div>
</template>

<script>
export default {
  name: 'position-list',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyData: [
        [
          'position-fixed',
          '固定定位',
          `<p class="position-fixed" style="background:red"></p>`
        ],
        [
          'position-relative',
          '相对定位',
          `<p class="position-relative" style="background:green"></p>`
        ],
        [
          'position-absolute',
          '绝对定位',
          `<p class="position-absolute" style="background:yellow"></p>`
        ],
        [
          'position-absolute-all',
          '与父元素保持同等宽高',
          `<div class="position-relative"><p class="position-absolute-all" style="background:black"></p></div>`
        ]
      ]
    }
  }
}
</script>
<style>
.position table p {
  width: 10px;
  height: 10px;
}
</style>
