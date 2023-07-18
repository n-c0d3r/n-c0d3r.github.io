import framework from "../../framework/framework.js"



export default function ContentPara(){

    framework.addStyle(`${window.location.origin}/source/styles/home.css`);
    
    return (

        framework.UIElement("div")
        .setClass("content_para")
        .setStyle({

            backgroundColor: "rgba(100, 219, 255, 0.8)",

            color: "rgba(0,0,0,1.0)",

            textAlign : "center",

            fontSize : "2vw",
            
            paddingTop : "10px",
            paddingBottom : "10px",

            marginTop : "100px",

        })

    );

}