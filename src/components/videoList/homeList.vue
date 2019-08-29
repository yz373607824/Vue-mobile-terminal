<template>
    <div class="wrapMain">

        <ul id="main_list"  @load="loading">

            <li v-for="(item,index) in data" :key="item.data.id">
                <section class="video-wrap">
                    <video class="video" @click.prevent.stop="play($event,index)" preload="none"  ref="play" v-touch:start="faststart" v-touch:end="fastend" @preload="play($event,index)" webkit-playsinline='true' playsinline='true' :poster="item.data.cover.detail=undefined ? '':item.data.cover.detail">
                        <source :src="item.data.playUrl" type="video/mp4">
                        <source :src="item.data.playUrl" type="video/ogg"> 您的浏览器不支持 video 标签。
                    </video>
                    <div class="video-prop">
                        <i class="iconfont play" v-show="!plays || indexs!=index" :style="{display:indexs!=index?'block':'none'}" @click.prevent.stop="play($event,index)" ref="butplay">&#xe642;</i>
                        <p class="video-pro"></p>
                        <span class="video-time" v-show="plays && indexs==index">{{videoLens|formatSeconds}}</span>
                    </div>
                </section>
                <p class="main_title">{{item.data.title}}</p>
            </li>

        </ul>
    </div>
</template>

<script>
import formatSeconds from '../../filters/getTimeFilter'

export default {
    data() {
        return {
            plays: false,       //是否有播放
            indexs: null,          //this
            prevPlay: null,     //上个播放视频
            videoLens: 0,      //视频长度集合
            videoSpeed: 0,   //播放进度条位置
            currentTimes: 0, //播放视频真实位置
            setInt: null, //定时器

            speend:2,
            intTime: null,          
            intoutTime: null

        }
    },
    props: ['data'],
    updated() {
        //自动定位play按钮位置
        var this_w, this_h, play;
        for (var i = 0; i < this.$refs.play.length; i++) {
            this_w = this.$refs.play[i].clientWidth;
            this_h = this.$refs.play[i].clientHeight;
            play = this.$refs.play[i].offsetParent.children[1].children[0]

            play.style.top = (50 - (play.clientHeight / this_h * 100) / 2) + '%'
            play.style.left = (50 - (play.clientWidth / this_w * 100) / 2) + '%'
        }

    },
    methods: {
        loading(ev){ 
            this.$nextTick(function(){
                alert('v-for渲染已经完成')
            })
        },
        loadedmetadata(ev){ //加载元数据触发
            var ev = ev || event;
            console.log(ev)
        },
        onwaiting(){    //影片缓存时事件
        },
        fastend(ev) { //抬起
            if (!this.plays) {
                return false;
            }
            clearTimeout(this.intoutTime)
            clearTimeout(this.intTime)
            let video = ev.target

            video.muted = false  //静音关闭
            video.playbackRate = 1
        },
        faststart(ev,index) { //按下
            if (!this.plays) {
                return false;
            }
            //播放了才触发
            let video = ev.target
            let video_w = video.clientWidth;
            let videoX = ev.changedTouches[0].clientX;


            this.intoutTime = setTimeout(() => {
                let num=1
                video.muted = true   //静音开启
                if (video_w / 2 > videoX) {    //在左边

                    this.intTime=setInterval(()=>{
                        video.currentTime=video.currentTime-num
                        // console.log(video.currentTime)
                    },70)

                } else if (videoX > video_w / 2) {  //在右边 加速

                    this.intTime=setInterval(()=>{
                        video.currentTime=video.currentTime+num
                        // console.log(video.currentTime)
                    },70)
                    
                }

            }, 1000)


        },
        SpeedsFun(videoClass, videoPro, durationlen) {
            videoClass.play()
            this.videoLens=durationlen
            this.currentTimes = videoClass.currentTime
            this.videoSpeed = 100 * this.currentTimes / durationlen


            if (this.currentTimes >= durationlen) {
                this.videoSpeed = 0
                videoClass.currentTime = 0
                return
            }

            videoPro.style.width = this.videoSpeed + '%'
            // console.log("播放进度条位置="+this.videoSpeed)
            // console.log("播放视频真实位置="+this.currentTimes)
            // console.log("视频总长度="+durationlen)

        },
        play(ev, index) { //点击播放
            var ev = event || ev


            let videoClass = document.getElementsByClassName('video');
            let videoPro = document.getElementsByClassName('video-pro')[index];

            let durationlen = videoClass[index].duration

            // this.videoLens = videoClass[index].duration
            
            this.indexs = index
            //videoClass[index].playbackRate = 2; //设置快进速度

            videoClass[index].webkitRequestFullScreen = true //全屏
            videoClass[index].volume = true; //音量
            videoClass[index].loop = true //循环播放
            videoClass[index].preload = 'auto' //不预载 metadata:预载资源信息 auto:  


            if (this.plays && videoClass[index].play ) {   //有播放
                if (this.prevPlay == index) { //当前
                    videoClass[index].pause()
                    this.plays = false;

                    //进度条控制
                    clearInterval(this.setInt)
                } else {  //非当前
                    this.videoSpeed = 0
                    this.currentTimes = 0
                    clearInterval(this.setInt)
                    for (let i = 0; i < videoClass.length; i++) {
                        if (i == index) {
                            // videoClass[i].play()
                            this.prevPlay = index;

                            //进度条控制
                            this.SpeedsFun(videoClass[i], document.getElementsByClassName('video-pro')[i], videoClass[i].duration)
                            this.setInt = setInterval(() => {
                                this.SpeedsFun(videoClass[i], document.getElementsByClassName('video-pro')[i], videoClass[i].duration) //？
                            }, 1000)
                        } else {
                            videoClass[i].pause()
                            videoClass[i].currentTime = 0;

                        }
                    }
                    this.plays = true;
                }
            } else {  //没播放
                if (this.prevPlay && index != this.prevPlay) {
                    if (index == 0) {   //解决第一个视频无播放点击BUG 
                        videoClass[0].pause()
                        videoClass[0].currentTime = 0;
                    }
                    videoClass[this.prevPlay].pause()
                    videoClass[this.prevPlay].currentTime = 0;
                    this.videoSpeed = 0
                    this.currentTimes = 0
                    clearInterval(this.setInt)
                }
                // videoClass[index].play()
                this.prevPlay = index;

                this.plays = true;  //有播放

                //进度条控制
                this.SpeedsFun(videoClass[index], document.getElementsByClassName('video-pro')[index], videoClass[index].duration)
                this.setInt = setInterval(() => {
                    this.SpeedsFun(videoClass[index], document.getElementsByClassName('video-pro')[index], videoClass[index].duration) //?
                }, 1000)
            }

            videoClass[index].controls = false //控制器

            // layerX layerY视频坐标
            // let layerX = ev.layerX;
            // let layerY = ev.layerY;
            // let this_W = videoClass[index].clientWidth;
            // let this_H = videoClass[index].clientHeight;

            // if (this_W / 2 > layerX && layerX > 0 && this_H > layerY && layerY > 0) {    //在左边
            //     console.log('我在左边')
            // } else if (this_W / 2 < layerX && layerX < this_W && this_H > layerY && layerY > 0) {  //在右边
            //     console.log('我在右边')
            // }
            // console.log(ev)  

        }
    },
}

</script>
<style lang="less" scoped>
#main_list {
    width: 100%;
    box-sizing: border-box; // padding: 0.4rem 0.3rem;
    overflow: hidden;
    text-align: center;
    li {

        width: 100%;
        margin-top: 3%;
        .img {
            width: 100%
        }
        .video {
            width: 100%;
        }
        .main_title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}



.video-wrap {
    position: relative;
    width: 100%;
    z-index: 49;
    .play {
        display: none;
        font-size: 2rem;
        position: absolute;
        top: 45%;
        left:45%;
        color: #fa7b5a;
        padding: 0.5rem;
        border-radius: 0.3rem;
        background: rgba(0, 0, 0, 0.5)
    }
    .video-pro {
        position: absolute;
        left: 0;
        bottom: 1px;
        background: #fa7b5a;
        z-index: 50;
        width: 0;
        height: 1px;
    }
    .video-time {
        position: absolute;
        right: 1px;
        bottom: 3px;
        font-size: 1rem;
        color: white;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
}
</style>