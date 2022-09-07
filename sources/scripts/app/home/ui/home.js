import framework from "../../../framework/framework.js"



function UIVR(){

    return (
        framework.UIElement("div")
        .setStyle({

            width : "100%",
            //height : "17vh",
            height : "0",

            //backgroundColor : "rgb(25, 25, 25)",

        })
    );
}



export default function UIHome(){

    return (
        framework.UIElement("div")
        .setClass("custom-scroll-bar")
        .setId("home")
        .setStyle({

            position : "relative",

            width : "100%",

            display : "block",

            opacity : "0",

            transition : "1s",

        })
        .setInner(

            framework.UIElement("div")
            .setClass("noscrollbar")
            .setStyle({

                position : "relative",
    
                width : "100%",

                marginLeft : "15%",
    
            })
            .setInner(



                UIVR(),


    
                framework.UIElement("div")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "45vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(41, 41, 41, 1)",

                    transition : "0.5s",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",
                    
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

                        color : "rgb(255, 255, 255)",
                        textAlign : "center"
            
                    })
                    .setInner(
            
                        "Hi! I'm NCoder ^^",
            
                    )
        
                )
                .on("mouseover", function(){
                    
                    $("#home > div > div > div")
                    .setStyle({

                        color : "rgb(255, 255, 255)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(31, 31, 30, 1)",
            
                    })

                })
                .on("mouseout", function(){
                    
                    $("#home > div > div > div")
                    .setStyle({

                        color : "rgb(255, 255, 255)",
            
                    })

                    this
                    .setStyle({
                        
                        backgroundColor : "rgba(41, 41, 41, 1)",
            
                    })

                })
                // .on("mouseout", function(){
                    
                //     $("#home > div > div > div")
                //     .setStyle({

                //         color : "rgb(0, 0, 0)",
            
                //     })

                //     this
                //     .setStyle({
                        
                //         backgroundColor : "rgba(255, 255, 254, 0.9)",
            
                //     })
                    
                // })
                ,



                UIVR(),

                
    
                framework.UIElement("div")
                .setId("home-a-bit-about-me")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "45vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor: "rgb(116, 255, 253)",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",
        
                })
                .setInner(
                        


                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "100%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2.5vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "300",

                                color : "rgb(40, 40, 39)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`I'm a game, game engine programmer, currently learning game engine development. `,

                            ),
    
                        ),

                    ),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "100%",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",
                        
                        overflowY : "hidden",                        
                        overflowX : "hidden",
            
                    })
                    .setInner(
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "translateY(250px) rotate(40deg)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                
                            zIndex : "2",

                            opacity : "0.3",
                            
                        })
                        .setInner(



                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "translateY(-220px) translateX(280px) rotate(40deg)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                
                            zIndex : "3",

                            opacity : "0.6",
                            
                        })
                        .setInner(



                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "translateY(-20px) translateX(-440px) rotate(30deg)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",

                            opacity : "0.8",
                            
                        })
                        .setInner(



                        ),
            
                    )
                    .on("mouseover", function(){

                        this.querySelector("div:nth-child(1)")
                        .setStyle({
                
                            width : "1px",
                            height : "2000px",

                            transform : "scaleY(10) rotate(70deg) translateY(170px) translateX(-100px)",

                            backgroundColor : "rgb(34,34,33)",
                            
                        })

                        this.querySelector("div:nth-child(2)")
                        .setStyle({

                            width : "3px",
                            height : "2000px",
                            transform : "rotate(68deg) translateX(-800px)",

                            backgroundColor : "rgb(34,34,33)",
                            
                        })

                        this.querySelector("div:nth-child(3)")
                        .setStyle({
                
                            width : "3px",
                            height : "2000px",

                            transform : "rotate(-50deg) translateX(-250px) translateX(700px)",

                            backgroundColor : "rgb(34,34,33)",
                            
                        })

                    })
                    .on("mouseout", function(){

                        this.querySelector("div:nth-child(1)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "translateY(250px) rotate(40deg)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                        this.querySelector("div:nth-child(2)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "translateY(-220px) translateX(280px) rotate(40deg)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                        this.querySelector("div:nth-child(3)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "translateY(-20px) translateX(-440px) rotate(30deg)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                    })
        
                ),



                UIVR(),

                
    
                framework.UIElement("div")
                .setId("home-projects")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "50vh",

                    display : "flex",

                    flexFlow : "row",
                    
                    justifyContent : "center",

                    backgroundColor : "rgba(24, 24, 23, 0.3)",
                        
                    overflowY : "hidden",                        
                    overflowX : "hidden",
    
                    boxShadow : "0px 0px 4px 4px rgba(0,0,0,0.1)",
        
                })
                .setInner(

                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        maxWidth : "500px",            
                        width : "70%",
                        height : "35%",
            
                        zIndex : "5",

                        pointerEvents: "none",

                        display : "flex",

                        flexFlow : "row",

                        justifyContent : "center",
                        
                    })
                    .setInner(

                        framework.UIElement("div")
                        .setStyle({
    
                            display : "flex",
    
                            flexFlow : "column",
    
                            justifyContent : "center",
                            
                        })
                        .setInner(
    
                            framework.UIElement("div")
                            .setStyle({
                
                                whiteSpace : "pre-wrap",
            
                                maxWidth : "500px",

                                fontSize : "2.3vh",
                                fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                                fontWeight : "200",

                                color : "rgba(240, 240, 239, 0.7)",

                                lineBreak: "auto",
                                wordBreak: "break-word",

                                display : "flex",

                                flexFlow : "row",
                                
                            })
                            .setInner(

`ING is my biggest projects, its a game engine for windows `,

                            ),
    
                        ),

                    ),



                    framework.UIElement("img")
                    .setStyle({
        
                        position : "absolute",

                        height : "65%",

                        top : "35%",

                        zIndex : "7",

                        pointerEvents : "click",

                    })
                    .exe(function(){

                        this.src = `${window.location.origin}/resources/images/ing.png`;

                        this.addEventListener("click", function(){

                            window.open("https://github.com/INGTechnologies/ING");

                        });

                    }),



                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",

                        width : "100%",
                        height : "50%",

                        top : "50%",

                        backgroundColor : "#1F1F1F",

                        zIndex : "6",

                        pointerEvents : "none",

                    }),


        
                    framework.UIElement("div")
                    .setStyle({
        
                        position : "absolute",
            
                        width : "calc(100% - 34px)",
                        height : "100%",

                        paddingLeft : "17px",
                        paddingRight : "17px",
    
                        display : "flex",
    
                        flexFlow : "row",
                        
                        justifyContent : "space-around",
                        
                        visibility : "visible",
            
                    })
                    .setInner(
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(-250px)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                
                            zIndex : "2",

                            pointerEvents: "none",
                            
                        })
                        .setInner(



                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(30deg) translateX(300px)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",
                
                            zIndex : "3",

                            pointerEvents: "none",
                            
                        })
                        .setInner(



                        ),
                        


                        framework.UIElement("div")
                        .setStyle({
            
                            position : "absolute",
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(70deg) translateX(400px)",

                            backgroundColor : "rgb(40,40,39)",

                            transition : "0.55s",

                            pointerEvents: "none",
                            
                        })
                        .setInner(



                        ),
            
                    )
                    .on("mouseover", function(){

                        this.querySelector("div:nth-child(1)")
                        .setStyle({
                
                            width : "1px",
                            height : "2000px",

                            transform : "scaleY(10) rotate(70deg) translateY(170px) translateX(-100px)",

                            backgroundColor : "#FCEC79",
                            
                        })

                        this.querySelector("div:nth-child(2)")
                        .setStyle({

                            width : "3px",
                            height : "2000px",
                            transform : "rotate(68deg) translateX(-800px)",

                            backgroundColor : "#6EF0FF",
                            
                        })

                        this.querySelector("div:nth-child(3)")
                        .setStyle({
                
                            width : "3px",
                            height : "2000px",

                            transform : "rotate(-50deg) translateX(-250px) translateX(950px)",

                            backgroundColor : "#FC60B5",
                            
                        })

                    })
                    .on("mouseout", function(){

                        this.querySelector("div:nth-child(1)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(40deg) translateX(-250px)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                        this.querySelector("div:nth-child(2)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(30deg) translateX(300px)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                        this.querySelector("div:nth-child(3)")
                        .setStyle({
                
                            width : "300px",
                            height : "300px",

                            transform : "rotate(70deg) translateX(400px)",

                            backgroundColor : "rgb(40,40,39)",
                            
                        })

                    })
        
                ),



                UIVR(),

                
    
                framework.UIElement("div")
                .setId("home-footer")
                .setStyle({
    
                    position : "relative",
        
                    width : "100%",
                    height : "10vh",

                    display : "flex",

                    flexFlow : "row",
        
                })
                .setInner(
        
                    framework.UIElement("div")
                    .setStyle({
            
                        width : "100%",
                        height : "100%",
    
                        textAlign : "center",

                        display : "flex",

                        flexFlow : "column",

                        justifyContent : "center",

                        fontSize : "18px",
                        fontFamily : "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",//"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontWeight : "250",

                        color : "rgb(140, 140, 140)",
            
                    })
                    .setInner(

                        "© 2022 By NCoder."

                    ),
                    
                ),
    
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