<template>
  <div class="max">
    <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - 遍历比较方法
            </div>
        </div>
        <div class="item">
            <div class="title">- 设一个变量放最大值，将数组中第一个值赋给该变量</div>
            <div class="title">- 遍历数组与最大值变量比较，如果大于最大值，则将该值赋给最大值变量</div>
        </div>  
    </el-card>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(max([1, 45, 23, 3, 6, 2, 7, 234, 56]));
  }
};
//存放最大值
function max(arr) {
  let max = arr[0];
  arr.forEach(item => {
    if (item > max) {
      max = item;
    }
  });
  return max;
}
</script>

