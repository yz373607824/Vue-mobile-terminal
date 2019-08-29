export let COVER_IMG_URL= id => `https://image.mhxk.com/mh/${id}.jpg-300x400.webp`;   //封面图路径
// export let IMG_PATH = url => `https://mhpic.manhualang.com/${url}-kmh.low.webp`

export function IMG_REPLACE (url,index){
    return "https://mhpic.manhualang.com"+url.replace(/\$\$/ig,index)+"-kmh.low.webp"
}
