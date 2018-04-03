<template>
  <div class="merge">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 多个一维数组合并
                </div>
                <div class="title">- arr1=[1,2],arr2=[3,4]</div>
            </div>
             <div class="item">
                 <div class="title">- arr=arr1.concat(arr2)</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 多维数组合并成一维数组
                </div>
                <div class="title">- arr1=[[1, 2], [3, 4, 5], [6, 7, 8, 9], [11,12,[12,13,[14]]], 10, 11]</div>
            </div>
             <div class="item">
                 <div class="title">- 使用push和递归</div>
                 <div class="title">- function flatten(arr,result){ if(!result){result=[]}}</div>
            </div>  
        </el-card>
  </div>
</template>
<script>
export default {};
</script>
