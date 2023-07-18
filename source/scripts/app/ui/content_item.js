import framework from "../../framework/framework.js"



export default function ContentItem(bgURL, directURL){

    framework.addStyle(`${window.location.origin}/source/styles/home.css`);

    console.log((bgURL == null) ? " " : `url("${bgURL}");` );
    
    return (

        framework.UIElement("div")
        .setClass("content_item")
        .setStyle({

            backgroundImage : `${
                (bgURL == null) ? " " : `url("${bgURL}")` 
            }`,

            cursor : `${(directURL == null) ? " " : "pointer"}`

        })
        .on('click', function(){

            if(directURL != null)
                window.open(directURL);

        })

    );

}