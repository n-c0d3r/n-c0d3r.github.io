

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_.js"] = (()=>{            
            
                
                    var quick_query = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_quick_query.js"];
                
                    var Style = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_style.js"];
                
                    var Element = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_element.js"];
                

                
                
                
                module.use({

    quick_query : "./quick_query",
    Style : "./style",
    Element : "./element",

});



const UI = {

    $,
    $$,

    Style,
    Element,

};



return UI;

            })();
        
        