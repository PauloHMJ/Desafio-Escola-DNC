# Desafio 1 - Resolução

- Link do site disponibilizado: https://projeto-escola-dnc.netlify.app/

- Link da Planilha de registro de informações: https://docs.google.com/spreadsheets/d/11JZbxYYlyq52AD2bk8W7eZfGZtkHlxz9AWC2KOI-JS4/edit?usp=sharing




## Arquivo HTML

O arquivo HTML é uma página de destino (landing page) para um site de arquitetura. Ele contém os seguintes elementos principais:

- Um cabeçalho com o título e descrição da empresa de arquitetura.
- Uma seção de informações com estatísticas sobre os empreendimentos construídos, anos de mercado e experiência, e metros quadrados em projetos construídos.
- Uma seção com uma imagem e texto destacando a história e experiência dos arquitetos.
- Uma seção de formulário para os visitantes entrarem em contato e conhecerem mais sobre os serviços oferecidos.

O formulário utiliza o método POST para enviar os dados para uma API externa (`https://api.sheetmonkey.io/form/4w2NbCQXnEdgHqju837Z2w`). Ele contém campos para o nome e e-mail do usuário, bem como um campo oculto para registrar a data e hora de envio do formulário.

## Arquivo JavaScript

O arquivo JavaScript (`index.js`) está vinculado ao arquivo HTML e adiciona funcionalidade ao formulário de contato. Ele contém uma função chamada `Verificar()` que é executada quando o botão "Fale Conosco" é clicado.

Essa função realiza a verificação dos campos de entrada do formulário. Se o campo de nome ou e-mail estiver vazio, a função não faz nada. Caso contrário, exibe uma mensagem de alerta ao usuário, informando que o formulário foi enviado com sucesso.
