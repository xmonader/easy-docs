<template>
  <main>
    <script
      v-for="el in elements"
      :key="el"
      type="application/javascript"
      :src="`/easy-docs/build/elements/${el}.wc.js`"
      defer
    ></script>

    <section class="app-container">
      <Sidenav />
      <router-view />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidenav from "@/components/Sidenav.vue";

@Component({
  name: "App",
  components: {
    Sidenav,
  },
})
export default class App extends Vue {
  elements = ["kubernetes", "vm", "deployedlist", "caprover"];
}
</script>

<style lang="scss" scoped>
.app-container {
  padding-left: 300px;
}
</style>
