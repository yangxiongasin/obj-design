<template>
  <div>
    <h3 class="mt-20 mb-8">常用flex类名</h3>
    <code>justify-content使用ju作为简称</code>
    <code>align-items使用al作为简称</code>
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData"
      class="my-8"
    ></obj-table>
    <h3 class="mt-20 mb-8">非常用flex类名</h3>
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData2"
    ></obj-table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      headerData: ['类名', '描述', '代码'],
      bodyData: [
        ['d-flex', ' 一个使用display:flex的容器', `<p>display:flex</p>`],
        ['flex-wrap', ' 换行', `<p>display: flex;</p><p>flex-wrap: wrap;</p>`],
        ['flex-ju-center', ' 居中水平对齐', `<p>display: flex;</p><p>justify-content: center;</p>`],
        ['flex-ju-between', ' 俩端不留白水平对齐', `<p>display: flex;</p><p>justify-content: space-between;</p>`],
        ['flex-al-center', ' 在元素中间位置垂直对齐', `<p>display: flex;</p><p>align-items: center;</p>`],
        ['flex-ju-al-center', '元素水平垂直居中对齐', `<p>display: flex;</p><p>align-items: center;</p><p>justify-content: center;</p>`],
        ['flex-ju-al-between', '元素水平两端，垂直居中对齐', `<p>display: flex;</p><p>align-items: center;</p><p>justify-content: space-between.flex p;</p>`],
        ['d-flex-column', ' 垂直排列', `<p>display: flex;</p><p>flex-direction: column;</p>`],
      ],
      bodyData2: [
        ['d-flex-row-reverse', ' 水平反序排列', `<p>display: flex;</p><p>flex-direction: row-reverse;</p>`],
        ['flex-ju-start', ' 在元素开始位置水平对齐', `<p>display: flex;</p><p>justify-content: flex-start;</p>`],
        ['flex-ju-end', ' 在元素末尾位置水平对齐', `<p>display: flex;</p><p>justify-content: flex-end;</p>`],
        ['flex-al-start', ' 在元素开始位置垂直对齐', `<p>display: flex;</p><p>align-items: flex-start;</p>`],
        ['flex-al-end', ' 在元素末尾位置垂直对齐', `<p>display: flex;</p><p>align-items: flex-end;</p>`],
      ]
    }
  }
}
</script>
