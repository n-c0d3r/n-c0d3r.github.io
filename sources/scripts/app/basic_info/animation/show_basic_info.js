import framework from "../../../framework/framework.js"



export default function ShowBasicInfoAnimation(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            await state.wait(500);

            $("#basic-info")
            .setStyle({

                opacity : "1",

            });

            await state.wait(1000);

        })

    )
}