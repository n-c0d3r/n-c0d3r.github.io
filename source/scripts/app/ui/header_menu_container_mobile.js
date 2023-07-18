import framework from "../../framework/framework.js"

import HideHeaderMenuContainerMobile from "../animation/hide_header_menu_container_mobile.js";
import ShowHeaderMenuContainerMobile from "../animation/show_header_menu_container_mobile.js";



export default function HeaderMenuContainerMobile(){
    
    return (
        
        framework.UIElement("div")
        .setId("header-menu-container-mobile")
        .setStyle({

            visibility: "hidden",

            height: "0px",

        })
        .setInner(

            framework.UIElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Home"

            )
            .on("click", function(){

                localStorage.setItem("lastPage", "home");
                (async()=>{
                    await framework.wait(300);
                    window.location.reload();
                })()

            }),

            framework.UIElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(

                

            ),

            framework.UIElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Knowledge"

            )
            .on("click", function(){

                localStorage.setItem("lastPage", "knowledge");
                (async()=>{
                    await framework.wait(300);
                    window.location.reload();
                })()

            }),

            framework.UIElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(

                

            ),

            framework.UIElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Projects & Demos"

            )
            .on("click", function(){

                localStorage.setItem("lastPage", "projects_demos");
                (async()=>{
                    await framework.wait(300);
                    window.location.reload();
                })()

            }),

            framework.UIElement("div")
            .setClass("header-menu-button-space-mobile")
            .setInner(

                

            ),

            framework.UIElement("div")
            .setClass("header-menu-button-mobile")
            .setInner(

                "Blog"

            )
            .on("click", function(){

                localStorage.setItem("lastPage", "blog");
                (async()=>{
                    await framework.wait(300);
                    window.location.reload();
                })()

            }),
            
        )
        .exe(function(){

            this.state = "hidden";

            let headerMenuContainer = this;

            this.changeState = async function(){

                if(headerMenuContainer.state == "hidden"){

                    await headerMenuContainer.show();

                }
                else{

                    await headerMenuContainer.hide();

                }

            }

            this.useShowingStyle = function(){

                this.setStyle({

                    height: "200px",
                    marginTop: "7x",
                    marginBottom: "7px",
                    filter: "opacity(1.0)",

                });

                $("#header-menu-mobile")
                .setStyle({

                    transform: "rotate(0deg)",
                    filter: "grayscale(1.0)",

                });

            }

            this.useHiddenStyle = function(){

                this.setStyle({

                    height: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    filter: "opacity(0.0)",
                    
                });

                $("#header-menu-mobile")
                .setStyle({

                    transform: "rotate(180deg)",
                    filter: "grayscale(0.0)",

                });
                
            }

            this.show = async function(){

                headerMenuContainer.state = "showing";
                
                await ShowHeaderMenuContainerMobile();

            }

            this.hide = async function(){

                headerMenuContainer.state = "hidden";

                await HideHeaderMenuContainerMobile();

            }

            window.addEventListener("resize", function(){

                if(this.window.innerWidth >= 725){

                    headerMenuContainer.hide();

                }

            });

        })

    )
}