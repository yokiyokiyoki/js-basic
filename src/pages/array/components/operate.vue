<template>
  <div class="operate">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - 创建一个数组
            </div>
        </div>
        <div class="item">
            <div class="title red">- 普通点</div>
            <div class="title">arr=[]</div> 
            <div class="title">arr=new Array()，创建一个空数组[]</div>
            <div class="title">arr=new Array(3)，创建一个length为3，[undefined,undefined,undefined]</div>
            <div class="title">arr=new Array(1,2,3),创建一个[1,2,3]</div>
            <div class="title red">- 潮流点</div>
            <div class="title">arr=Array.of(7),创建一个[7]</div>
            <div class="title">arr=Array.of(1,2,3),创建一个[1,2,3]</div>
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
