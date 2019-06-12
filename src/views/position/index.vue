<template>
  <div
    class="d-flex"
    style="height:500px;"
  >
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData"
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
          `<p class="position-fixed">固定定位</p>`
        ],
        [
          'position-relative',
          '相对定位',
          `<p class="position-relative">相对定位</p>`
        ],
        [
          'position-absolute',
          '绝对定位',
          `<p class="position-absolute">绝对定位</p>`
        ]
      ]
    }
  }
}
</script>
