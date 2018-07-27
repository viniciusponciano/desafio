## Desafio front-end

Este desafio é parte do processo seletivo para o cargo de Desenvolvedor Front-end no Clipping, cuja vaga está descrita [neste link](http://ajuda.clippingcacd.com.br/vagas/oportunidade-para-desenvolvedor-no-clipping).

O teste é focado em design de código e conhecimento de orientação a objetos. O objetivo é avaliar sua experiência em escrever um código de fácil manutenção, baixo acoplamento e alta coesão.


### Apresentação do problema

O arquivo `index.html` contém o esqueleto de uma aplicação de chat totalmente *bare-bones*: uma `<ul>` com uma lista de mensagens enviadas, e um `<button>` + `<input>` para envio de novas mensagens.

A feature inicial de nossa aplicação é bastante simples: o usuário deve poder 
entrar uma mensagem na caixa de texto e, ao apertar o botão "Enviar" (ou 
pressionar <kbd>Enter</kbd>), a mensagem deverá aparecer na lista de mensagens.

Isoladamente, essa é uma feature simples de implementar, mas queremos que você 
leve em conta a evolução futura do software. Imagine que o app irá crescer em 
features, e adicionar coisas como:
* envio de mensagens via ajax, com as respostas vindo via `long-polling`
* chat em realtime via WebRTC ou Firebase

**Você deve pensar num design de código que suporte esses casos de uso sem grandes modificações.**

**IMPORTANTE: Não é necessário integrar o código ao backend! O software deve ser estruturado de forma que seja fácil integrar com diferentes estratégias de backend, mas neste desafio estas features não precisam ser implementadas.**

### Avaliação

Para nos enviar seu código, você pode fazer um fork desse repositório e nos mandar um pull-request.

### Créditos
Adaptado de https://github.com/Creditas/challenge
