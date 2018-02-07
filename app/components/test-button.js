import Component from '@ember/component';
import { later } from '@ember/runloop';

export default Component.extend({
  actions: {
    buttonPress() {
      later(function(){
        try {
          console.log('button was pressed!!!');

          function onConfirm(buttonIndex) {
            //alert("test alert");
            console.log('onConfirm dismissed was called');

          }

          navigator.notification.confirm(
            'You are the winner!');

        }
        catch(err){
          console.log('error: '+err);
        }
      },100);
    },
    buttonPress2(){
      try {
        console.log('button 2 was pressed!!!');

        function alertDismissed() {
          // do something
          console.log('alert dismissed was called');
          // Beep twice!
          navigator.notification.beep(1);
        }

        navigator.notification.alert(
          'You pressed the alert button!',  // message
          alertDismissed,       // callback
          'Alert title',            // title
          'Beep!'                  // buttonName
        );

      }
      catch(err){
        console.log('error: '+err);
      }
    },
    buttonPress3(){
      try {
        console.log('button 3  was pressed!!!');

        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }

        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Name Prompt',            // title
            ['Submit','Cancel'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );

      }
      catch(err){
        console.log('error: '+err);
      }
    }
  }

});
