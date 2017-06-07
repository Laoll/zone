<template>
  <div class="food">
    <div class="hide" @click="hide($event)">*****************************</div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa cumque cupiditate esse ex excepturi harum illo, inventore maiores nam numquam odit, porro quae qui recusandae sapiente soluta tempora ullam!
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'food',
    props: {
      props: {
        goods: {
          type: Object
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      hide (event) {
        console.log('a')
        if (!event._constructed) {
          return
        }
        this.$emit('hideDetail')
      }
    }
  }
</script>

<style lang="stylus">
  .food
    background #fff
    display flex
    position fixed
    bottom 0
    left 0
    right 0
    top 0
    z-index 600
</style>
