
import UIElement from "./ui/element.js";



export default function ScriptModule(src) {

    return (
        UIElement("script")
        .setAttribute("type", "module")
        .setAttribute("src", src)
    ); 
}