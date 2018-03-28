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
            <div class="title">- 所谓类数组对象，本质特征只有一点，即有length属性的对象</div>
            <div class="title">- 实际应用中，常见的类数组对象是dom操作的NodeList集合，以及函数内部的arguments对象</div>
            <div class="title">- mapfn是对arrayLike的每个元素调用的映射函数</div>
            <div class="title">- 如果对象里面只有length属性，比如a={length:3},那么Array.from(a)=[undefined,undefined,undefined]</div>
            <div class="title">- newArray1=Array.from(document.querySelectorAll('*'))</div>
            <div class="title">- newArray2 = Array.from(arrayLike, (v) => v+'1')</div>
        </div>   
    </el-card>
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - Array.of(item...)
            </div>
        </div>
        <div class="item">
            <div class="title">- 用于创建数组实例</div>
            <div class="title">- 用于替代Array()或者new Array()</div>
            <div class="title">- Array.of()和Array构造参数之间的区别是在于处理整数参数：Array.of(2)=[2]，而Array(2)=[undefined,undefined]</div>
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