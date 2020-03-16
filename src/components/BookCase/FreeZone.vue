<template>
  <div id="freezone">
    <div class="fixed-top">
      <mt-header title="免费专区">
        <router-link to="/bookcase" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

    </div>
    <p>限免结束时间:2020-03-09 12:00:00</p>
  </div>

</template>

<script>
    export default {
        name: "FreeZone"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#freezone
  padding 45px 10px 0px
  p
    font-size 0.9em
    color red
</style>
