

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_style.js"] = (()=>{            
            
                

                
                
                
                module.use({

})



function Style(content) {

    let result = document.createElement('style');

    result.textContent = content;

    document.body.appendChild(result);

    return result;
}



return Style;

            })();
        
        