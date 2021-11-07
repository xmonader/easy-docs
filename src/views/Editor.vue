<template>
  <div>
    <div id="test"></div>

    <script
      v-for="el in elements"
      :key="el"
      type="application/javascript"
      :src="`/build/elements/${el}.wc.js`"
      defer
    ></script>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Editor",
})
export default class Editor extends Vue {
  elements = ["kubernetes", "vm"];

  created() {
    console.log(this.elements);
  }
}
</script>
