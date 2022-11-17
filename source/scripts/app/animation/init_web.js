import framework from "../../framework/framework.js"

import Header from "../ui/header.js"
import PageContent from "../ui/page_content.js"
import ContentBody from "../ui/content_body.js"
import HeaderMenuContainerMobile from "../ui/header_menu_container_mobile.js"



export default framework.Animation(

    async () => {

        framework.addStyle(`${window.location.origin}/source/styles/common.css`);

        $("body").appendInner(

            Header(),

        );

    },

    async ()=>{

        $("body").appendInner(

            framework.UIElement("div")
            .setStyle({

                height: "50px"

            })

        );

    },

    async ()=>{

        $("body").appendInner(

            HeaderMenuContainerMobile(),

            framework.UIElement("div")
            .setStyle({

                width: "100vw",
                height: "1px",

                backgroundColor: "rgb(39, 39, 38)",

            })

        );

    },

    async ()=>{

        let pageName = localStorage.getItem("lastPage");

        if(pageName == null) {

            pageName = "home";

        }

        $("body").appendInner(

            ContentBody(),
            PageContent(pageName),

        );

    }

)