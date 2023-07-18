import framework from "../../../framework/framework.js"



export default function News(){

    framework.addStyle(`${window.location.origin}/source/styles/blog.css`);
    
    return (

        framework.UIElement("div")
        .setId("blog")
        .setInner(

            

        )

    );

}



$("#content-body").appendInner(

    News()

);