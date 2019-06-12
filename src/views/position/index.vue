<template>
  <div class="d-flex">
    <div class="fixed-top">悬浮在页面顶部</div>
    <div class="fixed-bottom">悬浮在页面底部</div>
  </div>
</template>

<script>
export default {
  name: 'position',
  data () {
    return {}
  }
}
</script>
<style>
.fixed-top {
  position: fixed;
  top: 0;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
}
</style>
