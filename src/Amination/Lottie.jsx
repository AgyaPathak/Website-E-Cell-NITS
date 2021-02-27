import React from "react";
import {useLottie} from "lottie-react"
import data from "./animation.json"
const Animation=()=>{
    
    const style = {
        height: 300,
      }
    const options={
        animationData:data,
        loop: true,
        autoplay: true,
    }
    const {View}=useLottie(options,style)
    return View;
}

export default Animation;