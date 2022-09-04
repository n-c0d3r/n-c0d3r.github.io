import framework from "../../../framework/framework.js"



export default function ShowStartAnimation(){

    return framework.Animation(

        //begin
        framework.AnimationState(async (state)=>{

            {

                await state.wait(500);

                $('#start-left')
                .setStyle({
    
                    width : "50%"
    
                })
    
                $('#start-right')
                .setStyle({
    
                    width : "50%"
    
                })
                
                await state.wait(250);
    
                $('#start-left-logo')
                .setStyle({
    
                    right : "0"
    
                })
    
                $('#start-right-text')
                .setStyle({
    
                    left : "-12px"
    
                })
                
                await state.wait(250);

            }


            
            await state.wait(1000);



            {

                $('#start-left-logo-container-y')
                .setStyle({
        
                    height : "66px"
    
                })   
    
                $('#start-left-logo')
                .setStyle({
    
                    width : "70px",        
                    height : "40px"
    
                }) 

                $('#start-right-text-container-y')
                .setStyle({
        
                    height : "75px"
    
                })
    
                $('#start-right-text')
                .setStyle({
    
                    width : "120px",
        
                    height : "30px",
    
                    left : "-4px"
    
                })

            }



            (async ()=>{
    
    
    
                await state.wait(500);
    
    
    
                $('#start-left')
                .setStyle({
    
                    width : "274px"
    
                })
    
                $('#start-right')
                .setStyle({
    
                    width : "calc(100% - 274px)"
    
                })
    
                $("#start")
                .setStyle({
    
                    transition : "0.3s"
    
                });

            })();
            
        })
        
    );
}