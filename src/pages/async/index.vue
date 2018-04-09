<template>
    <el-container class="async">
        <el-aside width="200px">
            <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="intro">
                <span slot="title">简介</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <component :is="componentId"></component>
        </el-main>
    </el-container>
</template>

<script>
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
  components: {}
};
</script>