

            var module = {

                use() { return module; },
                register_page() { return module; },
                use_open_mode() { return module; },
                text() { return module; },
                json() { return module; },

            };
            
            var build_state = false;
            var run_state = true;

            if(window.n0d3s_cached_dependency_results == null)
                window.n0d3s_cached_dependency_results = new Object();

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

});



const BG_COLOR = `rgb(22, 22, 22)`;



n0d3s.UI.Style(`

    html {
        overflow: auto;

        color-scheme: dark;

    }

    body {

        padding-top: 50px;
        padding-right: 0;
        padding-left: 0;
        padding-bottom: 0;
        margin: 0;

        background-color: ${BG_COLOR};

        color-scheme: dark;

    }

    .info-text-0 {

        font-weight: 500;
        color: rgba(140, 235, 240, 0.8);

    }

    .info-text-1 {

        font-weight: 500;
        color: rgba(140, 200, 255, 0.8);

    }

    .info-text-2 {

        font-weight: 500;
        color: rgba(180, 255, 180, 0.8);

    }

    .info-text-3 {

        font-weight: 420;
        color: rgba(240, 240, 240, 1);

    }

    .info-text-4 {

        color: rgb(160, 160, 160);

    }

    * {

        font-family:  -apple-system, -apple-system, 
        BlinkMacSystemFont, 'Segoe UI', Roboto, 
        Oxygen, Ubuntu, Cantarell, 'Open Sans', 
        'Helvetica Neue', sans-serif;

    }

    span {

        white-space: pre-wrap;

    }

    a {

        color: rgba(255, 255, 255, 1.0);
        text-decoration: none;
        
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */

        cursor: pointer;

    }

    .github-link {

        background-image: url("${window.origin}/resources/image/icon/github-mark-white_32.png");
        background-size: cover;

        display: inline-block;

        height: 18px;
        width: 18px;

        transform: translate(0, 4px);

    }

    .ytb-link {

        background-image: url("${window.origin}/resources/image/icon/youtube_fullcolor.png");
        background-size: cover;

        display: inline-block;

        height: 18px;
        width: 18px;

        transform: translate(0, 4px);

    }

    .gg-play-link {

        background-image: url("${window.origin}/resources/image/icon/ggplay.png");
        background-size: cover;

        display: inline-block;

        height: 18px;
        width: 18px;

        transform: translate(0, 4px);

    }

    .text-tag-0 {

        background-color: rgb(60, 160, 170);

        color: rgb(18, 18, 18);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.6);

    }

    .text-tag-1 {

        background-color: rgb(160, 60, 170);

        color: rgb(18, 18, 18);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.6);

    }

    .text-tag-2 {

        background-color: rgb(160, 170, 60);

        color: rgb(18, 18, 18);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.6);

    }

    .text-tag-3 {

        background-color: rgb(30, 170, 120);

        color: rgb(18, 18, 18);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.6);

    }

    .text-tag-4 {

        background-color: rgb(80, 170, 40);

        color: rgb(18, 18, 18);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.6);

    }

    .text-tag-5 {

        background-color: rgb(170, 40, 40);

        color: rgb(18, 18, 18);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.6);

    }

    .ex-link-0 {

        color: rgb(60, 160, 170);

        background-color: rgb(36, 36, 36);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    }

    .ex-link-1 {

        color: rgb(160, 60, 170);

        background-color: rgb(36, 36, 36);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    }

    .ex-link-2 {

        color: rgb(160, 170, 60);

        background-color: rgb(36, 36, 36);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    }

    .ex-link-3 {

        color: rgb(30, 170, 120);

        background-color: rgb(36, 36, 36);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    }

    .ex-link-4 {

        color: rgb(80, 170, 40);

        background-color: rgb(36, 36, 36);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    }

    .ex-link-5 {

        color: rgb(170, 40, 40);

        background-color: rgb(36, 36, 36);

        font-weight: 500;

        padding-left: 3px;
        padding-right: 3px;

        padding-bottom: 1px;

        border-radius: 6px;

        font-size: 15px;
        line-height: 25px;

        box-shadow: 3px 3px 3px rgba(0,0,0,0.3);

    }

    /*
    line_heights: [
        55,
        45,
        35,
        25,
    ],

    sizes: [
        45,
        35,
        25,
        15,
    ],*/

    .text-0 {

        font-size: 15px;
        line-height: 25px;

    }

    .text-1 {

        font-size: 25px;
        line-height: 35px;

    }

    .text-2 {

        font-size: 35px;
        line-height: 45px;

    }

    .text-3 {

        font-size: 45px;
        line-height: 55px;

    }

    .item-center {

        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        
    }

    .item-left {

        align-items: left;
        text-align: left;
        
    }

    .item-right {

        align-items: right;
        text-align: right;
        
    }

    .item-justify {

        align-items: justify;
        text-align: justify;
        
    }

    .prevent-select {
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

`);

            })();
        
        