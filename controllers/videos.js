(function() {
  var app = angular.module('videoStore', []);

  app.controller('StoreController', function() {
    this.products = videodata;
  });

  var videodata = [{
    name: 'Getting Started With ReactJs',
    description: "React.js is a JavaScript library for building user interfaces. - Just the UI: Lots of people use React as the V in MVC.",
    video: "videos/Getting_Started_With_React.js.mp4"
  }, {
     name: 'Google Cardboard Assembly',
    description: "Google Cardboard Assembly Step by Step Instructions [HD].",
    video: "videos/Google_Cardboard_Assembly.mp4"
    
  },{
     name: 'How Does AngularJS Work Beginners Angular Tutorial',
    description: "What you will learn in this course. How to use Angular.js to save time, create better projects and give your users a better experience.",
    video: "videos/How_Does_AngularJS_Work_Beginners_Angular_Tutorial.mp4"
    
  },{
     name: 'How does Node.js work',
    description: "How does Node.js work', description:'New to Node.js? Check out this video that explains",
    video: "videos/How_does_Node.js_work.mp4"
    
  },{
     name: 'iPhone 7 Trailer 2016',
    description: "iPhone 7 concept trailer 2016! with Bluetooth AirPods by Beats and ChargingPad, and much more!",
    video: "videos/iPhone_7_Trailer_2016.mp4"
    
  }, {
     name: 'Getting Started With ReactJs',
    description: "Do you know what the MEAN stack is? Watch our short intro video and get ready to kick your learning into shape with this full-stack development toolkit.",
    video: "videos/What_is_the_MEAN_Stack.mp4"
  }];
})();