let homepage = function(){

    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let operatorType = element(by.css('[ng-model="operator"]'));
    let operatorValue = element(by.css('[ng-options="value for (key, value) in operators"]'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));


    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.operatorOption = function(){
        operatorType.click();
    };

    this.operatorUse = function(operator){
        operatorValue.sendKeys(operator);
    };

    this.clickgoButton = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };
    
};

module.exports = new homepage();