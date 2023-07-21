import framework from "../../../../../framework/framework.js"
import ContentHR from "../../../content_hr.js"

import KnowledgeItem from "../../knowledge_item.js"
import KnowledgeBack from "../../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("computer_science/hardware/hardware.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/cpu.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/gpu.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/ft_simt.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/memory.png"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);