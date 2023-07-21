import framework from "../../../framework/framework.js"

import KnowledgeRootContents from "./root.js";



const LAST_KNOWLEDGE_KEY = "last_knowledge";



export default function Knowledge(){

    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);



    if(localStorage.getItem(LAST_KNOWLEDGE_KEY) == null){

        localStorage.setItem(LAST_KNOWLEDGE_KEY, "root.js");
    }



    let knowledgePath = localStorage.getItem(LAST_KNOWLEDGE_KEY);


    
    return (

        framework.ScriptModule(`${window.location.origin}/source/scripts/app/ui/knowledge/${knowledgePath}`)

    );

}



$("#content-body").appendInner(

    Knowledge()

);