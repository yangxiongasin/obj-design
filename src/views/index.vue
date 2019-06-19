<template>
  <div class="position-absolute-all ml-40">
    <ul class="menu--light text-14 position-absolute-y pt-32 border-outline">
      <li
        v-for="(item, index) in menuList"
        :key="'menu' + index"
        :class="{'menu__item--checked': iscur === index}"
        @click="$on_toggleLi(item, index)"
        class="menu__item border-bottom cursor-pointer"
      >{{ item.name }}</li>
    </ul>
    <div class="menu--right position-absolute-all">
      <h1>{{ isName }}</h1>
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
          name: '背景、阴影颜色',
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
          name: 'Space 边距',
          src: 'space'
        },
        {
          name: 'Typography 文字',
          src: 'typography'
        },
        {
          name: 'tree',
          src: 'tree'
        },
        {
          name: 'popover 弹出框',
          src: 'popover'
        },
        {
          name: 'selectTrans 映射表',
          src: 'selectTrans'
        },
        {
          name: 'upload 上传',
          src: 'upload'
        }
      ]
    }
  },
  mounted () {
    this.$router.replace({ name: 'border' })
  },
  methods: {
    $on_toggleLi (data, index) {
      this.iscur = index
      this.isName = data.name
      this.$router.replace({ name: data.src })
    }
  }
}
</script>
