// Main Js Configuration

$(document).ready(function() {

    // tabs - jquery
  $('.modal-window__tab a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.modal-window')
      .find('.modal-window__tab--active')
      .removeClass('modal-window__tab--active');
    $(this)
      .closest('.modal-window__tab')
      .addClass('modal-window__tab--active');
    $(this)
      .closest('.modal-window')
      .find('.tab--active')
      .removeClass('tab--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('tab--active');
    });
  });


    var tab = $('.tab');
    var tabSwitcher = $('.modal-window__tabs');
    var forgot = $('.forgot');

    // tabs - jquery
  $('.entrance__forgot a').on('click', function(e){
    e.preventDefault();
    $(tabSwitcher).hide();     
    $(tab).hide();   
    $(forgot).fadeIn();
  });

  $('.forgot__back-link a').on('click', function(e){
    e.preventDefault();
    $(forgot).hide();   
    $(tabSwitcher).fadeIn();       
    $(tab).fadeIn();  
  });

});