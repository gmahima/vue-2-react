<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ExampleReactComponentInVue />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import ReactInVue from './components/ReactInVue.vue'
import ExampleReactComponent from './ExampleReactComponent.react';
  import { ReactInVue } from "vuera-ts";
  const ExampleReactComponentInVue = ReactInVue(ExampleReactComponent)
export default {
  name: 'App',
  components: {
    ExampleReactComponentInVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
