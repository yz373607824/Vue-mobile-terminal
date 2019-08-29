export function Scroll() {
    window.onscroll = function(ev){
        var ev = ev || event;
        // if (ev.srcElement.scrollHeight - (ev.srcElement.scrollTop + ev.srcElement.clientHeight) == 0) {
        //  console.log(1)
        // }
        console.log(1)
    }
}

// export default window.onscroll = function(ev) {
//     var ev = ev || event;
//     if (ev.srcElement.scrollHeight - (ev.srcElement.scrollTop + ev.srcElement.clientHeight) == 0) {
//      console.log(1)
//     }
// }

        //下拉事件 
        // if( this.$route.meta.scoll ){
        //     window.addEventListener('scroll', this.Scolls, true);
        // }else{
        //     window.removeEventListener('scroll', this.Scolls);
        // }

        
        // Scolls(ev) {
        //     var ev = ev || event

        //     var height = document.body.clientHeight || document.documentElement.clientHeight; //pc
        //     var moduleHeight = window.screen.height;

        //     var scrollHeiht = document.body.scrollHeight || document.documentElement.scrollHeight;
        //     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        //     // 移动端处理
        //     if (scrollHeiht - scrollTop == moduleHeight) {
        //         // axios请求
        //         this.loadNum = this.loadNum + 1;
        //         axioss(DZ.url + this.loadNum, DZ.type, DZ.data).then(res => {
        //             this.listData.push(res.data)
        //             console.log(1)
        //         }, err => {
        //             console.log(err)
        //         });

        //     }

        // },