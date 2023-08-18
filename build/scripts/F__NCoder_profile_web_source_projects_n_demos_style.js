

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_projects_n_demos_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var Common = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

});



n0d3s.UI.Style(`

.title-content {

    background-image: url("${window.origin}/resources/image/demonstrates/ohqg_dark.png");
    background-position: 50% 47%;
    background-size: cover;

}

.low-level-content {

    

}

.cg-content {

    background-color: rgba(40, 42, 42, 1);

}

.aa-content {

    

}

.games-demos-content {

    background-color: rgba(37, 39, 42, 1);

}

`);

            })();
        
        