import framework from "../../framework/framework.js"



export default function ContentItem(){

    framework.addStyle(`${window.location.origin}/source/styles/home.css`);
    
    return (

        framework.UIElement("div")
        // .on(
        //     "click", 
        //     function(){

        //         window.scrollTo({top: 0, behavior: 'smooth'});

        //         if(e.target != $("#header-menu-mobile"))
        //             headerMenuContainer.hide();

        //     }
        // )

    );

}