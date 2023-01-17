import { postDataApi } from "../services/services.api";

const loginByMobile=async(body)=>{
    try{
        const result = await postDataApi('auth/loginByMobile',body)
        console.log("🚀 ~ file: authentication.js:6 ~ loginByMobile ~ result", result)
        return result
    }catch(err){
        return err
        console.log("🚀 ~ file: authentication.js:7 ~ loginByMobile ~ err", err)
    }
}
export{loginByMobile};