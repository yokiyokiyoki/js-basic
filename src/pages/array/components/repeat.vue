<template>
  <div class="repeat">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - 数组去重
            </div>
        </div>
        <div class="item">
            <div class="title">- 双重循环去重的主要思路</div>
            <div class="title">- 构建一个空数组来存放去重后的数组</div>
            <div class="title">- 对原数组做循环遍历，每次从数组中取出一个元素与结果数组比较,使用一个flag比较</div>
            <div class="title">- 如果原数组取出来的元素在结果数组中存在,则flag为true，循环完了，再根据flag是不是false来放入结果数组</div>
        </div> 
        <div class="item">
            <div class="title">- 使用includes和原数组循环</div>
            <div class="title">- 如果没有包含在结果数组里面的，则添加到结果数组里面去</div>
        </div>  
        <div class="item">
            <div class="title">- 使用new Set(arr)</div>
            <div class="title"> return [...new]</div>
        </div>
        <div class="item">
            <div class="title">- 使用Map数据结构</div>
        </div>
    </el-card>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(unique([1, 2, 3, 4, 3, 2, "a", "b", "a"]));
    console.log(unique1([1, 2, 3, 4, 3, 2, "a", "b", "a"]));
    console.log(unique2([1, 2, 3, 4, 3, 2, "a", "b", "a"]));
  }
};
// 双重循环去重
function unique(arr) {
  let res = [];
  arr.forEach(item => {
    let repeat = false;
    res.forEach(resItem => {
      if (item == resItem) {
        repeat = true;
      }
    });
    if (!repeat) {
      res.push(item);
    }
  });
  return res;
}
//使用includes
function unique1(arr) {
  let res = [];
  arr.forEach(item => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}
function unique2(arr) {
  let seen = new Map();
  return arr.filter(v => !seen.has(v) && seen.set(v, 1));
}
</script>

