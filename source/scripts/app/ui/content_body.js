import framework from "../../framework/framework.js"



export default function ContentBody(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/content_body.css`);
    
    return (

        framework.UIElement("div")
        .setId("content-body")
        .setInner(

            
            
        )

    );

}