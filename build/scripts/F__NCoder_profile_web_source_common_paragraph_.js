

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_paragraph_.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var TextBody = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_body_.js"];
                
                    var EnhancedTextBody = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_enhanced_text_body.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    TextBody: "./common/text_body",
    EnhancedTextBody: "./common/enhanced_text_body",

})
.use([

    "./style"

]);



function Paragraph(name, content, level = 3, tabs = 0, width_level = 2, use_html_inner_for_name = false){

    let content_elements = [];

    if(content != null) {

        content_elements.push(

            EnhancedTextBody(
                content,
                level,
                tabs,
                0
            )
            .appendClass("paragraph-content")

        );

    }

    let name_element = null;

    if(use_html_inner_for_name)
        name_element = EnhancedTextBody(
            name,
            level - 1,
            0,
            0
        )
        .appendClass("paragraph-name")
        .makeCenter();
    else
        name_element = TextBody(
            name,
            level - 1,
            0,
            0
        )
        .appendClass("paragraph-name")
        .makeCenter();

    return TextBody([], level, 0, width_level)
    .appendClass("paragraph")
    .appendInner(

        name_element,

    )
    .appendInnerArray(content_elements)
    .exe(function(){

        let paragraph = this;

        paragraph.useLargeWidth = function(){

            paragraph.setStyle({
        
                width: `min(calc(${(1400 / 3 - 50) * 2}px + 10vw), calc(100vw - 10vw))`,
        
            });

            return paragraph;
        }

        paragraph.setWidthLevel = function(width_level){

            paragraph.setStyle({
        
                width: `min(100%, ${1400 / (width_level + 1) - 50}px)`,
        
            });

            return paragraph;
        }

    });
}



return Paragraph;

            })();
        
        