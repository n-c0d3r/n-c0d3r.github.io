import framework from "../../../framework/framework.js"



export default function Home(){

    framework.addStyle(`${window.location.origin}/source/styles/home.css`);
    
    return (

        framework.UIElement("div")
        .setId("home")
        .setInner(

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-first-post")
            .setInner(
    
                
    
            ),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-second-post")
            .setInner(
    
                
    
            ),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-third-post")
            .setInner(
    
                
    
            ),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-fourth-post")
            .setInner(
    
                
    
            ),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-5th-post")
            .setInner(
    
                
    
            ),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-6th-post")
            .setInner(
    
                
    
            )
            .on('click', function(){

                window.open(`https://www.github.com/INGTechnologies/ING`);

            }),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

            framework.UIElement("div")
            .setId("home-7th-post")
            .setInner(
    
                
    
            )
            .on('click', function(){

                window.open(`https://www.github.com/n-c0d3r/ncpp`);

            }),

            framework.UIElement("div")
            .setStyle({

                width: "100%",

                backgroundColor: "rgba(102,255,255,0)",

                marginTop: "7px",

            }),

        )

    );

}



$("#content-body").appendInner(

    Home()

);