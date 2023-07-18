import framework from "../../../framework/framework.js"
import ContentItem from "../content_item.js"
import ContentPara from "../content_para.js"
import ContentHR from "../content_hr.js"

import ProjectsAndDemosContents from "../projects_and_demos/contents.js"



export default function Home(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/home.css`);
    
    return (

        framework.UIElement("div")
        .setId("home")
        .setInner(

            ContentHR(),

            ContentItem("/resources/images/wpp.png")
            .setInner(
    
                
    
            ),

            ContentHR(),

            ContentItem("/resources/images/stgp.png")
            .setInner(
    
                
    
            ),

            ContentHR(),

            ContentItem("/resources/images/impill.png")
            .setInner(
    
                
    
            ),

            ContentHR(),

            ContentItem("/resources/images/gtiu.png")
            .setInner(
    
                
    
            ),

            ContentHR(),

            ContentItem("/resources/images/k.png")
            .setInner(
    
                
    
            ),

            ContentHR(),

            ContentItem("/resources/images/hse.png")
            .setInner(
    
                
    
            ),

            ContentHR(),

            ContentPara()
            .setInner(
    
                "Projects & Demos"
    
            ),

            ContentHR(),

            ...ProjectsAndDemosContents(),

        )

    );

}



$("#content-body").appendInner(

    Home()

);