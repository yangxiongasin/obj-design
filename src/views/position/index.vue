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
        ],
        [
          'position-absolute-trbl',
          '绝对定位,上下左右都为0',
          `<div class="position-relative"><p class="position-absolute-trbl">绝对定位,上下左右都为0</p></div>`
        ],
        [
          'position-fixed-top',
          '悬浮在顶部',
          `<p class="position-fixed-top" style="padding-top:318px">悬浮在顶部</p>`
        ],
        [
          'position-fixed-bottom',
          '悬浮在底部',
          `<p class="position-fixed-bottom" style="padding-bottom:221px">悬浮在底部</p>`
        ],
        [
          'position-fixed-left',
          '悬浮在左部',
          `<p class="position-fixed-left" style="padding-left:1050px">悬浮在左部</p>`
        ],
        [
          'position-fixed-right',
          '悬浮在右部',
          `<p class="position-fixed-right" style="padding-right:128px">悬浮在右部</p>`
        ]
      ]
    }
  }
}
</script>
