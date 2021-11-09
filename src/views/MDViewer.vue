<template>
  <section class="viewer">works - {{ $store.getters.activeRoute }}</section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";

@Component({
  name: "MDViewer",
})
export default class MDViewer extends Vue {
  @Watch("$route", { immediate: true, deep: true })
  onRouteChange(route: Route) {
    this.$store.dispatch("setActiveRoute", route.path);
  }
}
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
