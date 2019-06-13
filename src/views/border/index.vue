<template>
  <div class="text-16">
    <h3 class="mt-20 mb-8">边框</h3>
    <div class="mt-24 mb-24">项目中所用边框颜色为E8E8E8；此表格只做样式展示，所用边框颜色为#000000</div>
    <div class="d-flex border">
      <obj-table
        :thead-data="headerData"
        :tbody-data="bodyData"
      ></obj-table>
    </div>
    <h3 class="mt-20 mb-8">圆角</h3>
    <div class="d-flex border">
      <obj-table
        :thead-data="headerData"
        :tbody-data="radiusData"
      ></obj-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'border-list',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyData: [
        [
          'border-outline',
          '通用边框',
          `<p class="border-outline" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-0',
          '无边框',
          `<p class="border-0 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-left',
          '只含左边框',
          `<p class=" border-left bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-top',
          '只含上边框',
          `<p class=" border-top bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-right',
          '只含右边框',
          `<p class=" border-right bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-bottom',
          '只含下边框',
          `<p class=" border-bottom bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-left-0',
          '缺左边框',
          `<p class=" border-left-0 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-top-0',
          '缺上边框',
          `<p class=" border-top-0 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-right-0',
          '缺右边框',
          `<p class=" border-right-0 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-bottom-0',
          '缺下边框',
          `<p class=" border-bottom-0 bg-dark" style="width: 50px; height: 50px"></p>`
        ]
      ],
      radiusData: [
        [
          'border-radius-2',
          '通用类圆角，尺寸为2px',
          `<p class="border-radius-2 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-radius-4',
          '通用类圆角，尺寸为4px',
          `<p class="border-radius-4 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-radius-50',
          '通用类圆角，尺寸为50%',
          `<p class="border-radius-50 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-radius-top-4',
          '只含上边框圆角，尺寸为4px',
          `<p class="border-radius-top-4 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-radius-left-4',
          '只含左边框圆角，尺寸为4px',
          `<p class="border-radius-left-4 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-radius-right-4',
          '只含右边框圆角，尺寸为4px',
          `<p class="border-radius-right-4 bg-dark" style="width: 50px; height: 50px"></p>`
        ],
        [
          'border-radius-bottom-4',
          '只含下边框圆角，尺寸为4px',
          `<p class="border-radius-bottom-4 bg-dark" style="width: 50px; height: 50px"></p>`
        ]
      ]
    }
  }
}
</script>
<style>
.border table p {
  border-color: #000;
}
table tr td {
  width: 200px;
}
</style>
