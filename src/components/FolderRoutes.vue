<template>
  <div class="folder-routes">
    <a
      :href="routesNow(index) ? undefied : item.url"
      v-for="(item, index) in folderRoutesTest"
      :key="index"
      :style="{
        color: routesNow(index) ? 'var(--color-text-grey)' : 'black',
      }"
      >{{item.title}}{{!routesNow(index) ? " / " : ""}}</a
    >
  </div>
</template>

<script>
export default {
  name: "FolderRoutes",
  props: {
    folderRoutes: {
      type: Array,
    },
  },
  data() {
    return {
        folderRoutesTest : [
        {
          url: "/",
          title: "Trang chủ ",
        },
        {
          url: "/1",
          title: "Áo Polo Nữ ",
        },
        {
          url: "/3",
          title: " Áo Polo cổ vải trơn C9POL004K",
        },
      ]
    }
  },
  methods:{
    routesNow(index){
        return index === this.folderRoutesTest.length - 1;
    }
  }
};
</script>
<style scoped>
.folder-routes {
  color: rgb(55, 55, 55);
  font-size: 13px;
}
</style>
