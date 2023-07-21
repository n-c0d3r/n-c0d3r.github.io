import framework from "../../../../framework/framework.js"
import ContentHR from "../../content_hr.js"

import KnowledgeItem from "../knowledge_item.js"
import KnowledgeBack from "../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("game/game.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/calculus.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/linear_algebra.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/quaternion.png"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);