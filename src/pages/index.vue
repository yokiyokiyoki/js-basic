<template>
    <el-container class="container">
        <el-header>
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item v-for='(item,index) in items' :key='index' :index="item.path">{{item.name}}</el-menu-item>
            </el-menu>
        </el-header>
        <router-view></router-view>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "array",
      items: [
        {
          name: "数组",
          path: "array"
        },
        { name: "对象", path: "object" },
        { name: "异步", path: "async" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(`/${key}`);
    }
  }
};
</script>

