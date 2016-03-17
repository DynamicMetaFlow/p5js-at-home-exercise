# p5.js at-home exercise

In this exercise we will continue our exploration of p5.js. While in the last exercise we looked at many of the basic tools of programming this time we will extend these tools with several concepts that help reduce reduntant code and expand what is possible.

**In the last exercise we looked at:**

* p5.js basic setup
* Statments
* Variables
* Conditions

**In this exercise we will cover at:**

* Loops
* Arrays
* Functions
* Objects

### New sketch.js

The `sketch.js` file included in this exercise, should look somewhat familiar from the last exercise. We have made a couple of small changes mostly to show different ways of doing some things.

```javascript
var xPosition, yPosition, diameter;
```

First we have combined the declaration of the variables from last time. When you want to declare several variables you can start the first with the var keyword and right the others separated by commas. This is really a style choice. Sometimes its more compact. If you need to explain what the variables are it might make sense to right each on its own line and add comments explaining them.

```javascript
xPosition = width / 2;
yPosition = height / 2;
```

We set `xPosition` to half `width` and `yPosition` to half `height`. This just centers are circle on the canvas. It is important that we set this after calling `createCanvas()` otherwise `width` and `height` would have different values.

```javascript
noStroke();
```

This statement removes the stroke (or border) from the edge of the ellipse.

```javascript
fill(200, 0, 0);
```

Last we changed the color of the circles fill. Using three variables instead of one changes the color from grayscale to full color. The three parameters of `fill()` are red, green and blue going from 0 to 255. This one makes it a deep red.

## Loops

Creating individual circles is great but what if we want to create a lot of circles? We could write the statements over and over again or we could use a loop.

### While loop

The while loop executes the code inside its curly braces over and over again until the statement inside the parenthesis is false. 

```
while( this is true ) {
  do this
}
```

**Add the following while loop to around our ellipse code.**

```javascript
  var index = 0;
  
  while( index < 7 ) {
    xPosition = index * 80 + 80;
    
    fill(200, 0, 0);
    ellipse(xPosition, yPosition, diameter, diameter);
    
    index = index + 1;
  }
```

