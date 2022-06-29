let homepage = require('../pages/homepage');

describe('Demo Calculator Test', function () {

    it('addition test', function () {

        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('2');

        homepage.operatorUse('+');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickgoButton();

        //let result = element(by.cssContainingText('.ng-binding', '5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('6');

        browser.sleep(2000);

    });

    it('subraction test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('8');

        homepage.enterSecondNumber('5');

        homepage.operatorOption();

        homepage.operatorUse('-');

        homepage.clickgoButton();

        homepage.verifyResult('3');

        browser.sleep(2000);

    });

    it('multiplacation test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('100');

        homepage.enterSecondNumber('8');

        homepage.operatorOption();

        homepage.operatorUse('*');

        homepage.clickgoButton();

        homepage.verifyResult('800');

        browser.sleep(2000);

    });

    it('division test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('50');

        homepage.operatorOption();

        homepage.operatorUse('/');

        homepage.enterSecondNumber('2');

        homepage.clickgoButton();

        homepage.verifyResult('25');

        browser.sleep(2000);

    });

    it('modulo test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('10');

        homepage.operatorOption();

        homepage.operatorUse('%');

        homepage.enterSecondNumber('5');
        
        homepage.clickgoButton();

        homepage.verifyResult('0');

        browser.sleep(2000);

    });

    it('error test', function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('10');

        homepage.operatorOption();

        homepage.operatorUse('+');

        homepage.enterSecondNumber('5');
        
        homepage.clickgoButton();

        homepage.verifyResult('0');

        browser.sleep(2000);

    });


    //it('subtraction test', function () {
        //browser.get('https://juliemr.github.io/protractor-demo/');

       // element(by.model('first')).sendKeys('30');

       // element(by.model('second')).sendKeys('20');

        //element(by.css('[value="SUBTRACTION"]')).click();

       // element(by.css('[ng-click="doAddition()"]')).click();

       // let result = element(by.cssContainingText('.ng-binding', '10'));
       // expect(result.getText()).toEqual('10');

       // browser.sleep(2000);

    //});

    //it('multiplication test', function () {
        //browser.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('50');

        //element(by.model('second')).sendKeys('2');

        //element(by.css('[value="MULTIPLICATION"]')).click();

        //element(by.css('[ng-click="doAddition()"]')).click();

        //let result = element(by.cssContainingText('.ng-binding', '100'));
       // expect(result.getText()).toEqual('100');

       // browser.sleep(2000);

    //});

    //it('division test', function () {
        //browser.get('https://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('50');

       // element(by.model('second')).sendKeys('2');

       // element(by.css('[value="DIVISION"]')).click();

        //element(by.css('[ng-click="doAddition()"]')).click();

       // let result = element(by.cssContainingText('.ng-binding', '25'));
      //  expect(result.getText()).toEqual('25');

      //  browser.sleep(2000);

   });

