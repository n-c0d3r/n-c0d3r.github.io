

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_contact_contents.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var Common = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"];
                

                var contact = `<span class="text-tag-3">ncoderft3t@outlook.com ✉</span>

<a class="ex-link-0" href="https://www.facebook.com/tao.sang.543">Facebook 🔗</a> <a class="ex-link-5" href="https://www.youtube.com/channel/UCpliLhWxstPpFBx8R7ckSsQ">Youtube 🔗</a> <a class="ex-link-2" href="https://www.linkedin.com/in/h%C3%B9ng-nguy%E1%BB%85n-950952254/">Linkedin 🔗</a> <a class="ex-link-1" href="https://github.com/n-c0d3r">GitHub 🔗</a>`;
                
                
                module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    contact: "text/contact",

});



return [

    Common.PageContent()
    .appendInner(

        Common.SubPageContent()
        .useLargeWidth()
        .appendInner(
    
            Common.EnhancedTextBody(contact)
            .useLargeWidth()
            .appendClass("item-left"),
    
        ),

    ),

];

            })();
        
        