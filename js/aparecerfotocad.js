var imagem1 = document.getElementById('foto');
function previewImage1() {
    var input = document.getElementById('foto');
    var ver = document.getElementById('eueu');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            ver.innerHTML = '<img src="' + e.target.result + '" alt="Imagem" class="jk">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        ver.innerHTML = '';
    }
}

imagem1.onchange = previewImage1
var imagem2 = document.getElementById('foto2');
function previewImage2() {
    var input = document.getElementById('foto2');
    var ver = document.getElementById('eueu2');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            ver.innerHTML = '<img src="' + e.target.result + '" alt="Imagem" class="jk">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        ver.innerHTML = '';
    }
}

imagem2.onchange = previewImage2
var imagem3 = document.getElementById('foto3');
function previewImage3() {
    var input = document.getElementById('foto3');
    var ver = document.getElementById('eueu3');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            ver.innerHTML = '<img src="' + e.target.result + '" alt="Imagem" class="jk">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        ver.innerHTML = '';
    }
}

imagem3.onchange = previewImage3
var imagem4 = document.getElementById('foto4');
function previewImage4() {
    var input = document.getElementById('foto4');
    var ver = document.getElementById('eueu4');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            ver.innerHTML = '<img src="' + e.target.result + '" alt="Imagem" class="jk">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        ver.innerHTML = '';
    }
}

imagem4.onchange = previewImage4