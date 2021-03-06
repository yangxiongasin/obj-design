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
    @after-leave="$com_afterLeave"
  >
    <div
      v-if="title"
      class="flex-al-center text-16 text-weight-bold color-0a1f44 mb-8"
    >
      <i
        class="o-icon popover-icon mr-8"
        :class="icon.iconClass"
        v-html="icon.iconHtml"
      ></i>
      <span>{{ title }}</span>
    </div>
    <slot name="content">
      <div class="text-14 color-8a94a6">
        {{ content }}
      </div>
    </slot>
    <div class="popover-footer text-right mt-16" v-if="showFooter">
      <el-button
        v-if="showCancelBtn"
        class="border-outline bg-white"
        size="mini"
        @click="$on_cancel"
        >取消</el-button
      >
      <el-button type="primary" size="mini" :class="typeClass" @click="$on_ok"
        >确定</el-button
      >
    </div>
    <span class="d-inline-block" slot="reference">
      <slot></slot>
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
    content: String,
    width: {
      type: [String, Number],
      default: 249
    },
    title: String,
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
      let iconType = null
      if (this.showIcon) {
        if (this.type === 'primary') {
          iconType = {
            iconClass: 'color-0c66ff',
            iconHtml: '&#xe719;'
          }
        } else if (this.type === 'error') {
          iconType = {
            iconClass: 'color-f03d3d',
            iconHtml: '&#xe712;'
          }
        } else if (this.type === 'warning') {
          iconType = {
            iconClass: 'color-ffad0d',
            iconHtml: '&#xe712;'
          }
        } else if (this.type === 'success') {
          iconType = {
            iconClass: 'color-0bb07b',
            iconHtml: '&#xe719;'
          }
        }
      }
      return iconType
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
