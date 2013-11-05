/* JavaScript Document
 POP_UP! V1.0
 Copyright (c) 2013 B. Tuttle, Developer 4 You, developer4you.net 

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

***************** NOTES *********************
  Displays a pop up bubble (div) when you mouse over an element.
  On mouse out bubble dissapears.
  Instructions:
  Place a reference inside the head tag of your HTML document to this js file.
  Example: <script type="text/javascript" src="scripts/bubble_pop_up.js"></script>
  
  There are three Parameters
  1.) event - required for mouse events. Do not change.
  2.) head - the head parameter text shows up in the header of the bubble.
  3.) text - the text parameter shows up below the header
  Example of use on a image element:  
  <img src="yourImageFile.jpg" alt="Your Image Description"
 onMouseOver="showBubble(event, 'Title Text', 'Text to display under the title.')" onMouseOut="hideBubble()">
  
  Can be used on almost all html elements, but images work the best.
  
  More information can be found at: http://developer4you.net/bubble_up/bubble_up.html
  
***************************************************  
 */
 
 
function showBubble(event, head, text){
 
 /*************************************User can modify these settings*****************/
 var newWidth = 300; // Sets width of the bubble.
 
 /*
 Colors can be set below using CSS colors. For more information on colors see this web page:
 http://www.w3schools.com/cssref/css_colors.asp
 */
 
 var headerBcolor = "#06F"; // Sets the background color of the header. Default "#06F"
 var headerTcolor = "#FFF"; // Sets the text color of the header. Default "#FFF"
 var bubbleBcolor = "#FFF"; // Sets the bubble background color. Default "#FFF"
 var bubbleTcolor = "black"; // Sets the color of the text. Default "black"
 var imgURL = "url(images/bubble-shadow.png)"; // url to image file in releation to html document
 var newLeft = event.pageX + 20;  // Sets the bubble popup location based on mouse location.
 
  /**********************************************************************************/
  /*************************** Do not modify below this line ************************/
 var newTop = event.pageY - 50; // Sets the bubble upward from mouse by 50px.
 
 
// create a place to display the text
 var info = document.createElement('p');
 info.id = "bubbleinfo";
 info.style.position = "relative";
 info.style.textAlign = "justify";
 info.style.color = bubbleTcolor;
 info.innerHTML = text;
 
 // create the shadow div
 var shadowdiv = document.createElement('div'); 
 shadowdiv.id = "shadowdiv";
 shadowdiv.style.position = "absolute";
 shadowdiv.style.left = newLeft + "px";
 shadowdiv.style.top = newTop + "px";
 shadowdiv.style.backgroundImage = imgURL;
 shadowdiv.style.backgroundSize = "100% 100%"
 shadowdiv.style.width = newWidth +"px";
 shadowdiv.style.padding = "4px 12px 12px 6px";
 shadowdiv.style.backgroundColor = "transparent";
 shadowdiv.style.zIndex = "999";
 
 
 // create the div that holds the text
 var textdiv = document.createElement("div");
 textdiv.style.zIndex = "998";
 textdiv.style.backgroundColor = bubbleBcolor;
 textdiv.style.border = "2px groove #06F";
 
 // create the header of the div
 var header = document.createElement("h2");
 header.style.margin = "0px 0px 5px 0px";
 header.style.textAlign = "center";
 header.style.backgroundColor = headerBcolor;
 header.style.color = headerTcolor;
 header.innerHTML = head;
 
 shadowdiv.appendChild(textdiv);
 textdiv.appendChild(header);
 textdiv.appendChild(info);
 document.body.parentNode.appendChild(shadowdiv);
}
// on mouseout destroys bubble
function hideBubble(){
 var stopDiv = document.getElementById('shadowdiv');
 stopDiv.parentNode.removeChild(stopDiv)
}
