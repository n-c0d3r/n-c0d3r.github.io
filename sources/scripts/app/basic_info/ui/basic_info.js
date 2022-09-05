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

                backgroundColor : "rgb(32, 32, 32)",
    
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
                .setId("basic-info-mobile-content-container")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "40%",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(15, 15, 16, 0.3)",
        
                })
                .setInner(
        
                    framework.UIElement("div")
                    .setId("basic-info-mobile-content")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "100%",
                        height : "100%",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "center",

                        visibility : "hidden",
            
                    })
                    .setInner(
            
                        
            
                    ),


        
                    framework.UIElement("div")
                    .setId("basic-info-desktop-content")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "100%",
                        height : "100%",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "center",
                        
                        visibility : "hidden",
                        
                        overflowY : "hidden",                        
                        overflowX : "hidden",
            
                    })
                    .setInner(
            
                        framework.UIElement("div")
                        .setStyle({
            
                            position : "relative",
                
                            width : "calc(50% - 25%)",
                            height : "calc(100% - 200px)",

                            marginLeft : "12%",
                            marginRight : "150px",

                            marginTop : "100px",
                            marginBottom : "100px",
        
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "space-evenly",
                
                        })
                        .setInner(
                
                            framework.UIElement("div")
                            .setStyle({
                
                                position : "relative",
                    
                                height : "30px",

                                paddingLeft : "10px",
                                paddingRight : "10px",
        
                                display : "flex",
            
                                flexFlow : "row",

                                zIndex : "8",
                    
                            })
                            .setInner(
                    
                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "10px",
                                                            
                                    width : "100%",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                        
                                })
                                .setInner(
                        
                                    "Real Name:",
                        
                                ),

                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "115px",
                                                            
                                    width : "200px",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "20px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "400",
    
                                    color : "rgb(240,240,239)",
                        
                                })
                                .setInner(
                        
                                    "Nguyễn Thái Phi Hùng",
                        
                                ),
                    
                            ),


                
                            framework.UIElement("div")
                            .setStyle({
                
                                position : "relative",
                    
                                height : "30px",

                                paddingLeft : "10px",
                                paddingRight : "10px",
        
                                display : "flex",
            
                                flexFlow : "row",
                    
                                zIndex : "8",

                            })
                            .setInner(
                    
                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "10px",
                                                            
                                    width : "100%",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                        
                                })
                                .setInner(
                        
                                    "Birthday:",
                        
                                ),

                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "115px",
                                                            
                                    width : "200px",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "20px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "400",
    
                                    color : "rgb(240,240,239)",
                        
                                })
                                .setInner(
                        
                                    "14/11/2005",
                        
                                ),
                    
                            ),


                
                            framework.UIElement("div")
                            .setStyle({
                
                                position : "relative",
                    
                                height : "30px",

                                paddingLeft : "10px",
                                paddingRight : "10px",
        
                                display : "flex",
            
                                flexFlow : "row",
                    
                            })
                            .setInner(
                    
                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "10px",
                                                            
                                    width : "100%",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                        
                                })
                                .setInner(
                        
                                    "Hotline:",
                        
                                ),

                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "115px",
                                                            
                                    width : "200px",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "20px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "400",
    
                                    color : "rgb(240,240,239)",
                        
                                })
                                .setInner(
                        
                                    "0399771917",
                        
                                ),
                    
                            ),
                
                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                    
                            width : "800px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgba(70, 255, 150, 0.3)",

                            transition : "0.4s",
                
                            zIndex : "7",
                            
                        })
                        .setInner(



                        ),


            
                        framework.UIElement("div")
                        .setStyle({
            
                            position : "relative",
                
                            width : "calc(50% - 150px)",
                            height : "calc(100% - 200px)",

                            marginRight : "150px",

                            marginTop : "100px",
                            marginBottom : "100px",
        
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "space-evenly",
                
                        })
                        .setInner(
                
                            framework.UIElement("div")
                            .setStyle({
                
                                position : "relative",
                    
                                height : "30px",

                                paddingLeft : "10px",
                                paddingRight : "10px",
        
                                display : "flex",
            
                                flexFlow : "row",
                    
                            })
                            .setInner(
                    
                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "10px",
                                                            
                                    width : "100%",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                        
                                })
                                .setInner(
                        
                                    "Email:",
                        
                                ),

                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "102px",
                                                            
                                    width : "200px",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "20px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "400",
    
                                    color : "rgb(240,240,239)",
                        
                                })
                                .setInner(
                        
                                    "ncoderft3t@outlook.com",
                        
                                ),
                    
                            ),


                
                            framework.UIElement("div")
                            .setStyle({
                
                                position : "relative",
                    
                                height : "30px",

                                paddingLeft : "10px",
                                paddingRight : "10px",
        
                                display : "flex",
            
                                flexFlow : "row",
                    
                            })
                            .setInner(
                    
                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "10px",
                                                            
                                    width : "100%",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                        
                                })
                                .setInner(
                        
                                    "Youtube:",
                        
                                ),

                                framework.UIElement("div")
                                .setClass("noselect")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "102px",
                                                            
                                    width : "200px",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "20px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "400",
    
                                    color : "rgb(240,240,239)",
                        
                                })
                                .setInner(
                        
                                    "https://www.youtube.com/chann...",
                        
                                )
                                .on("click", function(){

                                    window.open("https://www.youtube.com/channel/UCpliLhWxstPpFBx8R7ckSsQ");

                                }),
                    
                            ),


                
                            framework.UIElement("div")
                            .setStyle({
                
                                position : "relative",
                    
                                height : "30px",

                                paddingLeft : "10px",
                                paddingRight : "10px",
        
                                display : "flex",
            
                                flexFlow : "row",
                    
                            })
                            .setInner(
                    
                                framework.UIElement("div")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "10px",
                                                            
                                    width : "100%",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                        
                                })
                                .setInner(
                        
                                    "GitHub:",
                        
                                ),

                                framework.UIElement("div")
                                .setClass("noselect")
                                .setStyle({
                    
                                    position : "absolute",

                                    top : "0px",
                                    left : "102px",
                                                            
                                    width : "200px",
                                    height : "100%",
                
                                    textAlign : "left",
    
                                    fontSize : "20px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "400",
    
                                    color : "rgb(240,240,239)",
                        
                                })
                                .setInner(
                        
                                    "https://github.com/n...",
                        
                                )
                                .on("click", function(){

                                    window.open("https://github.com/n-c0d3r");

                                }),
                    
                            ),
                
                        ),
            
                    )
                    .on("mouseover", function(){

                        this.querySelector("#basic-info-desktop-content > div:nth-child(2)")
                        .setStyle({
                
                            width : "1000px",
                            height : "300px",

                            transform : "rotate(30deg)",

                            backgroundColor : "rgba(150, 250, 30, 0.27)",
                            
                        })

                    })
                    .on("mouseout", function(){

                        this.querySelector("#basic-info-desktop-content > div:nth-child(2)")
                        .setStyle({
                
                            width : "800px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgba(70, 255, 150, 0.3)",
                            
                        })

                    })
        
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

                    basicInfo.querySelector("#basic-info-desktop-content")
                    .setStyle({

                        visibility : "hidden"
            
                    });

                    basicInfo.querySelector("#basic-info-mobile-content")
                    .setStyle({

                        visibility : "visible"
            
                    });

                    basicInfo.querySelector("#basic-info-mobile-content-container")
                    .setStyle({

                        height : "70%",
            
                    });

                }
                else{
                    
                    basicInfo.querySelector("div")
                    .setStyle({

                        width : "70%",
                        fontSize : "20px",

                        marginLeft : "15%",
            
                    });

                    basicInfo.querySelector("#basic-info-desktop-content")
                    .setStyle({

                        visibility : "visible"
            
                    });

                    basicInfo.querySelector("#basic-info-mobile-content")
                    .setStyle({

                        visibility : "hidden"
            
                    });

                    basicInfo.querySelector("#basic-info-mobile-content-container")
                    .setStyle({

                        height : "40%",
            
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