

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var text_config = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_config.js"];
                
                    var Header = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_header_.js"];
                
                    var FullscreenContainer = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_fullscreen_container_.js"];
                
                    var TextBody = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_text_body_.js"];
                
                    var EnhancedTextBody = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_enhanced_text_body.js"];
                
                    var Paragraph = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_paragraph_.js"];
                
                    var EnhancedParagraph = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_enhanced_paragraph.js"];
                
                    var Section = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_section.js"];
                
                    var BigSection = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_big_section.js"];
                
                    var PageContent = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_page_content_.js"];
                
                    var SubPageContent = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_sub_page_content.js"];
                
                    var ImageBody = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_image_body_.js"];
                
                    var TypingEffect = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_typing_effect.js"];
                
                    var HR = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_hr.js"];
                
                    var isInVP = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_is_in_vp.js"];
                
                    var LightingOnVisible = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_lighting_on_visible.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    text_config: "./text_config",

    Header: "./header",
    FullscreenContainer: "./fullscreen_container",

    TextBody: "./text_body",
    EnhancedTextBody: "./enhanced_text_body",

    Paragraph: "./paragraph",
    EnhancedParagraph: "./enhanced_paragraph",
    Section: "./section",
    BigSection: "./big_section",

    PageContent: "./page_content",
    SubPageContent: "./sub_page_content",

    ImageBody: "./image_body",

    TypingEffect: "./typing_effect",

    HR: "./hr",

    isInVP: "./is_in_vp",

    LightingOnVisible: "./lighting_on_visible",

})
.use([

    "./style"

]);



const Common = {

    Header,
    FullscreenContainer,
    
    TextBody,
    EnhancedTextBody,

    Paragraph,
    EnhancedParagraph,
    Section,
    BigSection,

    PageContent,
    SubPageContent,

    ImageBody,

    TypingEffect,

    HR,

    isInVP,

    LightingOnVisible,

};



return Common;

            })();
        
        