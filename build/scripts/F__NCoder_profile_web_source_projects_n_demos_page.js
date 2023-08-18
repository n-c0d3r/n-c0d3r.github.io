

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_projects_n_demos_page.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var Common = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"];
                
                    var contents = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_projects_n_demos_contents.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

    contents: "./contents",

})
.register_page();



$("title").setInner("Projects & Demos");



$("body")
.appendInner(
    Common.Header({

        current_page_index: 1

    }),    
    
    ...contents,
);

            })();
        
        