import framework from "../../../framework/framework.js"



export default function Knowledge(){

    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return (

        framework.UIElement("div")
        .setId("knowledge")
        .setInner(

            

        )

    );

}



$("#content-body").appendInner(

    Knowledge()

);