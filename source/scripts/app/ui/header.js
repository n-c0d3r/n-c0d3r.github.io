import framework from "../../framework/framework.js"



export default function Header(){

    framework.addStyle(`${window.location.origin}/source/styles/header.css`);

    return (
        framework.UIElement("div")
        .setId("header")
        .setInner(

            framework.UIElement("div")
            .setId("header-logo"),

            framework.UIElement("div")
            .setInner(

                framework.UIElement("div")
                .setStyle({

                    zIndex: "10"

                })
                .setInner(
    
                    "NCoder"
    
                ),

                framework.UIElement("div")
                .setInner(

                    framework.UIElement("div")
                    .setId("header-menu-desktop")
                    .setInner(
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-space-desktop"),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-desktop")
                        .setInner(
            
                            "Home"
            
                        )
                        .on("click", function(){
            
                            localStorage.setItem("lastPage", "home");
                            window.location.reload();
            
                        }),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-space-desktop"),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-desktop")
                        .setInner(
            
                            "Knowledge"
            
                        )
                        .on("click", function(){
            
                            localStorage.setItem("lastPage", "knowledge");
                            window.location.reload();
            
                        }),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-space-desktop"),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-desktop")
                        .setInner(
            
                            "Projects & Demos"
            
                        )
                        .on("click", function(){
            
                            localStorage.setItem("lastPage", "projects_demos");
                            window.location.reload();
            
                        }),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-space-desktop"),
        
                        framework.UIElement("div")
                        .setClass("header-menu-button-desktop")
                        .setInner(
            
                            "Blog"
            
                        )
                        .on("click", function(){
            
                            localStorage.setItem("lastPage", "blog");
                            window.location.reload();
            
                        }),
        
                    ),

                    framework.UIElement("div")
                    .setId("header-menu-mobile")
                    .setStyle({
                        
                        transform: "rotate(180deg)"

                    })
                    .setInner(



                    )
                    .on("click", function(){

                        $("#header-menu-container-mobile").changeState();

                    }),

                ),

            ),

        )
    );
}