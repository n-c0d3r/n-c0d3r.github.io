import framework from "../../../framework/framework.js"



export default function UIContentContainer(){

    return (
        framework.UIElement("div")
        .setId("content-container")
        .setStyle({

            width : "100vw",
            height : "calc(100vh - 100px)",

            display : "flex",

            flexFlow : "column",
            flexDirection: "column",

            justifyContent : "center",
                       
            overflowY : "auto",
            overflowX : "auto",

            transition : "0.5s",

            position : "fixed",

            transform : "translateY(100vh)",

            backgroundColor : "rgb(29, 29, 28)",

            zIndex : "2"

        })
        .setInner(

            

        )
    )

}