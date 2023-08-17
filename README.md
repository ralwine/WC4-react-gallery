# Project Name

WEEKEND REACT GALLERY - Images from a dog's life!
## Description

This project was an introduction to some of the base features of ReactJs and the practice of refactoring by way of making an app that was a simple interactive photo gallery.

I started the project by picking out six images of my dog and converting them into jpegs of more manageable size. I next plotted out the functionality required for my app and began figuring out how to manipulate that across a main app file and two components. This process involved refactoring which was very new to me and as such proved to be very tedious. After constructing and testing my GET routes, I succeeded refactoring into to the first component, and then the next after much time and effort; making sure that my images were still rendering to the page before and after each refactor. Moved onto to making the imgClick function next that flip/toggle my picture to a description and back by clicking on it. This took some reading up on conditional rendering and it proved helpful. I constructed my 'Like' button quickly thereafter, and all that was left to make was the PUT route that would render my likes to the DOM.

Although I was able to test the PUT route successfully in Postman, I was not able to get the "Likes" button to update to the DOM, but it would throw my alert without throwing a code red in the console. I also wasn't able to get my styling done to my satisfaction, but I will revisit this.

UPDATE:

The bug has been resolved! The issue was that although my PUT route was 'OK', the data coming from it wasn't reaching the component due to an inapprotiate use of hooks. Basically, I was importing a function all the way from App.jsx to GalleryItem.jsx without passing props down through GalleryList.jsx. I resolved this by moving the PUT route and parent function to App.jsx and then passing down the function by way of props to GalleryItem.jsx. Base functionality fully acheived! This proved to be a very valuable teaching moment: even though an error that gets thrown might not be shaded red or yellow... IT'S STILL AN ERROR! By looking more closely at these sort of errors in the console, one can get a much better pitcure of the where and what.