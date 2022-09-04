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
            height : "100%",

            paddingLeft : "40px",
            paddingTop : "26px",
            paddingRight : "40px",

            fontSize : "20px",
            fontFamily : "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight : "240",
            textAlign : "center",

            color : "rgb(34,34,33)",

            transition : "0.2s"

        })
        .setInner(

            name

        )
        .on("mouseenter", function(){

            this.setStyle({

                fontWeight : "400",

            });

        })
        .on("mouseout", function(){

            this.setStyle({

                fontWeight : "240",

            });
            
        })
    );
}



function UIVR(){

    return (
        framework.UIElement("div")
        .setStyle({

            width : "1px",
            height : "55%",

            marginTop : "2%",

            backgroundColor : "rgb(34,34,33)"

        })
    );
}



export default function UIHeaderMenu(){

    return (
        framework.UIElement("div")
        .setId("header-menu")
        .setStyle({

            width : "100vw",
            height : "75px",

            margin : "0",

            display : "flex",

            flexFlow : "row",

            justifyContent : "space-around",

            transition : "0.75s",

            position : "fixed",

            top : 0,

            zIndex : "2"

        })
        .setInner(

            framework.UIElement("div")
            .setId("header-page-btn-container")
            .setStyle({
    
                height : "100%",
    
                margin : "0",
    
                display : "flex",
    
                flexFlow : "row",
    
                justifyContent : "space-around",
    
                transition : "0.75s",
    
                position : "relative",
    
                top : "-75px",
    
                zIndex : "2"
    
            })
            .setInner(
    
                UIPageBtn("Basic Info", 100)
                .on('click', function(){

                    $("#content-container")
                    .setInner(

                        UIBasicInfo()

                    );

                    ShowBasicInfoAnimation().play();

                }),

                UIVR(),
    
                UIPageBtn("Skills And Knowledge", 200)
                .on('click', function(){

                    $("#content-container")
                    .setInner(

                        UISkillsAndKnowledge()

                    );

                    ShowSkillsAndKnowledge().play();

                }),

                UIVR(),
    
                UIPageBtn("Projects", 100)
                .on('click', function(){

                    $("#content-container")
                    .setInner(

                        UIProjects()

                    );

                    ShowProjects().play();

                }),

                UIVR(),
    
                UIPageBtn("Experiences", 125)
                .on('click', function(){

                    $("#content-container")
                    .setInner(

                        UIExperiences()

                    );

                    ShowExperiences().play();

                }),
    
            )

        )
    )

}