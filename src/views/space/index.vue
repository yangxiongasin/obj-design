<template>
  <div class="">
    <div class="text-30">特性</div>
    <ul class="text-16">
      <li>1.边距类为向一个元素分配 margin 或者 padding 属性;</li>
      <li>2.支持单个方向、所有方向，以及垂直方向和水平方向。</li>
      <li>3.所有的类都使用全局默认间距$spacer: 1rem; 的倍数;</li>
      <li>4.使用{property}{sides}-{negative}-{size}格式命名,如需加响应式则为{property}{sides}-{negative}-{size};</li>
    </ul>
    <div class="text-30">{property} 属性</div>
    <ul class="text-16">
      <li>1.<code>m</code>为<code>margin</code>;</li>
      <li>2.<code>p</code>为<code>padding</code>。</li>
    </ul>
    <div class="text-30">{sides} 方向</div>
    <ul class="text-16">
      <li>1.<code>t</code>为<code>margin-top</code>或者<code>padding-top</code>;</li>
      <li>2.<code>b</code>为<code>margin-bottom</code>或者<code>padding-bottom</code>;</li>
      <li>3.<code>l</code>为<code>margin-bottom</code>或者<code>padding-bottom</code>;</li>
      <li>4.<code>b</code>为<code>margin-bottom</code>或者<code>padding-bottom</code>;</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'space',
  data () {
    return {}
  }
}
</script>
