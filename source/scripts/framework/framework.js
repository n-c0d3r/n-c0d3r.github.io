import Animation from "./animation/animation.js"

import UIElement from "./ui/element.js"

import ScriptModule from "./script_module.js";



const framework = {

    Animation,

    UIElement,

    ScriptModule,



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

    endUserText(inputText) {
        let words = inputText.split("_");
        let formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let formattedText = formattedWords.join(" ");
        return formattedText;
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