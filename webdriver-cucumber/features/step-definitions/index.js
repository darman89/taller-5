//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');



defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home register', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login register', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');	

  });
  
  When(/^I fill with (.*), (.*), (.*), (.*)$/ , (nombre,apellido,coreo,password) => {
     var cajaLogIn = browser.element('.cajaSignUp');

    var nombreinput = cajaLogIn.element('input[name="nombre"]');
    nombreinput.click();
    nombreinput.keys(nombre);

    var apellidoinput = cajaLogIn.element('input[name="apellido"]');
    apellidoinput.click();
    apellidoinput.keys(apellido)
	
	var correoinput = cajaLogIn.element('input[name="correo"]');
    correoinput.click();
    correoinput.keys(coreo)
	
	var passwordinput = cajaLogIn.element('input[name="password"]');
    passwordinput.click();
    passwordinput.keys(password)
	
    cajaLogIn.element('button=Registrarse').click()
});


  When('I try to register', () => {
    var cajaLogIn = browser.element('.cajaSignUp');
    cajaLogIn.element('button=Registrarse').click()
  });

Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
	
})



//----------------login

//Complete siguiendo las instrucciones del taller

  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');	

  });
  
  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
})

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

   When('I fill in a correct email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('a.acostag@uniandes.edu.co');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123456789')
  });
  
  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });



});