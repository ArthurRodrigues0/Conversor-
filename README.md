# Conversor de Moedas

## Descrição

Este é um conversor de moedas simples e responsivo, desenvolvido como uma aplicação web estática. Ele permite converter valores entre diferentes moedas (USD, EUR, BRL) utilizando taxas de câmbio em tempo real obtidas de uma API gratuita. O design é moderno, com gradientes e animações suaves, e inclui validações para uma experiência de usuário melhor.

## Funcionalidades

- **Conversão de Moedas**: Insira um valor e selecione as moedas de origem e destino para obter a conversão instantânea.
- **Botão de Inversão**: Um botão centralizado (↔) entre os selects permite inverter rapidamente as moedas selecionadas.
- **Formatação Brasileira**: O campo de valor usa vírgula como separador decimal (ex: 10,50) e formata automaticamente para duas casas decimais.
- **Validações**:
  - Verifica se o valor é válido e maior que zero.
  - Impede conversão quando as moedas de origem e destino são iguais, exibindo uma mensagem de erro.
- **Design Responsivo**: Funciona bem em desktops e dispositivos móveis, com layout flexível e animações no hover.
- **Exibição de Taxa**: Mostra a taxa de câmbio usada na conversão.

## Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, etc.).
2. Insira o valor a converter no campo "Valor a converter" (ex: 100,00).
3. Selecione a moeda de origem em "De" e a moeda de destino em "Para".
4. Clique no botão "Converter" para ver o resultado.
5. Use o botão ↔ para inverter as moedas se necessário.
6. O resultado aparece abaixo do formulário, incluindo o valor convertido e a taxa de câmbio.

Não é necessária instalação ou servidor, pois é uma app estática. Para uso offline, baixe os arquivos e abra localmente.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica do formulário e layout.
- **CSS3**: Estilos modernos com flexbox, gradientes, transições, animações e media queries para responsividade.
- **JavaScript (ES6+)**: Lógica de conversão, manipulação de DOM, fetch para API, formatação de números e validações.
- **API Externa**: [ExchangeRate-API](https://www.exchangerate-api.com/) para taxas de câmbio em tempo real (gratuita, sem chave necessária).

## Estrutura de Arquivos

- `index.html`: Página principal com o formulário.
- `styles.css`: Estilos visuais e layout.
- `script.js`: Lógica JavaScript para conversão e interações.

## Limitações e Melhorias Futuras

- Suporte limitado a 3 moedas (USD, EUR, BRL). Pode ser expandido adicionando mais opções no HTML e JS.
- Dependência de internet para a API; sem cache local.
- Possíveis melhorias: Adicionar mais moedas, histórico de conversões, modo escuro ou integração com outras APIs.

## Licença

Projeto pessoal para fins educacionais. Sinta-se à vontade para usar, modificar ou contribuir!

---

Desenvolvido por [Seu Nome ou AI Assistant]. Última atualização: Setembro 2025.
