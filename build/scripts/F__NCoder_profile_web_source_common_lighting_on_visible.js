

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_lighting_on_visible.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var isInVP = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_is_in_vp.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    isInVP: "./is_in_vp",

});



function LightingOnVisible(init_opacity = 0.0, init_grayscale = 1.0) {

    return {

        init(element) {

            element.setStyle({

                filter: `opacity(${init_opacity}) grayscale(${init_grayscale})`,

            });

        },

        update(element) {

            if(isInVP(element)) {
                
                element.setStyle({

                    filter: `opacity(1.0) grayscale(0.0)`,

                });

            }
            else {
                
                element.setStyle({

                    filter: `opacity(${init_opacity}) grayscale(${init_grayscale})`,

                });

            }

            return true;
        }

    };
}



return LightingOnVisible;

            })();
        
        