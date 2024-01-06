const TOKEN = "5430132063:AAGIpcq9JNVigEBnhGDfxT6LZUB8ltGR87k";
const CHAT_ID = "-1001762654625";
const ULR_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form = document.querySelector('.form__callback');
const secsies = document.getElementById('secsies');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Zurückrufanfrage</b>\n`;
    message += `<b>Vorname:</b> ${this.elements.firstName.value}\n`;
    message += `<b>Nachname:</b> ${this.elements.lastName.value}\n`;
    message += `<b>E-Mail:</b> ${this.elements.email.value}\n`;
    message += `<b>Telefonnummer:</b> ${this.elements.phone.value}\n`;
    message += `<b>Nachricht:</b> ${this.elements.message.value}\n`;

    axios.post(ULR_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
    .then((res) => {
        this.elements.firstName.value = "";
        this.elements.lastName.value = "";
        this.elements.email.value = "";
        this.elements.phone.value = "";
        this.elements.message.value = "";

        Swal.fire({
            title: 'Erfolgreich gesendet!',
            text: 'Vielen Dank für Ihre Anfrage.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              container: 'custom-swal-container',
              popup: 'custom-swal-popup',
              confirmButton: 'custom-swal-confirmButton',
            }
          });
    })
    .catch((err) => {
        console.log(err);
    });
});


