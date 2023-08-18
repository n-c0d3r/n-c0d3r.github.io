

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_about_me_contents.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var Common = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_.js"];
                

                var basic_about_me = `I am a programmer based in Hanoi, Vietnam, born on <span class="info-text-0">November 14, 2005</span>, who have a huge passion for <span class="info-text-0">technologies</span>, <span class="info-text-1">game engine programming</span> and <span class="info-text-2">computer graphics</span>.`;var first_stage = `<span class="info-text-2">My journey</span> and <span class="info-text-2">my passion for technologies</span> started at the first time I created my toy by <span class="info-text-1">crafting the electric parts</span> of the broken ones.`;var second_stage_a = `<span class="info-text-2">At the age of 11</span>, I went to secondary school and began learning <span class="info-text-1">Pascal programming</span>. In that time, I also joined some district programming contests.`;var second_stage_b1 = `<span class="info-text-2">After three years of studying</span>, I shifted my focus to <span class="info-text-1">high graphics video game</span> and, <span class="info-text-3">within a year and a half</span>, I had <span class="info-text-3">published</span> <span class="info-text-0">my first small video game</span>.`;var second_stage_b2 = `<span class="info-text-2">In 2020</span>, my learning journey took <span class="info-text-0">a new turn</span> and I began to explore more topics on my own.`;var third_stage = `<span class="info-text-2">In the summer 2021</span>, I started being <span class="info-text-3">trained by my mentor</span> and <span class="info-text-3">going deeply</span> into <span class="info-text-0">computer graphics</span> and <span class="info-text-1">game technologies</span>.`;var fourth_stage1 = `<span class="info-text-2">From the summer 2022 to early 2023</span>, a lot of things happened. I felt bored of studying in school and wanted to drop out.`;var fourth_stage2 = `<span class="info-text-2">Fortunately</span>, I graduated from high school and my self-learning journey is going well. Now, I am able to complete projects that I never thought I could. I am also progressing to the next stage of my studies.`;var knowledge = `<span class="text-1">⦿ <span class="info-text-2">Fundamental</span></span>
        <span class="text-0">○ <span class="info-text-1">Programming</span></span>
                <span class="text-tag-0">C/C++</span> <span class="text-tag-1">C#</span> <span class="text-tag-2">JS</span> <span class="text-tag-3">Python</span> <span class="text-tag-4">Pascal</span>
                <span class="text-tag-3">Data Structure</span> <span class="text-tag-4">Algorith</span>
                <span class="text-tag-5">CPU Architecture</span> <span class="text-tag-0">CPU Architecture</span> <span class="text-tag-1">Memory</span>
                <span class="text-tag-2">OS Fundamental</span>
                <span class="text-tag-0">OOP</span>
                <span class="text-tag-1">Parallelism</span> & <span class="text-tag-3">Concurrency</span>
        <span class="text-0">○ <span class="info-text-1">Math</span></span>
                <span class="text-tag-3">Calculus</span>
                <span class="text-tag-4">Linear Algebra</span>
                <span class="text-tag-5">Quaternion</span>

<span class="text-1">⦿ <span class="info-text-2">Modern C++</span></span>
        <span class="text-tag-1">Cross Platform</span> (Windows, Unix, a bit of NDK)
        <span class="text-tag-2">STL</span>
        <span class="text-tag-3">Meta-Template Programming</span>
        <span class="text-0">○ <span class="info-text-1">Build</span></span>
                <span class="text-tag-0">CMake</span>
                <span class="text-tag-4">MSBuild</span>
                <span class="text-tag-5">GCC</span>
        <span class="text-0">○ <span class="info-text-1">Documentation</span></span>
                <span class="text-tag-2">Doxygen</span>

<span class="text-1">⦿ <span class="info-text-2">Computer Graphics</span> & <span class="info-text-0">GPGPU Programming</span></span>
        <span class="text-tag-4">GPU Driven Rendering</span>
        <span class="text-tag-5">Frustum Culling</span> <span class="text-tag-0">Occlusion Culling</span>
        <span class="text-tag-1">Marching Cubes</span>
        <span class="text-tag-2">DirectX 11</span>
        <span class="text-tag-3">Physically Based Shading</span> (Cook-Torrance GGX,...)
        <span class="text-tag-5">Deferred Shading</span>
        <span class="text-tag-4">Parallel Prefix Sum</span>

<span class="text-1">⦿ <span class="info-text-2">Advanced Animation</span></span>
        <span class="text-tag-2">Distance Matching</span>
        <span class="text-tag-1">Foot Placement</span>

<span class="text-1">⦿ <span class="info-text-2">Game Engine Architecture</span></span>
        <span class="text-tag-0">Memory Management</span>
        <span class="text-tag-1">Cross Platform</span> (Windows, Unix)
        <span class="text-tag-2">Job System</span>
        <span class="text-tag-3">Plugin System</span>
        <span class="text-tag-4">Graphics Abtraction Layer</span>

<span class="text-1">⦿ <span class="info-text-2">Game Engines</span></span>
        <span class="text-tag-3">Unreal Engine 5</span> (1 year)
        <span class="text-tag-5">Unity</span> (4 years)
        <span class="text-tag-2">Godot</span> (2 months)

<span class="text-1">⦿ <span class="info-text-2">Debug Tools</span></span>
        <span class="text-tag-2">Visual Studio Debug Tool</span>
        <span class="text-tag-5">Renderdoc</span>

<span class="text-1">⦿ <span class="info-text-2">Source Version Control</span></span>
        <span class="text-tag-3">Git</span>

<span class="text-1">⦿ <span class="info-text-2">Package Manager</span></span>
        <span class="text-tag-0">NPM</span>
        <span class="text-tag-1">Chocolatey</span>

<span class="text-1">⦿ <span class="info-text-2">Web Development</span></span>
        <span class="text-0">○ <span class="info-text-1">Frontend</span></span>
                <span class="text-tag-4">HTML</span> <span class="text-tag-5">CSS</span> <span class="text-tag-0">JS</span>
                <span class="text-tag-3">Three.JS</span>
        <span class="text-0">○ <span class="info-text-1">Backend</span></span>
                <span class="text-tag-2">NodeJS</span>

<span class="text-1">⦿ <span class="info-text-2">Reverse Engineering</span> (Basic)</span>
        <span class="text-tag-1">Cheat Engine</span>
        <span class="text-tag-0">x64Dbg</span>`;
                
                
                module.use({

    n0d3s: "./n0d3s",

    Common: "./common",

})
.use([

    "./style",

])
.text({

    basic_about_me: "text/about_me/basic_about_me",
    first_stage: "text/about_me/first_stage",
    second_stage_a: "text/about_me/second_stage_a",
    second_stage_b1: "text/about_me/second_stage_b1",
    second_stage_b2: "text/about_me/second_stage_b2",
    third_stage: "text/about_me/third_stage",
    fourth_stage1: "text/about_me/fourth_stage1",
    fourth_stage2: "text/about_me/fourth_stage2",
    knowledge: "text/about_me/knowledge",

});



return [

    // Hello
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("hello-content")
    .appendInner( 

        Common.SubPageContent()
        .appendInner(

            Common.BigSection(
                ["HELLO ", "THERE", ", ", "I", " AM ", "N", "CODER"],
                null, 
                3,
                0
            )
            .appendClass("item-center")
            .setWidthLevel(0)
    
            .$(
                '.paragraph-name',
                e => e
    
                // Text colors
                .$(
                    'span:nth-child(2)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(100, 210, 250)',
    
                    })
                )
                .$(
                    'span:nth-child(1)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(220, 120, 225)',
    
                    })
                )
                .$(
                    'span:nth-child(3)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(80, 80, 80)',
    
                    })
                )
                .$(
                    'span:nth-child(5)',
                    e => e
                    .setStyle({
    
                        // color: 'rgb(120, 120, 120)',
    
                    })
                )
                .$(
                    'span:nth-child(6)',
                    e => e
                    .setStyle({
    
                        color: 'rgb(100, 220, 225)',
    
                    })
                )
    
                .applyEffect(
                    Common.TypingEffect('1px', 500), 
                    50
                )
    
            ),

        ),

    ),



    // Who I Am
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("who-i-am-content")
    .appendInner(

        Common.Section(
            [ "| WHO I AM | ", "I AM A TECHNOLOGY LOVER", " |" ],
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
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
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

                color: "rgb(100, 220, 225)",
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
                    `${window.origin}/resources/image/other/robotic2.jpg`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.SubPageContent()
                .setWidthLevel(2)
                .appendInner(
    
                    Common.EnhancedTextBody(basic_about_me)
                    .appendClass("item-justify")
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/ge_arch.png`,
                        "https://www.amazon.com/Engine-Architecture-Third-Jason-Gregory/dp/1138035459"
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),
    
                ),

            ),

        ),

    ),



    // My Journey
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("my-journey-content")
    .appendInner(

        Common.Section(
            [ "| MY JOURNEY | ", "THE THIRD DOOR", " |" ],
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
            ".paragraph-name > span:nth-child(1), .paragraph-name > span:nth-child(3)",
            e => e
            .setStyle({

                color: "rgb(110, 115, 120)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(120, 210, 220)",
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
                    `${window.origin}/resources/image/other/robotic.jpg`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.EnhancedTextBody(first_stage)
                .appendClass("item-justify")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendClass("two-content-body")
            .appendInner(

                Common.EnhancedTextBody(second_stage_a)
                .appendClass("item-justify")
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/turbo_pascal_7_0.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

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

                    Common.SubPageContent()
                    .setStyle({
    
                        width: `min(100%, ${1400 / 3 - 50}px)`,
    
                    })
                    .appendInner(
        
                        Common.EnhancedTextBody(second_stage_b1)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),

                        Common.EnhancedTextBody(second_stage_b2)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),
        
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/hgscene.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ohqg.png`
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
            .appendInner(

                Common.SubPageContent()
                .appendClass("two-content-body")
                .appendInner(

                    Common.EnhancedTextBody(third_stage)
                    .appendClass("item-justify")
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                    Common.ImageBody(
                        `${window.origin}/resources/image/other/dx11.png`
                    )
                    .applyEffect(
                        Common.LightingOnVisible(),
                        50,
                    ),

                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/other/hlsl.png`,
                    "https://www.packtpub.com/product/hlsl-development-cookbook/9781849694209"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/ing.png`,
                    "https://github.com/INGTechnologies/ING"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    50,
                ),

            ),

            Common.HR(),

            Common.SubPageContent()
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

                    Common.SubPageContent()
                    .setStyle({
    
                        width: `min(100%, ${1400 / 3 - 50}px)`,
    
                    })
                    .appendInner(
        
                        Common.EnhancedTextBody(fourth_stage1)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),

                        Common.EnhancedTextBody(fourth_stage2)
                        .appendClass("item-justify")
                        .applyEffect(
                            Common.LightingOnVisible(),
                            50,
                        ),
        
                    ),

                ),
    
                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/depth_pyramid.png`,
                    "https://www.youtube.com/watch?v=bT3vQ93ZZpQ"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    200,
                ),

                Common.ImageBody(
                    `${window.origin}/resources/image/demonstrates/mesh_clustering.png`,
                    "https://www.youtube.com/watch?v=cJYO5oo_A3o&t=65s"
                )
                .applyEffect(
                    Common.LightingOnVisible(),
                    200,
                ),

            ),
    
        ),

    ),



    // My Knowledge
    Common.PageContent()
    .appendClass("item-center")
    .appendClass("my-knowledge-content")
    .appendInner(

        Common.Section(
            [ "| ", "MY KNOWLEDGE", " |" ],
        )    
        .appendClass("item-left")
        .useLargeWidth()
        .$$(

            ".paragraph-name > span",
            e => e
            .appendClass("item-left")
            .setStyle({

                color: "rgb(110, 115, 120)",
                fontWeight: "200",

            })

        )
        .$(

            ".paragraph-name > span:nth-child(2)",
            e => e
            .setStyle({

                color: "rgb(240, 240, 240)",
                fontWeight: "200",

            })

        )
        .$(
            ".paragraph-name",
            e => e            
            .appendClass("item-left")
            .applyEffect(
                Common.TypingEffect('1px', 500, false, false), 
                10
            ),

        ),

        Common.HR(),

        Common.SubPageContent()
        .appendInner(

            Common.EnhancedTextBody(
                knowledge
            )
            .appendClass("item-left")
            .useLargeWidth(),

        ),

    ),

];

            })();
        
        