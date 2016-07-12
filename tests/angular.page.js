

var AngularPage = function () {
  browser.get('http://localhost:8080/');
};

AngularPage.prototype = Object.create({}, {
    newTodo:          { get: function() { return element(by.css('.new-todo'));             }},
    title:            { get: function() { return browser.getTitle();                       }},
    placeholderText:  { get: function() { return this.newTodo.getAttribute('placeholder'); }},
    addNewTodo:       {get: function() {return element.all(by.css('li label'));            }},
    deleteButton:     {get: function() {  return element(by.css('.destroy'));              }},
    deleteItem:       {get:function()  {return element(by.binding('todo.title'));          }},
    todoList:         {get: function() { return element.all(by.binding('todo.title'));     }},
    allItem:          {get: function() { return element(by.css('a[href="#/"]'));           }},
    activeItem:       {get: function() { return element(by.css('a[href="#/active"]'));     }},
    completedItem:    {get: function() {return element(by.css('a[href="#/completed"]'));   }},
    allCheckItem:     {get: function() {return element(by.model('allChecked'));            }},
    clearCompleted:   {get:function() {return element(by.css('.clear-completed'));         }},
    
addTodo: { value : function (todoText) {
        this.newTodo.sendKeys(todoText);
        this.newTodo.sendKeys(protractor.Key.ENTER);
 }},
deleteTask:{ value: function() {
  var that = this;
  browser.actions().mouseMove(this.deleteItem).perform().then(function()
  {
  that.deleteButton.click();
  
  });
}}});

module.exports = AngularPage;