

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_page_content_.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



function PageContent(){

    return n0d3s.UI.Element("div")
    .appendClass("page-content")
    .setInner(
        
    )
    .exe(function(){

        let page_content = this;

        page_content.useLargeWidth = function(){

            page_content.setStyle({
        
                width: `min(calc(${(1400 / 3 - 50) * 2}px + 10vw), calc(100vw - 10vw))`,
        
            });

            return page_content;
        }

        page_content.setWidthLevel = function(width_level){

            page_content.setStyle({
        
                width: `min(100%, ${1400 / (width_level + 1) - 50}px)`,
        
            });

            return page_content;
        }

    });
}



return PageContent;

            })();
        
        