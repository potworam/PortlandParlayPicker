import React from 'react';

function Body() {
    return(
        <section class="center"> 
           <div class="wrapper">
           <input id="searchbar" onkeyup="search_player()" type="text"
        class="search" placeholder="Search players.."></input>
        <button class="button button1">Submit</button>
        <label for="categories">Choose a stat category:</label>
        <select name="categories" id="categories">
<option value="Points">Points</option>
<option value="Assists">Assists</option>
<option value="Rebounds">Rebounds</option>
<option value="Steals">Steals</option>
<option value="Blocks">Blocks</option>
        </select>
        <button class="button button1">Add players info</button>
        </div>
    </section>
 //uhhhhhh
    );
    }
    export default Body;