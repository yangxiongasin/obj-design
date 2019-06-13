<template>
  <div class="text-16">
    <h3 class="mt-20 mb-8">边框</h3>
    <div class="mt-24 mb-24">项目中所用边框颜色为E8E8E8；此表格只做样式展示，所用边框颜色为#000000</div>
    <div
      class="d-flex position"
    >
      <obj-table
        :thead-data="headerData"
        :tbody-data="bodyData"
      ></obj-table>
    </div>
    <!--<div>圆角</div>-->
    <!--<div-->
      <!--class="d-flex position"-->
    <!--&gt;-->
      <!--<obj-table-->
        <!--:thead-data="headerData"-->
        <!--:tbody-data="bodyData"-->
      <!--&gt;</obj-table>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: 'position-list',
    data() {
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
            `<p class="border-0 bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-left',
            '只含左边框',
            `<p class=" border-left bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-top',
            '只含上边框',
            `<p class=" border-top bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-right',
            '只含右边框',
            `<p class=" border-right bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-bottom',
            '只含下边框',
            `<p class=" border-bottom bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-left-0',
            '缺左边框',
            `<p class=" border-left-0 bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-top-0',
            '缺上边框',
            `<p class=" border-top-0 bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-right-0',
            '缺右边框',
            `<p class=" border-right-0 bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
          [
            'border-bottom-0',
            '缺下边框',
            `<p class=" border-bottom-0 bg-lighter" style="width: 50px; height: 50px"></p>`
          ],
        ]
      }
    }
  }
</script>
<style>
  .position table p {
    border-color: #000;
  }
</style>
