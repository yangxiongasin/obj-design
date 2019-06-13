<template>
  <div class="d-flex mt-20">
    <obj-table :thead-data="headerData" :tbody-data="bodyData"></obj-table>
  </div>
</template>

<script>
export default {
  name: 'cursor-list',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyData: [
        [
          'cursor-pointer', '鼠标指针为手型', `<p class="cursor-pointer">Pointer手型</p>`
        ],
        [
          'cursor-move', '鼠标指针为移动', `<p class="cursor-move">Move手型</p>`
        ],
        [
          'cursor-text', '鼠标指针为文本', `<p class="cursor-text">Text手型</p>`
        ],
        [
          'cursor-wait', '鼠标指针为等待', `<p class="cursor-wait">Wait手型</p>`
        ],
        [
          'cursor-help', '鼠标指针为帮助', `<p class="cursor-help">Help手型</p>`
        ]
      ]
    }
  }
}
</script>
