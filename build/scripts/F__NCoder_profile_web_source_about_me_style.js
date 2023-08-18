

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_about_me_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var Common = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

});



n0d3s.UI.Style(`

.hello-content {

    background: linear-gradient(to top right, rgba(18, 18, 18, 0.5), rgba(120, 215, 240, 0.21));

}

.who-i-am-content {

    

}

.my-journey-content {

    background-color: rgba(30, 40, 45, 1);

}

`);

            })();
        
        