<template>
  <section class="viewer">
    works - {{ $store.getters.activeRoute }} - {{ $store.getters.activePage }}
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "MDViewer",
})
export default class MDViewer extends Vue {}
</script>

<style lang="scss" scoped>
.viewer {
  padding: 15px;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  will-change: transform;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
  }
}
</style>
