import framework from "../../framework/framework.js"



export default function PageContent(pageName){

    return (

        framework.UIElement("script")
        .setAttribute("type", "module")
        .setAttribute("src", `${window.location.origin}/source/scripts/app/ui/${pageName}/${pageName}.js`)

    );

}