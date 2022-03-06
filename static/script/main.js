document.addEventListener('DOMContentLoaded', ()=>{
var textOverImages = document.getElementsByClassName("onClickTextOverImage");

var previousTextOverImage;
for (var i = 0; i < textOverImages.length; i++) {
    
  textOverImages[i].onclick = function(event) {
    
    var classes = this.classList
    if (!event) {
        var event = window.event;
     }
    
    if  ((!classes.contains("show")) &&(event.button==0)) {
      //classes.remove("show");
      event.preventDefault();
      classes.add("show");
     //alert(event.button)
        } 
        else {
            if (previousTextOverImage != null)
            if((event.button==0)&&(event.ctrlKey)){
                event.preventDefault();
            previousTextOverImage.classList.remove("show");
          previousTextOverImage = this;}}
    }

    textOverImages[i].oncontextmenu = function(event) 
    {   var classes = this.classList
        if (!event) {
            var event = window.event;
         }
        
        if  ((!classes.contains("expand")) &&(event.button==2) ) {
            event.preventDefault();
        classes.add("expand");
        } 
        else {
        if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("expand");
      previousTextOverImage = this;}
    }
        
        //textOverImages[i].onauxclick = 
        //function(event) {
    //
      //      alert(event.button)
        //    } 
    
    //if  ((!classes.contains("big")) && (event.ctrlkey) && (event.button==0)) {
        //classes.remove("show");
      //  classes.add("big");
    //}
    //else {
      //if (previousTextOverImage != null)
        //previousTextOverImage.classList.remove("show");
      //previousTextOverImage = this;
      //classes.add("show");
    //}
  }
  /*let movies = [];
  // example {id:1592304983049, title: 'Deadpool', year: 2015}
  const addLabel = (ev)=>{
      //ev.preventDefault();  //to stop the form submitting
      let movie = {
          //id: Date.now(),
          title: document.getElementById('title').value,
          year: document.getElementById('yr').value
      }
      movies.push(movie);
      document.forms[0].reset(); // to clear the form for the next entries
      //document.querySelector('form').reset();
 
      //for display purposes only
      console.warn('added' , {movies} );
      let pre = document.querySelector('#msg pre');
      pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
  
      //saving to localStorage
      localStorage.setItem('MyMovieList', JSON.stringify(movies) );
  }
*/


var getlabels = document.getElementsByName("label");
for (var i = 0; i < getlabels.length; i++) {

   getlabels[i].addEventListener("keydown",
   function(event) {
      if (!event) {
         var event = window.event;
      }
        
      if (event.keyCode == 13){
        event.preventDefault();
        //localStorage.setItem('labels', JSON.stringify({'id':this.id,'label':this.value}) );
        var lbldata = {'id':this.id,'label':this.value}
        $.ajax({
            url:"/test",
            type:"POST",
            contentType: "application/json",
            data: JSON.stringify(lbldata)});
      }
   }, false);
}



});


