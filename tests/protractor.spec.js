
var AngularPage = require('./angular.page.js');
describe('TodoMVC app', function() {
 
  var page;

  beforeEach(function() {
    page = new AngularPage();
  });
    
 it('should have the right title', function() {
    //expected results
    expect(page.title).toBe('Typescript & AngularJS • TodoMVC');
  });

  it('should have placeholder text in the new todo input', function()  {
    //expected results
    expect(page.placeholderText).toEqual('What needs to be done?');
  });

it('should add a new todo', function(){
  //add todo list
page.addTodo('buybeer');

page.addTodo('buy grill');

expect(page.addNewTodo.count()).toEqual(2);

});

//validate the remove todo item lists functions correctly

it('validate the remove todo item lists' ,function(){

    // call deleteTask function
   page.deleteTask();
    
    // verify no items are in list
   
    expect(page.todoList.count()).toEqual(1);
  });



it('should validate the All todo item list', function () {

 page.allItem.click();
//expect results
expect(page.allItem.getText()).toBeTruthy();


});

it('should validate the Active todo item list ', function() {
   
page.activeItem.click();
//expected results
expect(page.activeItem.getText()).toBeTruthy();

});

it('should validate the completed todo item list', function() {

page.completedItem.click();
//expected results
expect(page.completedItem.getText()).toBeTruthy();
});


//validate all todo item  list is checked 

it('should validate all the checked todo item list',function(){
//validate all the checked todo item list
page.allCheckItem.click();
//expected results
expect(page.allCheckItem.isSelected()).toBeTruthy();
//validate clear completed button
page.clearCompleted.click();
 //expected results
expect(page.clearCompleted.toBe == null);

});
});

  






