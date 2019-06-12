<template>
  <div class="d-flex">
    <ul class="menu--light">
      <li v-for="item in menuList" :key="'menu' + item.value"
        :class="{'menu__item--checked': iscur === item.value}"
        @click="$on_toggleLi(item)"
        class="menu__item">{{ item.name }}</li>
    </ul>
    <div class=" menu--right" style="flex: auto;">
      <h1 style="margin-bottom: 24px;">{{ isName }}</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      iscur: 1,
      isName: 'flex布局',
      menuList: [
        {
          name: 'flex布局',
          src: 'flex',
          value: 0
        },
        {
          name: 'color样式',
          src: 'color',
          value: 1
        }
      ]
    }
  },
  methods: {
    $on_toggleLi (data) {
      this.iscur = data.value
      this.isName = data.name
      this.$router.replace({name: data.src})
    }
  }
}
</script>
