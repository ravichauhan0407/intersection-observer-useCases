import { users } from "../dummy/dummy"



export const getUserData=async ({page=1,pageSize=20})=>{
    const res=await new Promise((resolve)=>{
       setTimeout(()=>resolve(),3000)
    })

    return users.slice((page-1)*pageSize,page*pageSize);
}