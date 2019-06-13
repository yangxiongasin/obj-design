<template>
  <div class="d-flex">
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData"
    ></obj-table>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyData: [
        [
          'd-flex',
          ' 一个使用display:flex的容器',
          `<div class="d-flex"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-inline',
          ' 行内弹性盒子',
          `<div class="d-flex-inline"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-row',
          ' 水平排列',
          `<div class="d-flex-row"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-row-reverse',
          ' 水平反序排列',
          `<div class="d-flex-row-reverse"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-inline',
          ' 行内弹性盒子',
          `<div class="d-flex-inline"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-column',
          ' 垂直排列',
          `<div class="d-flex-column"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-column-reverse',
          ' 垂直反序排列',
          `<div class="d-flex-column-reverse"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'd-flex-inline',
          ' 行内弹性盒子',
          `<div class="d-flex-inline"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'justify-content-start',
          ' 在元素开始位置水平对齐',
          `<div class="justify-content-start"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'justify-content-end',
          ' 在元素末尾位置水平对齐',
          `<div class="justify-content-end"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'justify-content-center',
          ' 居中水平对齐',
          `<div class="justify-content-center"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'justify-content-between',
          ' 俩端不留白水平对齐',
          `<div class="justify-content-between"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'justify-content-around',
          ' 俩端留白水平对齐',
          `<div class="justify-content-around"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'align-items-start',
          ' 在元素开始位置垂直对齐',
          `<div class="align-items-start"><p>盒子</p></div>`
        ],
        [
          'align-items-end',
          ' 在元素末尾位置垂直对齐',
          `<div class="align-items-end"><p>盒子</p></div>`
        ],
        [
          'align-items-center',
          ' 在元素中间位置垂直对齐',
          `<div class="align-items-center"><p>盒子</p></div>`
        ],
        [
          'align-items-baseline',
          ' 在元素基线位置垂直对齐(元素中的文本都以第一个元素的文本的基线对齐)',
          `<div class="align-items-baseline"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'align-items-stretch',
          ' 默认值-元素被拉伸以适应容器',
          `<div class="align-items-stretch"><h1>弹性</h1><p>盒子</p></div>`
        ],
        [
          'align-self-start',
          ' 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界',
          `<div class="d-flex" ><h1 class="align-self-start">弹性</h1><p class="align-self-start">盒子</p></div>`
        ],
        [
          'align-self-end',
          ' 弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。',
          `<div class="d-flex" ><h1 class="align-self-end">弹性</h1><p class="align-self-end">盒子</p></div>`
        ],
        [
          'align-self-center',
          ' 弹性盒子元素在该行的侧轴（纵轴）上居中放置。',
          `<div class="d-flex"><h1 class="align-self-center">弹性</h1><p class="align-self-center">盒子</p></div>`
        ],
        [
          'align-self-baseline',
          '弹性盒子元素文本按照第一个元素的文本的基线对齐。',
          `<div class="d-flex"><h1 class="align-self-baseline">弹性</h1><p class="align-self-baseline">盒子</p></div>`
        ],
        [
          'align-self-stretch',
          ' 默认值-子元素被拉伸以适应容器',
          `<div class="d-flex"><h1 class="align-self-stretch">弹性</h1><p class="align-self-stretch">盒子</p></div>`
        ],
        [
          'justify-align-center',
          '元素水平垂直居中对齐',
          `<div class="justify-align-center"><h1>弹性</h1><p>盒子</p></div>`
        ]
      ]
    }
  }
}
</script>
