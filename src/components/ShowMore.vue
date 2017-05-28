<template>
  <div>
    <div class="show_more__container" :style="{ height: containerHeight + measure }" ref="container">
      <div>
        <slot></slot>
      </div>
    </div>

    <div v-if="initialHeight <= actualHeight">
      <button v-if="visible === 'more'" :class="[moreBtnClass]" @click.prevent="more"
              v-html="moreText + moreIcon"></button>
      <button v-if="visible === 'less'" :class="[lessBtnClass]" @click.prevent="less"
              v-html="lessText + lessIcon"></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      initialHeight: {
        type: Number,
        default: 70
      },
      measure: {
        type: String,
        default: 'px'
      },
      moreBtnClass: {
        type: String,
        default: 'btn btn-primary btn-xs btn-light-frame btn-framed btn-rounded'
      },
      lessBtnClass: {
        type: String,
        default: 'btn btn-primary btn-xs btn-light-frame btn-framed btn-rounded'
      },
      moreText: {
        type: String,
        default: 'More'
      },
      lessText: {
        type: String,
        default: 'Less'
      },
      moreIcon: {
        type: String,
        default: '<i class="icon_plus"></i>'
      },
      lessIcon: {
        type: String,
        default: '<i class="icon_minus-06"></i>'
      }

    },

    data() {
      return {
        containerHeight: this.initialHeight,
        visible: 'more',
        actualHeight: null
      }
    },

    methods: {
      more() {
        this.visible = 'less'
        this.containerHeight = this.$refs.container.childNodes[0].clientHeight
      },
      less() {
        this.visible = 'more'
        this.containerHeight = this.initialHeight
      }
    },

    mounted() {
      this.actualHeight = this.$refs.container.childNodes[0].clientHeight
    }
  }
</script>

<style lang="scss">
  .show_more {
    &__container {
      transition: height 500ms;
      overflow: hidden;
    }
  }
</style>
