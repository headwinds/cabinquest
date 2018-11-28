/* eslint-disable */

export function log(message,arg){
    if ( (document.domain.indexOf("uat") > -1) || (document.domain.indexOf("dev") > -1) || (document.domain.indexOf("localhost") > -1 ) ) {
        arg = (typeof arg === "undefined") ? "" : arg;
        console.log(message,arg);
    }
}

export function logError(message,arg){
    if ( (document.domain.indexOf("uat") > -1) || (document.domain.indexOf("dev") > -1) || (document.domain.indexOf("localhost") > -1 ) ) {
        arg = (typeof arg === "undefined") ? "" : arg;
        console.error(message,arg);
    }
}