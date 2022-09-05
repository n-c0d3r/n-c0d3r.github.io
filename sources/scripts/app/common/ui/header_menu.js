import framework from "../../../framework/framework.js"

import ShowBasicInfoAnimation from "../../basic_info/animation/show_basic_info.js";
import UIBasicInfo from "../../basic_info/ui/basic_info.js"

import ShowSkillsAndKnowledge from "../../skills_and_knowledge/animation/show_skills_and_knowledge.js";
import UISkillsAndKnowledge from "../../skills_and_knowledge/ui/skills_and_knowledge.js";

import ShowProjects from "../../projects/animation/show_projects.js";
import UIProjects from "../../projects/ui/projects.js";

import ShowExperiences from "../../experiences/animation/show_experiences.js";
import UIExperiences from "../../experiences/ui/experiences.js";



function UIPageBtn(name, width){

    return (
        framework.UIElement("div")
        .setClass("page-btn noselect")
        .setStyle({

            width : `${width}px`,
            minWidth : `${width}px`,
            height : "100%",

            paddingLeft : "40px",
            paddingTop : "23px",
            paddingRight : "40px",

            fontSize : "20px",
            fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight : "240",
            textAlign : "center",

            transition : "0s",

            justifyContent : "space-around",

        })
        .setInner(

            name

        )
        .on("mouseenter", function(){

            this.setStyle({

                fontWeight : "400",

            });

            //check is mobile
            if(window.innerWidth <= 1027){            
                
                this
                .setStyle({

                    color : "rgb(240, 240, 239)",
        
                });

            }
            else{
                
                this
                .setStyle({

                    color : "inherit",
        
                });

            }

        })
        .on("mouseleave", function(){

            this.setStyle({

                fontWeight : "240",

            });

            //check is mobile
            if(window.innerWidth <= 1027){            
                
                this
                .setStyle({

                    color : "inherit",
                    
        
                });

            }
            else{
                
                this
                .setStyle({

                    color : "inherit",
        
                });

            }
            
        })
        .exe(function(){

            this.defaultWidth = width;

        })
    );
}



function UIVR(){

    return (
        framework.UIElement("div")
        .setClass("vr noselect")
        .setStyle({

            width : "6px",
            height : "40px",

            marginTop : "19px",

            borderRadius : "4px",

            backgroundColor : "rgb(34,34,33)"

        })
    );
}



export default function UIHeaderMenu(){

    return (
        framework.UIElement("div")
        .setId("header-menu")
        .setClass("noscrollbar")
        .setStyle({

            height : "75px",

            margin : "0",

            display : "flex",

            flexFlow : "row",
            flexDirection : "row-reverse",

            transition : "0.75s",

            position : "fixed",

            top : "-75px",

            right : "0",

            zIndex : "2",

            color : "rgb(34,34,33)",

            backgroundColor : "rgb(116, 255, 253)",

            zIndex : "3"

        })
        .exe(function(){

            this.showed = false;

        })
        .setInner(

            UIPageBtn("Experiences", 125)
            .setClass("page-btn")
            .on('click', function(){

                $("#content-container")
                .setInner(

                    UIExperiences()

                );

                ShowExperiences().play();

            }),

            UIVR(),

            UIPageBtn("Projects", 100)
            .setClass("page-btn")
            .on('click', function(){

                $("#content-container")
                .setInner(

                    UIProjects()

                );

                ShowProjects().play();

            }),

            UIVR(),

            UIPageBtn("Skills And Knowledge", 220)
            .setClass("page-btn")
            .on('click', function(){

                $("#content-container")
                .setInner(

                    UISkillsAndKnowledge()

                );

                ShowSkillsAndKnowledge().play();

            }),

            UIVR(),

            UIPageBtn("Basic Info", 100)
            .setClass("page-btn")
            .on('click', function(){

                $("#content-container")
                .setInner(

                    UIBasicInfo()

                );

                ShowBasicInfoAnimation().play();

            }),

        )
        .exe(function(){

            var headerMenu = this;

            const applyResponsiveStyle = function(){

                //check is mobile
                if(window.innerWidth <= 1027){            
                    
                    headerMenu
                    .setStyle({

                        overflowX: "scroll",

                        width : "calc(100% - 40px)",
                        height : "40px",

                        overflowY: "hidden",

                        display : "flex",

                        flexFlow : "row",
                        flexDirection : "row-reverse",

                        backgroundColor : "rgba(40, 40, 39, 1)",

                        top : "75px",
                        left : "20px",

                        color : "rgba(160, 160, 159, 0.5)",

                        zIndex : "3"
            
                    });

                    for(var btn of headerMenu.getElementsByClassName("page-btn")){

                        btn.setStyle({
                            
                            paddingTop : "5px",

                        });

                    }

                    for(var vr of headerMenu.getElementsByClassName("vr")){

                        vr.setStyle({

                            height : "25px",
                            marginTop : "8px",

                        });

                    }

                }
                else{
                    
                    headerMenu
                    .setStyle({

                        overflow: "hidden",

                        width : "100%",
                        height : "75px",

                        display : "flex",

                        flexFlow : "row",
                        flexDirection : "row-reverse",

                        backgroundColor : "rgba(34, 34, 33, 0.0)",

                        top : "0px",
                        left : "0",

                        color : "rgb(34, 34, 33)",

                        zIndex : "3"
            
                    });

                    for(var btn of headerMenu.getElementsByClassName("page-btn")){

                        btn.setStyle({
                            
                            paddingTop : "23px",

                        });

                    }

                    for(var vr of headerMenu.getElementsByClassName("vr")){

                        vr.setStyle({

                            height : "40px",
                            marginTop : "19px",

                        });

                    }

                }

            }

            headerMenu.applyResponsiveStyle = applyResponsiveStyle;

            window.addEventListener("resize", ()=>{

                applyResponsiveStyle();

            });

        })
    )

}