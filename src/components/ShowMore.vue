<template>
  <div>
    <div
      class="show-more__container"
      :style="{ height: containerHeight + measure }"
      ref="container"
    >
      <slot></slot>
    </div>

    <div v-if="initialHeight <= actualHeight">
      <button
        @click.prevent="showMore('more')"
        :class="[moreBtnClass]"
        v-if="visible === 'more'"
        v-html="`${moreIcon} ${moreText}`"
      >
      </button>
      <button
        @click.prevent="showMore('less')"
        :class="[lessBtnClass]"
        v-if="visible === 'less'"
        v-html="`${lessIcon} ${lessText}`"
      >
      </button>
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
        default: 'button is-primary'
      },
      lessBtnClass: {
        type: String,
        default: 'button is-danger'
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
        default: '<i class="fa fa-plus"></i>'
      },
      lessIcon: {
        type: String,
        default: '<i class="fa fa-minus"></i>'
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
      showMore(a) {
        if (a === 'more') {
          this.visible = 'less'
          this.containerHeight = this.$refs.container.childNodes[0].clientHeight
        }
        if (a === 'less') {
          this.visible = 'more'
          this.containerHeight = this.initialHeight
        }
      }
    },
    mounted() {
      this.actualHeight = this.$refs.container.childNodes[0].clientHeight
    }
  }
</script>

<style>
  .show-more__container {
    overflow: hidden;
  }
</style>
