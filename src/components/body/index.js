import React from 'react';

function Body() {
    return(
        <section class="center"> 
        <div>Type a players name</div>
           <div class="wrapper">
           <input id="searchbar" onkeyup="search_player()" type="text"
        class="search" placeholder="Search for a player"></input>
        {/* above box needs to be a dropdown with players from api, or does it?  */}
        {/* <button class="button button1">Submit</button> */}
        <label for="categories">Choose a stat category:</label>
        <select name="categories" id="categories">
<option value="Points">Points</option>
<option value="Assists">Assists</option>
<option value="Rebounds">Rebounds</option>
<option value="Steals">Steals</option>
<option value="Blocks">Blocks</option>
        </select>
        <input id="searchbar" onkeyup="search_player()" type="number"
        class="search" placeholder="input expected stat"></input>
        <button class="button button1">Create Stat Card</button>
        </div>
    </section>
 //uhhhhhh
//  add user input value for ast reb pt
    );
    }
    export default Body;