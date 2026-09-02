# Wikifanfarras

Site de divulgação da [Oficina de edição da Wikipédia com fanfarras de carnaval de Belo Horizonte](https://br.wikimedia.org/wiki/Wiki_Apoia_2026/Propostas/Oficina_de_edi%C3%A7%C3%A3o_da_wikipedia_com_fanfarras_de_carnaval_de_Belo_Horizonte), projeto aprovado no Wiki Apoia 2026.

React + Vite, sem backend — conteúdo estático em `src/data/content.js`.

## Rodando localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção
```

## Identidade visual

A paleta (`RAINBOW`, em `src/data/content.js`) foi extraída por amostragem de pixels direto da logo em `logo-wikifanfarras.jpeg`. As variações recortadas e com fundo transparente usadas no site ficam em `src/assets/`:

- `logo-mark.png` — selo circular, usado no cabeçalho e rodapé.
- `logo-icon.png` — selo com as fitas do surdo, usado na hero.

Tipografia: **Baloo 2** (títulos), **Nunito Sans** (texto corrido), **Space Mono** (datas, números, rótulos).
