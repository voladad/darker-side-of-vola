// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      0.6
// @description  More contrasty volafile experience.
// @author       Your mom
// @match        https://volafile.io/*
// @grant        none
// @icon         data:image/png;base64,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
// ==/UserScript==

(function () {
    "use strict";
    try {
    var UI,header,frame,bottomBar;
    function bigRes() {
        UI = document.getElementById("show_search_ui");
        let roomSh = document.getElementById("room_search");
        let topBar = document.getElementById("header_row1");
        bottomBar = document.getElementById("header_row2");
        let uploadBt = document.getElementById("upload_container");
        topBar.appendChild(bottomBar.removeChild(UI));
        if (screen.width > 1650) {
            let filters = document.getElementById("room_filters");
            topBar.appendChild(bottomBar.removeChild(filters));
        }
        topBar.appendChild(bottomBar.removeChild(roomSh));
        topBar.appendChild(bottomBar.removeChild(uploadBt));
        header = document.getElementById("header");
        frame = document.getElementById("files_frame");
        bottomBar.style.display = "none";
        header.style.height = "1.5em";
        frame.style.top = "1.8em";
    }
    if (screen.width < 1650) {
        bigRes();
        function close() {
           frame.style.top = "1.8em";
            header.style.height = "1.5em";
            bottomBar.style.display = "none";
        }
        function filter() {
            bottomBar.style.display = "block";
            frame.style.top = "3.5em";
            header.style.height = "3.5em";
        }
        let clear = document.getElementById("clearsearch");
        clear.addEventListener("click", close);
        UI.addEventListener("click", filter);
    } else {
        bigRes();
    }
    } catch (err) { console.log("this is just for pages other than vola rooms") }
    //GM will do this: http://unixpapa.com/js/dyna.html
    let css = stuff2str("as dark as my soul.css");
    let newStyle = document.createElement("style");
    newStyle.type = "text/css";
    newStyle.appendChild(document.createTextNode(css));
    //let newLink = document.createElement("link");
    //newLink.rel = "stylesheet";
    //newLink.type = "text/css";
    //newLink.href = "https://rawgit.com/Szero/darker-side-of-vola/master/as%20dark%20as%20my%20soul.css";
    let head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(newStyle);
}) ();