/*
全局过滤器
使用时在main或调用组件页引用即可.
*/


import Vue from 'vue'


//分秒
Vue.filter('formatSeconds', function (value) {
  var intTime = parseInt(value);// 整数
  var secondTime = 0; //秒 
  var minuteTime = 0;// 分
  var result;
  
  if(intTime > 60) {//如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(intTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(intTime % 60);
      if( secondTime.toString().length == 1 ){
        secondTime = '0'+secondTime
      }
      
      //如果分钟大于60，将分钟转换成小时
      result =  minuteTime+ ":" + secondTime;
  }else{
      secondTime = parseInt(intTime % 60);
      if( secondTime.toString().length == 1 ){
        secondTime = '0'+secondTime
      }
      result =  "0:" + secondTime;
  }

  return result;
})
  

