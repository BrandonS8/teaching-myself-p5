# Teaching Myself P5.js
Learn more about p5 [here](https://p5js.org/)
## Why I chose it

I had seen some people on YouTube use it and it looked fun to play with the shapes and visual things it can do.

## What does p5 even do?
p5.js is essentially a simple way to create visual elements on a page, as their website says a sort of 'software sketchbook'. It's very simple to understand the syntax because it is designed for beginners.

## What I made
I made a simple 2D drawing application using p5.js for the first time. You can adjust the color and size of the brush as well as clear the screen. You can use it yourself by going [here.](https://brandons8.github.io/teaching-myself-p5/my_app/)

![drawing app I made](https://i.imgur.com/1useksU.png)


## Learning process
I started by following the [getting started](https://p5js.org/get-started/) on the documentation, including their getting started download. That led to [the overview](https://github.com/processing/p5.js/wiki/p5.js-overview) which was nice but didn't explain a whole lot. After reading these I ventured into the [examples](https://p5js.org/examples/) to get some ideas of its use. I played around with a few of these and eventually determined I would build my own simple drawing app.

With this idea in mind I started with using the documentation to make circles show up as I dragged my cursor. I got this to work but then discovered the pmouse doc. pmouse is basically the previous mouse position. I tried this out using lines with the mouse coordinates and the pmouse coordinates which worked beautifully compared to the circle method. This line way works a lot better and I later on discovered a few other examples online also use this technique.

Most of my learning process was having an idea and looking through the documentation to figure out how to do it I had attempted to use google to find examples or answers but never found anything relevant.

## Problems with learning
* Google is nearly useless when googling about p5 there is probably 25 sites mentioning p5.js. Google your problems with the term processing instead of p5 and try to figure out how to convert it into p5 is the best advice I can give.
* Documentation is pretty good, usually short and simple if you scroll down a bit on whatever page you are on.


## What I think of it after using it

I personally think it's pretty lacking and inefficient. A lot of things cannot be done without clearing the canvas then redrawing only what you want. It's nice for creating shapes and some 3D effects but there is surely better ways to do this out there. It seems pretty clear it's barely used after looking for any help online for it. 

For beginners wanting a few simple animations on their website it may be a good idea to checkout p5 but if you are more experienced it's probably not for you.


## Gotchas

* Have to clear canvas then redraw only what you want to get a lot of effects to work.
* The draw function is constantly looping unless you call noLoop(). This is very easy to forget and blow up your computer.

## Some questions about p5
* What are the two main functions used in a p5 app?
> setup() and draw()
* Which of the above functions loops infinitely unless told otherwise?
> draw()
* How do you make a canvas that is equal to the height/width of the window? 
> createCanvas(windowWidth, windowHeight)


## Possible Alternatives
* [Anime.js](http://animejs.com/) (Bit more complicated and heavier focus on animation. Even if you aren't interested in Anime.js at least look at their website, it's pretty great.)
* [Paper.js](http://paperjs.org/) (Pretty close to p5)




## Process for setting up p5
1. Just include p5 and any p5 libraries you want to use from a local or remote file.
```html
<script src="../p5.min.js"></script>
<!-- including p5 dom library, this one is locally stored -->
<script src="../addons/p5.dom.min.js"></script>
```
2. Include your p5 script.
```html
<script src="sketch.js"></script>
```

## Running this application
1. Just download and open index.html in your browser