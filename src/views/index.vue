<template>
  <div class="d-flex">
    <ul class="menu--light">
      <li
        v-for="item in menuList"
        :key="'menu' + item.value"
        :class="{'menu__item--checked': iscur === item.value}"
        @click="$on_toggleLi(item)"
        class="menu__item"
      >{{ item.name }}</li>
    </ul>
    <div
      class="d-flex"
      style="flex: auto;"
    >
      1
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
      menuList: [
        {
          name: 'flex111',
          src: 'flex',
          value: 0
        },
        {
          name: 'color11',
          src: 'color',
          value: 1
        },
        {
          name: 'position1',
          src: 'position',
          value: 2
        }
      ]
    }
  },
  methods: {
    $on_toggleLi (data) {
      this.iscur = data.value
      this.$router.replace({ name: data.src })
    }
  }
}
</script>
