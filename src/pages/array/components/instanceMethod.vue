<template>
  <div class="instanceMethod">
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 转换方法
                </div>
            </div>
             <div class="item">
                <div class="title">- arr.join(separator)，默认分隔符号是‘,’</div>
            </div>  
        </el-card> 
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 栈方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.push(item..)添加一个或多个元素到数组末尾，并返回新长度</div>
                 <div class="title">- arr.pop()移除最后一个元素并返回这个元素的值</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 队列方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.unshift(item..)添加一个或多个元素到数组头部，并返回新长度</div>
                 <div class="title">- arr.shift()移除第一个元素并返回这个元素的值</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 重排序方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.reverse()反转数组的顺序</div>
                 <div class="title">- arr.sort(comparefn),如果是想从小到大，function(a,b){return a-b}</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 操作方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.concat(item..),返回连接好的新数组</div>
                 <div class="title">- arr.slice(start,end)对数组做浅复制，end是你不希望复制的元素</div>
                 <div class="title">- arr.splice(start,deleteCount,item...)移除/插入/删除</div>
                 <div class="title">- arr.copyWithin(target,start,end)复制数组的一部分到同一数组的另一个位置，是直接修改当前数组。target是开始替换数据的位置，start可选，为开始读取数据的位置（默认0），end可选，为停止读取数据的参数（默认为arr.length）；[1,2,3,4,5].copyWithin(0,3)=>[4,5,3,4,5]表示从3号位知道数组结束的成员（4和5），复制到从0号位开始的位置，结果覆盖了原来的1和2</div>
                 <div class="title">- arr.fill(value,start,end):使用value填充一个数组，start是可选（填充开始位置，默认0），end可选（填充结束位置，默认为arr.length）；[1,2,3].fill(4)=>[4,4,4]。该方法直接改变原数组</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 位置方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.indexOf(ele,start):ele是要查找的元素，start是起始位置的索引，默认是0.如果找不到默认返回-1</div>
                 <div class="title">- arr.lastIndexOf(ele,start)，从start位置向前找</div>
                 <div class="title">- arr.includes(ele,fromIndex):现在一般使用这个，用来判断当前数组是否包含ele</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 迭代方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.every如果对每一项都返回true，则返回true</div>
                 <div class="title">- arr.some如果任意项返回true，则返回true</div>
                 <div class="title">- arr.filter返回符合条件的数组</div>
                 <div class="title">- arr.forEach给每个项进行迭代</div>
                 <div class="title">- arr.map返回每次函数调用后的新数组</div>
                 <div class="title">- arr.find找到第一个返回值为true的item，如果没有符合的，返回undefined</div>
                 <div class="title">- arr.findIndex找到索引</div>
            </div>  
        </el-card>
        <el-card class="box-card">
            <div slot='header'>
                <div class="title">
                    - 归并方法
                </div>
            </div>
             <div class="item">
                 <div class="title">- arr.reduce从左到右迭代数组所有的项，然后返回一个最终值</div>
                 <div class="title">- arr.reduceRight</div>
                 <div class="title">- reduce在函数式编程里很重要，通常用于将数组所有成员“累积”一个值</div>
                 <div class="title">- arr.reduce(fn,initData)有两个参数，第一个是fn(a,b)，a是累计变量，b是当前数组成员，每次执行b会累计到a，最后输出a。</div>
                 <div class="title">- 累计变量必须有一个初始值，initData就是初始值，如果没有，默认就是数组的第一个成员</div>
            </div>  
        </el-card>
    </div>   
</template>
<script>
export default {
  mounted() {
    this.showReduce();
  },
  methods: {
    showReduce() {
      //reduce
      let arr = [1, 2, 3, 4];
      let sum = (a, b) => a + b;
      console.log(arr.reduce(sum, 0));
    }
  }
};
</script>
