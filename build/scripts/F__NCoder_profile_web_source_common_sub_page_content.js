

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_sub_page_content.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var PageContent = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_page_content_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    PageContent: "./page_content",

});



function SubPageContent(){

    return PageContent()
        .setStyle({

            padding: "0",
            width: "100%",
            gap: "min(5vw, 50px) min(5vw, 50px)",

        });
}



return SubPageContent;

            })();
        
        