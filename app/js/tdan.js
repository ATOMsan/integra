
	$(function() {
	
	$('.situation').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active').siblings('.situation').removeClass('active');
	});
/*
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "http://new.integrasky.ru/wp-content/themes/integra/contact.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
*/
/*
	$("form").validate({
		messages: {
			name: "Введите имя",
			email: {
				required: "Введите мейл",
				email: "Введите валидный мейл"
			}
		},
		submitHandler: function(form){
			var msg = $(form).find('input, textarea');
            $.ajax({
                type: 'POST',
                url: 'http://new.integrasky.ru/wp-content/themes/integra/contact.php',
                data: msg,
                success: function (data) {
                	if(data == '1'){
                		$("a[href='#success']").click();
                		form.reset();
                	}else{
                		alert("error");
                	}
                    console.log(data);
                },
                error: function (xhr, str) {
                    alert(xhr.responseCode);
                }
            });
		}

	});
*/

$("form").each(function(){
	$(this).validate({
		rules: {
					name: "required",
					phone: "required",
					email: {
						required: true,
						email: true
					}
			},
			messages: {
					name: "Укажите Ваше имя !",
					phone: "Укажите Ваш телефон !",
					email: {
						required: "Укажите Ваш E-mail !",
						email: "E-mail должен быть в формате name@mail.com"
					}
			},
			onfocusout: false,
		submitHandler: function(form) {
			var msg = $(form).find('input, textarea');
			$.ajax({
				type: 'POST',
				url: 'http://new.integrasky.ru/wp-content/themes/integra/contact.php',
				data: msg,
				success: function (data) {
					if(data == '1'){
						form.reset();
					}else{
						alert("error");
					}
						console.log(data);
				},
				error: function (xhr, str) {
						alert(xhr.responseCode);
				}
		});
		}
	});
});

});
