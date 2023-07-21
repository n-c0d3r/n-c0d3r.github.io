import framework from "../../../framework/framework.js";
import ContentItem from "../content_item.js";
import ContentPara from "../content_para.js";



const LAST_KNOWLEDGE_KEY = "last_knowledge";



const BORDER_COLORS = [
    "#CFF03C",
    "#A524F0",
    "#F07A30",
    "#CAF024"
];



function Node(content, localURL, index, isCurrent = false){

    let bgColor = (isCurrent ? "rgba(100,255,255,1.0)" : "rgba(24,24,24,1.0)");
    let fontWeight = (isCurrent ? "900" : "00");
    let borderColor = (isCurrent ? "rgba(24,24,24,1.0)" : BORDER_COLORS[index % (BORDER_COLORS.length)]);
    let fontColor = borderColor;
    
    return (

        framework.UIElement("div")
        .setStyle({

            backgroundColor : bgColor,
            color : fontColor,
            boxShadow : "none",
            cursor : "pointer",
            borderRadius : "1vh",

            padding : "5px",
            fontWeight : fontWeight,

            cursor : "pointer",

            boxShadow: "0px 0px 2px 2px rgba(0,0,0,0.4)",

            border : `solid 1px ${borderColor}`,

        })
        .setInner(framework.endUserText(content))
        .on('click', function(){

            if(localURL != null){

                localStorage.setItem(LAST_KNOWLEDGE_KEY, localURL);
                window.location.reload();

            }

        })

    );

}

export default function KnowledgeBack(localURL){
    
    let parts = localURL.split("/");

    let nodes = [Node("Knowledge", "root.js", 0, (parts.length == 1))];

    let url = "";

    for(let i = 0; i < parts.length - 1; i++){

        if(i != 0)
            url += "/";

        url += parts[i];

        nodes[i + 1] = Node(parts[i], url + "/" + parts[i] + ".js", i + 1, (i == (parts.length - 2)));

    }



    return (

        framework.UIElement("div")
        .setStyle({

            position : "fixed",

            bottom : "2px",
            left : "2px",

            display : "flex",
            flexWrap : "wrap",
            gap : "6px",

        })
        .setInnerArray(
            nodes
        )

    );

}