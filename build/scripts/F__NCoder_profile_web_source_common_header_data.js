

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_header_data.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

})
.use([

    "./style"

]);



const header_data = {

    menu: {

        items: [

            {

                name: "About Me",
                url: `${window.origin}/build/pages/about_me/page.html`,               

            },

            {

                name: "Projects & Demos",
                url: `${window.origin}/build/pages/projects_n_demos/page.html`,               

            },

            {

                name: "Blog",
                url: `${window.origin}/build/pages/blog/page.html`,               

            },

            {

                name: "Contact",
                url: `${window.origin}/build/pages/contact/page.html`,               

            },

        ],

        social_urls: {

            github: "https://github.com/n-c0d3r",
            youtube: "https://www.youtube.com/channel/UCpliLhWxstPpFBx8R7ckSsQ",
            facebook: "https://www.facebook.com/tao.sang.543",
            linkedin: "https://www.linkedin.com/in/h%C3%B9ng-nguy%E1%BB%85n-950952254/",

        }

    }

};



return header_data;

            })();
        
        