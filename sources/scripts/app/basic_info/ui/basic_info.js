import framework from "../../../framework/framework.js"



export default function UIBasicInfo(){

    return (
        framework.UIElement("div")
        .setId("basic-info")
        .setStyle({

            position : "relative",

            width : "100%",
            height : "100%",

            display : "block",

            opacity : "0",

            transition : "1s",

        })
        .setInner(

            framework.UIElement("div")
            .setClass("noscrollbar")
            .setStyle({

                position : "relative",
    
                width : "70%",
                height : "100%",

                marginLeft : "15%",

                // overflowX : "hidden",
                // overflowY : "scroll"
    
            })
            .setInner(
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "30%",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(255, 255, 254, 0.9)",

                    transition : "0.5s",
                    
                })
                .setInner(
        
                    framework.UIElement("div")
                    .setClass("noselect")
                    .setStyle({

                        transition : "0.5s",
        
                        position : "relative",
            
                        height : "100%",
    
                        display : "flex",
    
                        flexFlow : "column",
                        
                        justifyContent : "center",

                        fontSize : "350%",
                        fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontWeight : "325",

                        color : "rgb(0, 0, 0)",
                        textAlign : "center"
            
                    })
                    .setInner(
            
                        "Hi! I'm NCoder ^^"
            
                    )
        
                )
                .on("mouseover", function(){
                    
                    $("#basic-info > div > div > div")
                    .setStyle({

                        color : "rgb(255, 255, 255)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(20, 20, 20, 1)",
            
                    })

                })
                .on("mouseout", function(){
                    
                    $("#basic-info > div > div > div")
                    .setStyle({

                        color : "rgb(0, 0, 0)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(255, 255, 254, 0.9)",
            
                    })
                    
                }),

                
    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "70%",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(15, 15, 16, 0.3)",
        
                })
                .setInner(
        
                    
        
                )
    
            )

        )
        .exe(function(){

            var basicInfo = this;

            const applyResponsiveStyle = function(){

                //check is mobile
                if(window.innerWidth <= 1070){   
                    
                    basicInfo.querySelector("div")
                    .setStyle({

                        width : "100%",
                        fontSize : "10px",

                        marginLeft : "0%",
            
                    });

                }
                else{
                    
                    basicInfo.querySelector("div")
                    .setStyle({

                        width : "70%",
                        fontSize : "20px",

                        marginLeft : "15%",
            
                    });

                }

            }

            basicInfo.applyResponsiveStyle = applyResponsiveStyle;

            window.addEventListener("resize", ()=>{

                applyResponsiveStyle();

            });

            applyResponsiveStyle();

        })
    )
}