<template>
  <div class="d-flex">
    <ul class="menu--light font-14">
      <li
        v-for="(item, index) in menuList"
        :key="'menu' + index"
        :class="{'menu__item--checked': iscur === index}"
        @click="$on_toggleLi(item, index)"
        class="menu__item"
      >{{ item.name }}</li>
    </ul>
    <div  class=" menu--right" style="flex: auto;">
      <div class="text-38">{{ isName }}</div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      iscur: 0,
      isName: 'Border 边框与圆角',
      menuList: [
        {
          name: 'Border 边框与圆角',
          src: 'border'
        },
        {
          name: 'Color 颜色',
          src: 'color'
        },
        {
          name: 'Cursor 光标类型',
          src: 'cursor'
        },
        {
          name: 'Display 显示方式',
          src: 'display'
        },
        {
          name: 'flex 弹性盒子',
          src: 'flex'
        },
        {
          name: 'Float 浮动',
          src: 'float'
        },
        {
          name: 'Position 位置',
          src: 'position'
        },
        {
          name: 'Sizing 大小',
          src: 'sizing'
        },
        {
          name: 'Space 边距',
          src: 'space'
        },
        {
          name: 'Typography 文字',
          src: 'typography'
        }
      ]
    }
  },
  mounted () {
    this.$router.replace({name: 'border'})
  },
  methods: {
    $on_toggleLi (data, index) {
      this.iscur = index
      this.isName = data.name
      this.$router.replace({name: data.src})
    }
  }
}
</script>
