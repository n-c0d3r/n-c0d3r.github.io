

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_projects_n_demos_contents.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var Common = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"];
                

                var ing = `<span class="info-text-3">ING</span>, a <span class="info-text-2">C++</span> <span class="info-text-0">game engine</span> for <span class="info-text-1">Windows</span>
<span class="text-tag-4">DirectX 11</span>
<span class="text-tag-0">C++ 17</span> <span class="text-tag-1">C#</span> 
        ⦿ <span class="info-text-1">Features</span>:
                ○ <span class="info-text-3">Dynamic C++ Plugin System</span>
                ○ <span class="info-text-3">RTTI, Relfection System</span>
                ○ <span class="info-text-3">Event System</span>
                ○ <span class="info-text-3">Rendering:</span>
                        • <span class="info-text-3">DirectX11</span>
                        • <span class="info-text-3">Multi-Pass Shader</span>
                        • <span class="info-text-3">Layer System</span>
                . . .
        ⦿ <span class="info-text-1">Links</span>: <a href="https://github.com/INGTechnologies/ING" class="ex-link-1">GitHub 🔗</a>`;var ncpp = `<span class="info-text-3">NCPP</span>, a <span class="info-text-2">game engine</span> learning aimed <span class="info-text-0">C++ library</span>
<span class="text-tag-2">CMake</span> 
<span class="text-tag-0">C++ 17, 20</span>
        ⦿ <span class="info-text-1">Features</span>:
                ○ <span class="info-text-3">Memory management</span> (tagged heap, stack heap,...)
                ○ <span class="info-text-3">Logging</span> (for vector, handle map,...)
                ○ <span class="info-text-3">Utilities</span> (left value reference wrapper, templated for,...)
                ○ <span class="info-text-3">Containers</span>:
                        • <span class="info-text-3">Fixed vector queue</span>
                        • <span class="info-text-3">Fixed vector stack</span>
                        • <span class="info-text-3">Concurrent fixed vector queue</span>
                        • <span class="info-text-3">Free list supported vector</span>
                        • <span class="info-text-3">Handle map</span>
                ○ <span class="info-text-3">Parallelism</span> and <span class="info-text-3">Concurrency</span>:
                        • <span class="info-text-3">Thread</span> (built with Windows API, pthread,...)
                        • <span class="info-text-3">Fiber</span> (built with Windows API and currently only available on Windows)
                        • <span class="info-text-3">Locks</span>
                . . .
        ⦿ <span class="info-text-1">Platforms</span>:
                ○ <span class="info-text-3">Windows</span>:
                ○ <span class="info-text-3">Unix</span>:
        ⦿ <span class="info-text-1">Links</span>: <a href="https://github.com/INGTechnologies/ING" class="ex-link-1">GitHub 🔗</a>`;var nframework = `<span class="info-text-3">NFramework</span>, a <span class="info-text-2">cross-side</span> <span class="info-text-0">web framework</span>
<span class="text-tag-4">NodeJS</span> <span class="text-tag-3">Express</span> <span class="text-tag-5">Socket.io</span>
<span class="text-tag-0">NLC</span> <span class="text-tag-1">JS</span> <span class="text-tag-2">EJS</span> 
        ⦿ <span class="info-text-1">Features</span>:
                ○ <span class="info-text-3">Convenient HTTP Routing</span>
                ○ <span class="info-text-3">Convenient Server-Client Interacting</span> with basic function
                ○ <span class="info-text-3">NLC</span>, an unique programming language
                ○ <span class="info-text-3">No need of import and export keyword</span>
                ○ <span class="info-text-3">UI Component with tags like JSX</span>
                ○ <span class="info-text-3">Support Namespace</span>
                . . .
        ⦿ <span class="info-text-1">Links</span>: <a href="https://github.com/N1ghtTeam/NFramework" class="ex-link-1">GitHub 🔗</a>`;var n0d3s = `<span class="info-text-3">N0d3s</span>, a set of <span class="info-text-2">build tool</span>, <span class="info-text-1">libraries</span>,... for <span class="info-text-0">web programming</span> and also what I used to build this web
<span class="text-tag-4">NodeJS</span>
<span class="text-tag-1">JS</span> <span class="text-tag-2">HTML</span> <span class="text-tag-3">CSS</span>
        ⦿ <span class="info-text-1">Focus on static web</span>
        ⦿ <span class="info-text-1">Features</span>:
                ○ <span class="info-text-3">Simple, Convenient UI Library</span>
                ○ <span class="info-text-3">Powerful JS Build Tool</span>
                ○ <span class="info-text-3">Data, Content Embeddable</span> (Text, JSON)
                ○ <span class="info-text-3">Support JS Minify, Encoding</span>
                ○ <span class="info-text-3">Support Single HTML Build</span>
                . . .
        ⦿ <span class="info-text-1">Links</span>: <a href="https://github.com/n-c0d3r/n0d3s" class="ex-link-1">GitHub 🔗</a>`;var gdr = `<span class="info-text-2">GPU-Driven</span> <span class="info-text-0">Rendering</span> with <span class="info-text-1">Unity SRP</span>
<span class="text-tag-2">Unity</span> <span class="text-tag-1">Unity SRP</span> <span class="text-tag-4">Vulkan</span>
<span class="text-tag-0">C#</span> <span class="text-tag-3">HLSL</span> <span class="text-tag-5">Unity Shaderlab</span> 
        ⦿ <span class="info-text-1">Features</span>:
                ○ <span class="info-text-3">Only one CPU-GPU fence per frame</span>
                ○ <span class="info-text-3">Unified mesh system</span>
                ○ <span class="info-text-3">Parallel prefix sum</span>
                ○ <span class="info-text-3">Depth Pyramid</span>
                ○ <span class="info-text-3">Mesh Clustering</span>
                ○ <span class="info-text-3">Stream compaction and expansion for instance and cluster</span>
                ○ <span class="info-text-3">Frustum, Occlusion culling for instance and cluster</span>
                . . .
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=Phhg8GvmpT4" class="ex-link-5">Youtube 🔗</a>`;var cook_torrance = `<span class="info-text-2">Physically Based Shading</span> with <span class="info-text-1">Cook-Torrance</span> <span class="info-text-3">GGX</span>
<span class="text-tag-2">CMake</span> <span class="text-tag-4">DirectX 11</span>
<span class="text-tag-0">C++ 17</span> <span class="text-tag-3">HLSL</span>
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=p6w_qwCLJYc" class="ex-link-5">Youtube 🔗</a>`;var foot_placement = `<span class="info-text-2">Foot Placement</span> for <span class="info-text-3">character</span> in <span class="info-text-1">Unreal Engine 5</span>
<span class="text-tag-2">Unreal Engine 5</span> 
<span class="text-tag-0">C++</span> <span class="text-tag-1">Blueprint</span> 
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=0jOpu6XEZ58" class="ex-link-5">Youtube 🔗</a>`;var distance_matching = `<span class="info-text-2">Distance Matching</span> <span class="info-text-3">animation technique</span> in <span class="info-text-1">Unreal Engine 5</span>
<span class="text-tag-2">Unreal Engine 5</span> 
<span class="text-tag-0">C++</span> <span class="text-tag-1">Blueprint</span> 
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=FbWhEf3iBuk" class="ex-link-5">Youtube 🔗</a>`;var aa = `<span class="info-text-2">Advanced Locomotion Animation</span> for <span class="info-text-3">character</span> in <span class="info-text-1">Unreal Engine 5</span>
<span class="text-tag-2">Unreal Engine 5</span> 
<span class="text-tag-0">C++</span> <span class="text-tag-1">Blueprint</span> 
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=PmepmEqGyxQ" class="ex-link-5">Youtube 🔗</a>`;var ohhh = `<span class="info-text-2">Ohhh</span>, a <span class="info-text-3">casual</span> <span class="info-text-1">mobile game</span>
<span class="text-tag-2">Unity</span> <span class="text-tag-0">C#</span>
        ⦿ <span class="info-text-1">Links</span>: <a href="https://play.google.com/store/apps/details?id=com.DNGames.Ohhh_Remake" class="ex-link-2">Google Play 🔗</a>
`;var ohhh2 = `<span class="info-text-2">Character Controller</span> and <span class="info-text-0">Animation</span> for <span class="info-text-1">Ohhh 2</span>
<span class="text-tag-2">Unity</span> <span class="text-tag-0">C#</span>
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=ROBR3i-oPm0" class="ex-link-5">Youtube 🔗</a>
`;var bhop = `<span class="info-text-2">Character Bhopping</span> and <span class="info-text-0">First Person Character</span>
<span class="text-tag-2">Unity</span> <span class="text-tag-0">C#</span>
        ⦿ <span class="info-text-1">Links</span>: <a href="https://www.youtube.com/watch?v=8yr5bNBZKJs" class="ex-link-5">Youtube 🔗</a>
`;
                
                
                module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    ing: "text/projects_n_demos/ing",
    ncpp: "text/projects_n_demos/ncpp",
    nframework: "text/projects_n_demos/nframework",
    n0d3s: "text/projects_n_demos/n0d3s",

    gdr: "text/projects_n_demos/gdr",
    cook_torrance: "text/projects_n_demos/cook_torrance",

    foot_placement: "text/projects_n_demos/foot_placement",
    distance_matching: "text/projects_n_demos/distance_matching",
    aa: "text/projects_n_demos/aa",

    ohhh: "text/projects_n_demos/ohhh",
    ohhh2: "text/projects_n_demos/ohhh2",
    bhop: "text/projects_n_demos/bhop",

});



return [

    // 
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("title-content")
    .appendInner( 

        Common.SubPageContent()
        .appendInner(

            Common.BigSection(
                [ "HERE", "'s ", "MY ", "PROJECTS ", "& ", "DEMOS" ],
                null, 
                3,
                0
            )
            .appendClass("item-center")
            .$(
                ".paragraph-name",
                e => e
                
                .setStyle({
            
                    fontSize: `min(6.0vw, ${1400 / 2 * 0.0994}px)`,
                    lineHeight: `min(6.0vw, ${1400 / 2 * 0.0994}px)`,
            
                })
                
                .setStyle({
            
                    color: "rgb(200, 200, 200)",
            
                })
                
            )
            // .$(
            //     ".paragraph-name > span:nth-child(3)",
            //     e => e
                
            //     .setStyle({
            
            //         color: "rgb(230, 150, 160)",
            
            //     })
                
            // )
            // .$(
            //     ".paragraph-name > span:nth-child(1)",
            //     e => e
                
            //     .setStyle({
            
            //         color: "rgb(230, 120, 235)",
            
            //     })
                
            // )
            // .$(
            //     ".paragraph-name > span:nth-child(2)",
            //     e => e
                
            //     .setStyle({
            
            //         color: "rgb(80, 80, 80)",
            
            //     })
                
            // )
            // .$(
            //     ".paragraph-name > span:nth-child(5)",
            //     e => e
                
            //     .setStyle({
            
            //         color: "rgb(210, 180, 120)",
            
            //     })
                
            // )
            .$(
                ".paragraph-name",
                e => e         
                .applyEffect(
                    Common.TypingEffect('1px', 500), 
                    50
                )
            )
            .setWidthLevel(0)            

        ),


    ),



    // Low Level
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("low-level-content")
    .appendInner(

        Common.Section(
            [ "| ", "ENGINES", ", ", "LIBRARIES", ", ", "FRAMEWORKS"," |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left")
            
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

        )
        .$$(
            ".paragraph-name > span",
            e => e
            .setStyle({

                color: "rgb(100, 100, 100)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(150, 230, 160)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(150, 160, 230)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(6)",
            e => e
            .setStyle({

                color: "rgb(200, 150, 200)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ing.png`,
                    "https://github.com/INGTechnologies/ING"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.EnhancedTextBody(
                    ing
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(
                    ncpp
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ncpp.png`,
                    "https://github.com/n-c0d3r/ncpp"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),            

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/nframework.png`,
                    "https://github.com/N1ghtTeam/NFramework"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.EnhancedTextBody(
                    nframework
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(
                    n0d3s
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/n0d3s.png`,
                    "https://github.com/n-c0d3r/n0d3s"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

        ),

    ),



    // CG
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("cg-content")
    .appendInner(

        Common.Section(
            [ "| ", "COMPUTER ", "GRAPHICS", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left")
            
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(100, 100, 100)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(200, 150, 210)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(200, 160, 180)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body-reverse")
                .appendInner(
    
                    Common.ImageBody(
                        `${window.origin}/resources/image/demonstrates/gdr.png`,
                        "https://www.youtube.com/watch?v=Phhg8GvmpT4"
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),
    
                    Common.EnhancedTextBody(
                        gdr
                    )
                    .appendClass("item-left")
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),
    
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`,
                    "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`,
                    "https://www.youtube.com/watch?v=cJYO5oo_A3o&t=70s"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    cook_torrance
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/cook_torrance.png`,
                    "https://www.youtube.com/watch?v=p6w_qwCLJYc"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

        ),

    ),



    // AA
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("aa-content")
    .appendInner(

        Common.Section(
            [ "| ", "ADVANCED ", "ANIMATION", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left")
            
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(100, 100, 100)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(90, 200, 230)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(120, 200, 180)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/foot_placement.png`,
                    "https://www.youtube.com/watch?v=0jOpu6XEZ58"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    foot_placement
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    distance_matching
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/distance_matching.png`,
                    "https://www.youtube.com/watch?v=FbWhEf3iBuk"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/aa.png`,
                    "https://www.youtube.com/watch?v=PmepmEqGyxQ"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    aa
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

        ),

    ),



    // Games & Demos
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("games-demos-content")
    .appendInner(

        Common.Section(
            [ "| ", "GAMES ", "& ", "DEMOS", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$(
            ".paragraph-name",
            e => e
            .appendClass("item-left")
            
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

        )
        .$$(
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3), .paragraph-name > span:nth-child(5)",
            e => e
            .setStyle({

                color: "rgb(100, 100, 100)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(180, 200, 160)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(4)",
            e => e
            .setStyle({

                color: "rgb(150, 160, 230)",
                fontWeight: "200",

            })

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohhh.png`,
                    "https://play.google.com/store/apps/details?id=com.DNGames.Ohhh_Remake"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    ohhh
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(
    
                Common.EnhancedTextBody(
                    ohhh2
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohhh2.png`,
                    "https://www.youtube.com/watch?v=ROBR3i-oPm0"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body-reverse")
            .appendInner(
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/bhop.png`,
                    "https://www.youtube.com/watch?v=8yr5bNBZKJs"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
                Common.EnhancedTextBody(
                    bhop
                )
                .appendClass("item-left")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),
    
            ),

        )

    )

];

            })();
        
        