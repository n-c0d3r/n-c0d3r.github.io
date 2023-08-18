

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"] = (()=>{            
            
                
                    var UI = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_.js"];
                

                
                
                
                module.use({

    UI : "./ui"
    
});



const n0d3s = {

    UI,

};



return n0d3s;

            })();
        
        