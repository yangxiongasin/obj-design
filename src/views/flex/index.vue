<template>
  <div class="d-flex flex">
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData"
      class="mt-20"
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
        [
          'flex-nowrap',
          ' 不换行',
          `<p>display: flex;</p><p>flex-wrap: nowrap;</p>`
        ],
        [
          'justify-content-center',
          ' 居中水平对齐',
          `<p>display: flex;</p><p>justify-content: center;</p>`
        ],
        [
          'justify-content-between',
          ' 俩端不留白水平对齐',
          `<p>display: flex;</p><p>justify-content: space-between;</p>`
        ],
        [
          'justify-content-around',
          ' 俩端留白水平对齐',
          `<p>display: flex;</p><p>justify-content: space-around;</p>`
        ],
        [
          'align-items-center',
          ' 在元素中间位置垂直对齐',
          `<p>align-items: center;</p>`
        ],
        [
          'justify-align-center',
          '元素水平垂直居中对齐',
          `<p>display: flex;</p><p>align-items: center;</p><p>justify-content: center;</p>`
        ],
        [
          'd-flex-row-reverse',
          ' 水平反序排列',
          `<p>display: flex;</p><p>flex-direction: row-reverse;</p>`
        ],
        [
          'd-flex-column',
          ' 垂直排列',
          `<p>display: flex;</p><p>flex-direction: column;</p>`
        ],
        [
          'd-flex-column-reverse',
          ' 垂直反序排列',
          `<p>display: flex;</p><p>flex-direction: column-reverse;</p>`
        ],
        [
          'justify-content-start',
          ' 在元素开始位置水平对齐',
          `<p>display: flex;</p><p>justify-content: flex-start;</p>`
        ],
        [
          'justify-content-end',
          ' 在元素末尾位置水平对齐',
          `<p>display: flex;</p><p>justify-content: flex-end;</p>`
        ],
        [
          'align-items-start',
          ' 在元素开始位置垂直对齐',
          `<p>align-items: flex-start;</p>`
        ],
        [
          'align-items-end',
          ' 在元素末尾位置垂直对齐',
          `<p>align-items: flex-end;</p>`
        ],

        [
          'align-items-baseline',
          ' 在元素基线位置垂直对齐(元素中的文本都以第一个元素的文本的基线对齐)',
          `<p>display: flex;</p><p>align-items: baseline;</p>`
        ],
        [
          'align-items-stretch',
          ' 默认值-元素被拉伸以适应容器',
          `<p>display: flex;</p><p>align-items: stretch;</p>`
        ],
        [
          'align-self-start',
          ' 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界',
          `<p>align-self: flex-start;</p>`
        ],
        [
          'align-self-end',
          ' 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。',
          `<p>align-self: flex-end;</p>`
        ],
        [
          'align-self-center',
          ' 弹性盒子元素在该行的侧轴（纵轴）上居中放置。',
          `<p>align-self: center;</p>`
        ],
        [
          'align-self-baseline',
          '弹性盒子元素文本按照第一个元素的文本的基线对齐。',
          `<p>align-self: baseline;</p>`
        ],
        [
          'align-self-stretch',
          ' 默认值-子元素被拉伸以适应容器',
          `<p>align-self: stretch;</p>`
        ]
      ]
    }
  }
}
</script>
<style>
.flex p {
  width: 180px;
  padding: 5px;
}
</style>
