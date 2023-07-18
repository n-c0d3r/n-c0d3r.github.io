import framework from "../../framework/framework.js"



export default function ContentHR(){

    framework.addStyle(`${window.location.origin}/source/styles/home.css`);
    
    return (

        framework.UIElement("div")
        .setStyle({

            width: "100%",

            backgroundColor: "rgba(102,255,255,0)",

            marginTop: "7px",

        })

    );

}