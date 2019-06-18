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
          'cursor-pointer', '鼠标指针为手型', `<code class="cursor-pointer">Pointer手型</code>`
        ],
        [
          'cursor-move', '鼠标指针为移动', `<code class="cursor-move">Move手型</code>`
        ],
        [
          'cursor-text', '鼠标指针为文本', `<code class="cursor-text">Text手型</code>`
        ],
        [
          'cursor-wait', '鼠标指针为等待', `<code class="cursor-wait">Wait手型</code>`
        ],
        [
          'cursor-help', '鼠标指针为帮助', `<code class="cursor-help">Help手型</code>`
        ],
        [
          'cursor-not-allowed', '鼠标指针为禁用', `<code class="cursor-not-allowed">禁用手型</code>`
        ]
      ]
    }
  }
}
</script>
