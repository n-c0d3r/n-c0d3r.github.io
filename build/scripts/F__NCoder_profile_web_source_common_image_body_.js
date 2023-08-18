

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_image_body_.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



function ImageBody(url, href){

    let result = n0d3s.UI.Element("div")
    .appendClass("image-body")
    .appendInner(
        n0d3s.UI.Element("img")
        .setAttribute("src", url)
    )
    .setStyle({

        

    })
    .exe(function(){

        let image_body = this;
        let img_element = image_body.querySelector("img");
        
        image_body.setWidthLevel = function(width_level = 1){

            image_body.setStyle({
        
                width: `min(100%, ${1400 / (width_level + 1) - 50}px)`,
        
            });

            return image_body;
        }

        image_body.useLargeWidth = function(){

            image_body.setStyle({
        
                width: `min(calc(${(1400 / 3 - 50) * 2}px + 10vw), calc(100vw - 10vw))`,
        
            });

            return image_body;
        }

        if(href != null){

            img_element.on(
                "click",
                function(e) {
    
                    if(href != null)
                        window.open(href);
    
                }   
            );

            image_body.appendChild(
                n0d3s.UI.Element("div")
            );

        }
        
    });
    

    return result;
}



return ImageBody;

            })();
        
        