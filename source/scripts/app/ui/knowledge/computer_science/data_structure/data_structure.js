import framework from "../../../../../framework/framework.js"
import ContentHR from "../../../content_hr.js"

import KnowledgeItem from "../../knowledge_item.js"
import KnowledgeBack from "../../knowledge_back.js"



function Contents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/knowledge.css`);
    
    return [

        KnowledgeBack("computer_science/data_structure/data_structure.js"),

        ContentHR(),

        KnowledgeItem("/resources/images/array.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/linked_list.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/octree.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/quadtree.png"),

        ContentHR(),

        KnowledgeItem("/resources/images/handle_map.png", null, "https://www.gamedev.net/tutorials/_/technical/general-programming/game-engine-containers-handle-map-r4495/"),

        ContentHR(),

        KnowledgeItem("/resources/images/basic_hash_table.png"),

        ContentHR(),

    ];

}

$("#content-body")
.setInnerArray(
    Contents()
);