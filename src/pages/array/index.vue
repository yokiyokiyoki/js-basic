<template>
    <el-container class="array">
        <el-aside width="200px">
            <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="intro">
                <span slot="title">简介</span>
            </el-menu-item>
            <el-menu-item index="operate">
                <span slot="title">基本操作</span>
            </el-menu-item>
            <el-menu-item index="arrayMethod">
                <span slot="title">数组方法</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <component :is="componentId"></component>
        </el-main>
    </el-container>
</template>
<script>
const intro = () => import("./components/intro");
const operate = () => import("./components/operate");
const arrayMethod = () => import("./components/arrayMethod");
export default {
  data() {
    return {
      active: "intro",
      componentId: "intro"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.active = key;
      this.componentId = key;
    }
  },
  components: {
    intro,
    operate,
    arrayMethod
  }
};
</script>

