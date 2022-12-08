import React from 'react';
function Button(){
          // Create a button element
          const button = document.createElement('button')

          // Set the button text to 'Can you click me?'
          button.innerText = 'click?'
    
          button.id = 'mainButton'
    
          // Attach the "click" event to your button
          button.addEventListener('click', () => {
            // When there is a "click"
            // it shows an alert in the browser
            alert('Oh, you clicked me!')
          })
    
          document.body.appendChild(button)
}
export default Button;
// it works as a button, but i need only button, and i need it to do different things
//ill also need to link them to categories and whatnot