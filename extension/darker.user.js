// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      1.5.0
// @description  More contrasty volafile experience.
// @author       Your mom
// @match        https://*.volafile.org/*
// @grant        GM_addStyle
// @updateURL    https://rawgit.com/Szero/darker-side-of-vola/master/extension/darker.meta.js
// @downloadURL  https://rawgit.com/Szero/darker-side-of-vola/master/extension/darker.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==

(function () {
    "use strict";
    GM_addStyle([
        "@-moz-document domain(\"volafile.org\") { ",
        "    :root { ",
        "        --main-color: teal; ",
        "        --background-color: #000000; ",
        "        --text-color: #FFFFFF; ",
        "        --visited: #8C8C8C; ",
        "        --hilight: #181818; ",
        "        --whitenames: #A9BDD0; ",
        "        --namefags: #00FF00; ",
        "        --donators: #90EE90; ",
        "        --trusted-users: #FFFF00; ",
        "        --mods: #FF6C00; ",
        "        --system: #D808D8; ",
        "        --font: \"Open Sans\",sans-serif; ",
        "    } ",
        "    html, body { ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "    } ",
        "    /* Main Page */ ",
        "    .howitworks_point { ",
        "        text-decoration: underline; ",
        "    } ",
        "    #main_small_links { ",
        "        background-color: var(--background-color); ",
        "        border-top: 1px solid var(--main-color); ",
        "    } ",
        "    /* those svgs are only for teal theme */ ",
        "    .chat_room_url { ",
        "        background-color: var(--hilight) !important; ",
        "    } ",
        "    .new_room_icon { ",
        "        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDguNDA4IiBoZWlnaHQ9IjkwLjA4OCI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLjA1MTgyIDAgMCAuMDMxMTcgMTguMDE2IDY1Ljk4KSIgc3Ryb2tlLXdpZHRoPSI5OS41MzUiIHN0cm9rZT0iIzAwOGQ4ZCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI3NjQuNTg0IiBoZWlnaHQ9IjI3OTAuODgzIiB4PSItMjk3LjkwNyIgeT0iLTIwNjcuMTQ3IiByeT0iMCIvPjxwYXRoIGQ9Ik0tMjk3LjkwNy0xMjM1LjA1OWgyNzY0LjU4NW0tMTg2Ny44MTctNi4yNDhWNzMzLjA3NiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48L3N2Zz4=\"); ",
        "    } ",
        "    .upload_icon { ",
        "        background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxwYXRoIGlkPSJzdmdfMSIgZmlsbD0iIzAwOGQ4ZCIgc3Ryb2tlLXdpZHRoPSIwIiBkPSJtNDMuNzU5OTk4LDIzLjQ1OGwwLC0yMC44NXEwLjkzOTk5OSwwLjYxOCAxLjUzNzk5OCwxLjIzN2wxNy40MzUwMDEsMTguMDIzMDAycTAuNTk4OTk5LDAuNjE3OTk4IDEuMTk2OTk5LDEuNTg5OTk4bC0yMC4xNjk5OTgsMHptLTUuNDcwMDAxLDEuNDEzcTAsMS43NjcgMS4xOTYwMDMsMy4wMDQwMDJ0Mi45MDU5OTgsMS4yMzdsMjMuMjQ4MDAxLDBsMCw0Ni42NDcwMDFxMCwxLjc2Njk5OCAtMS4xOTY5OTksMy4wMDM5OTh0LTIuOTA2MDAyLDEuMjM3bC01Ny40MzM5OTksMHEtMS43MSwwIC0yLjkwNiwtMS4yMzd0LTEuMTk3LC0zLjAwMzk5OGwwLC03MC42NzkwMDNxMCwtMS43NjcgMS4xOTcsLTMuMDA0dDIuOTA2LC0xLjIzNmwzNC4xODcwMDEsMGwwLDI0LjAzMWwtMC4wMDAwMDQsMHoiLz4KICA8cGF0aCBpZD0ic3ZnXzIiIGZpbGw9IiNGQUY4RjgiIHN0cm9rZS13aWR0aD0iOTcuMDQ2IiBkPSJtNTcuOTc3MDAxLDM5LjM0MTk5OWwtMTcuOTQxMDAyLDE1LjQxbDguMDQwMDAxLDBsMCwxOS40MDU5OThsMTkuODAwOTk5LDBsMCwtMTkuNDA0OTk5bDguMDQyLDBsLTE3Ljk0MTk5OCwtMTUuNDEwOTk5eiIvPgogPC9nPgo8L3N2Zz4=\"); ",
        "    } ",
        "    .ui_frame_left.thumb_loading { ",
        "        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjEwIiB3aWR0aD0iMjEwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMjU0IC05LjkzNikiPjxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04MS4xOSAxNC45MzZoMzFtMjkgMGgzMW0yOSAwaDI0LjA2NHYyNS41bTAgMjl2MzFtMCAyOXYzMW0wIDI5djI1LjVIMjAxLjE5bS0yOSAwaC0zMW0tMjkgMGgtMzFtLTI5LjAwMyAwSDI1LjI1di0yNS41bTAtMjl2LTMxbTAtMjl2LTMxbTAtMjl2LTI1LjVoMjYuOTM3IiBzdHJva2UtZGFzaG9mZnNldD0iNjQiIHN0cm9rZT0iIzAwOGQ4ZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjAiIHN0cm9rZS13aWR0aD0iMTAiIGZpbGw9Im5vbmUiLz48cmVjdCByeT0iMyIgaGVpZ2h0PSIxNSIgd2lkdGg9IjE1IiB5PSIxMjQuOTQiIHg9IjgwLjI1NCIgZmlsbD0iIzAwOGQ4ZCIvPjxyZWN0IHJ5PSIzIiBoZWlnaHQ9IjE1IiB3aWR0aD0iMTUiIHk9IjEyNC45NCIgeD0iMTIwLjI1IiBmaWxsPSIjMDA4ZDhkIi8+PHJlY3Qgcnk9IjMiIGhlaWdodD0iMTUiIHdpZHRoPSIxNSIgeT0iMTI0Ljk0IiB4PSIxNjAuMjUiIGZpbGw9IiMwMDhkOGQiLz48L2c+PC9zdmc+DQo=\") !important; ",
        "    } ",
        "    /* Radio Seekbar*/ ",
        "    #radio_load_progress, #radio_progress { ",
        "        background-color: var(--background-color); ",
        "    } ",
        "    #radio_play_progress { ",
        "        background-color: var(--main-color); ",
        "    } ",
        "    /* old file links hover, thanks Dodos!*/ ",
        "    .file_left_part { ",
        "        pointer-events: none; ",
        "    } ",
        "    div.filelist_file > a > span { ",
        "        pointer-events: auto !important; ",
        "    } ",
        "    #radio_volume_bar { ",
        "        background-color: var(--background-color); ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    #radio_volume_slider { ",
        "        height: 0.95em !important; ",
        "        background-color: var(--main-color); ",
        "    } ",
        "    #radio_volume_wrapper { ",
        "        display:inline-block; ",
        "    } ",
        "    .chat_message.message_self, .chat_message.message_self.highlight { ",
        "        font-style: italic; ",
        "    } ",
        "    .file_control { ",
        "        color: var(--main-color); ",
        "        padding-right: 0 !important; ",
        "    } ",
        "    .scroller-slider { ",
        "        background: var(--main-color); ",
        "        border-radius: 0; ",
        "    } ",
        "    .scroller-pane { ",
        "        opacity: 0; ",
        "    } ",
        "    #files_scroller { ",
        "        background: var(--background-color); ",
        "    } ",
        "    #top_navigation { ",
        "        font-size: 16px; ",
        "        background: var(--background-color); ",
        "        border-bottom-style: solid!important; ",
        "        border-bottom-color: var(--background-color); ",
        "        border-bottom-width: 2px!important; ",
        "    } ",
        "    .top_nav_item:hover { ",
        "        background-color: var(--background-color)!important; ",
        "        color: var(--main-color); ",
        "    } ",
        "    .top_nav_item, #top_navigation_contents, .top_nav_item[href=\"/donate\"] { ",
        "        border-color: var(--background-color); ",
        "    } ",
        "    #chat_messages_frame:before { ",
        "        border-left: none !important; ",
        "        background: var(--background-color); ",
        "    } ",
        "    #overlay { ",
        "        background-color: #121212 !important; ",
        "    } ",
        "    #room_name, #room_name_container { ",
        "        text-align: center; ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "    } ",
        "    #header_row1.header_row { ",
        "        background: var(--background-color); ",
        "    } ",
        "    .file_queued { ",
        "        background-color: var(--hilight) !important; ",
        "    } ",
        "    .chat_message { ",
        "        margin-left: 0 !important; ",
        "        padding: 0px 1em 0px 0.5em !important; ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "        border-left-style: solid; ",
        "        border-left-width: 6px; ",
        "        border-color: var(--background-color); ",
        "    } ",
        "    .chat_status_text { ",
        "        line-height: 1.6em !important; ",
        "    } ",
        "    #room_name_container { ",
        "        border-right: 1px solid var(--main-color) !important; ",
        "        right: 1px !important; ",
        "    } ",
        "    #files_frame { ",
        "        margin-left: -1px !important; ",
        "    } ",
        "    #chat_frame, #files_frame { ",
        "        z-index: 1 !important; ",
        "        border-color: var(--main-color); ",
        "        border-top: 1px solid var(--main-color); ",
        "    } ",
        "    #chat_frame:after { ",
        "        border-right: 1px solid var(--main-color) !important; ",
        "        margin-right: 1px !important; ",
        "    } ",
        "    .chat_message > .username { ",
        "        font-family: inherit !important; ",
        "        font-family: inherit !important; ",
        "        font-weight: 400 !important; ",
        "        color: var(--whitenames); ",
        "    } ",
        "    .chat_message.user .username { ",
        "        color: var(--namefags) !important; ",
        "    } ",
        "    .chat_message.donator .username { ",
        "        color: var(--donators) !important; ",
        "    } ",
        "    .chat_message.staff .username { ",
        "        color: var(--trusted-users) !important; ",
        "    } ",
        "    .chat_message.staff:not(.user) .username { ",
        "        color: var(--system) !important; ",
        "    } ",
        "    .chat_message.admin:not(.staff):not(.user) .username { ",
        "        color: var(--system) !important; ",
        "    } ",
        "    .chat_message.admin .username { ",
        "        color: var(--mods) !important; ",
        "    } ",
        "    .chat_message.highlight { ",
        "        background: var(--hilight); ",
        "        border-color: var(--background-color)!important; ",
        "        color: var(--text-color); ",
        "        border-left-width: 6px!important; ",
        "        border-left-style: solid!important; ",
        "    } ",
        "    .chat_file { ",
        "        border-radius: 1px; ",
        "        background: var(--background-color) !important;; ",
        "        border-color: var(--main-color) !important; ",
        "        color: var(--text-color) !important; ",
        "        text-align: center; ",
        "        border-style: dashed; ",
        "        border-color: var(--main-color); ",
        "    } ",
        "    .chat_file:hover { ",
        "        background: var(--background-color) !important; ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    .chat_file:visited { ",
        "        color: var(--visited)!important; ",
        "        border-color: var(--visited) !important; ",
        "    } ",
        "    .chat_file_play { ",
        "        float: none !important; ",
        "    } ",
        "    .nano > .pane > .slider { ",
        "        border-radius: 1px; ",
        "        background: var(--main-color); ",
        "    } ",
        "    .nano > .pane > .slider:hover { ",
        "        background: var(--main-color); ",
        "    } ",
        "    .nano:hover > .pane, .pane.active, .pane.flashed { ",
        "        background: var(--background-color); ",
        "        opacity: 1; ",
        "    } ",
        "    .nano > .pane.active > .slider { ",
        "        background: var(--main-color); ",
        "    } ",
        "    .nano>.pane { ",
        "        opacity: 0 !important; ",
        "    } ",
        "    .nano:hover>.pane,.pane.active,.pane.flashed { ",
        "        opacity: 1 !important; ",
        "    } ",
        "    .header_row_element:hover { ",
        "        background: var(--background-color) !important; ",
        "    } ",
        "    #chat_hbar, #header_row2.header_row { ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "    } ",
        "    .dropdown_item { ",
        "        background: var(--background-color); ",
        "        color: var(--text-color)!important; ",
        "    } ",
        "    .dropdown_item:hover, .dopdown_item:active, .dropdown:hover, #header{ ",
        "        background: var(--background-color); ",
        "    } ",
        "    a.dropdown_hover.dropdown_option { ",
        "        color: var(--text-color); ",
        "    } ",
        "    .dropdown_option:hover, #show_search_ui:hover, #report_button:hover{ ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    .dropdown:hover:after { ",
        "        border-color: var(--main-color); ",
        "        background: rgb(10,20,30); ",
        "        border-width: 1px!important; ",
        "    } ",
        "    textarea, input[type=\"text\"], input[type=\"password\"] { ",
        "        background: var(--background-color); ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    #chat_name, #chat_input { ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "        border-width: 0px; ",
        "    } ",
        "    #chat_input { ",
        "        border-top: 1px solid var(--main-color) !important; ",
        "    } ",
        "    #chat_name { ",
        "        border-right: 1px solid var(--main-color) !important; ",
        "        border-radius: 0 !important; ",
        "    } ",
        "    .file_name:hover { ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    .file_left_part:visited, .file_name:visited{ ",
        "        color: var(--visited); ",
        "    } ",
        "    .file_right_part { ",
        "        line-height: 1.4em !important; ",
        "        display: flex; ",
        "    } ",
        "    a[rel*=\"noopener\"][rel*=\"noreferrer\"] { ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    a[rel*=\"noopener\"][rel*=\"noreferrer\"]:hover { ",
        "        color: var(--text-color) !important; ",
        "    } ",
        "    a[rel*=\"noopener\"][rel*=\"noreferrer\"]:visited { ",
        "        color: var(--visited) !important; ",
        "    } ",
        "    a[href^=\"/r/\"]{ ",
        "        color: var(--main-color); ",
        "    } ",
        "    a[href^=\"/r/\"]:visited{ ",
        "        color: var(--visited) ; ",
        "    } ",
        "    .header_row_element, #header_row1, #header_row2 { ",
        "        border: none !important; ",
        "    } ",
        "    .defaultValue { ",
        "        color: var(--text-color); ",
        "    } ",
        "    #header_row_container a i.green-icon { ",
        "        color: var(--text-color)!important; ",
        "    } ",
        "    #header_row_container a:hover i.green-icon { ",
        "        color: var(--text-color)!important; ",
        "    } ",
        "    #header_row_container a:active i.green-icon { ",
        "        color: var(--main-color)!important; ",
        "    } ",
        "    #search_input.defaultValue { ",
        "        background: var(--background-color)!important; ",
        "        color: var(--text-color); ",
        "    } ",
        "    #search_input { ",
        "        background: var(--background-color)!important; ",
        "        height: 80% !important; ",
        "    } ",
        "    #toggles > .toggle:hover { ",
        "        background: none !important; ",
        "    } ",
        "    .header_row_element, .header_row_element.nodecoration, a.nodecoration.header_row_element, span.on_large_screen { ",
        "        color: var(--text-color); ",
        "    } ",
        "    .button, input[type=\"submit\"], input[type=\"button\"] { ",
        "        color: var(--text-color); ",
        "        background: var(--background-color); ",
        "        margin-bottom: -0.1em; ",
        "        line-height: 1.4em !important; ",
        "    } ",
        "    .button:hover, input[type=\"submit\"]:hover, input[type=\"button\"]:hover { ",
        "        background: var(--background-color); ",
        "        color: var(--main-color); ",
        "    } ",
        "    #uploadButton { ",
        "        border-radius: 0px; ",
        "        color: var(--text-color); ",
        "        background: var(--background-color); ",
        "    } ",
        "    #uploadButton:hover { ",
        "        color: var(--main-color); ",
        "        background: var(--background-color)!important; ",
        "    } ",
        "    #uploadButton:active { ",
        "        background: #212121 !important; ",
        "        color: var(--main-color)!important; ",
        "    } ",
        "    .file_uploading, .file_uploading:after { ",
        "        background-color: #212121 !important; ",
        "        background-image: none !important; ",
        "    } ",
        "    .file_uploading:before { ",
        "        background-color: var(--background-color) !important; ",
        "        background-image: none !important; ",
        "    } ",
        "    #file_list { ",
        "        font-size: 14px; ",
        "    } ",
        "    #file_list.uneven .filelist_file:nth-child(2n+1) { ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "        height: 1.4em !important; ",
        "    } ",
        "    #file_list.even .filelist_file:nth-child(2n) { ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "        height: 1.4em !important; ",
        "    } ",
        "    .filelist_file { ",
        "        height: 1.4em !important; ",
        "        background: var(--background-color); ",
        "        color: var(--text-color); ",
        "    } ",
        "    .filelist_resize_bar { ",
        "        z-index: 1 !important; ",
        "        margin: -2px !important; ",
        "    } ",
        "    .filelist_resize_bar.resizing { ",
        "        background-color: #FFFFFF !important; ",
        "    } ",
        "    .file_icon.filetype.music_playing { ",
        "        color: var(--text-color)!important; ",
        "    } ",
        "    #gallery_title { ",
        "        color: var(--text-color); ",
        "    } ",
        "    .gallery_area { ",
        "        z-index: 1 !important; ",
        "        width: 3.6em !important; ",
        "    } ",
        "    .gallery_button { ",
        "        border-radius: 15px; ",
        "        border-style: none; ",
        "        color: var(--text-color); ",
        "        background-color: rgba(0,0,0,0.7) !important; ",
        "    } ",
        "    .gallery_button:hover { ",
        "        background-color: rgba(0,0,0,0.7) !important; ",
        "        color: var(--main-color); ",
        "    } ",
        "    .ui_frame { ",
        "        background: var(--background-color); ",
        "        border-color: var(--background-color); ",
        "        border-radius: 1px; ",
        "    } ",
        "    .file_control_icon.clickable { ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    .clickable:active, .clickable:hover{ ",
        "        color: var(--text-color) !important; ",
        "    } ",
        "    .file_tag.tag_key_user { ",
        "        background-color: rgba(0,0,0,0) !important; ",
        "        color: var(--main-color); ",
        "        border-radius: 1px; ",
        "        border-width: 0px 0px 0px 0px !important; ",
        "    } ",
        "    .file_tag:hover { ",
        "        color: var(--text-color); ",
        "    } ",
        "    .file_tag { ",
        "        background: rgba(0,0,0,0) !important; ",
        "        border-radius: 0px; ",
        "        color: var(--main-color); ",
        "        border-style: dashed; ",
        "        border-width: 0px 0px 0px 1px; ",
        "        padding-left: 5px; ",
        "    } ",
        "    .file_button { ",
        "        color: var(--text-color) !important; ",
        "        background-color: rgba(0,0,0,0) !important; ",
        "        line-height: 1.4em !important; ",
        "    } ",
        "    .file_button:hover { ",
        "        color: var(--main-color) !important; ",
        "        background-color: rgba(0,0,0,0) !important; ",
        "    } ",
        "    #main_logo { ",
        "        color: var(--main-color); ",
        "    } ",
        "    #main_logo_suffix { ",
        "        color: var(--text-color); ",
        "    } ",
        "    table { ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    table th { ",
        "        background: var(--background-color); ",
        "        border-color: var(--main-color); ",
        "    } ",
        "    table td { ",
        "        border-color: var(--main-color); ",
        "    } ",
        "    .formtable td { ",
        "        padding: 0.5em !important; ",
        "    } ",
        "    .ui_frame_table { ",
        "        border: none !important; ",
        "    } ",
        "    #radio_container { ",
        "        background: var(--background-color); ",
        "        border-color: var(--main-color); ",
        "        border-width: 1px!important; ",
        "        border-top-style: dashed; ",
        "    } ",
        "    #radio_current_song { ",
        "        background: var(--background-color); ",
        "        border-radius: 0px!important; ",
        "    } ",
        "    #radio_current_time, #radio_left { ",
        "        background: var(--background-color); ",
        "        border-color: var(--background-color); ",
        "        border-left-width: 1px!important; ",
        "    } ",
        "    .radio_toggle:hover { ",
        "        color: var(--text-color) !important; ",
        "    } ",
        "    .radio_icon { ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    .toggle_text.on_big_header { ",
        "        display:none; ",
        "    } ",
        "    .toggle_icon { ",
        "        font-family: var(--font) !important; ",
        "        font-weight: 400; ",
        "    } ",
        "    .toggle[title*=\"Music\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"usic\"; ",
        "    } ",
        "    .toggle[title*=\"Image\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"mage\"; ",
        "    } ",
        "    .toggle[title*=\"Video\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"ideo\"; ",
        "    } ",
        "    .toggle[title*=\"Other\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"ther\"; ",
        "    } ",
        "    .toggle[title*=\"Archive\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"rchive\"; ",
        "    } ",
        "    .toggle[title*=\"Document\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"ocument\"; ",
        "    } ",
        "    .toggle[title*=\"Other\"] .toggle_icon:after { ",
        "        color:var(--text-color); ",
        "        content:\"ther\"; ",
        "    } ",
        "    .toggle>span.toggle_icon { ",
        "        color: var(--text-color) !important; ",
        "    } ",
        "    .toggle.enabled>span.toggle_icon { ",
        "        color: var(--main-color)!important; ",
        "    } ",
        "    #radio_current { ",
        "        border-color: var(--background-color)!important; ",
        "        border-radius: 0px; ",
        "        border-top-color: var(--background-color) !important; ",
        "        border-width: 2px!important; ",
        "        border-bottom: none!important; ",
        "    } ",
        "    .ui_frame_buttons > .button, .button.light { ",
        "        background: var(--background-color)!important; ",
        "    } ",
        "    #rename_input, #rename_room { ",
        "        color: #FFFFFF; ",
        "    } ",
        "    input[type=\"text\"]::placeholder, input[type=\"password\"]::placeholder, textarea::placeholder { ",
        "        color: var(--main-color); ",
        "    } ",
        "    input[type=\"text\"]::-moz-placeholder, input[type=\"password\"]::-moz-placeholder, textarea::-moz-placeholder { ",
        "        color: var(--main-color); ",
        "    } ",
        "    .button:hover { ",
        "        background: var(--background-color)!important; ",
        "        color: var(--main-color)!important; ",
        "    } ",
        "    .chat_message.message_self .username { ",
        "        font-style: italic; ",
        "    } ",
        "    .icon-refresh:before { ",
        "        content: \"CV\"; ",
        "    } ",
        "    .icon-picture-o:before { ",
        "        content: \"P\"; ",
        "    } ",
        "    .icon-film:before { ",
        "        content: \"V\"; ",
        "    } ",
        "    .icon-book:before { ",
        "        content: \"D\"; ",
        "    } ",
        "    .icon-music:before { ",
        "        content: \"M\"; ",
        "    } ",
        "    .icon-archive:before { ",
        "        content: \"A\"; ",
        "    } ",
        "    .icon-file:before { ",
        "        content: \"O\"; ",
        "    } ",
        "    .icon-image:before { ",
        "        content: \"I\"; ",
        "    } ",
        "    .icon-star:before { ",
        "        content: \"★\" !important; ",
        "    } ",
        "    .icon-king:before { ",
        "        content: \"✦\" !important; ",
        "    } ",
        "    .filetype_download { ",
        "         font-family: var(--font) !important; ",
        "    } ",
        "    .filelist_file:hover { ",
        "        border-color: var(--main-color); ",
        "    } ",
        "    .filelist_file:hover > .file_left_part > .file_control > .filetype_download::before { ",
        "        color: var(--text-color) !important; ",
        "        content: \"DL\" !important; ",
        "    } ",
        "    .icon-play, .icon-stop, .icon-pause { ",
        "        width: 0px; ",
        "        height: 0px; ",
        "    } ",
        "    .chat_file_icon, .radio_icon { ",
        "        width: 20px; ",
        "        height:20px; ",
        "    } ",
        "    .file_icon { ",
        "        padding-right: 25px; ",
        "    } ",
        "    .file_control_icon.filetype { ",
        "        padding-right: 0.5em; ",
        "    } ",
        "    #radio_volume_icon { ",
        "        width: 1.5em; ",
        "    } ",
        "    .icon-reverse.enabled:before, .icon-random.enabled:before { ",
        "        color: var(--text-color); ",
        "    } ",
        "    .icon-times:before { ",
        "        content: \"Close\"; ",
        "    } ",
        "    #radio_container { ",
        "        background-color: var(--background-color); ",
        "        border-top-style: solid; ",
        "        border-width: 1px; ",
        "    } ",
        "    #clearsearch:hover { ",
        "        color: var(--main-color) !important; ",
        "    } ",
        "    #filter_reminder, #filter_reminder:hover { ",
        "        background: var(--background-color) !important; ",
        "        border-top: 0 !important; ",
        "        border-left: 0 !important; ",
        "    } ",
        "    #uploadButton:active { ",
        "        background: var(--background-color) !important; ",
        "    } ",
        "    #clearsearch.fa.icon-times.clickable.on_small_header.icon-times:before { ",
        "        Content: \"Clear\" ",
        "    }; ",
        "    .file_icon.file_control_icon.fa.abort-upload.icon-times.clickable:before{ ",
        "        content: \"Cancel\"; ",
        "    } ",
        "    .file_icon.file_control_icon.fa.abort-upload.icon-times.clickable{ ",
        "        padding-right: 34px; ",
        "    } ",
        "    .file_icon.file_control_icon.fa.filetype.icon-cloud-upload.file_icon_pulsing:before{ ",
        "        content: \"UP\"; ",
        "    } ",
        "    .file_icon.file_control_icon.fa.filetype.icon-cloud-upload.file_icon_pulsing{ ",
        "        padding-right: 8px; ",
        "    } ",
        "    #chat_notifier{ ",
        "        font-family: var(--font) !important; ",
        "        color: var(--main-color); ",
        "        line-height: 1.2em !important; ",
        "    } ",
        "    .file_tag.tag_key_user:hover { ",
        "        background-color: var(--background-color); ",
        "    } ",
        "    .ui_frame_tooltip.has_thumb .ui_frame_content { ",
        "        border-left: solid 1px; ",
        "        border-color: var(--main-color); ",
        "    } ",
        "    #main_new_room_button:hover { ",
        "        background: var(--background-color)!important; ",
        "    } ",
        "    .ui_frame_body_bar { ",
        "        border-top: 3px solid var(--main-color); ",
        "    } ",
        "    .dropdown_list { ",
        "        border-color: var(--main-color) !important; ",
        "        color: var(--text-color); ",
        "    } ",
        "    .icon-magic, .icon-folder-open, .icon-heart, .icon-user, .icon-exit, ",
        "    .icon-magic-wand, .icon-cog, .icon-report, .icon-upload-button, .icon-filter, ",
        "    .icon-minus-circle, .icon-exclamation-circle,.icon-angle-right, .icon-edit, ",
        "    .icon-lock, .icon-unlock, .icon-plus, .icon-minus, .icon-logicon-upload, ",
        "    .icon-home, .icon-list, .file_clock, .dropdown_icon { ",
        "        display: none !important; ",
        "    } ",
        "    .file_status:before , .file_buttons:before { ",
        "        border-left: 0 !important; ",
        "    } ",
        "    #clearsearch.icon-cross.clickable.on_small_header:before { ",
        "        font-family: var(--font) !important; ",
        "        content: \"Clear\"; ",
        "        margin-left: 0.3em !important; ",
        "    } ",
        "    #chat_notifier.icon-arrow-down.clickable:before { ",
        "        content: \"New Messages Posted ↓\"; ",
        "    } ",
        "    .header_row_element_disabled, .header_row_element_disabled:active, .header_row_element_disabled:hover, .header_row_element_disabled:visited { ",
        "        cursor: default; ",
        "        background-color: var(--background-color); ",
        "    } ",
        "    .icon-spinner:before { ",
        "        content:\":^)\" ",
        "    } ",
        "    .icon-angle-double-right:before { ",
        "        content: \">\"; ",
        "    } ",
        "    .icon-angle-double-left:before { ",
        "        content: \"<\"; ",
        "    } ",
        "    .icon-arrow-up:before { ",
        "        content: \"^\"; ",
        "    } ",
        "    .icon-arrow-down:before { ",
        "        content: \"v\"; ",
        "    } ",
        "    .file_icon.file_control_icon.abort-upload.icon-cross.clickable:before { ",
        "        font-family: var(--font) !important; ",
        "        content: \"Abort\" ",
        "    } ",
        "    .icon-uploading:before { ",
        "        font-family: var(--font) !important; ",
        "        content: \"UP\"; ",
        "    } ",
        "    .icon-download:before { ",
        "        font-family: var(--font) !important; ",
        "        content: \"DL\"; ",
        "    } ",
        "    hr { ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    .loading_indicator > .outer_indicator > .inner_indicator, .url_bar_icon { ",
        "        background-color: var(--main-color) !important; ",
        "    } ",
        "    /*mod stuff*/ ",
        "    .icon-wrench::before { ",
        "        content: \"Settings\"; ",
        "    } ",
        "    .file_tag.tag_key_ip { ",
        "        background-color: rgba(111, 137, 162, 0); ",
        "    } ",
        "    .file_tag.tag_key_ip:hover { ",
        "        background-color: rgba(111, 137, 162, 0); ",
        "    } ",
        "    .ui_frame_content { ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    button, input, optgroup, select { ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    select, .file_selected { ",
        "        background-color: var(--hilight) !important; ",
        "    } ",
        "    .ui_frame { ",
        "        border: 1px solid var(--main-color); ",
        "    } ",
        "    .icon-group::before { ",
        "        font-family: var(--font) !important; ",
        "        content: \"Users Online\" !important; ",
        "    } ",
        "    #chat_hbar { ",
        "        border-left: none !important; ",
        "    } ",
        "    #file_notifier, #filter_reminder { ",
        "        background-color: var(--background-color); ",
        "        border: var(--main-color) solid 1px; ",
        "    } ",
        "    #file_notifier:hover, #filter_reminder:hover { ",
        "        background-color: var(--background-color); ",
        "    } ",
        "    #chat_input_container { ",
        "        border-left: none !important; ",
        "    } ",
        "    #chat_hbar_container { ",
        "        padding-top: 0 !important; ",
        "        border-top: 1px solid var(--main-color) !important; ",
        "        border-left: none !important; ",
        "        box-shadow: none !important; ",
        "    } ",
        "} "
    ].join("\n"));
    const $ = (element) => document.getElementById(element);
    try {
        var UI,header,frame,bottomBar;
        let bigRes = () => {
            UI = $("show_search_ui");
            let topBar = $("header_row1");
            bottomBar = $("header_row2");
            topBar.appendChild(bottomBar.removeChild(UI));
            if (screen.width > 1650) {
                let filters = $("toggles");
                topBar.appendChild(bottomBar.removeChild(filters));
            }
            let roomSh = $("room_search");
            topBar.appendChild(bottomBar.removeChild(roomSh));
            let uploadBt = $("upload_container");
            topBar.appendChild(bottomBar.removeChild(uploadBt));
            header = $("header");
            frame = $("files_frame");
            bottomBar.style.display = "none";
            header.style.height = "1.5em";
            frame.style.top = "1.8em";
        }
        if (screen.width < 1650) {
            bigRes();
            let close = () => {
                bottomBar.style.display = "none";
                frame.style.top = "1.8em";
                header.style.height = "1.5em";
            }
            let filter = () => {
                bottomBar.style.display = "block";
                frame.style.top = "3.5em";
                header.style.height = "3.5em";
            }
            let clear = $("clearsearch");
            clear.addEventListener("click", close);
            UI.addEventListener("click", filter);
        } else {
            bigRes();
        }
    } catch (err) { console.log(err + "\nThrowing an error if we are somewhere else than in a room.") }
}) ();
