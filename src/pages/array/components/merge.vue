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
                 <div class="title">- 
                     <pre>    
                        function flatten(arr,result){ 
                            if(!result){
                                result=[]
                            }
                            for(var i=0;i小于arr.length;i++){
                                if(arr[i].constructor==Array){
                                    flatten(arr[i],result)
                                }else{
                                    result.push(arr[i])
                                }
                            }
                            return result
                        }
                     </pre> 
                </div>
                <div class="title">flatten(arr1)</div>
            </div>  
        </el-card>
  </div>
</template>
<script>
export default {
  mounted() {
    let arr = flatten1([
      [1, 2],
      [3, 4, 5],
      [6, 7, 8, 9],
      [11, 12, [12, 13, [14]]],
      10,
      11
    ]);
    console.log(arr);
  }
};
//这个是两个数组arr1，arr2合成一个，使用reduce，一般是arr1.concat(arr2)
function flatten(arr1, arr2) {
  return arr2.reduce((prev, curr) => {
    prev.push(curr);
    return prev;
  }, arr1);
}
function flatten1(arr, result) {
  if (!result) {
    result = [];
  }
  //   遍历每一个，如果是数组，则递归，如果不是数组，则放入result
  arr.forEach(item => {
    if (item.constructor == Array) {
      flatten1(item, result);
    } else {
      result.push(item);
    }
  });
  return result;
}
</script>
