import framework from "../../framework/framework.js"



export default function UIStart(){

    return (
        framework.UIElement("div")
        .setId("start")
        .setStyle({

            width : "100vw",
            height : "100vh",

            margin : "0",

            display : "flex",

            flexFlow : "row"

        })
        .setInner(

            framework.UIElement("div")
            .setId("start-left")
            .setStyle({
    
                width : "50%",
                height : "100%",

                display : "flex",
    
                flexFlow : "row",
                flexDirection: "row-reverse"
    
            })
            .setInner(
                framework.UIElement("div")
                .setId("start-left-logo-container-x")
                .setStyle({
        
                    height : "100%",
        
                    display : "flex",
        
                    flexFlow : "column",
                    flexDirection: "column",

                    justifyContent : "center"
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setId("start-left-logo-container-y")
                    .setStyle({
            
                        
            
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setId("start-left-logo")
                        .setStyle({
                
                            width : "260px",
                            height : "260px",
                
                            backgroundImage : `url("${window.location.origin}/resources/images/logo1024.png")`,
                            backgroundSize : 'cover'
                
                        })
        
                    )
    
                )
            ),

            

            framework.UIElement("div")
            .setId("start-right")
            .setStyle({
    
                backgroundColor : "rgb(116, 255, 253)",
    
                width : "50%",
                height : "100%"
    
            })
            .setInner(
                framework.UIElement("div")
                .setId("start-right-text-container-x")
                .setStyle({
        
                    height : "100%",
        
                    display : "flex",
        
                    flexFlow : "column",
                    flexDirection: "column",

                    justifyContent : "center"
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setId("start-right-text-container-y")
                    .setStyle({
            
                        
            
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setId("start-right-text")
                        .setStyle({
                
                            width : "400px",
                            height : "100px",
                
                            backgroundImage : `url("${window.location.origin}/resources/images/coderText.png")`,
                            backgroundSize : 'cover'
                
                        })
        
                    )
    
                )
            )

        )
    );
}