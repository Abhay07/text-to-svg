# Calligraphy Animation
Check the demo at https://abhay07.github.io/text-to-svg/
![Alt Text](https://media.giphy.com/media/LUBREsKedA2y1kk5wJ/giphy.gif)
### How to Use
#### 1. Directly using in html (without webpack)
Include https://s3.us-east-2.amazonaws.com/writing-animation/main.js in your web page   
WritingAnimation.animateText takes two argument  
1.Text to animate  
2 Id of the dom element  
#### Code sample 
``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div id="test">
    
  </div>
</body>
<script defer type="text/javascript" src="https://s3.us-east-2.amazonaws.com/writing-animation/main.js"></script></body>
<script defer>
  let writingAnimation = WritingAnimation.default;
  document.addEventListener("DOMContentLoaded", function() {
    writingAnimation.load('https://abhay07.github.io/text-to-svg/Felipa-Regular.otf', function(err,WritingAnimation){
      if(err){
        console.log("Font couldn't be loaded");
        return;
      }
    WritingAnimation.animateText('Abhay Srivastav','test');
    })
  });
</script>
</html>
```
#### 2. Using it as es6 module (with webpack)
``` yarn add svg-calligraphy ```  using yarn 

``` npm install svg-calligraphy ``` if using npm
#### Code sample 
``` javascript
import WritingAnimation from 'svg-calligraphy';

/* load methods takes font file location as an argument */
WritingAnimation.load('https://abhay07.github.io/text-to-svg/Felipa-Regular.otf', function(err,WritingAnimation){
      if(err){
        console.log("Font couldn't be loaded");
        return;
      }
      
    /* When dom has loaded, invoke animate text*/
    WritingAnimation.animateText('Abhay Srivastav','test');
})
```
# License
MIT

# Credit
This repo has been forked from
https://github.com/shrhdk/text-to-svg