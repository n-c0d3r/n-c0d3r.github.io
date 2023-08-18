

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

            
            
            window.n0d3s_cached_dependency_results["F__NCoder_profile_web_n0d3s_core_source_n0d3s_ui_element.js"] = (()=>{            
            
                

                
                
                
                module.use({

});



function Element(tag) {

    let result;

    if(tag == "body"){

        result = document.body;

    }
    else if(tag == "title"){

        result = document.querySelector('title');

    }
    else {
        

        result = document.createElement(tag);

    }

    result.n0d3sEmbedded = true;

    result.setClass = function(name){

        result.classList = name.split(' ');

        return result;
    }

    result.appendClass = function(name){

        result.classList.add(...name.split(' '));

        return result;
    }

    result.pushBackClass = function(name){
        
        result.classList = name.split(' ').concat(...result.classList).join(' ');

        return result;
    }

    result.setId = function(id){

        result.id = id;

        return result;
    }

    result.setHRef = function(url){

        result.setAttribute("href", url);

        return result;
    }

    result.setStyle = function(styleConfig){

        for(let configName in styleConfig){

            result.style[configName] = styleConfig[configName];

        } 

        return result;
    };

    result.on = function(name, callback){

        result.addEventListener(name, callback);

        return result;
    };

    result.exe = function(callback){

        callback.bind(result)();

        return result;
    };

    const defaultSetAttribute = HTMLElement.prototype.setAttribute;
    result.setAttribute = function(name, value){

        defaultSetAttribute.bind(result)(name, value);

        return result;
    }

    result.appendInner = function(...childs){

        return result.appendInnerArray(childs);
    } 

    result.appendInnerArray = function(childsArray){
        
        for(let childName in childsArray){

            let child = childsArray[childName];

            try {

                result.appendChild(child);

            }
            catch
            {

                try{

                    result.innerHTML += child;

                }
                catch{



                }

            }

        }

        return result;
    }

    result.setInner = function(...childs){

        return result.setInnerArray(childs);
    }

    result.setInnerArray = function(childsArray){

        result.innerHTML = "";
        
        for(let childName in childsArray){

            let child = childsArray[childName];

            try {

                result.appendChild(child);

            }
            catch
            {

                try{

                    result.innerHTML += child;

                }
                catch{



                }

            }

        }

        return result;
    }

    result.appendTextContent = function(...childs){

        return result.appendTextContentArray(childs);
    }

    result.appendTextContentArray = function(childsArray){
        
        for(let childName in childsArray){

            let child = childsArray[childName];

            try {

                result.appendChild(child);

            }
            catch
            {

                try{

                    let spanE = Element('span');
                    spanE.textContent = child;

                    result.appendChild(spanE);

                }
                catch{



                }

            }

        }

        return result;
    }

    result.setTextContent = function(...childs){

        return result.setTextContentArray(childs);
    }

    result.setTextContentArray = function(childsArray){

        result.innerHTML = "";
        
        for(let childName in childsArray){

            let child = childsArray[childName];

            try {

                result.appendChild(child);

            }
            catch
            {

                try{

                    let spanE = Element('span');
                    spanE.textContent = child;

                    result.appendChild(spanE);

                }
                catch{



                }

            }

        }

        return result;
    }

    result.$ = function(query, callback){

        let element = result.querySelector(query);

        if(callback != null)
            callback(element);

        return result;
    }
    result.$$ = function(query, callback){

        let elements = result.querySelectorAll(query);

        if(callback != null)
            for(let element of elements) {

                callback(element);

            }

        return result;
    }

    result.$call = function(query, name, ...params){

        let child = result.$(
            query, 
            element => element[name](...params)
        );

        return result;
    }
    result.$$call = function(query, name, ...params){

        let childs = result.$$(
            query, 
            element => element[name](...params)
        );

        return result;
    }

    result.applyEffect = function(effect, duration){

        effect.init(result);

        let current_time = performance.now();
        let last_time = current_time;

        let warped_update = ()=>{

            current_time = performance.now();

            let continue_effect = true;

            if(current_time - last_time >= duration) {

                continue_effect = effect.update(result);

                last_time = current_time;

            }

            if(continue_effect)
                window.requestAnimationFrame(warped_update); 

        };

        window.requestAnimationFrame(warped_update);

        return result;
    }

    return result;
}



return Element;

            })();
        
        