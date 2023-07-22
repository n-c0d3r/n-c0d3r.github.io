import framework from "../../../../framework/framework.js"
import ContentHR from "../../content_hr.js"

import KnowledgeItem from "../knowledge_item.js"
import KnowledgeBack from "../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("algorithm/algorithm.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/sorts.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/search_traversal.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/dp.png"),

        ContentHR(),

        // KnowledgeItem("/resources/images/pps.png", null, "https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing/chapter-39-parallel-prefix-sum-scan-cuda"),

        // ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);