export function resize(){
    size();
    window.onresize=()=>{
        size()
    }
    function size(){
        let size=window.screen.width;
        document.documentElement.style.fontSize=size/320*12+'px'
    }
}