<template>
  <div class="list-wrap">
    <headerTop>
      <div slot="left" class="top-return">
        <i class="default return" @click="rouBack()"></i>
        <h3 class="ellipsis h3">{{$route.query.title}}</h3>
      </div>
    </headerTop>

    <keep-alive>
      <listTopSelce @selectTopTable="selectTopTable" :selects="selects" :type="type" style="margin-top:3.5rem;"></listTopSelce>
    </keep-alive>

    <keep-alive>
      <homeList :data="listData"></homeList>
    </keep-alive>

    <p v-show="loadtext" ref="timg" class="timg"><img width="100%" :src="timg" /></p>
  </div>
</template>

<script>
import Vue from 'vue';
import { axioss } from '../../extends/axios'
import { SP } from '../../api/api'

import { getStyle } from '../../extends/getStyle'

import headerTop from '../header.vue'
import listTopSelce from '../funnyMore/listTopSelce.vue'

import homeList from './homeList.vue'

import {randoms} from '../../extends/random'

import timg from '../../assets/images/timg.gif'  //加载图片


//下拉刷新
// import { DropdownMenu, DropdownItem } from 'vant';
// Vue.use(DropdownMenu).use(DropdownItem);

export default {
  data() {
    return {
      timg: timg,  //下拉加载动画
      loadtext: false,  //下拉加载

      type: window.localStorage.getItem('videoType') || 'one',//模式
      selects: [    //栏目
        { name: "正常模式", type: "one" },  //disabled:true  隐藏
        { name: "随机模式", type: "two", }
      ],
      loading: false, //加载限制
      loadNum: 500,  //请求get  
      objListData: {   //大数据处理

      },
      listData: JSON.parse(window.sessionStorage.getItem('videoData') || '[]'),
    }
  },
  watch: {
    type: {
      handler: function(val) {
        window.localStorage.setItem('videoType', val)
      },
      deep: true
    },
    listData: {
      handler: function(val) {
        window.sessionStorage.setItem('videoData', JSON.stringify(val))
      },
      deep: true
    }
  },
  components: {
    headerTop, listTopSelce, homeList
  },
  mounted() {
    let type = this.$route.query.type;

    switch (type) {
      case 'video':
        // axios请求
        //模式切换
        if (this.type == this.selects[1].type) {
          this.loadNum = randoms(500, 90600)
        }else{
          this.loadNum = 500
        }
        this.initVideo()
        break;
      case 2:
        // 执行代码块 2
        break;
      default:
        return this.$toast({ message: '无法完成参数请求!', className: 'fontsize' });
      // 与 case 1 和 case 2 不同时执行的代码
    }
    //初始化数据
    this.objListData = {
      type: this.type,
      startID: 500,
      indexID: this.loadNum,
      frequency: 0,  //请求次数
      successID: [],
      listData: {
        [this.loadNum]: this.listData,
      }
    }


    //下拉事件 
    window.addEventListener('scroll', this.scrolls, { passive: true });
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrolls, { passive: true });
  },
  methods: {
    rouBack() {
      this.$router.go(-1);
    },
    selectTopTable(type) {

      if (type.type == 'one') {
        this.type = 'one'
      } else if (type.type == 'two') {
        this.type = 'two'
      } else {

      }
    },
    initVideo(){
        this.$nextTick(()=>{
          axioss(SP.url + this.loadNum, SP.type, SP.data).then(res => {
            if (res.data.itemList.length <= 0) {
              return this.$toast({ message: '视频加载失败!', className: 'fontsize' });
            }
            this.listData = res.data.itemList
            this.loading = true

          }, err => {
            console.log(err)
          });
        })
    },
    async scrolls(ev) {
      var ev = ev || event

      var height = document.body.clientHeight || document.documentElement.clientHeight; //pc
      var moduleHeight = window.screen.availHeight;   //移动

      var scrollHeiht = document.body.scrollHeight || document.documentElement.scrollHeight;
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

      var fontSize = Number(getStyle(document.documentElement, 'font-size').slice(0, -2))

      var headerHeight = 3.5 * fontSize - 1;  //top固定高度
      // 移动端处理

      if (headerHeight + scrollHeiht <= scrollTop + moduleHeight && this.loading) {
        let setTime = null;
        this.loading = false
        this.loadtext = true;
        clearTimeout(setTime)

        // axios请求
        if (!this.loading) {

          try {

            //模式切换
            if (this.type == this.selects[1].type) {
              this.loadNum = randoms(500, 90600)
            }else{
              this.loadNum = this.loadNum + 1
            }

            let getdata = await axioss(SP.url + this.loadNum, SP.type, SP.data)
            let data = getdata.data.itemList;

            if (data && data.length != 0) {

              this.objListData.frequency = this.objListData.frequency + 1
              this.objListData.indexID = this.loadNum
              this.objListData.successID.push(this.loadNum)


              this.objListData.listData[this.loadNum] = data

              this.listData = data.splice(0, 20)
              window.scrollTo(0, 0);

              // console.log(this.loadNum)
              // console.log(getdata.data.itemList)
              // console.log(this.objListData)
            }
            setTime = setTimeout(() => {
              this.loading = true
              this.loadtext = false
            }, 500)

          } catch (err) {
            console.log('请求出错了')
            console.log(err)
          }
        }
      }


    },
  }
}
</script>
<style>

</style>