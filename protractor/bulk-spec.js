describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://develop/bulk-gate/public/dev/#!/en/list-manager/blacklist-msisdn');

    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[id="add"]')).click();
    element(by.model('vm.data.msisdn')).sendKeys('PROTRACTOR!!!!');
    
    

    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});