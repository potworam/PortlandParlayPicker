import React from 'react';
function createCard(){
    console.log("good job matt")
}
// import Button from './button';
// import createStatCard from '../misc/createbox';
function Body() {
    return(
        <section class="center"> 
        <div>Type a players name</div>
           <div class="wrapper">
           <input id="playerName" onkeyup="search_player()" type="text"
        class="search" placeholder="Search for a player"></input>
        {/* above box needs to be a dropdown with players from api, or does it?  */}
        <label for="categories">Choose a stat category:</label>
        <select name="categories" id="statCategories">
<option value="Points">Points</option>
<option value="Assists">Assists</option>
<option value="Rebounds">Rebounds</option>
<option value="Steals">Steals</option>
<option value="Blocks">Blocks</option>
        </select>
        <input id="statNumber" onkeyup="search_player()" type="number"
        class="search" placeholder="input expected stat"></input>
        <button onClick= {createCard}  class="button button1" >Create Stat Card</button>
{/* BUTTON CONSOLE LOG WORKS THIS IS GOOD */}
{/* go back and look at forms online */}
        </div>
    </section>
    );
    }
    export default Body;
    // Fix button Class if u want it to look better
