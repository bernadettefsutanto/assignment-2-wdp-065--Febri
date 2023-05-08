const btnSubmit = document.getElementById('btn-submit')

function showForm() {
    // Hide the data and show the form
    document.querySelector('div').style.display = 'none';
    document.querySelector('form').style.display = 'block';
    document.getElementById('btnhide').style.display = 'block';
    document.getElementById('input-nama').value
    document.getElementById('input-role').value
    document.getElementById('input-umur').value
    document.getElementById('input-availability').value
    document.getElementById('input-lokasi').value
    document.getElementById('input-pengalaman').value
    document.getElementById('input-email').value
    document.getElementById('btn-submit').value
}

var textEmail = document.getElementById('text-email')
var inputEmail = document.getElementById('input-email')

var inputNama = document.getElementById('input-nama')
var inputUmur = document.getElementById('input-umur')
var inputPengalaman = document.getElementById('input-pengalaman')
var inputLokasi = document.getElementById('input-lokasi')
var inputRole = document.getElementById('input-role')
var inputAvailability = document.getElementById('input-availability')

var textNama = document.getElementById('text-nama')
var textUmur = document.getElementById('text-umur')
var textPengalaman = document.getElementById('text-pengalaman')
var textLokasi = document.getElementById('text-lokasi')
var textRole = document.getElementById('text-role')
var textAvailability = document.getElementById('text-availability')
var errorsString = ['']

btnSubmit.addEventListener('click', function (event) {
    // event.preventDefault()
    var namaOk = false
    var umurOk = false
    var availabilityOk = false
    var lokasiOk = false
    var pengalamanOk = false
    var emailOk = false

    if (/^[a-zA-Z]+$/.test(inputNama.value)) {
        namaOk = true
    } else {
        errorsString.push('nama')
    }

    if (/^[0-9]+$/.test(inputUmur.value)) {
        umurOk = true
    } else {
        errorsString.push('umur')
    }

    if (/^[0-9]+$/.test(inputAvailability.value)) {
        availabilityOk = true
    } else {
        errorsString.push('availability')
    }

    if (/^[a-zA-Z]+$/.test(inputLokasi.value)) {
        lokasiOk = true
    } else {
        errorsString.push('lokasi')
    }

    if (/^[0-9]+$/.test(inputPengalaman.value)) {
        pengalamanOk = true
    } else {
        errorsString.push('pengalaman')
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
        emailOk = true
    } else {
        errorsString.push('email')
    }

    if (!namaOk | !umurOk | !availabilityOk | !lokasiOk | !pengalamanOk | !emailOk) {
        alert("Format tidak sesuai, silahkan masukkan data yang benar untuk format:" + errorsString.join(', '));
        console.log('validation fail')
    } else {
        event.preventDefault();
        var confirmation = confirm('Apakah data sudah sesuai ?');
        if(confirmation == true){
        console.log('validation success')
        textNama.innerText = inputNama.value
        textPengalaman.innerText = inputPengalaman.value
        textUmur.innerText = inputUmur.value
        textLokasi.innerText = inputLokasi.value
        textRole.innerText = inputRole.value
        textAvailability.innerText = inputAvailability.value
        textEmail.innerText = inputEmail.value
        alert('Data berhasil dirubah!');
    }
    }
})

function resetForm() {
    document.getElementById('input-nama').value = 'Input your Name';
    document.getElementById('input-role').value = 'select';
    document.getElementById('input-umur').value = 'Input your age';
    document.getElementById('input-availability').value = 'Input your Availability';
    document.getElementById('input-lokasi').value = 'Type in your location';
    document.getElementById('input-pengalaman').value = 'Input your Experience';
    document.getElementById('input-email').value = 'Type in your email';
    document.getElementById('text-nama').innerText = 'Febri';
    document.getElementById('text-role').innerText = 'Designer';
    document.getElementById('text-umur').innerText = '28';
    document.getElementById('text-availability').innerText = '10';
    document.getElementById('text-lokasi').innerText = 'Bandung';
    document.getElementById('text-pengalaman').innerText = '1';
    document.getElementById('text-email').innerText = 'febri@mail.com';
}