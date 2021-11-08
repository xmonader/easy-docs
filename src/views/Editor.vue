<template>
  <div>
    <div class="editor">
      <div class="editor__input">
        <textarea v-model="md"></textarea>
      </div>
      <div class="editor__preview" v-html="html"></div>
    </div>

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
import { Component, Vue, Watch } from "vue-property-decorator";
import { parse } from "marked";

@Component({
  name: "Editor",
})
export default class Editor extends Vue {
  elements = ["kubernetes", "vm", "deployedlist", "caprover"];
  md = `
# h1
## h2
### h3
#### h4
##### h5
###### h6
---

<tf-kubernetes></tf-kubernetes>
<tf-vm></tf-vm>
<tf-caprover></tf-caprover>
<tf-deployedlist></tf-deployedlist>
<tf-deployedlist tab="k8s"></tf-deployedlist>
  
  `;
  html = "";

  created() {
    console.log(this.elements);
  }

  @Watch("md", { immediate: true, deep: true })
  onMdChange() {
    this.html = parse(this.md, {
      sanitize: false,
    });
  }
}
</script>

<style lang="scss" scoped>
.editor {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;

  &__input {
    width: 50%;
    height: 100%;
    border: 1px solid #ccc;

    textarea {
      padding: 15px;
      width: 100%;
      height: 100%;
      display: block;
      background: #333;
      color: white;
      font-size: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }

  &__preview {
    width: 50%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
