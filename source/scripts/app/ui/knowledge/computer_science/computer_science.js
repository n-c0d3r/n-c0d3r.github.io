import framework from "../../../../framework/framework.js"
import ContentHR from "../../content_hr.js"

import KnowledgeItem from "../knowledge_item.js"
import KnowledgeBack from "../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("computer_science/computer_science.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/hardware_architecture.png", "computer_science/hardware/hardware.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/data_structure.png", "computer_science/data_structure/data_structure.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/algorithm.png", "computer_science/algorithm/algorithm.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/windows_api.png", "computer_science/windows_api/windows_api.js"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);