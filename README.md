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

## Deploy (Toolforge)

O site roda como uma tool estática no [Toolforge](https://toolforge.org), a plataforma de cloud da Wikimedia: **https://wikifanfarras.toolforge.org**

### Pré-requisitos (setup único)

1. Conta de desenvolvedor Wikimedia com acesso ao Toolforge (criar em [wikitech.wikimedia.org](https://wikitech.wikimedia.org/wiki/Special:CreateAccount)).
2. Chave SSH registrada em [toolsadmin.wikimedia.org](https://toolsadmin.wikimedia.org/profile/settings/ssh-keys/).
3. Ser maintainer da tool `wikifanfarras` (ver em [toolsadmin](https://toolsadmin.wikimedia.org/tools/id/wikifanfarras)).
4. Entrada no `~/.ssh/config` local:

   ```
   Host toolforge
       HostName login.toolforge.org
       User <seu_usuario_de_shell_minusculo>
       IdentityFile ~/.ssh/<sua_chave>
       IdentitiesOnly yes
   ```

   ⚠️ O usuário de shell é o nome de usuário do Wikitech **em minúsculas** (ex.: `VGois` → `vgois`), não necessariamente igual ao nome de exibição.

### Publicando uma atualização

```bash
npm run build
rsync -avz --delete dist/ toolforge:/data/project/wikifanfarras/public_html/
```

O webservice (`php7.4`, backend Kubernetes — serve `public_html` como conteúdo estático) já fica rodando de forma persistente. Só é preciso reiniciar se ele parar de responder:

```bash
ssh toolforge 'become wikifanfarras webservice restart'
```

Outros comandos úteis:

```bash
ssh toolforge 'become wikifanfarras webservice status'
ssh toolforge 'become wikifanfarras webservice logs'
```
