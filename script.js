// Optional: Typing Effect for Confession Text
const confessionText = document.querySelector('.confession-text');
const confessionMessage = "পর্ণা, আমি প্রতিটি মুহূর্তে তোমার কথা ভাবি, আর আর কোনোভাবে এই অনুভূতি গোপন রাখতে পারছি না। আমি সত্যিই তোমাকে খুব ভালোবাসি, আর আমার হৃদয় চায় তোমাকে জানাতে, তুমি আমার জীবনে কতটা বিশেষ।";

let index = 0;

function typeMessage() {
    if (index < confessionMessage.length) {
        confessionText.innerHTML += confessionMessage.charAt(index);
        index++;
        setTimeout(typeMessage, 100); // Adjust typing speed here
    }
}

document.addEventListener('DOMContentLoaded', typeMessage);

// Optional: Confirmation before Proceeding to Confession
document.querySelector('.btn').addEventListener('click', function(event) {
    const confirmAction = confirm("আপনি কি নিশ্চিত? আপনি আমার 고বোধ শুনতে চান?");
    if (!confirmAction) {
        event.preventDefault(); // Prevent link if not confirmed
    }
});
