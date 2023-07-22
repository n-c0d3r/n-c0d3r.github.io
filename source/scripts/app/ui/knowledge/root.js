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

        KnowledgeItem("/resources/images/hardware_architecture.png", "hardware/hardware.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/algorithm.png", "algorithm/algorithm.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/data_structure.png", "data_structure/data_structure.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/windows_api.png", "windows_api/windows_api.js"),

        ContentHR(),

        // KnowledgeItem("/resources/images/dod.png"),

        // ContentHR(),

        KnowledgeItem("/resources/images/math.png", "math/math.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/gea.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/animation.png", "advanced_animation/advanced_animation.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/computer_graphics.png", "computer_graphics/computer_graphics.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/gpgpu.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/gtiu.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/oop.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/pl.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/other.png"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);