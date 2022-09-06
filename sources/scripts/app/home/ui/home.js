import framework from "../../../framework/framework.js"



export default function UIHome(){

    return (
        framework.UIElement("div")
        .setId("home")
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

                backgroundColor : "rgb(28, 28, 27)",
    
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
                    
                    $("#home > div > div > div")
                    .setStyle({

                        color : "rgb(255, 255, 255)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(21, 21, 20, 1)",
            
                    })

                })
                .on("mouseout", function(){
                    
                    $("#home > div > div > div")
                    .setStyle({

                        color : "rgb(0, 0, 0)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(255, 255, 254, 0.9)",
            
                    })
                    
                }),

                
    
                framework.UIElement("div")
                .setId("home-content-container")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "40%",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(14, 14, 13, 0.3)",
        
                })
                .setInner(
        
                    framework.UIElement("div")
                    .setId("home-mobile-content")
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
                    .setId("home-desktop-content")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "100%",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "space-around",
                        
                        visibility : "hidden",
                        
                        overflowY : "hidden",                        
                        overflowX : "hidden",
            
                    })
                    .setInner(
            
                        framework.UIElement("div")
                        .setStyle({
            
                            position : "relative",
                
                            width : "calc(40%)",
                            height : "calc(100% - 0%)",
        
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "space-evenly",
                        
                            overflowY : "hidden",                        
                            overflowX : "hidden",
                
                            zIndex : "6",

                            opacity : "1",
                
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
                
                                    backgroundImage : `url("${window.location.origin}/resources/images/name.png")`,
                                    backgroundSize : 'cover',  

                                    width : "50px",                                                    
                                    height : "30px",  
                        
                                })
                                .setInner(
                        
                                    
                        
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
    
                                    color : "rgb(255,255,255)",
zIndex : "8",
                        
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
                
                                    backgroundImage : `url("${window.location.origin}/resources/images/birthday.png")`,
                                    backgroundSize : 'cover',  

                                    width : "50px",                                                    
                                    height : "30px",  
                        
                                })
                                .setInner(
                        
                                    
                        
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
    
                                    color : "rgb(255,255,255)",
zIndex : "8",
                        
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
                
                                    backgroundImage : `url("${window.location.origin}/resources/images/hotline.png")`,
                                    backgroundSize : 'cover',  

                                    width : "50px",                                                    
                                    height : "30px",  
                        
                                })
                                .setInner(
                        
                                    
                        
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
    
                                    color : "rgb(255,255,255)",
zIndex : "8",
                        
                                })
                                .setInner(
                        
                                    "0399771917",
                        
                                ),
                    
                            ),
                
                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                
                            zIndex : "2",
                            
                        })
                        .setInner(



                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                
                            zIndex : "3",
                            
                        })
                        .setInner(



                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                            
                        })
                        .setInner(



                        ),


            
                        framework.UIElement("div")
                        .setStyle({
            
                            position : "relative",
                
                            width : "calc(40%)",
                            height : "calc(100% - 0%)",
        
                            display : "flex",
        
                            flexFlow : "column",
                            
                            justifyContent : "space-evenly",
                        
                            overflowY : "hidden",                        
                            overflowX : "hidden",
                
                            zIndex : "6",
                
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
                
                                    textAlign : "left",
    
                                    fontSize : "15px",
                                    fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                    fontWeight : "200",
    
                                    color : "rgba(255,255,255,0.2)",
                
                                    backgroundImage : `url("${window.location.origin}/resources/images/email.png")`,
                                    backgroundSize : 'cover',  

                                    width : "50px",                                                    
                                    height : "30px",  

                                    zIndex : "8px",
                        
                                })
                                .setInner(
                        
                                    
                        
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
    
                                    color : "rgb(255,255,255)",
                                    
zIndex : "8",

                                    display : "flex",
                                    flexFlow : "row",

                                    zIndex : "8px",
                        
                                })
                                .setInner(
                        
                                    "ncoderft3t@outlook.com"
                        
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
                
                                    backgroundImage : `url("${window.location.origin}/resources/images/youtube.png")`,
                                    backgroundSize : 'cover',  

                                    width : "50px",                                                    
                                    height : "30px",  

                                    zIndex : "8px",
                        
                                })
                                .setInner(
                        
                                    
                        
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
    
                                    color : "rgb(255,255,255)",
                                    
zIndex : "8",

                                    display : "flex",
                                    flexFlow : "row",

                                    zIndex : "8px",
                        
                                })
                                .setInner(
                        
                                    `https://www.youtube.com/chann...`
                        
                                ),
                    
                            )
                            .on("click", function(){

                                window.open("https://www.youtube.com/channel/UCpliLhWxstPpFBx8R7ckSsQ");

                            }),


                
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
                
                                    backgroundImage : `url("${window.location.origin}/resources/images/github.png")`,
                                    backgroundSize : 'cover',  

                                    width : "50px",                                                    
                                    height : "30px",  

                                    zIndex : "8px",
                        
                                })
                                .setInner(
                        
                                    
                        
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
    
                                    color : "rgb(255,255,255)",
                                    
zIndex : "8",

                                    display : "flex",
                                    flexFlow : "row",

                                    zIndex : "8px",
                        
                                })
                                .setInner(
                        
                                    `https://www.github.com/n-...`
                        
                                ),
                    
                            )
                            .on("click", function(){

                                window.open("https://github.com/n-c0d3r");

                            }),
                
                        ),
            
                    )
                    .on("mouseover", function(){

                        this.querySelector("#home-desktop-content > div:nth-child(2)")
                        .setStyle({
                
                            width : "1px",
                            height : "2000px",

                            transform : "scaleY(10) rotate(70deg) translateY(170px) translateX(-100px)",

                            backgroundColor : "#FCEC79",
                            
                        })

                        this.querySelector("#home-desktop-content > div:nth-child(3)")
                        .setStyle({

                            width : "3px",
                            height : "2000px",
                            transform : "rotate(68deg) translateX(-800px)",

                            backgroundColor : "#6EF0FF",
                            
                        })

                        this.querySelector("#home-desktop-content > div:nth-child(4)")
                        .setStyle({
                
                            width : "3px",
                            height : "2000px",

                            transform : "rotate(-50deg) translateX(-250px) translateX(700px)",

                            backgroundColor : "#FC60B5",
                            
                        })

                    })
                    .on("mouseout", function(){

                        this.querySelector("#home-desktop-content > div:nth-child(2)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                        this.querySelector("#home-desktop-content > div:nth-child(3)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                        this.querySelector("#home-desktop-content > div:nth-child(4)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(40px)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                    })
        
                )
    
            )

        )
        .exe(function(){

            var basicInfo = this;

            const applyResponsiveStyle = function(){

                //check is mobile
                if(window.innerWidth <= 1200){   
                    
                    basicInfo.querySelector("div")
                    .setStyle({

                        width : "100%",
                        fontSize : "10px",

                        marginLeft : "0%",
            
                    });

                    basicInfo.querySelector("#home-desktop-content")
                    .setStyle({

                        visibility : "hidden"
            
                    });

                    basicInfo.querySelector("#home-mobile-content")
                    .setStyle({

                        visibility : "visible"
            
                    });

                    basicInfo.querySelector("#home-content-container")
                    .setStyle({

                        height : "55%",
            
                    });

                }
                else{
                    
                    basicInfo.querySelector("div")
                    .setStyle({

                        width : "70%",
                        fontSize : "20px",

                        marginLeft : "15%",
            
                    });

                    basicInfo.querySelector("#home-desktop-content")
                    .setStyle({

                        visibility : "visible"
            
                    });

                    basicInfo.querySelector("#home-mobile-content")
                    .setStyle({

                        visibility : "hidden"
            
                    });

                    basicInfo.querySelector("#home-content-container")
                    .setStyle({

                        height : "55%",
            
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