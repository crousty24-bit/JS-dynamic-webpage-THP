# DOM & Events Exercise - The Hacking Project

## Overview

This project is a comprehensive DOM manipulation and JavaScript events exercise from The Hacking Project curriculum. It demonstrates practical applications of DOM API methods and event listener implementation through an interactive webpage featuring cards, navigation, and dynamic styling.

## Project Description

The exercise focuses on mastering core JavaScript concepts related to Document Object Model (DOM) manipulation and event handling. Through a Bootstrap-styled webpage, users interact with various elements that trigger JavaScript functions, resulting in real-time DOM modifications and visual feedback.

## Exercises

### Exercise 1: Footer Click Counter
Logs each click on the footer element to the console. Enhanced with a counter that increments with each click, displaying the total number of clicks in the format "Click N° [count]".

### Exercise 2: Responsive Navigation Menu
Implements a hamburger menu toggle functionality that shows and hides the navigation header using Bootstrap's collapse component. Clicking the navbar toggler button toggles the `collapse` class.

### Exercise 3: First Card Color Change
Changes the first card's text color to red when its "View" button is clicked. Demonstrates basic DOM element selection and style manipulation.

### Exercise 4: Second Card Toggle Color
Toggles the second card's text color between green and black when its "Edit" button is clicked. Implements conditional logic to check the current color state and switch accordingly.

### Exercise 5: Stylesheet Toggle on Double-Click
Disables or enables the Bootstrap stylesheet when the navbar header is double-clicked. Uses the `dblclick` event and manipulates the stylesheet's disabled property through the DOM.

### Exercise 6: Card Width Animation on Hover
Reduces card width to 20% when hovering over a "View" button. Implements advanced event delegation using `closest()` to filter the specific button that triggered the mouseover event.

### Exercise 6.1: Card Width Restoration on Mouseout
Restores card width to 100% when the mouse leaves a "View" button. Works in conjunction with Exercise 6 to provide smooth hover feedback, using the `mouseout` event.

### Exercise 7: Move Cards Bottom-to-Top
Moves the last card to the beginning of the card list when the grey back button (<=) is clicked. Uses DOM element reordering with the `insertBefore()` method to rearrange cards dynamically.

### Exercise 8: Move Cards Top-to-Bottom
Moves the first card to the end of the card list when the blue forward button (=>) is clicked. Implements a custom insertAfter functionality using `nextSibling` property, as JavaScript doesn't have a native insertAfter method.

## Technical Stack

- **HTML5**: Semantic markup with Bootstrap 4.3.1 framework
- **CSS**: Bootstrap styling with responsive grid layout
- **JavaScript (ES6)**: DOM manipulation, event listeners, and DOM traversal

## Key DOM Methods Used

- `document.querySelector()` - Single element selection
- `document.querySelectorAll()` - Multiple element selection
- `document.getElementsByClassName()` - Class-based selection
- `addEventListener()` - Event binding
- `classList.toggle()` - Class manipulation
- `insertBefore()` - DOM element repositioning
- `closest()` - Event delegation with element filtering

## Event Types Implemented

- `click` - Button and element click handling
- `dblclick` - Double-click detection
- `mouseover` / `mouseout` - Hover state management
- `toggle` - State switching

## File Structure

```
.
├── exo_events.html      Main HTML file with Bootstrap structure
├── script.js            JavaScript file with all event handlers
├── README.md            Project documentation
```

## How to Use

1. Clone or download the repository
2. Open `exo_events.html` in a web browser
3. Interact with the page elements:
   - Click the hamburger menu to toggle navigation
   - Click card buttons to trigger color changes
   - Double-click the navbar to toggle styling
   - Hover over View buttons to resize cards
   - Use navigation arrows to reorder cards
   - Click the footer and check the console for click counts

## Browser Compatibility

Works with all modern browsers that support ES6 JavaScript and the HTML5 DOM API.

## Learning Outcomes

Upon completing this exercise, developers will understand:

- How to select and manipulate DOM elements
- Event listener attachment and management
- Event delegation and target filtering
- CSS class manipulation through JavaScript
- DOM element reordering and insertion
- Console logging for debugging
- Practical event handling patterns

## Notes

The exercise file was created as part of The Hacking Project curriculum to reinforce fundamental web development concepts before advancing to more complex frameworks and libraries.
