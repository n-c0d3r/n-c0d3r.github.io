import framework from "../../../framework/framework.js"



export default function Posts(){

    framework.addStyle(`${window.location.origin}/source/styles/posts.css`);
    
    return (

        framework.UIElement("div")
        .setId("posts")
        .setInner(

            

        )

    );

}



$("#content-body").appendInner(

    Posts()

);