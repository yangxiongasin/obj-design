<template>
  <div class="p-24 w-100">
    <div class="color-bg">
      <div class="color-left">
        <h1 class="title">基础色调</h1>
        <div class="d-flex justify-content-between w-100 justify-content-center">
          <div v-for="item in bgColorList"
               :key="item.value"
               class="color-box d-flex justify-align-center mr-20">
            <div :class="[item.bgColor, 'd-flex', 'flex-flow-column-nowrap', 'bg-box-color', 'justify-align-center', 'border-radius-100', 'color-box-shador', 'mr-20']">
              <div style="margin-bottom: 10px;">{{item.value}}</div>
              <div>{{item.bgColor}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="color-left">
        <h1 class="title">背景色</h1>
        <div class="d-flex">
          <div v-for="item in bgColorGreys"
               :key="item.value"
               class="bg-box d-flex flex-flow-column-nowrap justify-align-center justify-content-center mr-20">
            <div :class="[item.bgColor, 'd-flex', 'flex-flow-column-nowrap', 'bg-box-color', 'justify-align-center', 'border-radius-100', 'color-box-shador', 'mr-20']">
              <div style="margin-bottom: 10px;">{{item.value}}</div>
              <div>{{item.bgColor}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-text">
      <h1 class="title">全局颜色</h1>
      <div class="w-100 text-border">
        <div class="mb-20 ql-color-white">
          <div v-for="ele in colorTextList_0" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-white', ele.bgColor, 'w-100', 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <div v-for="ele in colorTextList_1" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-black-default', ele.bgColor, 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <div v-for="ele in colorTextList_2" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-white', ele.bgColor, 'w-100', 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <div v-for="ele in colorTextList_3" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-black-default', ele.bgColor, 'w-100', 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <div v-for="ele in colorTextList_4" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-black-default', ele.bgColor, 'w-100', 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <div v-for="ele in colorTextList_5" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-black-default', ele.bgColor, 'w-100', 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
          </div>
        </div>
        <div class="mb-20">
          <div v-for="ele in colorTextList_6" :key="ele.value" class="text-container">
            <div :class="['text-item', 'color-black-default', ele.bgColor, 'w-100', 'justify-align-center', 'flex-flow-column-nowrap', 'color-box-shador']">
              <div>{{ele.value}}</div>
              <div>{{ele.bgColor}}</div>
            </div>
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
          color: 'color-black-default',
          bgColor: 'bg-black-default',
          value: '#212434'
        }, {
          color: 'color-primary',
          bgColor: 'bg-primary',
          value: '#0C66FF'
        }, {
          color: 'color-success',
          bgColor: 'bg-success',
          value: '#0BB07B'
        }, {
          color: 'color-error',
          bgColor: 'bg-error',
          value: '#F03D3D'
        }, {
          color: 'color-alert',
          bgColor: 'bg-alert',
          value: '#FFAD0D'
        }, {
          color: 'color-white',
          bgColor: 'bg-white',
          value: '#FFFFFF'
        }
      ],
      bgColorGreys: [
        {
          color: 'color-gray-1',
          bgColor: 'bg-gray-1',
          value: '#F8F9FB'
        }, {
          color: 'color-gray-2',
          bgColor: 'bg-gray-2',
          value: '#828282'
        }, {
          color: 'color-gray-3',
          bgColor: 'bg-gray-3',
          value: '#E8E8E8'
        }, {
          color: 'color-gray-4',
          bgColor: 'bg-gray-4',
          value: '#E1E4E8'
        }
      ],
      colorTextList_0: [
        {
          color: 'color-black-900',
          bgColor: 'bg-black-900',
          borderColor: 'border-black-900',
          value: '#0A1F44'
        }, {
          color: 'color-black-800',
          bgColor: 'bg-black-800',
          borderColor: 'border-black-800',
          value: '#182C4F'
        }, {
          color: 'color-black-700',
          bgColor: 'bg-black-700',
          borderColor: 'border-black-700',
          value: '#273A5B'
        }, {
          color: 'color-black-600',
          bgColor: 'bg-black-600',
          borderColor: 'border-black-600',
          value: '#364866'
        }, {
          color: 'color-black-500',
          bgColor: 'bg-black-500',
          borderColor: 'border-black-500',
          value: '#445571'
        }, {
          color: 'color-black-400',
          bgColor: 'bg-black-400',
          borderColor: 'border-black-400',
          value: '#53627C'
        }, {
          color: 'color-black-300',
          bgColor: 'bg-black-300',
          borderColor: 'border-black-300',
          value: '#5D6C84'
        }, {
          color: 'color-black-200',
          bgColor: 'bg-black-200',
          borderColor: 'border-black-200',
          value: '#6C798F'
        }, {
          color: 'color-black-100',
          bgColor: 'bg-black-100',
          borderColor: 'border-black-100',
          value: '#758196'
        }
      ],
      colorTextList_1: [
        {
          color: 'color-gray-900',
          bgColor: 'bg-gray-900',
          value: '#8A94A6'
        }, {
          color: 'color-gray-800',
          bgColor: 'bg-gray-800',
          value: '#98A1B1'
        }, {
          color: 'color-gray-700',
          bgColor: 'bg-gray-700',
          value: '#A6AEBC'
        }, {
          color: 'color-gray-600',
          bgColor: 'bg-gray-600',
          value: '#B5BBC6'
        }, {
          color: 'color-gray-500',
          bgColor: 'bg-gray-500',
          value: '#C9CED6'
        }, {
          color: 'color-gray-400',
          bgColor: 'bg-gray-400',
          value: '#E1E4E8'
        }, {
          color: 'color-gray-300',
          bgColor: 'bg-gray-300',
          value: '#F1F2F4'
        }, {
          color: 'color-gray-200',
          bgColor: 'bg-gray-200',
          value: '#F8F9FB'
        }, {
          color: 'color-gray-100',
          bgColor: 'bg-gray-100',
          value: '#FCFCFD'
        }
      ],
      colorTextList_2: [
        {
          color: 'color-black-navigation',
          bgColor: 'bg-black-navigation',
          value: '#15161A'
        }, {
          color: 'color-black-default',
          bgColor: 'bg-black-default',
          value: '#212434'
        }, {
          color: 'color-navigation-hover',
          bgColor: 'bg-navigation-hover',
          value: '#2B2D39'
        }
      ],
      colorTextList_3: [
        {
          color: 'color-blue-900',
          bgColor: 'bg-blue-900',
          value: '#0A44A5'
        }, {
          color: 'color-blue-800',
          bgColor: 'bg-blue-800',
          value: '#0D55CF'
        }, {
          color: 'color-blue-700',
          bgColor: 'bg-blue-700',
          value: '#0C66FF'
        }, {
          color: 'color-blue-600',
          bgColor: 'bg-blue-600',
          value: '#007FFF'
        }, {
          color: 'color-blue-500',
          bgColor: 'bg-blue-500',
          value: '#5AACFF'
        }, {
          color: 'color-blue-400',
          bgColor: 'bg-blue-400',
          value: '#99CCFF'
        }, {
          color: 'color-blue-300',
          bgColor: 'bg-blue-300',
          value: '#CCE6FF'
        }, {
          color: 'color-blue-200',
          bgColor: 'bg-blue-200',
          value: '#EBF5FF'
        }, {
          color: 'color-blue-100',
          bgColor: 'bg-blue-100',
          value: '#F5FAFF'
        }
      ],
      colorTextList_4: [
        {
          color: 'color-green-900',
          bgColor: 'bg-green-900',
          value: '#006242'
        }, {
          color: 'color-green-800',
          bgColor: 'bg-green-800',
          value: '#00865A'
        }, {
          color: 'color-green-700',
          bgColor: 'bg-green-700',
          value: '#0BB07B'
        }, {
          color: 'color-green-600',
          bgColor: 'bg-green-600',
          value: '#22C993'
        }, {
          color: 'color-green-500',
          bgColor: 'bg-green-500',
          value: '#3ED3A3'
        }, {
          color: 'color-green-400',
          bgColor: 'bg-green-400',
          value: '#6DDFBA'
        }, {
          color: 'color-green-300',
          bgColor: 'bg-green-300',
          value: '#92ECCF'
        }, {
          color: 'color-green-200',
          bgColor: 'bg-green-200',
          value: '#CFF8EB'
        }, {
          color: 'color-green-100',
          bgColor: 'bg-green-100',
          value: '#EAFCF7'
        }
      ],
      colorTextList_5: [
        {
          color: 'color-red-900',
          bgColor: 'bg-red-900',
          value: '#A50000'
        }, {
          color: 'color-red-800',
          bgColor: 'bg-red-800',
          value: '#BD0303'
        }, {
          color: 'color-red-700',
          bgColor: 'bg-red-700',
          value: '#DD2727'
        }, {
          color: 'color-red-600',
          bgColor: 'bg-red-600',
          value: '#F03D3D'
        }, {
          color: 'color-red-500',
          bgColor: 'bg-red-500',
          value: '#FF5D5D'
        }, {
          color: 'color-red-400',
          bgColor: 'bg-red-400',
          value: '#FF8D8D'
        }, {
          color: 'color-red-300',
          bgColor: 'bg-red-300',
          value: '#FFC2C2'
        }, {
          color: 'color-red-200',
          bgColor: 'bg-red-200',
          value: '#FFEAEA'
        }, {
          color: 'color-red-100',
          bgColor: 'bg-red-100',
          value: '#FFF8F8'
        }
      ],
      colorTextList_6: [
        {
          color: 'color-yellow-900',
          bgColor: 'bg-yellow-900',
          value: '#F07300'
        }, {
          color: 'color-yellow-800',
          bgColor: 'bg-yellow-800',
          value: '#FF8F00'
        }, {
          color: 'color-yellow-700',
          bgColor: 'bg-yellow-700',
          value: '#FFAD0D'
        }, {
          color: 'color-yellow-600',
          bgColor: 'bg-yellow-600',
          value: '#FFBB38'
        }, {
          color: 'color-yellow-500',
          bgColor: 'bg-yellow-500',
          value: '#FFCA65'
        }, {
          color: 'color-yellow-400',
          bgColor: 'bg-yellow-400',
          value: '#FFDC99'
        }, {
          color: 'color-yellow-300',
          bgColor: 'bg-yellow-300',
          value: '#FFECC7'
        }, {
          color: 'color-yellow-200',
          bgColor: 'bg-yellow-200',
          value: '#FFF6E4'
        }, {
          color: 'color-yellow-100',
          bgColor: 'bg-yellow-100',
          value: '#FFFCF5'
        }
      ]
    }
  }
}
</script>
