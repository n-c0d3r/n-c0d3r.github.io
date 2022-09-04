import framework from "../../framework/framework.js"

import StartAnimation from "../common/animation/start.js"
import UIStart from "../common/ui/start.js"

import ShowContentAnimation from "../common/animation/show_content.js"
import UIContentContainer from "../common/ui/content_container.js";



framework.UIElement('body')    
.setStyle({

    margin : "0",

    backgroundColor : "rgb(34, 34, 33)",

    transition : "0.0s"

})
.setInner(

    UIStart(),

    UIContentContainer()

)



await StartAnimation().play();

await ShowContentAnimation().play();



$("#start")
.setStyle({

    transition : "0.0s"

})

$("#content-container")
.setStyle({

    transition : "0.0s"

})