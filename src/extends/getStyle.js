export function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,true)[attr]
    }else{
        return obj.currentStyle[attr]
    }
}