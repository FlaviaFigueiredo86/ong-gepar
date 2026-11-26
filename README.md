# ONG GEPAR — Front-end

## Abrir no VS Code
1. Extraia o ZIP. Abra a pasta ong-gepar em File > Open Folder.
2. Terminal > New Terminal. Execute `npm install` e depois `npm run dev`.
3. Abra o endereço exibido no terminal.

## Conteúdo
React, Vite, React Router, componentes reutilizáveis, layout responsivo, guia PDF original em public e links oficiais das redes sociais. O logo e as ilustrações são provisórios: substitua public/logo.svg pelo logo oficial (ou altere o caminho em Layout.jsx). Os animais são exemplos fictícios.

## Integração
Sem configuração, o site usa dados fictícios e não envia nem armazena formulários. Para integrar, crie .env.local com VITE_API_URL=http://localhost:8080/api (ajuste conforme a equipe). O contrato proposto é GET /animais (array de objetos id, nome, especie, idade, sexo, porte, descricao, fotoUrl opcional) e POST /adocoes (nome, email, telefone, cidade, mensagem, animalId). Ajuste src/services/api.js conforme o contrato real do Spring Boot e configure CORS no servidor. Não há backend nem banco neste ZIP. Não use dados pessoais reais antes de validar a integração e a política de privacidade.

## Conteúdo institucional
Edite src/services/conteudo.js para cadastrar feiras confirmadas e depoimentos autorizados. O calendário permite selecionar o mês. Nenhum evento ou depoimento real foi inventado.
