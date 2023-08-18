

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_body_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var text_config = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_config.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",
    
    text_config: "./common/text_config",

})
.use([

    "./common/style.js"

]);



const TEXT_BODY_MIN_WIDTH_PX = 500;



n0d3s.UI.Style(`

.text-body {

    color: rgb(180, 180, 180);

    word-wrap: break-word;

    display: initial;

    min-height: fit-content;

    white-space: pre-wrap;

    transition: filter 0.75s;
}

.text-body > span {

    word-wrap: break-word;

}

`);

            })();
        
        