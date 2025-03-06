"use strict"
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontains = document.getElementsByClassName("tab-contains");
        function Opentab(tabname) {
            for (let link of tablinks) {
                link.classList.remove("active-link");
            }
            for (let tab of tabcontains) {
                tab.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }