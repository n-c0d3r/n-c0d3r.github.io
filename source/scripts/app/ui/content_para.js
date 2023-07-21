import framework from "../../framework/framework.js"



export default function ContentPara(useMarginTop = true, color = [100, 219, 255]){

    framework.addStyle(`${window.location.origin}/source/styles/home.css`);

    let avgBrightness = (color[0] + color[1] + color[2]) / 3.0;
    
    return (

        framework.UIElement("div")
        .setClass("content_para")
        .setStyle({

            backgroundColor: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1.0)`,
            // backgroundColor: `rgba(${avgBrightness}, ${avgBrightness}, ${avgBrightness}, 0.1)`,

            color: `rgba(${avgBrightness * 0.1}, ${avgBrightness * 0.1}, ${avgBrightness * 0.1}, 1.0)`,
            // color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1.0)`,

            textAlign : "center",

            fontSize : "2vw",
            
            paddingTop : "10px",
            paddingBottom : "10px",

            marginTop : useMarginTop ? "calc(4vw + 20px)" : "0",

        })

    );

}