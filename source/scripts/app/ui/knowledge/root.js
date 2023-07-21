import framework from "../../../framework/framework.js"
import ContentItem from "../content_item.js"
import ContentPara from "../content_para.js"
import ContentHR from "../content_hr.js"

import KnowledgeItem from "./knowledge_item.js"
import KnowledgeBack from "./knowledge_back.js"



export default function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("root.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/cs.png", "computer_science/computer_science.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/oop.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/dod.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/math.png", "math/math.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/game.png", "game/game.js"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);