

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_body_.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var text_config = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_config.js"];
                
                    var text_body_config = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_body_config.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    text_config: "./common/text_config",
    text_body_config: "./config",

})
.use([

    "./style"

]);



function TextBody(content, level = 3, tabs = 0, width_level = 2, use_content_as_html_inner = false){

    let tabs_characters = ``;
    for(let i = 0; i < tabs; ++i){

        tabs_characters += '\t';

    }



    function parseContent(content){

        let result = content;

        if(use_content_as_html_inner){

            result = tabs_characters + result.replaceAll('\n', `</br>${tabs_characters}`);
            result = result.replaceAll('\t', `&emsp;`);

        }
        else
            result = tabs_characters + result.replaceAll('\n', `\n${tabs_characters}`);

        return result;
    }



    let content_parts = [];
    let parsed_content_parts = [];

    if(Array.isArray(content))
        content_parts = content;
    else 
        content_parts.push(content);



    for(let content_part of content_parts){

        if(content_part instanceof HTMLElement){

            content_part.textContent = parseContent(content_part.textContent);

            parsed_content_parts.push(content_part);

        }
        else{

            parsed_content_parts.push(parseContent(content_part));

        }

    }



    let result = n0d3s.UI.Element("div")
    .appendClass("text-body")
    .setStyle({

        fontSize: `${text_config.sizes[level]}px`,
        lineHeight: `${text_config.line_heights[level]}px`,

        width: `min(100%, ${text_body_config.max_widths[width_level]}px)`,

    });



    if(use_content_as_html_inner)
        result.appendInner(...parsed_content_parts);
    else
        result.appendTextContent(...parsed_content_parts);

    

    return result
    .exe(function(){

        let text_body = this;

        text_body.makeCenter = function(){

            text_body.appendClass("item-center");

            return text_body;
        }

        text_body.setFontLevel = function(level){

            text_body.setStyle({

                fontSize: `${text_config.sizes[level]}px`,
                lineHeight: `${text_config.line_heights[level]}px`,
        
            });

            return text_body;
        }
        text_body.setWidthLevel = function(width_level){

            text_body.setStyle({
        
                width: `min(100%, ${text_body_config.max_widths[width_level]}px)`,
        
            });

            return text_body;
        }

        text_body.useLargeWidth = function(){

            text_body.setStyle({
        
                width: `min(calc(${(1400 / 3 - 50) * 2}px + 10vw), calc(100vw - 10vw))`,
        
            });

            return text_body;
        }

        text_body.setFontSize = function(fontSize){

            text_body.setStyle({

                fontSize: fontSize,
        
            });

            return text_body;
        }

        text_body.setLineHeight = function(lineHeight){

            text_body.setStyle({

                lineHeight: lineHeight,
        
            });

            return text_body;
        }

        text_body.makeFullHeight = function(){

            text_body.setStyle({

                height: "100%",
        
            });

            return text_body;
        }

    });
}



return TextBody;

            })();
        
        