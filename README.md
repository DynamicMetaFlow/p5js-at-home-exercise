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

The *while* loop executes the code inside its curly braces over and over again until the statement inside the parenthesis is false. 

```
while( this is true ) {
  do this
}
```

**Replace our ellipse code inside the `draw()` function with the following *while* loop. Save it and reload `index.html`.**

```javascript
  var index = 0;
  
  while( index < 7 ) {
    xPosition = index * 80 + 80;
    
    fill(200, 0, 0);
    ellipse(xPosition, yPosition, diameter, diameter);
    
    index = index + 1;
  }
```

You should see seven red circles instead of one. Let walk through this code. 

```javascript
  var index = 0;
```

First we create a new variable called index and set its value tp `0`. This will help us keep track of our loops. 

```javascript
  while( index < 7 ) {
```

Then as we enter the *while* loop it checks to see if `index ` is less than seven. It won't be because we just set it to zero.

```javascript
    xPosition = index * 80 + 80;
```

We use index to set the xPosition. We multiply index by 80 to set its position. We then add 80 to offset it by 80 pixels from the left of the screen. So in this loop `0 * 80 + 80 = 80`. So the first circle will be 80 pixels from the left edge of the canvas.

```javascript
    fill(200, 0, 0);
    ellipse(xPosition, yPosition, diameter, diameter);
```

This code should be familiar as it exactly the same as before. Because we used a variable for xPosition. We change its value in the last statement but the code for the  `ellipse()` statement stays the same.

```javascript
    index = index + 1;
```

This last line inside the *while* loop increase the value of `index` by one.

The loop returns to the top of the *while* loop. The value of `index` is now one which is still less than 7 so it keeps going. 

We now set xPosition to `1 * 80 + 80 = 160`. In fact this is really the only line where anything different happens when we run the code.

As the loop continues it should change the value of xPosition as follows:

```javascript
  xPosition = 0 * 80 + 80; \\xPosition gets 80
  xPosition = 1 * 80 + 80; \\xPosition gets 160
  xPosition = 2 * 80 + 80; \\xPosition gets 240
  xPosition = 3 * 80 + 80; \\xPosition gets 320
  xPosition = 4 * 80 + 80; \\xPosition gets 400
  xPosition = 5 * 80 + 80; \\xPosition gets 320
  xPosition = 6 * 80 + 80; \\xPosition gets 400
```

When `index` reaches the value of six it will reach the end of the loop. And increase its value to seven when it gets to `index = index + 1;`

Now it will return to the top but the seven is not less than seven so it ends the loop. This means the loop goes seven times but counts up from 0 to 6. It is very common to count from zero when incrementing loops and this will come in handy when we look at arrays.

The *while* loop avoe is set up in a very particular way. Many *while* loops use other values other than an incrementing index to check if they should continue. You might repeat a *while* loop to check for user input only stopping when the user presses a key or you might repeat a *while* loop until you get some kind of error. Our *while* loop however is the perfect introduction to the for loop.

### For loop

**Replace the code from the previous *while* loop, including the `var index = 0;` statement with the following:**

```javascript
  for(var index = 0; index < 7; index = index + 1) {
    xPosition = index * 80 + 80;
    
    fill(200, 0, 0);
    ellipse(xPosition, yPosition, diameter, diameter);    
  }
```

What changes when you run this code? The answer should be nothing. We have replicated the *while* loop from above only this time we have used the more compact *for* loop. Usually when you are incrementing through a set of values like 0, 1, 2, 3, etc. a *for* loop is your best option. 

```javascript
  for(var index = 0; index < 7; index = index + 1) {
```

With the for loop we have moved all of the statements regarding `index` inside the *for* loops parenthesis.

```javascript
  for(set value; test to stop loop; how to increment) {
```

```javascript
var index = 0;
```

We create and set the value of our index in the first statement in the parenthesis. In the *while* loop this was done before the loops starts.

```javascript
index < 7;
```

We enter the test we will use to see when the loop stops in the next statement. In the *while* loop this is the only contents of the loops parenthesis.

```javascript
index = index + 1
```

This last statement tells the for loop how to increment index. In the while we had to run this as the last line inside our curly braces. Its important to note that this last statement inside the for loop shouldn't have a semi-colon at the end.

The for loop is great for this kind of incrementing need because it moves all the code related to how the loop works into the loop parenthesis itself. The only code left in the curly braces is what we want the loop to do each time.

Seven red circles are great, but what if we want to have different colors? Arrays will help us with that.

## Arrays

Arrays are type of variable that holds multiple values. If you have a list of presidents, or a list pictures you want to load, or as in our case a list of colors, an array is a much easier way to store these values.

Lets take a look at how they work. Arrays are declared like any other variable, with the `var` keyword.

### Creating arrays

```javascript
var myArray;
```

To add values you can add whole list of items by using square brackets `[ ]` and seperating them with commas. Like this:

```javascript
var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
```

Here we added a list of strings but we could also add numbers.

```javascript
var temperatures = [32, 45, 60, 21, 78, 80, 95];
```

### Accessing values

Arrays values can be accessed by using their name followed by the index of the value you want inside square brackets. Like this.

```javascript
presidents[4];
```

#### Start at zero

Its important to remember that arrays always start at zero. So if I want to get the name of the first president I would enter zero between the square brackets instead of one. Like this.

```
presidents[0];
```

### Changing values

You can also assign new values to array using this same syntax like this.

```javascript
temperature[3] = 50;
```

This works if you need to add a new value to the end as well.

### Determining array size

You can determine how long an array is (how many elements it has) by using its `length` property. 

```javascript
var numberOfElements = temperature.length
```

The added benefit of any array over creating lots of variables is that when we have a list of things like colors we can use our loops to go through every value in the array. Lets use arrays to add some different colors to our circles.

**Add the following to the top of your sketch above the `setup()` function.**

```javascript
var colors;
```

**Add the following inside the `setup()` function.**

```javascript
colors = ["#ff0000", "#ffcc00", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
```

This array holds a list of strings each of which represents a hexidecimal color value. Hexdecimal strings (like in HTML) are yet another way to set the color value in p5.js.

**Replace "`200, 0, 0`" inside the `fill()` statement with `colors[index]` Save and reload `index.html`.**

We replace our red with the values stored inside our array. Each time it goes through the loop it will pick the next color in the array.

You should now see seven different colored circles. 

Currently we are looping seven times and we have seven values in our array. But what if we add or take away a value from our array? We have to update the code in two places. It would make more sense to tell the loop to iterate for exactly as many times as we have elements in our `colors` array.

**Replace `index < 7` in the *for* loop with `index < colors.length`.**

## Functions

You have already used functions for a while now. First you have been adding code to both the `setup()` and `draw()` functions since we started. Second you have called many built-in functions of the p5.js library like `fill(200, 0, 0);` and `ellipse(50, 50, 60, 60);`. Now lets create our own function. We can follow the same format as `setup()` or `draw()`.

**Add the following function definition to the bottom of `sketch.js`**

```javascript
function circle( color ) {
    fill( color );
    ellipse(xPosition, yPosition, diameter, diameter); 
}
```

This code declares a new function called `circle()`. It starts with the keyword `function`, much like we declare variables with `var`. It is followed by a set of parenthesis. These contain parameters (variables) that we can pass into the function. Although parameters are variables we **don't** declare them with the keyword `var`.

This parameter `color` is now available inside the function. We use it in the first line to set the color of the fill. The next line is just like our previous `ellipse()` statement.

We can now use our new function instead of those lines inside our four loop.

**Replace the `fill()` and `ellipse()` statments inside the for loop with:**

```javascript
circle( colors[index] );
```

We turned two lines of code into one. Probably not worth the effort considering we had to add the function definition. This is a really simple function however. We could have function that has many more lines of code and one that we called multiple times throughout our code. In that case editing it only once would be prefered. Like well-named variables well-named functions help make your code more readable.

### Scope

We pass the `color` parameter into the our function but the `xPosition`, `yPosition` and `diameter` variables are all just used. That is because these are **global variables**. They are accessible anywhere in our document. 

We made them global when we declared them at the top of `sketch.js` like this `var xPosition, yPosition, diameter;`. If we didn't declare them there and instead did so inside the `setup()` function they would only be accessible to `setup()`. They would be **local** to the `setup()` function. Which means we couldn't use them later inside `draw()`. 

This is called variable scope, meaning the scope of the code that can access this variable. Most of our variables so far have been global, but some have not. The `index` variable declared with the *while* loop was only available inside `draw()`. If we tried to use it elsewhere we would get an error. When we switched to the *for* loop our `index` variables scope became even smaller. It is only accessible inside the *for* loop. If you tried to use it outside the *for* loop inside `draw()` it wouldn't work. Our `color` parameter is only accessible inside our `circle()` function.

In general you can determine scope by which set of {} Brackets the `var` declaration is used. One thing to keep is that when a variable is outside the scope of a function its like it never existed. So technically you can create a new local variable with the same name. This is not an error but it can easily cause bugs.

In general using global variables inside function definition isn't the best design. You want your function to standalone. If we change the global variable somewhere else it might change how the function works. Lets fix this by add some new parameters for our `circle()` function. We will still use our global variables inside draw we will just pass them to the `circle()` function when we call it.

**Change the `circle()` function definition to look like this:**

```javascript
function circle( x, y, d, color ) {
    fill( color );
    ellipse(x, y, d, d); 
}
```

**Change the call to `circle()` function inside the draw() function to the following:**

```javascript
circle( xPosition, yPosition, diameter, colors[index] );
```

Now our circle function will work without reference to the global variables.

## Objects
```javascript
function ball(xPos, yPos, rad) {
  this.xPosition = xPos;
  this.yPosition = yPos;
  this.radius = rad;
  this.xVelocity = 0;
  this.yVelocity = 0;
  
  this.draw = function() {
    ellipse(this.xPosition, this.yPosition, this.radius * 2, this.radius * 2);
  };
  
  this.updatePosition = function() {
    if( this.xPosition < 0 || this.xPosition > width) {
      this.xVelocity = -this.xVelocity;
    }
    
    if( this.yPosition < 0 || this.yPosition > height) {
      this.yVelocity = -this.yVelocity;
    }
  
    this.xPosition = this.xPosition + this.xVelocity;
    this.yPosition = this.yPosition + this.yVelocity;
  };
}
```