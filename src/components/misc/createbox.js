// import { createStatCard } from "mongoose";
import React from "react";
//do i need to add import and export values for this file?
function createStatCard() {
    var box = document.createElement("div");
    box.setAttribute('class', 'statBox');
    box.setAttribute('id','statBox');
    var holder = document.createElement("p");
    holder.setAttribute('id', 'output');
    var item = document.createTextNode("testing");
    holder.appendChild(item);
    box.appendChild(holder);
    var mainholder = document.getElementsByClassName("wrapper");
    mainholder.appendChild(box);
}   
export default createStatCard;

// this aint working