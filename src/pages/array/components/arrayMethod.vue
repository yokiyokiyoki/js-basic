<template>
  <div class="arrayMethod">
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - Array.isArray(obj)
            </div>
        </div>
        <div class="item">
            <div class="title">- 检测对象是否是一个数组</div>
        </div>   
    </el-card> 
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - Array.from(arrayLike,mapfn)
            </div>
        </div>
        <div class="item">
            <div class="title">- arrayLike是想要转换成真实数组的类数组对象或者可遍历对象</div>
            <div class="title"></div>
        </div>   
    </el-card> 
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.box-card {
  .title {
    text-align: left;
  }
  .red {
    color: red;
  }
}
</style>