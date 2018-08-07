var http = require('http');

function enviaMensagem() {
  var campoMensagem = document.getElementById('campoMensagem');
  var itemChat = document.createElement("li");
  itemChat.append(campoMensagem.value);
  document.getElementsByClassName('message-list').item(0).appendChild(itemChat);
  campoMensagem.value = '';
}

function campoMensagemAtualizado() {
  if(this && this.event && this.event.which === 13) {
    enviaMensagem();
  }
}

function carregaMensagens(mensagens = ['12', '236', 'teste', 'hello']) {
  mensagens.forEach((mensagem) => {
    var itemChat = document.createElement("li");
    itemChat.append(mensagem);
    document.getElementsByClassName('message-list').item(0).appendChild(itemChat);
  });
}

function requisitaMensagens() {
  http.get('https://ipinfo.io/json', (err, res) => {

  })
}