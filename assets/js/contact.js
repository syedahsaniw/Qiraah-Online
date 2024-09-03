$(document).ready(function(){
    
    (function($) {
        "use strict";
    
    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: "Your name must consist of at least 2 characters."
                },
                subject: {
                    required: "Please enter a subject.",
                    minlength: "Your subject must consist of at least 4 characters."
                },
                number: {
                    required: "Please enter your number.",
                    minlength: "Your number must consist of at least 5 characters."
                },
                email: {
                    required: "Please enter your email address."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: "Your message must consist of at least 10 characters."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                            $('.modal').modal('hide');
                            $('#success').modal('show');
                        });
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn();
                            $('.modal').modal('hide');
                            $('#error').modal('show');
                        });
                    }
                });
            }
        });
    });
        
 })(jQuery)
})
