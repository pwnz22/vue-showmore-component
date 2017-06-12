<template>
  <div id="app">
    <div class="description">
      <show-more>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Rem nemo ab reprehenderit, natus, blanditiis sint non.
          Cupiditate alias et quaerat perferendis,
          fugit beatae possimus quidem necessitatibus, suscipit officia animi odit.
          Rem nemo ab reprehenderit, natus, blanditiis sint non.
        </p>
      </show-more>
    </div>
  </div>
</template>

<script>
  import ShowMore from './components/ShowMore'

  export default {
    name: 'app',
    components: {
      ShowMore
    }
  }
</script>

<style>
  .description {
    width: 300px;
    margin: 0 auto;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
