$(function(){
  var valList = [];

  $('.form').on('submit',function(e){
    e.preventDefault();
    var item = $('.todo-input').val();
    var empty = $('.todo-input').val('')

    if (item.trim() === '') {
      return empty;
    }

    valList.push(item);

    $('.list-block').append('<li>' + item + '</li>');
    empty;
  })

  
})