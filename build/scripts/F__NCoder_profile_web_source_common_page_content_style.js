

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_page_content_style.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./common/style.js"

]);



const PAGE_CONTENT_MAX_INNER_WIDTH_PX = 1400;
const PAGE_CONTENT_PADDING_VERTICAL_PX = 50;
const PAGE_CONTENT_PADDING_HORIZONTAL_PX = 50;



n0d3s.UI.Style(`

.page-content {

    margin: 0;
    padding-left: 5%;
    padding-right: 5%;

    padding-top: min(10vh, 21vw);
    padding-bottom: min(10vh, 21vw);

    display: flex;
    flex-flow: row;
    flex-wrap: wrap;

    justify-content: space-around;

    height: fit-content;

    gap: ${PAGE_CONTENT_PADDING_HORIZONTAL_PX}px ${PAGE_CONTENT_PADDING_VERTICAL_PX}px;

}

@media (min-width: ${PAGE_CONTENT_MAX_INNER_WIDTH_PX}px) {

    .page-content {

        width: calc(${PAGE_CONTENT_MAX_INNER_WIDTH_PX}px - 10%);

        padding-left: calc(55% - ${PAGE_CONTENT_MAX_INNER_WIDTH_PX / 2}px);
        padding-right: calc(55% - ${PAGE_CONTENT_MAX_INNER_WIDTH_PX / 2}px);

    }

}

@media (max-width: ${PAGE_CONTENT_MAX_INNER_WIDTH_PX}px) {

    .page-content {

        width: 90%;

        padding-left: 5%;
        padding-right: 5%;

    }

}

    
    
@media (min-width: 1000px) {

}

@media (max-width: 1000px) {

    .two-content-body {
    
        flex-flow: column;
    
    }
    
    .two-content-body-reverse {
    
        flex-flow: column-reverse;
    
    }

}

`);

            })();
        
        