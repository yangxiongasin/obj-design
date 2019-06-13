<template>
  <div>
    <h3 class="mt-20 mb-8">width  设置宽度为其父元素的百分比</h3>
    <div class="d-flex">
      <div style="width: 500px; height: 250px;" class="bg-light mr-40">
        <div class="w-25 h-25 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">25%</div>
        <div class="w-50 h-25 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">50%</div>
        <div class="w-75 h-25 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">75%</div>
        <div class="w-100 h-25 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">100%</div>
      </div>
      <div class="flex-ju-al-center text-14 d-flex-column">
        <div class="h-25 flex-ju-al-center " v-text='text1'></div>
        <div class="h-25 flex-ju-al-center" v-text='text2'></div>
        <div class="h-25 flex-ju-al-center" v-text='text3'></div>
        <div class="h-25 flex-ju-al-center" v-text='text4'></div>
      </div>
    </div>
    <h3 class="mt-20 mb-8">height  设置高度为其父元素的百分比</h3>
    <div class="d-flex">
      <div style="width: 500px; height: 250px;" class="bg-light d-flex mr-40">
        <div class="w-25 h-25 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">25%</div>
        <div class="w-25 h-50 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">50%</div>
        <div class="w-25 h-75 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">75%</div>
        <div class="w-25 h-100 flex-ju-al-center border-black border-radius-right-4"  style="background-color: rgba(0,0,255,.1)">100%</div>
      </div>
      <div class="flex-ju-al-center text-14 d-flex-column">
        <div class="h-25 flex-ju-al-center" v-text='text5'></div>
        <div class="h-25 flex-ju-al-center" v-text='text6'></div>
        <div class="h-25 flex-ju-al-center" v-text='text7'></div>
        <div class="h-25 flex-ju-al-center" v-text='text8'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sizing',
  data () {
    return {
      text1: `<div class="w-25">25%</div>`,
      text2: `<div class="w-50">50%</div>`,
      text3: `<div class="w-75">75%</div>`,
      text4: `<div class="w-100">100%</div>`,
      text5: `<div class="h-25">25%</div>`,
      text6: `<div class="h-50">50%</div>`,
      text7: `<div class="h-75">75%</div>`,
      text8: `<div class="h-100">100%</div>`
    }
  }
}
</script>
