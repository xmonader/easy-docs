<template>
  <div>
    editor works!

    <tf-kubernetes></tf-kubernetes>

    <script
      type="application/javascript"
      src="/build/elements/kubernetes.wc.js"
      defer
    ></script>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Editor",
})
export default class Editor extends Vue {}
</script>
