$('.add-btn').click(addTodo);
function addTodo() {
  const todos = $('.todos-input').val();
  const checkBox = "<input type='checkbox' class='checked-box' />";
  const deleteBtn = "<button type='button' class='delete-btn'><span class='delete-text'>x</span></button>";
  const todoList = "<div class='list-container'>" + checkBox + "<span class='todo-text'>" + todos + "</span>" + deleteBtn + "</div>";
  const todoItem = "<li class='todos'>" + todoList + "</li>";
  const todosList = '#todos-list';
  $(todosList).append(todoItem);
  let isChecked;

  //check a todo
  $('.checked-box').on('change', function () {
    isChecked = $(this).is(':checked');
    if (this.checked) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });

  //completed todo
  $('.todos').on('change', function() {
    if (isChecked) {
      $('.completed-todos').append(this);
    } else {
      $('#todos-list').append(this);
    }
  });

  //delete todo
  $('.delete-btn').on('click', function() {
    $(this).parent().remove();
  });
}

//strike through a todo
$(document).on('click', 'span', function() {
  $(this).toggleClass('strike');
});

const todosInput = '.todos-input';
$(todosInput).attr('maxlength', 20);
//enter a todo with key
$(todosInput).on('keyup', function(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    addTodo();
  }
});