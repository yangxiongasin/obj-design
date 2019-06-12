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
      <div class="font-38">{{ isName }}</div>
      <obj-table :thead-data="['1', '2']" :tbody-data="[[1,2], [3,4]]"></obj-table>
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
      isName: 'Color 颜色',
      menuList: [
        {
          name: 'Color 颜色',
          src: 'color'
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
          name: 'Typography 文字',
          src: 'typography'
        }
      ]
    }
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
