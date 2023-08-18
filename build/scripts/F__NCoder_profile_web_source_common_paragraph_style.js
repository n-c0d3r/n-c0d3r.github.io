

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_paragraph_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var text_config = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_config.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",
    
    text_config: "./common/text_config",

})
.use([

    "./common/style.js"

]);







n0d3s.UI.Style(`

.paragraph {

    display: flex;

    flex-flow: column;
    flex-wrap: wrap;

    justify-content: flex-start;

    min-height: fit-content;

}

.paragraph-name {

    color: rgb(220, 220, 220);

    margin-bottom: 10px;

    flex-flow: row;
    flex-wrap: wrap;

}

.paragraph-content {

    min-height: fit-content;

}

.paragraph-name > span {

    word-wrap: break-word;

}

.paragraph-content > span {

    word-wrap: break-word;

}

`);

            })();
        
        