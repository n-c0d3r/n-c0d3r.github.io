

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_enhanced_text_body.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var TextBody = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_body_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    TextBody: "./text_body",

});



function EnhancedTextBody(content, level = 3, tabs = 0, width_level = 2){

    return TextBody(content, level, tabs, width_level, true);
}



return EnhancedTextBody;

            })();
        
        