

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

            
            
                        
            
                
                    var Element = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_element.js"];
                

                
                
                
                module.use({

    Element : "./element"

})
.use_open_mode();



function $(query) {

    let result = document.querySelector(query);

    if(result == document.body && result.n0d3sEmbedded != true){

        Element('body');
        
    }

    if(query == 'title' && result.n0d3sEmbedded != true){

        Element('title');
        
    }

    return result;
}

function $$(query) {

    return document.querySelectorAll(query);
}

            
        
        