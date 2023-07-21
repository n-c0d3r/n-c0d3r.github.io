import framework from "../../../../framework/framework.js"
import ContentHR from "../../content_hr.js"

import KnowledgeItem from "../knowledge_item.js"
import KnowledgeBack from "../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("advanced_animation/advanced_animation.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/distance_matching.png", null, "https://www.youtube.com/watch?v=FbWhEf3iBuk"),

        ContentHR(),

        KnowledgeItem("/resources/images/foot_placement.png", null, "https://www.youtube.com/watch?v=0jOpu6XEZ58"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);