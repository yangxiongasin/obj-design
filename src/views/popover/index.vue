<template>
  <div class="popover">
    <h3 class="mt-20 mb-8">popover 类型</h3>
    <h4 class="mt-16 mb-16 color-light">注意：触发 popover 插入 slot 时，需修改 slot 名：原 elementUI 的 popover 组件值 reference 改为 ocj_reference </h4>
    <div class="d-flex flex-ju-bet">
      <code class="pr-40 pb-40 mr-40 border-right">
        <pre class="color-primary text-16">{{ typeCode }}</pre>
      </code>
      <obj-popover
        ocj-title="属性启用"
        ocj-content="是否确认启用属性？"
        type="primary"
        @ok="$com_ok"
        @cancel="$com_cancel">
        <el-button slot="ocj_reference">click 激活</el-button>
      </obj-popover>
    </div>
    <h3 class="mt-20 mb-8">自行插入slot内容</h3>
    <h4 class="mt-16 mb-16 color-light">注意：内容区域插入 slot 时，需带上 slot 名：ocj_content</h4>
    <div class="d-flex flex-ju-bet">
      <code class="pr-40 pb-40 mr-40 border-right">
        <pre class="color-primary text-16">{{ slotCode }}</pre>
      </code>
      <obj-popover
        type="error">
        <div slot="ocj_content">自行插入slot的内容</div>
        <el-button slot="ocj_reference">click 激活</el-button>
      </obj-popover>
    </div>
    <el-tabs v-model="activeName" class="mt-40">
      <el-tab-pane label="属性" name="first">
        <!--<h4 class="mt-16 mb-16 color-light">说明：如下所列中修改原 elementUI 中 popover 组件 trigger、title、content、width 四个参数；新增 show-footer、show-cancel-btn、type、show-icon 等四个参数</h4>-->
        <div class="d-flex border">
          <obj-table
            :thead-data="headerData"
            :tbody-data="radiusData1"
          ></obj-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="事件" name="second">
        <!--<h4 class="mt-16 mb-16 color-light">说明：支持原elementUI的所有事件的基础上新增底部按钮的两个点击事件的回传：ok 和 cancel</h4>-->
        <!--<div class="text-16 mb-8 text-weight-bold"></div>-->
        <div class="d-flex border">
          <obj-table
            :thead-data="eventsHeader"
            :tbody-data="eventsData"
          ></obj-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default{
  data () {
    return {
      obj_visible: false,
      obj_visible1: false,
      activeName: 'first',
      showFooter: true,
      showCancelBtn: true,
      showIcon: true,
      headerData: ['参数', '说明', '类型', '可选值', '默认值'],
      radiusData: [
        [
          'trigger',
          '触发条件',
          'String',
          'click, focus, hover',
          'click'
        ],
        [
          'ocj-title',
          '标题',
          'String',
          '-',
          '-'
        ],
        [
          'ocj-content',
          '插入内容；当利用slot传值时，该属性不具插值作用，组件内部沿用slot插入的值',
          'String',
          '-',
          '-'
        ],
        [
          'width',
          '宽度',
          'String，Boolean',
          '-',
          '249'
        ],
        [
          'show-footer',
          '是否展现底部按钮',
          'Boolean',
          '-',
          'true'
        ],
        [
          'show-cancel-btn',
          '是否展现底部按钮中取消按钮',
          'Boolean',
          '-',
          'true'
        ],
        [
          'type',
          '提醒类别',
          'String',
          'primary, success, error, warning',
          'primary'
        ],
        [
          'show-icon',
          '是否展现标题处icon',
          'Boolean',
          '-',
          'true'
        ]
      ],
      radiusData1: [
        [
          'ocj-title',
          '标题',
          'String',
          '-',
          '-'
        ],
        [
          'ocj-content',
          '插入内容；当利用slot传值时，该属性不具插值作用，组件内部沿用slot插入的值',
          'String',
          '-',
          '-'
        ],
        [
          'type',
          '提醒类别',
          'String',
          'primary, success, error, warning',
          'primary'
        ]
      ],
      eventsHeader: ['事件名称', '说明', '回调参数'],
      eventsData: [
        [
          'ok',
          '点击确定时触发',
          '-'
        ],
        [
          'cancel',
          '点击取消时触发',
          '-'
        ]
      ],
      typeCode: `
    <obj-popover
      ocj-title="属性启用"
      ocj-content="是否确认启用属性？"
      type="primary"
      @ok="$com_ok"
      @cancel="$com_cancel">
      <el-button slot="ocj_reference">click 激活</el-button>
    </obj-popover>`,
      slotCode: `
    <obj-popover
      type="error">
      <div slot="ocj_content">自行插入slot的内容</div>
      <el-button slot="ocj_reference">click 激活</el-button>
    </obj-popover>`
    }
  },
  computed: {
  },
  methods: {
    $com_cancel () {
      console.log('cancel')
    },
    $com_ok (payload) {
      console.log('ok')
    }
  }
}
</script>
<style>

</style>
