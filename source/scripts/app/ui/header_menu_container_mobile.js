import framework from "../../framework/framework.js"

import HideHeaderMenuContainerMobile from "../animation/hide_header_menu_container_mobile.js";
import ShowHeaderMenuContainerMobile from "../animation/show_header_menu_container_mobile.js";



const LAST_PAGE_KEY = "lastPage";



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

                localStorage.setItem(LAST_PAGE_KEY, "home");
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

                localStorage.setItem(LAST_PAGE_KEY, "knowledge");
                localStorage.setItem("last_knowledge", "root.js");
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

                localStorage.setItem(LAST_PAGE_KEY, "projects_and_demos");
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

                "Books"

            )
            .on("click", function(){

                localStorage.setItem(LAST_PAGE_KEY, "books");
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

                localStorage.setItem(LAST_PAGE_KEY, "blog");
                (async()=>{
                    await framework.wait(300);
                    window.location.reload();
                })()

            }),
            
        )
        .exe(function(){

            this.state = "hidden";

            let headerMenuContainer = this;
            headerMenuContainer.isTouchMove = false;

            window.addEventListener("touchstart", function(){

                headerMenuContainer.isTouchMove = false;

            });

            window.addEventListener("touchmove", function(){

                headerMenuContainer.isTouchMove = true;
            });

            function checkVisible(elm) {
                var rect = elm.getBoundingClientRect();
                var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
                return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
            }

            window.addEventListener("touchend", function(){

                if(
                    headerMenuContainer.state != "hidden"
                    && headerMenuContainer.isTouchMove
                    && !checkVisible(headerMenuContainer)
                )
                    headerMenuContainer.hide();

            });

            this.changeState = async function(){

                if(headerMenuContainer.state == "hidden"){

                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})

                    await headerMenuContainer.show();

                }
                else{

                    await headerMenuContainer.hide();

                }

            }

            this.useShowingStyle = function(){

                this.setStyle({

                    height: "140px",
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