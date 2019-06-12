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
      isName: 'flex布局',
      menuList: [
        {
          name: 'flex 弹性盒子',
          src: 'flex'
        },
        {
          name: 'Color颜色',
          src: 'color'
        },
        {
          name: 'Position 位置',
          src: 'position'
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
