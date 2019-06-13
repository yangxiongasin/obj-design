<template>
  <div class="">
    <h3 class="mt-20 mb-8">特性</h3>
    <ul class="text-16">
      <li>1.边距类为向一个元素分配 margin 或者 padding 属性;</li>
      <li>2.支持单个方向、所有方向，以及垂直方向和水平方向。</li>
      <li>3.所有的类都使用全局默认间距$spacer: 1rem; 的倍数;</li>
      <li>4.使用{property}{sides}-{size}格式命名;</li>
    </ul>
    <h3 class="mt-20 mb-8">{property} 属性</h3>
    <ul class="text-16">
      <li>1.<code>m</code>为<code>margin</code>;</li>
      <li>2.<code>p</code>为<code>padding</code>。</li>
    </ul>
    <h3 class="mt-20 mb-8">{sides} 方向</h3>
    <ul class="text-16">
      <li>1.<code>t</code>为<code>margin-top</code>或者<code>padding-top</code>;</li>
      <li>2.<code>b</code>为<code>margin-bottom</code>或者<code>padding-bottom</code>;</li>
      <li>3.<code>l</code>为<code>margin-left</code>或者<code>padding-left</code>;</li>
      <li>4.<code>r</code>为<code>margin-right</code>或者<code>padding-right</code>;</li>
      <li>5.<code>x</code>为水平方向<code>margin-left和margin-right</code>或者<code>padding-left和padding-right</code>;</li>
      <li>6.<code>y</code>为垂直方向<code>margin-top和margin-bottom</code>或者<code>padding-top和padding-bottom</code>;</li>
      <li>7.<code></code>空为<code>margin</code>或者<code>padding</code>;</li>
    </ul>
    <h3 class="mt-20 mb-8">{size} 大小</h3>
    <div class="text-16">{size}以4为基数的倍数，从4px到40px</div>
    <h3 class="mt-20 mb-8">示例</h3>
    <h4 class="mb-8">可通过检查元素查看边距样式</h4>
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
          `<div class="bg-lighter border-black"><div class="m-8 bg-dark">m-8</div></div>`,
          '<div class="bg-lighter border-black"><div class="mx-8 bg-dark">mx-8</div></div>',
          '<div class="bg-lighter border-black"><div class="my-8 bg-dark">my-8</div></div>',
          '<div class="bg-lighter border-black"><div class="mt-8 bg-dark">mt-8</div></div>',
          '<div class="bg-lighter border-black"><div class="mr-8 bg-dark">mr-8</div></div>',
          '<div class="bg-lighter border-black"><div class="mb-8 bg-dark">mb-8</div></div>',
          '<div class="bg-lighter border-black"><div class="ml-8 bg-dark">ml-8</div></div>'
        ],
        [
          '<div class="bg-dark border-black p-8"><div class="bg-lighter">p-8</div></div>',
          '<div class="bg-dark border-black px-8"><div class="bg-lighter">px-8</div></div>',
          '<div class="bg-dark border-black py-8"><div class="bg-lighter">py-8</div></div>',
          '<div class="bg-dark border-black pt-8"><div class="bg-lighter">pt-8</div></div>',
          '<div class="bg-dark border-black pr-8"><div class="bg-lighter">pr-8</div></div>',
          '<div class="bg-dark border-black pb-8"><div class="bg-lighter">pb-8</div></div>',
          '<div class="bg-dark border-black pl-8"><div class="bg-lighter">pl-8</div></div>'
        ]
      ]
    }
  }
}
</script>
