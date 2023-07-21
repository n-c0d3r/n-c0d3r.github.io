import ContentItem from "../content_item.js";



const LAST_KNOWLEDGE_KEY = "last_knowledge";



export default function KnowledgeItem(bgURL, localURL, directURL){
    
    return (

        ContentItem(bgURL)
        .setStyle({

            cursor : ((localURL != null) || (directURL != null)) ? "pointer" : "",

        })
        .on('click', function(){

            if(localURL != null){

                localStorage.setItem(LAST_KNOWLEDGE_KEY, localURL);
                window.location.reload();

            }

            if(directURL != null){

                window.open(directURL);

            }

        })

    );

}