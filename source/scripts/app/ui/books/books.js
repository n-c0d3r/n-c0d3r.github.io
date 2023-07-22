import framework from "../../../framework/framework.js"
import ContentItem from "../content_item.js"
import ContentPara from "../content_para.js"
import ContentHR from "../content_hr.js"



export default function Books(){

    framework.addStyle(`${window.location.origin}/source/styles/books.css`);
    
    return (

        framework.UIElement("div")
        .setId("books")
        .setInner(

            ContentHR(),

            ContentItem("/resources/images/introduction_2_3dgamepdx11.png", "https://www.amazon.com/Introduction-3D-Game-Programming-DirectX/dp/1936420228"),

            ContentHR(),

            ContentItem("/resources/images/hlsl_dev_cookbook.png", "https://www.packtpub.com/product/hlsl-development-cookbook/9781849694209"),

            ContentHR(),

            ContentItem("/resources/images/game_engine_architecture_book.png", "https://www.amazon.com/Engine-Architecture-Third-Jason-Gregory/dp/1138035459"),

            ContentHR(),

            ContentItem("/resources/images/calclulus_for_cg.png", "https://link.springer.com/book/10.1007/978-3-031-28117-4"),

            ContentHR(),

            ContentItem("/resources/images/calculus_early_tramscemdemtal_functions.png", "https://www.amazon.com/Calculus-Transcendental-Functions-Ron-Larson/dp/1285774779"),

            ContentHR(),

            ContentItem("/resources/images/realtime_rendering_book.png", "https://www.amazon.com/Real-Time-Rendering-Fourth-Tomas-Akenine-M%C3%B6ller/dp/1138627003"),

            ContentHR(),

            ContentItem("/resources/images/effective_modern_cpp.png", "https://www.amazon.com/Effective-Modern-Specific-Ways-Improve/dp/1491903996"),

            ContentHR(),

        )

    );

}



$("#content-body").appendInner(

    Books()

);