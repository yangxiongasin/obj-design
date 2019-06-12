<template>
  <div class="d-flex p-24 w-100">
    <div class="color-bg">
      <div class="color-left">
        <h1 class="title">背景色</h1>
        <div class="d-flex justify-content-between w-100 align-cen">
          <div v-for="item in bgColorList"
               :key="item.name"
               class="bg-box d-flex flex-flow-column-nowrap justify-align-center">
            <div :class="[item.className, 'bg-box-color', 'border-radius-100', 'box-shador']"></div>
            <div class="bg-box-name">{{item.name}}</div>
            <div>{{item.value}}</div>
          </div>
        </div>
      </div>
      <div class="color-right">
        <h3 class="title">背景灰色/Backgroud Greys</h3>
        <div class="d-flex flex-flow-column-nowrap">
          <div v-for="item in bgColorGreys"
               :key="item.name"
                class="bg-box d-flex">
            <div :class="[item.value, 'bg-box-color']"></div>
            <div>{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      bgColorList: [
        {
          name: '深色/bg-dark',
          className: 'bg-dark',
          value: '#212434'
        }, {
          name: '主色/bg-primary',
          className: 'bg-primary',
          value: '#0C66FF'
        }, {
          name: '成功/bg-success',
          className: 'bg-success',
          value: '#0BB07B'
        }, {
          name: '错误/bg-error',
          className: 'bg-error',
          value: '#F03D3D'
        }, {
          name: '警告/bg-alert',
          className: 'bg-alert',
          value: '#FFAD0D'
        }, {
          name: '白色/bg-white',
          className: 'bg-white',
          value: '#FFFFFF'
        }
      ],
      bgColorGreys: [
        {
          name: 'Lighter (用法 纯色背景)',
          className: 'bg-grey',
          value: '#F8F9FB'
        }, {
          name: 'Light（用法： 列表悬停和纯色背景）不透明5%',
          className: 'bg-grey',
          value: '#212434'
        }, {
          name: '深色/bg-dark',
          className: 'bg-dark',
          value: '#212434'
        }, {
          name: '深色/bg-dark',
          className: 'bg-dark',
          value: '#212434'
        }
      ]
    }
  }
}
</script>
