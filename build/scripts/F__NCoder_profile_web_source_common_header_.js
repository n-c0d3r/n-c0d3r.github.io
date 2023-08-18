

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_header_.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var header_data = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_header_data.js"];
                
                    var FullscreenContainer = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_fullscreen_container_.js"];
                
                    var HR = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_hr.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    header_data: "./data",

    FullscreenContainer: "./common/fullscreen_container",
    HR: "./common/hr"

})
.use([

    "./style"

]);

    

function HeaderMenuSearchBar(){

    return n0d3s.UI.Element("div")
    .appendClass(
        `header-menu-search-btn`
    )
    .on(
        "click",
        function(){

            

        }
    );
}



function HeaderMenuDesktop(current_page_index){

    function HeaderMenuNavBtns(){

        let btns = [];

        for(let i = 0; i < header_data.menu.items.length; ++i) {

            let btnInfo = header_data.menu.items[i];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-nav-btn ${
                    (()=>{

                        if(i == current_page_index)
                            return 'header-menu-nav-btn-text-current-page';
                        else
                            return 'header-menu-nav-btn-text-other-page';

                    })()
                } item-center prevent-select`
            )
            .setInner(
                btnInfo.name,
            )
            .setHRef(btnInfo.url);

            btns.push(btn);

        }

        return btns;
    }



    function HeaderMenuSocailBtns(){

        let btns = [];

        for(let social_name in header_data.menu.social_urls) {

            let social_url = header_data.menu.social_urls[social_name];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-social-btn`
            )
            .setStyle({

                backgroundImage: `url("${window.origin}/resources/image/icon/${social_name}.png")`,

            })
            .setHRef(social_url);

            btns.push(btn);

        }

        return btns;
    }



    return n0d3s.UI.Element("div")
    .appendClass("header-menu-desktop")
    .setInner(

        ...HeaderMenuNavBtns(),

        n0d3s.UI.Element("div")
        .appendClass("header-menu-vertical-line"),

        HeaderMenuSearchBar(),

        n0d3s.UI.Element("div")
        .appendClass("header-menu-vertical-line"),

        ...HeaderMenuSocailBtns(),

    );
}



function HeaderMenuMobile(current_page_index){

    function HeaderMenuNavBtns(){

        let btns = [];

        for(let i = 0; i < header_data.menu.items.length; ++i) {

            let btnInfo = header_data.menu.items[i];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-nav-btn ${
                    (()=>{

                        if(i == current_page_index)
                            return 'header-menu-nav-btn-text-current-page';
                        else
                            return 'header-menu-nav-btn-text-other-page';

                    })()
                } item-center prevent-select`
            )
            .setInner(
                btnInfo.name,
            )
            .setHRef(btnInfo.url);

            btns.push(btn);

        }

        return btns;
    }



    function HeaderMenuSocailBtns(){

        let btns = [];

        for(let social_name in header_data.menu.social_urls) {

            let social_url = header_data.menu.social_urls[social_name];

            let btn = n0d3s.UI.Element("a")
            .appendClass(
                `header-menu-social-btn`
            )
            .setStyle({

                backgroundImage: `url("${window.origin}/resources/image/icon/${social_name}.png")`,

            })
            .setHRef(social_url);

            btns.push(btn);

        }

        return btns;
    }



    function HeaderMenuFullscreenContainer(){

        function Bar(){

            return n0d3s.UI.Element('div')
            .appendClass("header-menu-mobile-bar");
        }

        return FullscreenContainer()
        .setStyle({

            justifyContent: "center",

        })
        .appendInner(

            ...HeaderMenuNavBtns(),

            Bar()
            .setStyle({

                gap: "20px",
                position: "fixed",
                bottom: "0",

            })
            .appendInner(

                ...HeaderMenuSocailBtns(),
            ),

        );        
    }



    let fullscreenCon = HeaderMenuFullscreenContainer();



    return n0d3s.UI.Element("div")
    .appendClass("header-menu-mobile")
    .setInner(

        n0d3s.UI.Element("div")
        .appendClass("header-menu-container-open-btn")
        .setInner(            

            

        )
        .on("click", function(){

            if($(".header-menu-mobile").is_closed)
                $(".header-menu-mobile").open();
            else
                $(".header-menu-mobile").close();
    
        }),

        HeaderMenuSearchBar(),

        fullscreenCon,

    )
    .exe(function(){

        let menu = this;

        menu.is_closed = true;

        let container_open_btn = menu.querySelector(".header-menu-container-open-btn");

        menu.open = function(){

            menu.is_closed = false;

            container_open_btn.setStyle({

                transform: "rotate(180deg)",

                backgroundImage: `url("${window.origin}/resources/image/icon/x.png")`,

            });

            fullscreenCon.open();

        };

        menu.close = function(){
            
            menu.is_closed = true;

            container_open_btn.setStyle({

                transform: "rotate(0deg)",

                backgroundImage: `url("${window.origin}/resources/image/icon/menu_btn.png")`,

            });

            fullscreenCon.close();
            
        };

    });
}



function Header(options = new Object()) {

    let current_page_index = options.current_page_index || 0;

    const about_me_url = header_data.menu.items[0].url;

    return n0d3s.UI.Element("div")
    .appendClass("header")
    .setInner(

        n0d3s.UI.Element("a")
        .appendClass("header-logo")
        .setInner(

            n0d3s.UI.Element("a")
            .appendClass("header-logo-n")
            .setHRef(about_me_url),

            n0d3s.UI.Element("div")
            .appendClass("header-logo-text item-center prevent-select")
            .setInner("C O D E R")
            .setHRef(about_me_url)
            .on('click', function() {window.location.href = about_me_url;}),

        )
        .setHRef(about_me_url),

        HeaderMenuMobile(current_page_index),

        HeaderMenuDesktop(current_page_index),

    );
}



return Header;

            })();
        
        