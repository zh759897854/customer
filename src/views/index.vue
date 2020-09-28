<template>
  <div class="index">
    <component :is="curComponent"></component>
  </div>
</template>

<script>
  import pc from '../components/pcIndex/pcIndex'
  import  mobile from '../components/mobileIndex/mobileIndex'

export default {
  name: 'Index',
  data() {
    return {
      curComponent: ''
    }
  },
  components: {pc, mobile},
  mounted() {
    // 根据平台信息选择显示哪个组件
    console.log(this.$Plateform);
    this.curComponent = this.$Plateform?'mobile':'pc';
  }
}
</script>
