let show = document.getElementById('show')
let form = document.getElementById('form')
let send = document.getElementById('send')

show.onclick = function(){
    form.style.display = 'block';
    show.style.display = 'none';
}

send.onclick = function(){
    let name = document.getElementById('name').value;
    let numerPhone = document.getElementById('numerPhone').value;
    let message = document.getElementById('message').value;
   
    let postSend = new XMLHttpRequest
    postSend.open("Get", `http://api.telegram.org/bot1475727166:AAFacz6ynnQSbTeAqqVA6AYFExJGCh5HbSA/sendMessage?text=Ім'я ${name},%0A Номер телефону ${numerPhone},%0A Повідомлення ${message}&chat_id=-423861170`,false)
    postSend.send()
}

// 1475727166:AAFacz6ynnQSbTeAqqVA6AYFExJGCh5HbSA API
// http://api.telegram.org/bot    //
// -423861170