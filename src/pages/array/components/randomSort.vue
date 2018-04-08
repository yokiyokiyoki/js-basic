<template>
  <div class="randomSort">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - 数组随机排序
            </div>
        </div>
        <div class="item">
            <div class="title">- 递归的思路</div>
            <div class="title">- 不断从原数组中随机取出一个元素放进新数组，同时删除这个值，递归重复到全部取出</div>
            <div class="title">- 边界条件是数组只剩下一个元素</div>
        </div> 
        <div class="item">
            <div class="title">- 随机交换数组内的元素，来自underscore.js</div>
            <div class="title">- 遍历数组，每次从i位置后元素随机挑一个放到i位置，然后将原来的i位置放到被挑元素位置</div>
        </div>
    </el-card>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(randomSort([1, 2, 3, 4, 5]));
    console.log(randomSort1([1, 2, 3, 4, 5]));
  }
};
//递归
function randomSort(arr, newArr = []) {
  if (arr.length == 1) {
    newArr.push(arr[0]);
    return newArr; //递归退出
  }
  let randomIndex = Math.ceil(Math.random() * arr.length) - 1;
  newArr.push(arr[randomIndex]);
  arr.splice(randomIndex, 1);
  return randomSort(arr, newArr);
}
//随机交换
function randomSort1(arr) {
  let len = arr.length;
  let temp, randomIndex;
  for (let i = 0; i < len; i++) {
    randomIndex = i + Math.floor(Math.random() * (len - i));
    temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}
</script>
