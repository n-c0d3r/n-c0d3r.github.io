import framework from "../../../framework/framework.js"



export default function ShowHeaderMenu(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            $("#header-page-btn-container")
            .setStyle({

                top : "0px"

            });

            await state.wait(750);

            $("#header-menu")
            .setStyle({

                transition : "0.0s"

            });

            $("#header-page-btn-container")
            .setStyle({

                transition : "0.0s"

            });

        })

    )
}