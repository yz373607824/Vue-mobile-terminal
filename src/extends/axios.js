import axios from "axios";

export function axioss(url='', type="get" ,data={}) {
    return new Promise(function(resolve,reject){

        axios[type](url,data).then(res=>{
            resolve(res)
        },err=>{
            reject(err)
        })

    })
}