<template>
  <div class="">
    <div class="text-30 mt-20 mb-8">特性</div>
    <ul class="text-16">
      <li>1.边距类为向一个元素分配 margin 或者 padding 属性;</li>
      <li>2.支持单个方向、所有方向，以及垂直方向和水平方向。</li>
      <li>3.所有的类都使用全局默认间距$spacer: 1rem; 的倍数;</li>
      <li>4.使用{property}{sides}-{size}格式命名,如需加响应式则为{property}{sides}-{size};</li>
    </ul>
    <div class="text-30 mt-20 mb-8">{property} 属性</div>
    <ul class="text-16">
      <li>1.<code>m</code>为<code>margin</code>;</li>
      <li>2.<code>p</code>为<code>padding</code>。</li>
    </ul>
    <div class="text-30 mt-20 mb-8">{sides} 方向</div>
    <ul class="text-16">
      <li>1.<code>t</code>为<code>margin-top</code>或者<code>padding-top</code>;</li>
      <li>2.<code>b</code>为<code>margin-bottom</code>或者<code>padding-bottom</code>;</li>
      <li>3.<code>l</code>为<code>margin-left</code>或者<code>padding-left</code>;</li>
      <li>4.<code>r</code>为<code>margin-right</code>或者<code>padding-right</code>;</li>
      <li>5.<code>x</code>为水平方向<code>margin-left和margin-right</code>或者<code>padding-left和padding-right</code>;</li>
      <li>6.<code>y</code>为垂直方向<code>margin-top和margin-bottom</code>或者<code>padding-top和padding-bottom</code>;</li>
      <li>7.<code></code>空为<code>margin</code>或者<code>padding</code>;</li>
    </ul>
    <div class="text-30 mt-20 mb-8">{size} 大小</div>
    <div class="text-16">{size}以4为基数的倍数，从4px到40px</div>
    <div class="text-30 mt-20">示例</div>
    <div class="text-16 my-8">可通过检查元素查看边距样式</div>
    <obj-table :thead-data="headerData" :tbody-data="bodyData"></obj-table>
  </div>
</template>

<script>
export default {
  name: 'space',
  data () {
    return {
      headerData: ['示例', '示例', '示例', '示例', '示例', '示例', '示例'],
      bodyData: [
        [
          `<div class="m-4">m-4</div>`, '<div class="mx-4">mx-4</div>', `<div class="my-4">my-4</div>`,
          `<div class="mt-4">mt-4</div>`, '<div class="mr-4">mr-4</div>', `<div class="mb-4">mb-4</div>`,
          `<div class="ml-4">ml-4</div>`
        ],
        [
          `<div class="p-4">p-4</div>`, '<div class="px-4">px-4</div>', `<div class="py-4">py-4</div>`,
          `<div class="pt-4">pt-4</div>`, '<div class="pr-4">pr-4</div>', `<div class="pb-4">pb-4</div>`,
          `<div class="pl-4">pl-4</div>`
        ]
      ]
    }
  }
}
</script>
