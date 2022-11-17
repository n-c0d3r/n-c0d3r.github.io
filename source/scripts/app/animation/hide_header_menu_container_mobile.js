import framework from "../../framework/framework.js"



export default framework.Animation(

    async ()=>{

        $("#header-menu-container-mobile").useShowingStyle();

        $("#header-menu-container-mobile").setStyle({

            visibility: "visible"

        });
        $("#header-menu-container-mobile").useHiddenStyle();

        await framework.wait(300);
        $("#header-menu-container-mobile").setStyle({

            visibility: "hidden"

        });

    }

)