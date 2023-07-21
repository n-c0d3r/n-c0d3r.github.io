import framework from "../../../framework/framework.js"
import ContentItem from "../content_item.js"
import ContentPara from "../content_para.js"
import ContentHR from "../content_hr.js"



export default function ProjectsAndDemosContents(){

    framework.addStyle(`${window.location.origin}/source/styles/common.css`);
    framework.addStyle(`${window.location.origin}/source/styles/projects_and_demos.css`);
    
    return [

        ContentHR(),

        ContentItem("/resources/images/ing.png", `https://www.github.com/INGTechnologies/ING`),

        ContentHR(),

        ContentItem("/resources/images/ncpp.png", `https://www.github.com/n-c0d3r/ncpp`),

        ContentHR(),

        ContentItem("/resources/images/BRDF.png", `https://www.youtube.com/watch?v=p6w_qwCLJYc`),

        ContentHR(),

        ContentItem("/resources/images/unity_gdr.png", `https://www.youtube.com/watch?v=Phhg8GvmpT4`),

        ContentHR(),

        ContentItem("/resources/images/hdb.png", "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"),

        ContentHR(),

        ContentItem("/resources/images/rtti_n_mpcpp.png", `https://www.youtube.com/watch?v=0DaLMNVAwFM`),

        ContentHR(),

        ContentItem("/resources/images/ue5_advanced_animation_locomotion.png", `https://www.youtube.com/watch?v=PmepmEqGyxQ`),

        ContentHR(),

        ContentItem("/resources/images/bhopping.png", `https://www.youtube.com/watch?v=8yr5bNBZKJs`),

        ContentHR(),

        ContentItem("/resources/images/stack_heap.png", `https://github.com/n-c0d3r/NCPP/blob/main/ncpp/samples/memory_management/stack_heap/source/bootstrap.cpp`),

        ContentHR(),

        ContentItem("/resources/images/ohhh2.png", `https://www.youtube.com/watch?v=ROBR3i-oPm0`),

        ContentHR(),

        ContentItem("/resources/images/ohhh.png", `https://play.google.com/store/apps/details?id=com.DNGames.Ohhh_Remake&hl=vi-VN`),

        ContentHR(),

    ];

}