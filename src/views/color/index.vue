<template>
  <div>
    <div class="color-bg">
      <div class="color-left">
        <h3 class="title">背景色</h3>
        <div class="d-flex" style="flex-wrap: wrap">
          <div v-for="item in bgColorGreys"
               :key="item.value"
               class="bg-box flex-al-center mb-20 w-50">
            <div :class="[item.className, 'bg-box-color', 'border-radius-100', 'color-box-shador', 'mr-20', 'border-outline']">
            </div>
            <div class="mr-20">{{item.className}} {{ item.value }}</div>
            <div>{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-shador">
      <h3 class="title">渐变背景</h3>
      <div class="d-flex justify-content-between">
        <div
          v-for="item in colorShadow"
          :key="item.value"
          :class="[item.className, 'item']">
          {{item.className}}
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
      bgColorGreys: [
        {
          className: 'bg-f8f9fb',
          value: '#F8F9FB',
          text: '(用法：纯色背景)'
        }, {
          className: 'bg-828282',
          value: '#828282',
          text: '(用法：列表悬停色和纯色背景)'
        }, {
          className: 'bg-e8e8e8',
          value: '#E8E8E8',
          text: '(用法：线、分割符和禁用图标)'
        }, {
          className: 'bg-e1e4e8',
          value: '#E1E4E8',
          text: '(用法：文本输入框和禁用背景)'
        }, {
          className: 'bg-ffffff',
          value: '#FFFFFF',
          text: '(用法：重置背景色)'
        }, {
          className: 'bg-f03d3d',
          value: '#F03D3D',
          text: '(用法：按钮背景色)'
        }, {
          className: 'bg-0c66ff',
          value: '#0C66FF',
          text: '(用法：按钮背景色)'
        }, {
          className: 'bg-ffad0d',
          value: '#FFAD0D',
          text: '(用法：按钮背景色)'
        }
      ],
      colorText: [
        {
          className: 'color-primary',
          value: '#0C66FF',
          text: '(用法：信息文本)'
        }, {
          className: 'color-success',
          value: '#0BB07B',
          text: '(用法：成功文本)'
        }, {
          className: 'color-error',
          value: '#F03D3D',
          text: '(用法：错误文本)'
        }, {
          className: 'color-alert',
          value: '#FFAD0D',
          text: '(用法：主要标题、正文文本)'
        }, {
          className: 'color-dark',
          value: '#0A1F44',
          text: '(用法：主要标题、正文文本)'
        }, {
          className: 'color-medium',
          value: '#53627C',
          text: '(用法：正文、说明文本)'
        }, {
          className: 'color-light',
          value: '#8A94A6',
          text: '(用法：辅助文本、输入标签)'
        }, {
          className: 'color-input',
          value: '#A6AEBC',
          text: '(用法：禁用文本。输入标签)'
        }
      ],
      colorShadow: [
        {
          className: 'gradient-blue',
          text: '(用法：纯色背景)'
        }, {
          className: 'gradient-green',
          text: '(用法：列表悬停色和纯色背景)'
        }, {
          className: 'gradient-red-orange',
          text: '(用法：线、分割符和禁用图标)'
        }, {
          className: 'gradient-blue-purple',
          text: '(用法：文本输入框和禁用背景)'
        }, {
          className: 'gradient-red-purple',
          text: '(用法：文本输入框和禁用背景)'
        }
      ]
    }
  }
}
</script>
