import Animation from "./animation/animation.js"

import UIElement from "./ui/element.js"



const framework = {

    Animation,

    UIElement,



    init(){

        UIElement("body");

    },

    addStyle(url){

        document.body.appendInner(        
            framework.UIElement("link")
            .setAttribute("rel", "stylesheet")
            .setAttribute(
                "href", 
                url
            )
        )

    },

    wait : async function(seconds){

        return await new Promise((resolve)=>{

            setTimeout(() => {
                resolve()
            }, seconds);

        });

    }

}



window.framework = framework;
window.$ = (selector)=>{return document.querySelector(selector)}
window.$s = (selector)=>{return document.querySelectorAll(selector)}

export default framework