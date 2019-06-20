<template>
  <el-popover
    :placement="placement"
    :width="computedWidth"
    :trigger="trigger"
    :disabled="disabled"
    :transition="transition"
    :visible-arrow="visibleArrow"
    :popper-options="popperOptions"
    popper-class="popover"
    :open-delay="openDelay"
    :tabindex="tabindex"
    v-model="obj_visible"
    @show="$com_show"
    @after-enter="$com_afterEnter"
    @hide="$com_hide"
    @after-leave="$com_afterLeave">
    <div v-if="ocjTitle" class="flex-al-center text-16 text-weight-bold color-0a1f44 mb-8">
      <!--<i class="o-icon popover-icon mr-8" :class="icon.iconClass">{{ icon.iconHtml }}</i>-->
      <i class="o-icon">&#xe719;</i>
      <span>{{ ocjTitle }}</span>
    </div>
    <slot name="ocj_content">
      <div class="text-14 color-8a94a6">
        {{ ocjContent }}
      </div>
    </slot>
    <div class="popover-footer text-right mt-16" v-if="showFooter">
      <el-button v-if="showCancelBtn" class="border-outline bg-white" size="mini" @click="$on_cancel">取消</el-button>
      <el-button type="primary" size="mini" :class="typeClass" @click="$on_ok">确定</el-button>
    </div>
    <span class="d-inline-block" slot="reference">
      <slot name="ocj_reference"></slot>
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
      validator: value => ['click', 'focus', 'hover'].indexOf(value) > -1
    },
    ocjContent: String,
    width: {
      type: [String, Number],
      default: 249
    },
    ocjTitle: String,
    placement: {
      type: String,
      default: 'bottom'
    },
    disabled: {
      type: Boolean,
      default: false
    },
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
      validator: value => ['primary', 'success', 'error', 'warning'].indexOf(value) > -1
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      obj_visible: false
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
    icon () {
      if (this.showIcon) {
        if (this.type === 'primary') {
          return {
            iconClass: 'color-0c66ff',
            iconHtml: '&#xe719;'
          }
        } else if (this.type === 'error') {
          return {
            iconClass: 'color-0c66ff',
            iconHtml: '&#xe712;'
          }
        } else if (this.type === 'warning') {
          return {
            iconClass: 'color-0c66ff',
            iconHtml: '&#xe712;'
          }
        } else if (this.type === 'success') {
          return {
            iconClass: 'color-0c66ff',
            iconHtml: '&#xe719;'
          }
        }
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
    $on_cancel () {
      this.obj_visible = false
      this.$emit('cancel')
    },
    $on_ok () {
      this.obj_visible = false
      this.$emit('ok')
    },
    $com_show () {
      this.$emit('show')
    },
    $com_afterEnter () {
      this.$emit('after-enter')
    },
    $com_hide () {
      this.$emit('hide')
    },
    $com_afterLeave () {
      this.$emit('after-leave')
    }
  }
}
</script>
