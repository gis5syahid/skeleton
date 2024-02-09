//lib call
import {getHash} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.2/croot.js";
//internal call
import { url } from "./config.js";

export function getContentURL(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.template.content+"home.html";
        case "profile/passwords":
            return url.template.content+"profile/passwords.html";
        case "profile/mail":
            return url.template.content+"profile/mail.html";
        case "profile/accounts":
            return url.template.content+"profile/accounts.html";
        case "messages":
            return url.template.content+"messages.html";
        case "notifications/blocked":
            return url.template.content+"notifications/blocked.html";
        case "notifications/silenced":
            return url.template.content+"notifications/silenced.html";
        case "notifications/publish":
            return url.template.content+"notifications/publish.html";
        case "notifications/program":
            return url.template.content+"notifications/program.html";
        case "explore":
            return url.template.content+"explore.html";
        case "saved":
            return url.template.content+"saved.html";
        case "logout":
            return url.template.content+"logout.html";
        case "ch1":
            return url.template.content+"Geo/chapter1/index.html";
        case "map":
            return url.template.content+"map.html";
        case "swagger":
            return url.template.content+"Geo/swagger/index.html";
        case "ch2":
            return url.template.content+"Geo/chapter2/index.html";
        case "ch3":
            return url.template.content+"Geo/chapter3/index.html";
        case "ch4":
            return url.template.content+"Geo/chapter4/index.html";
        default:
            return url.template.content+"home.html";
    }

}



export function getURLContentJS(){
    let hashlink=getHash();
    switch (hashlink) {
        case "home":
            return url.view.content+"home.js";
        case "profile/passwords":
            return url.view.content+"profile/passwords.js";
        case "profile/mail":
            return url.view.content+"profile/mail.js";
        case "profile/accounts":
            return url.view.content+"profile/accounts.js";
        case "messages":
            return url.view.content+"messages.js";
        case "notifications/blocked":
            return url.view.content+"notifications/blocked.js";
        case "notifications/silenced":
            return url.view.content+"notifications/silenced.js";
        case "notifications/publish":
            return url.view.content+"notifications/publish.js";
        case "notifications/program":
            return url.view.content+"notifications/program.js";
        case "explore":
            return url.view.content+"explore.js";
        case "saved":
            return url.view.content+"saved.js";
        case "logout":
            return url.view.content+"logout.js";
        case "map":
            return url.view.content+"map.js";
        case "ch1":
            return url.template.content+"Geo/chapter1/app.js";
        case "ch2":
            return url.template.content+"Geo/chapter2/js/script.js";
        case "ch3":
            return url.template.content+"Geo/chapter3/js/map.js";
        case "ch4":
            return url.template.content+"Geo/chapter4/js/map.js";
        case "swagger":
            return url.template.content+"Geo/swagger/js/swagger.js";
        default:
            return url.view.content+"home.js";
    }

}