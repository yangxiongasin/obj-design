<template>
  <div>
    <h3 class="mt-20 mb-8">字体大小</h3>
    <obj-table
    :thead-data="headerData"
    :tbody-data="bodyData1"
    ></obj-table>
    <h3 class="mt-20 mb-8">字体颜色</h3>
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyColorData"
    ></obj-table>
    <h3 class="mt-20 mb-8">文字溢出与换行</h3>
    <obj-table
    :thead-data="headerData"
    :tbody-data="bodyData6"
    ></obj-table>
    <h3 class="mt-20 mb-8">文字字重</h3>
    <obj-table
    :thead-data="headerData"
    :tbody-data="bodyData4"
    ></obj-table>
    <h3 class="mt-20 mb-8">标题</h3>
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData0"
    ></obj-table>
    <h3 class="mt-20 mb-8">文字位置</h3>
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData3"
    ></obj-table>
    <h3 class="mt-20 mb-8">字母大小写</h3>
    <obj-table
      :thead-data="headerData"
      :tbody-data="bodyData5"
    ></obj-table>
  </div>
</template>

<script>
export default {
  name: 'typography',
  data () {
    return {
      headerData: ['类名', '描述', '示例'],
      bodyColorData: [
        [
          'color-0c66ff',
          '#0c66ff (用法：信息文本)',
          `<p class="color-0c66ff">文字颜色</p>`
        ],
        [
          'color-0b69ff',
          '#0b69ff (用法：链接文本)',
          `<p class="color-0b69ff">文字颜色</p>`
        ],
        [
          'color-0bb07b',
          '#0bb07b (用法：成功文本)',
          `<p class="color-0bb07b">文字颜色</p>`
        ],
        [
          'color-f03d3d',
          '#f03d3d (用法：错误文本)',
          `<p class="color-f03d3d">文字颜色</p>`
        ],
        [
          'color-ffad0d',
          '#ffad0d (用法：主要标题、正文文本)',
          `<p class="color-ffad0d">文字颜色</p>`
        ],
        [
          'color-2d3f5f',
          '#2d3f5f (用法：主要标题、正文文本)',
          `<p class="color-2d3f5f">文字颜色</p>`
        ],
        [
          'color-0a1f44',
          '#0A1F44 (用法：主要标题、正文文本)',
          `<p class="color-0a1f44">文字颜色</p>`
        ],
        [
          'color-53627c',
          '#53627C (用法：正文、说明文本)',
          `<p class="color-53627c">文字颜色</p>`
        ],
        [
          'color-8a94a6',
          '#8A94A6 (用法：辅助文本、输入标签)',
          `<p class="color-8a94a6">文字颜色</p>`
        ],
        [
          'color-a6aebc',
          '#A6AEBC (用法：禁用文本。输入标签)',
          `<p class="color-a6aebc">文字颜色</p>`
        ],
        [
          'color-ffffff',
          '#FFFFFF (用法：白色字体)',
          `<p class="color-ffffff bg-0c66ff">文字颜色</p>`
        ]
      ],
      bodyData6: [
        [
          'text-truncate',
          '文字超出隐藏',
          `<p class="text-truncate" style="width:50px">你猜我最后一个字写的啥？恩</p>`
        ],
        [
          'text-nowrap',
          '文字不换行',
          `<p class="text-nowrap" style="width:50px;border:solid 1px green;">我是不可能弯的我是不可能弯的</p>`
        ]
      ],
      bodyData5: [
        [
          'text-capitalize',
          '首字母大写',
          `<p class="text-capitalize">love</p>`
        ],
        [
          'text-uppercase',
          '所有字母大写',
          `<p class="text-uppercase">love</p>`
        ],
        ['text-lowercase', '所有字母小写', `<p class="text-lowercase">love</p>`]
      ],
      bodyData4: [
        [
          'text-weight-light',
          '文字字重-浅',
          `<p class="text-weight-light">文字字重-浅</p>`
        ],
        [
          'text-weight-normal',
          '文字字重-正常',
          `<p class="text-weight-normal">文字字重-正常</p>`
        ],
        [
          'text-weight-bold',
          '文字字重-重',
          `<p class="text-weight-bold">文字字重-重</p>`
        ]
      ],
      bodyData3: [
        ['text-right', '文字居右', `<p class="text-right">文字居右</p>`],
        ['text-left', '文字居左', `<p class="text-left">文字居左</p>`],
        ['text-center', '文字居中', `<p class="text-center">文字居中</p>`]
      ],
      bodyData1: [
        [
          'text-12',
          '文字12px且行高20px',
          `<p class="text-12">文字12px且行高20px</p>`
        ],
        [
          'text-14',
          '文字14px且行高20px',
          `<p class="text-14">文字14px且行高20px</p>`
        ],
        [
          'text-16',
          '文字16px且行高22px',
          `<p class="text-16">文字16px且行高22px</p>`
        ],
        [
          'text-18',
          '文字18px且行高24px',
          `<p class="text-18">文字18px且行高24px</p>`
        ],
        [
          'text-20',
          '文字20px且行高26px',
          `<p class="text-20">文字20px且行高26px</p>`
        ]
      ],
      bodyData0: [
        [
          'h1',
          '.h1,h1都是可用的，用于需要匹配标题的样式，但是依然希望文本在行内显示的场合。',
          `<p class="h1">一级标题</p>`
        ],
        [
          'h2',
          '.h2,h2都是可用的，用于需要匹配标题的样式，但是依然希望文本在行内显示的场合。',
          `<p class="h2">二级标题</p>`
        ],
        [
          'h3',
          '.h3,h3都是可用的，用于需要匹配标题的样式，但是依然希望文本在行内显示的场合。',
          `<p class="h3">三级标题</p>`
        ],
        [
          'h4',
          '.h4,h4都是可用的，用于需要匹配标题的样式，但是依然希望文本在行内显示的场合。',
          `<p class="h4">四级标题</p>`
        ],
        [
          'h5',
          '.h5,h5都是可用的，用于需要匹配标题的样式，但是依然希望文本在行内显示的场合。',
          `<p class="h5">五级标题</p>`
        ],
        [
          'h6',
          '.h6,h6都是可用的，用于需要匹配标题的样式，但是依然希望文本在行内显示的场合。',
          `<p class="h6">六级标题</p>`
        ]
      ]
    }
  }
}
</script>
