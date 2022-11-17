import framework from "../../../framework/framework.js"



export default function News(){

    framework.addStyle(`${window.location.origin}/source/styles/news.css`);
    
    return (

        framework.UIElement("div")
        .setId("news")
        .setInner(

            

        )

    );

}



$("#content-body").appendInner(

    News()

);