import framework from "../../framework/framework.js"



export default function PageContent(pageName){

    return framework.ScriptModule(`${window.location.origin}/source/scripts/app/ui/${pageName}/${pageName}.js`);

}