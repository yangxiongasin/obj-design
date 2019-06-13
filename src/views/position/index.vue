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
      headerData: ['类名', '描述(绿色表示原始-红色表示新的)', '示例'],
      bodyData: [
        [
          'position-fixed',
          '固定定位',
          `<div class="d-flex" style="border:solid 2px blue;"><p style="background:green;width:10px;height:10px;"></p><p class="position-fixed" style="width:10px;height:10px;background:red;margin-left:20px;"></p></div>`
        ],
        [
          'position-relative',
          '相对定位',
          `<div class="d-flex" style="border:solid 2px blue;"><p style="background:green;width:10px;height:10px;"></p><p class="position-relative" style="width:10px;height:10px;background:red;left:20px;"></p></div>`
        ],
        [
          'position-absolute',
          '绝对定位',
          `<div class="d-flex position-relative" style="border:solid 2px blue"><p style="background:green;width:10px;height:10px;"></p><p class="position-absolute" style="width:10px;height:10px;background:red;left:20px;"></p></div>`
        ],
        [
          'position-absolute-all',
          '与父元素保持同等宽高',
          `<div class="d-flex position-relative" style="border:solid 2px blue;width:20px;height:20px;box-sizing: content-box;"><p class="position-absolute-all" style="background:green;"></p></div>`
        ],
        [
          'position-absolute-y',
          '该元素与body高度相同且不占位',
          `<div class="d-flex position-relative" style="border:solid 2px blue;width:20px;height:20px;box-sizing: content-box;"><p class="position-absolute-y" style="background:green;width:10px;"></p></div>`
        ]
      ]
    }
  }
}
</script>
