# FELMOR Transporte — atualização de veículos

## Seleção de capacidade
- Executivo: 4 lugares, multiplicador 1.0 — utiliza integralmente as tarifas originais dos arquivos `data/*.json`.
- Família: 6 lugares, multiplicador 1.5 — aplica acréscimo de 50% somente sobre a tarifa base da rota.
- Os adicionais (feira, animal, praia, espera e noturno) permanecem calculados pelas regras originais e não recebem o multiplicador.
- A opção selecionada aparece no resumo enviado pelo WhatsApp.
- O padrão inicial continua sendo 4 lugares.

## Preservação
Os 20 arquivos JSON da pasta `data/` foram mantidos byte a byte, sem alteração.
O código de dados e as demais funcionalidades foram preservados. A alteração de cálculo limita-se à escolha de capacidade do veículo e à apresentação do valor correspondente.

## Publicação
Substitua os arquivos correspondentes na raiz do repositório, mantendo todas as pastas. O novo arquivo `css/vehicle-options.css` é carregado pelo `index.html`.

Faça testes no GitHub Pages para confirmar a seleção dos dois veículos, os valores exibidos e a mensagem do WhatsApp.
