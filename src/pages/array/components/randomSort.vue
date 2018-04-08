<template>
  <div class="randomSort">
      <el-card class="box-card">
        <div slot='header'>
            <div class="title">
                - 数组随机排序
            </div>
        </div>
        <div class="item">
            <div class="title">- 双重循环去重的主要思路</div>
            <div class="title">- 构建一个空数组来存放去重后的数组</div>
            <div class="title">- 对原数组做循环遍历，每次从数组中取出一个元素与结果数组比较,使用一个flag比较</div>
            <div class="title">- 如果原数组取出来的元素在结果数组中存在,则flag为true，循环完了，再根据flag是不是false来放入结果数组</div>
        </div> 
    </el-card>
  </div>
</template>
