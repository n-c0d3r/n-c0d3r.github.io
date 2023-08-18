

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_typing_effect.js"] = (()=>{            
            
                
                    var n0d3s = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_.js"];
                
                    var isInVP = window.n0d3s_cached_dependency_results["F__NCoder_profile_web_source_common_is_in_vp.js"];
                

                
                
                
                module.use({

    n0d3s: "./n0d3s",

    isInVP: "./is_in_vp",

});



n0d3s.UI.Style(`

.typing-effect-cursor {

    animation: typing-effect-cursor .75s step-end infinite;

    height: 100%;

}

@keyframes typing-effect-cursor {
    from, to { border-color: transparent }
    50% { border-color: white; }
}

`);



function TypingEffect(cursor_width, idle_time = 0, loop = true, spawn_cursor = true) {

    return {

        span_elements: [],

        full_text: '',
        span_indices: [],

        current_text: '',
        current_end: -1,
        current_flow: 1, 

        enable_time: 0,

        idle_time: idle_time,

        cursor_element: null,



        init(element) {

            this.span_elements = [];

            let childs = element.childNodes;

            for(let span_index = 0; span_index < childs.length; ++span_index){

                let child = childs[span_index];

                let span = null;

                if (child.nodeType === Node.TEXT_NODE) {
                    
                    let text = child.nodeValue;

                    span = n0d3s.UI.Element('span').setTextContent(text);

                    element.replaceChild(span, child);
                    
                } 
                else 
                    span = child;

                this.span_elements.push(span);

            }

            for(let span_index = 0; span_index < this.span_elements.length; ++span_index){

                let span_element = this.span_elements[span_index];

                this.full_text += span_element.textContent;

                for(let i = 0; i < span_element.textContent.length; ++i){

                    this.span_indices.push(span_index);

                }

                span_element.textContent = '';

            }

            if(this.span_elements.length > 0){

                this.span_elements[0].textContent = ' ';

            }

            if(spawn_cursor) {

                this.cursor_element = n0d3s.UI.Element('span')
                .appendClass('typing-effect-cursor')
                .setStyle({

                    border: `solid ${cursor_width}`,

                });

                element.appendChild(this.cursor_element);

            }

            this.last_time = performance.now();

        },

        update(element) {

            if(performance.now() < this.enable_time)
                return true;
            
            if(
                (this.current_flow < 0)
                && (
                    loop
                    || (!loop && !isInVP(element))
                )
            ){

                let span_index = this.span_indices[this.current_end];
    
                let span_element = this.span_elements[span_index];

                if(this.current_end == 0)
                    span_element.textContent = ' ';
                else
                    span_element.textContent = span_element.textContent.substring(0, span_element.textContent.length - 1);

                this.current_end += this.current_flow;

                this.current_flow += 2 * (this.current_end == -1);

            }
            else if(
                isInVP(element)
                && (
                    this.current_flow > 0
                    || (this.current_flow < 0 && !loop)
                )
            ) {

                if(this.current_flow < 0 && !loop){

                    if(this.current_end == this.full_text.length - 1){

                        return true;
                    }
                    else
                        this.current_flow = 1;

                }

                this.current_end += this.current_flow;

                let span_index = this.span_indices[this.current_end];

                let span_element = this.span_elements[span_index];

                if(this.current_end == 0)
                    span_element.textContent = '';

                span_element.textContent += this.full_text[this.current_end];

                if(this.current_end == this.full_text.length - 1){

                    this.current_flow = -1;

                    this.enable_time = performance.now() + this.idle_time;

                    if(!loop){

                        // if(spawn_cursor)
                        //     element.removeChild(this.cursor_element);

                        // return false;
                    }

                }

            }

            return true;
        }

    };
}



return TypingEffect;

            })();
        
        