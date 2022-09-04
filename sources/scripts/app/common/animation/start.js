import framework from "../../../framework/framework.js"



export default function StartAnimation(){

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
        
                    height : "70px"
    
                })  

                $('#start-right-text-container-y')
                .setStyle({
        
                    height : "70px"
    
                })  
    
                $('#start-left-logo')
                .setStyle({
    
                    width : "110px",
        
                    height : "70px"
    
                })

                $('#start-right-text-container-y')
                .setStyle({
        
                    height : "80px"
    
                })
    
                $('#start-right-text')
                .setStyle({
    
                    width : "140px",
        
                    height : "36px",
    
                    left : "0"
    
                })

            }



            await state.wait(500);



            $('#start-left')
            .setStyle({

                width : "110px"

            })

            $('#start-right')
            .setStyle({

                width : "calc(100% - 110px)"

            })

            $("#start")
            .setStyle({

                transition : "0.3s"

            });
            
        })
        
    );
}