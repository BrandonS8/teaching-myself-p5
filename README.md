# Teaching Myself P5.js

## Why I chose it

I had seen some people on YouTube use it and it looked fun to play with the shapes and visual things it can do.

## What I made
I made a simple drawing application using p5.js for the first time. You can adjust the color and size of the brush as well as clear the screen.


## Learning process
I started by following the [getting started](https://p5js.org/get-started/) on the documentation, including their getting started download. That led to [the overview](https://github.com/processing/p5.js/wiki/p5.js-overview) which was nice but didn't explain a whole lot. After reading these I ventured into the [examples](https://p5js.org/examples/) to get some ideas of its use. I played around with a few of these and eventually determined I would build my own simple drawing app.

With this idea in mind I started with using the documentation to make circles show up as I dragged my cursor. I got this to work but then discovered the pmouse doc. pmouse is basically the previous mouse position. I tried this out using lines with the mouse coordinates and the pmouse coordinates which worked beautifully compared to the circle method. This line way works a lot better and I later on discovered a few other examples online also use this technique.

Most of my learning process was having an idea and looking through the documentation to figure out how to do it I had attempted to use google to find examples or answers but never found anything relevant.


## Possible Alternatives
* [Anime.js](http://animejs.com/) (Bit more complicated and heavier focus on animation. Even if you aren't interested in Anime.js at least look at their website, it's pretty great.)
* [Paper.js](http://paperjs.org/) (Pretty close to p5)


## Problems with learning
* Google is nearly useless when googling about p5 there is probably 25 sites mentioning p5.js. Google your problems with the term processing instead of p5 and try to figure out how to convert it into p5 is the best advice I can give.
* Documentation is meh


## What I think of it after using it

I personally think it's pretty lacking and inefficient. A lot of things cannot be done without clearing the canvas then redrawing only what you want. It's nice for creating shapes and some 3D effects but there is surely better ways to do this out there. It seems pretty clear it's barely used after looking for any help online for it.


## Gotchas

* Have to clear canvas then redraw only what you want to get a lot of effects to work
* The draw function is constantly looping unless you call noLoop()

## Process for setting up p5 in general
1. Just include p5 and any p5 libraries from a local or remote file
```     <script src="../p5.min.js"></script>
  //including p5 dom library
    <script src="../addons/p5.dom.min.js"></script>
    ```