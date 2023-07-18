import framework from "../../../framework/framework.js"
import ProjectsAndDemosContents from "./contents.js";



export default function ProjectsAndDemos(){

    framework.addStyle(`${window.location.origin}/source/styles/projects_and_demos.css`);
    
    return (

        framework.UIElement("div")
        .setId("projects_and_demos")
        .setInnerArray(

            ProjectsAndDemosContents()

        )

    );

}



$("#content-body").appendInner(

    ProjectsAndDemos()

);