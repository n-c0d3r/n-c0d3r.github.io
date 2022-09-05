import framework from "../../../framework/framework.js"



export default function UIContentContainer(){

    return (
        framework.UIElement("div")
        .setId("content-container")
        .setStyle({

            width : "100vw",
            height : "calc(100vh - 70px)",

            display : "flex",

            flexFlow : "column",
            flexDirection: "column",
                       
            overflowY : "auto",
            overflowX : "auto",

            transition : "0.5s",

            position : "fixed",

            transform : "translateY(100vh)",

            backgroundColor : "rgb(29, 29, 28)",

            zIndex : "2"

        })
        .exe(function(){

            var contentContainer = this;

            const applyResponsiveStyle = function(){

                //check is mobile
                if(window.innerWidth <= 1027){            
                    
                    contentContainer
                    .setStyle({

                        height : "calc(100vh - 145px)",

                        paddingTop : "75px"
            
                    });

                }
                else{
                    
                    contentContainer
                    .setStyle({

                        height : "calc(100vh - 70px)",

                        paddingTop : "0"
            
                    });

                }

            }

            contentContainer.applyResponsiveStyle = applyResponsiveStyle;

            window.addEventListener("resize", ()=>{

                applyResponsiveStyle();

            });

        })
    )

}