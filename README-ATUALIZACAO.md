# FELMOR Transporte — atualização visual

## O que foi alterado
- `index.html`: estilos inline foram movidos para `css/theme.css`; botão de alternância de tema adicionado; folhas de estilo e script do tema vinculados.
- `css/theme-modes.css`: modo escuro opcional. O modo claro é o padrão no primeiro acesso.
- `css/animations.css`: animações discretas e respeito a `prefers-reduced-motion`.
- `js/theme-toggle.js`: alternância de tema com persistência local (`felmor-theme`).

## Preservação
- O JavaScript original de cálculo e solicitação de viagem foi mantido no `index.html`.
- Tarifas, arquivos JSON, ícones e demais arquivos originais foram preservados.
- Não foi alterado o conteúdo dos arquivos `core/`, `data/`, `js/calculo.js`, `js/premiacao.js` e `theme/`.

## Supabase
O HTML original carregava `core/supabase.js`, mas esse arquivo não existe no ZIP recebido e não há chamadas ao Supabase no script principal da página. Por isso, os dois carregamentos do Supabase foram removidos do `index.html`. A integração poderá ser adicionada futuramente.

## Como atualizar no GitHub
Extraia o ZIP e copie o conteúdo da pasta `FELMOR-Transporte-main` para a raiz do repositório, mantendo as pastas. Substitua `index.html` e adicione a pasta `css/` e o arquivo `js/theme-toggle.js`. Preserve todos os arquivos existentes que não forem substituídos.

## Validação
Foi feita uma verificação estrutural dos arquivos e referências locais. Ainda é necessário testar a página publicada no GitHub Pages em computador e celular, incluindo seleção de rota, cálculo e solicitação via WhatsApp.
