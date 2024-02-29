<template>
    <div id="react-root"></div>
  </template>
  
  <script>
  import { renderReactComponent, clearReactComponent } from '../ReactWrapper.react.jsx'; // Adjust the path as necessary

  export default {
    name: 'ReactInVue',
    mounted() {
      renderReactComponent("react-root");
    },
    beforeDestroy() {
      clearReactComponent("react-root");
    }
  };
  </script>
  