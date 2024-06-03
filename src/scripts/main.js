


$('#burger').click(() => {
    $('#menu').addClass('open');
})

$('#close').click(() => {
    $('#menu').removeClass('open');
})

const menuItems = $('#menu a');
for (let i = 0; i < menuItems.length; i++) {
    const element = menuItems.eq(i);
    element.click(() => {
        $('#menu').removeClass('open');
    })
}


//  scrolls ------------------------------------------
$('.cakes').click(() => {
    $('#choose')[0].scrollIntoView({behavior : 'smooth'});
});

$('.toOrder').click(() => {
    $('#order')[0].scrollIntoView({behavior : 'smooth'});
});

$('.aboutUs').click(() => {
    $('#aboutUs')[0].scrollIntoView({behavior : 'smooth'});
});




const choiceButtons = $('.choice__button');
for (let i = 0; i < choiceButtons.length; i++) {
    const element = choiceButtons.eq(i);
    element.click(() => {
        const orderedProduct = element.parent().prev().prev().text();
        $('#product').val(orderedProduct);
        $('#order')[0].scrollIntoView({behavior : 'smooth'});
    })     // изи пизи
}


// inputs --------------------------------------------
const allInputs = $('form input');
for (let i = 0; i < allInputs.length; i++) {
    const element = allInputs.eq(i);
    element.keydown(() => {
        element.css('border-color', 'rgb(118, 12, 34)');
        element.next().animate({fontSize : 0});
    })
}

const loader = $('#loader');
$('form .order__button').click(() => {
    let hasError = false;
    for (let i = 0; i < allInputs.length; i++) {
        const element = allInputs.eq(i);
        if (!element.val() || (i === 2 && element.val().length < 14)) {
            element.css('border-color', 'red');
            element.next().animate({fontSize : 13});
            hasError = true;
        }
    }

    if(!hasError) {
        loader.css('display', 'flex');

        const url = "https://testologia.ru/checkout";
        const data = { product: $('#product').val(), name: $('#name').val(), phone: $('#phone').val() }

        console.log(data)

        const response = fetch(url, {
            method : "POST",
            body : JSON.stringify(data)
        }).then(response => response.json())
        .then(result => loader.css('display', 'none'));
    }
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      }
  
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
  
    });
  
  });


  const present = document.querySelector('.present');
  const presentHolder = document.querySelector('.present__holder');

  present.onclick = () => {
    present.classList.add('active');
    setTimeout(() => {
        present.classList.remove('active');
    }, 3000)
  }

