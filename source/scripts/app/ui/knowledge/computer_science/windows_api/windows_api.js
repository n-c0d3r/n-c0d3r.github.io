import framework from "../../../../../framework/framework.js"
import ContentHR from "../../../content_hr.js"

import KnowledgeItem from "../../knowledge_item.js"
import KnowledgeBack from "../../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("computer_science/windows_api/windows_api.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/windows_fiber.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/windows_thread.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/windows_windowing.png"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);