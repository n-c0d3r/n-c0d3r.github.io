import framework from "../../../../framework/framework.js"
import ContentHR from "../../content_hr.js"

import KnowledgeItem from "../knowledge_item.js"
import KnowledgeBack from "../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("computer_graphics/computer_graphics.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/dx11.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/bgfx.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/deferred_shading.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/z_cg_f.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/gb_ic.png", null, "https://www.youtube.com/watch?v=LcS9EiSKbkk"),

        ContentHR(),

        KnowledgeItem("/resources/images/gb_cc.png", null, "https://www.youtube.com/watch?v=O2_4-skQJGs"),

        ContentHR(),

        KnowledgeItem("/resources/images/pbs.png", null, "https://www.youtube.com/watch?v=p6w_qwCLJYc"),

        ContentHR(),

        KnowledgeItem("/resources/images/hdb.png", null, "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);