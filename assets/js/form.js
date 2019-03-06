
// emailjs.sendForm(serviceID, templateID, form, userID);

// var data = {
//     service_id: '<YOUR SERVICE ID>',
//     template_id: '<YOUR TEMPLATE ID>',
//     user_id: '<YOUR USER ID>',
//     template_params: {
//         'username': 'James',
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };

// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });

$("#myForm").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'default_service');
    formData.append('template_id', 'template_EUB2dGFp');
    formData.append('form_id', 'myForm')
    formData.append('user_id', 'user_7gJ9UK1dHtR1wXTZXdkxu');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});

// emailjs.sendForm('default_service', 'template_EUB2dGFp', '#myForm')
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
