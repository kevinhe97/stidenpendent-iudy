// hover effects


    $("#node-1").hover(function(){
      $("#patt-1").fadeIn();
      $("#text-1").animate({
        paddingLeft: '25%',
        opacity: '1'
      });
      }, function(){
      $("#patt-1").fadeOut();
      $("#text-1").animate({
        paddingLeft: '0%',
        opacity: '0'
      });
    });

    $("#node-2").hover(function(){
        $("#patt-2").fadeIn();
        $("#text-2").animate({
            marginLeft: '-25%',
          opacity: '1'
        });
        }, function(){
        $("#patt-2").fadeOut();
        $("#text-2").animate({
            marginLeft: '0%',
          opacity: '0'
        });
      });

    $("#node-3").hover(function(){
        $("#patt-3").fadeIn();
        $("#text-3").animate({
            paddingLeft: '25%',
          opacity: '1'
        });
        }, function(){
        $("#patt-3").fadeOut();
        $("#text-3").animate({
            paddingLeft: '0%',
          opacity: '0'
        });
      });


// draggable effects

document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);
    
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
});

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
});

  /* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function(event) {
    if (event.target.className == "droptarget" ) {
        event.target.style.border = "3px dotted red";
    }
  });

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});
  
// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function(event) {
    if (event.target.className == "droptarget" ) {
        event.target.style.border = "";
    }
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
   Reset the color of the output text and DIV's border color
   Get the dragged data with the dataTransfer.getData() method
   The dragged data is the id of the dragged element ("drag1")
   Append the dragged element into the drop element
*/
document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      document.getElementById("demo").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });
  