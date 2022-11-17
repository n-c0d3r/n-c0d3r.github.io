import framework from "../../framework/framework.js"



export default framework.Animation(

    async ()=>{

        $("#header-menu-container-mobile").setStyle({

            visibility: "hidden"

        });
        $("#header-menu-container-mobile").useHiddenStyle();
        $("#header-menu-container-mobile").setStyle({

            visibility: "visible"

        });

        $("#header-menu-container-mobile").useShowingStyle();

        await framework.wait(300);

    }

)