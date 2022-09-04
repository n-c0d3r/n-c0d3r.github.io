import framework from "../framework/framework.js"

import StartAnimation from "./animation/start.js"
import UIStart from "./ui/start.js"



framework.UIElement('body')    
.setStyle({

    margin : "0",

    backgroundColor : "rgb(34, 34, 33)"

})
.setInner(

    UIStart()

)



let startAnimation = StartAnimation();

await startAnimation.play();