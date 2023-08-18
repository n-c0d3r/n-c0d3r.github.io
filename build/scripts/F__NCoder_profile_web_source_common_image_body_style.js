

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_image_body_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const TEXT_BODY_MIN_WIDTH_PX = 500;



n0d3s.UI.Style(`

.image-body {

    cursor: pointer;

    height: fit-content;

    transition: filter 0.75s;

}

.image-body > img {

    width: 100%;
    height: fit-content;

    border-radius: min(1.5vh, 3vw);
    
    border: solid 2px rgba(200, 200, 200, 0.2);

    transition: border 0.25s;
    
    box-shadow: 12px 12px 12px rgba(0,0,0,0.3);

}

.image-body:hover > img {

    border: solid 2px rgba(200, 200, 200, 1.0);

}

.image-body:hover > div {

    filter: brightness(1.0);

}

.image-body > div {

    filter: brightness(0.4);

    position: absolute;

    width: 24px;
    height: 24px;

    top: 4px;
    right: 4px;
    
    background-size: cover;
    background-image: url("${window.origin}/resources/image/icon/ex_link.png");

    transition: filter 0.25s;

}
    
    
    
@media (min-width: 1000px) {

    .image-body {
    
        width: min(calc(100% - 2px), ${1400/3 - 50 - 2}px);
    
    }

}

@media (max-width: 1000px) {

    .image-body {
    
        width: calc(100% - 2px);
    
    }

}

`);

            })();
        
        