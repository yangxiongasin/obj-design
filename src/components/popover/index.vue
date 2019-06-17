<template>
  <el-popover
    :placement="placement"
    :title="title"
    :width="computedWidth"
    :trigger="trigger"
    :disabled="disabled"
    :transition="transition"
    :visible-arrow="transition"
    :popper-options="popperOptions"
    :popper-class="popperClass"
    :open-delay="openDelay"
    :tabindex="tabindex"
    v-model="visible"
    @show="show"
    @after-enter="afterEnter"
    @hide="hide"
    @after-leave="afterLeave">
    <slot name="obj_content">{{ content }}</slot>
    <slot name="obj_footer">
      <div class="footer" v-if="showFooter">
        <el-button v-if="showCancelBtn" size="mini" type="text" @click="cancelHandle">取消</el-button>
        <el-button type="primary" size="mini" class="typeClass" @click="okHandle">确定</el-button>
      </div>
    </slot>
    <span class="d-inline-block" slot="reference">
      <slot name="obj_reference"></slot>
    </span>
  </el-popover>
</template>
<script>
export default{
  name: 'objPopover',
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    content: String,
    width: [String, Number],
    title: String,
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: Boolean,
    offset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default: () => {
        return {
          boundariesElement: 'body',
          gpuAcceleration: false
        }
      }
    },
    popperClass: String,
    openDelay: Number,
    tabindex: {
      type: Number,
      default: 0
    },
    // 新增属性
    showFooter: {
      type: Boolean,
      default: true
    },
    showCancelBtn: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'primary',
      validator: value => ['primary', 'focus', 'hover', 'manual'].indexOf(value) > -1
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val
    }
  },
  computed: {
    computedWidth () {
      if (this.width > 150) {
        return this.width
      } else {
        return 150
      }
    },
    typeClass () {
      return [
        'text-right',
        `popover-${this.type}`
      ]
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    cancelHandle () {
      this.$emit('cancel', this.visible)
    },
    okHandle () {
      this.$emit('ok', this.visible)
    },
    show () {
      this.$emit('show')
    },
    afterEnter () {
      this.$emit('after-enter')
    },
    hide () {
      this.$emit('ok')
    },
    afterLeave () {
      this.$emit('after-leave')
    }
  }
}
</script>
