$(document).ready(function() {
    $('#contact-form-en').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        // Construct the message to send
        var whatsappMessage = "Hello, my name is " + name + ".\n" +
                              "Email: " + email + "\n" +
                              "Phone: " + phone + "\n" +
                              "Message: " + message;

        // Encode the message for the WhatsApp URL
        whatsappMessage = encodeURIComponent(whatsappMessage);

        // Replace 'yourwhatsappnumber' with your WhatsApp number in international format
        // Replace 'whatsappMessage' with the encoded message
        var whatsappUrl = "https://wa.me/905550846000?text=" + whatsappMessage;

        // Open the WhatsApp URL in a new tab/window
        window.open(whatsappUrl, '_blank');
    });

    $('#contact-form-ar').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        // Construct the message to send
        var whatsappMessage = "مرحبا انا اسمي: "+ "\n" + name + ".\n" +
                              "بريد الالكتروني: "+ "\n" + email + "\n" +
                              "رقم الهاتف: "+ "\n" + phone + "\n" +
                              "الرسالة: "+ "\n" + message;

        // Encode the message for the WhatsApp URL
        whatsappMessage = encodeURIComponent(whatsappMessage);

        // Replace 'yourwhatsappnumber' with your WhatsApp number in international format
        // Replace 'whatsappMessage' with the encoded message
        var whatsappUrl = "https://wa.me/905388782103?text=" + whatsappMessage;

        // Open the WhatsApp URL in a new tab/window
        window.open(whatsappUrl, '_blank');
    });

    $('#contact-form-fr').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        // Construct the message to send
        var whatsappMessage = "مرحبا انا اسمي: "+ "\n" + name + ".\n" +
                              "بريد الالكتروني: "+ "\n" + email + "\n" +
                              "رقم الهاتف: "+ "\n" + phone + "\n" +
                              "الرسالة: "+ "\n" + message;

        // Encode the message for the WhatsApp URL
        whatsappMessage = encodeURIComponent(whatsappMessage);

        // Replace 'yourwhatsappnumber' with your WhatsApp number in international format
        // Replace 'whatsappMessage' with the encoded message
        var whatsappUrl = "https://wa.me/905388782103?text=" + whatsappMessage;

        // Open the WhatsApp URL in a new tab/window
        window.open(whatsappUrl, '_blank');
    });
});
