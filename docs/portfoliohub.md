# PortfolioHUB · Plano de Implantação

> Versão elaborada com o Gemini

**Autor:** Gabriel Ramos · Ciência da Computação, CEUB
**Site:** https://gabrielgramos1711.github.io
**GitHub:** https://github.com/gabrielgramos1711
**LinkedIn:** https://www.linkedin.com/in/gabriel-ramos-390764444

## O que é o PortfolioHUB

Um ponto central que reúne meus projetos e meu portfólio digital, usando Git e GitHub para armazenamento, versionamento, compartilhamento e controle de acesso.

| Peça | Papel no PortfolioHUB |
|---|---|
| `gabrielgramos1711.github.io` | Vitrine pública (site do portfólio) |
| `tabuada-inteligente`, `caixa-eletronico`, `gerenciador-de-produtos` | Projetos armazenados, cada um com README |
| Perfil do GitHub | Página de entrada, com projetos fixados |

---

## 1. Planejamento da implantação

### Plano em etapas

| Etapa | Tarefas | Critério de conclusão |
|---|---|---|
| 1. Planejamento | Escrever o plano; configurar a IA como guia | Plano e trilha registrados |
| 2. GitHub | Criar ambiente dedicado; reunir site e projetos | Tudo acessível a partir do perfil |
| 3. Usuários e segurança | 2FA, permissões, proteção da `main` | Checklist de segurança aplicado |
| 4. Compartilhamento | Visibilidade, colaboradores, pull request, docs | Fluxo de colaboração testado |
| 5. Testes e lançamento | Testar links, layout, acessos | Checklist de lançamento concluído |

### Riscos e cuidados
- **Conta errada no Git:** conferir `git remote -v` e o login antes de enviar.
- **Arquivos sensíveis:** nunca versionar senhas, chaves ou dados pessoais.
- **Links quebrados:** testar todos os links depois de cada publicação.

### Como usar uma IA como guia
Dar contexto (quem sou, o que já existe), pedir etapas pequenas e verificáveis, aplicar cada orientação no GitHub e registrar com prints. Conferir sempre as orientações na documentação oficial do GitHub, porque menus e regras mudam.

---

## 2. Configuração inicial e integração com GitHub

1. **Ambiente dedicado.** Opções: (a) usar o repositório do perfil, criando um repositório com o mesmo nome do usuário (`gabrielgramos1711`), cujo `README.md` aparece na página do perfil e funciona como o hub com links para tudo; ou (b) criar uma organização gratuita chamada `portfoliohub-gabriel`.
2. **Reunir os projetos.** No README do hub, listar cada projeto com descrição e link.
3. **Fixar projetos.** No perfil, clicar em **Customize your pins** e escolher os repositórios principais.
4. **Publicar o site.** Settings → Pages → Deploy from a branch → `main` / root.
5. **Padronizar repositórios.** Cada um com `README.md` (objetivo, funcionalidades, como executar), `.gitignore` e descrição curta.

---

## 3. Gestão de usuários e segurança

| Item | Onde configurar |
|---|---|
| Autenticação em dois fatores | Settings da conta → Password and authentication |
| Permissões de colaboradores | Repositório → Settings → Collaborators (Read, Triage, Write) |
| Proteção da branch `main` | Repositório → Settings → Branches (ou Rules) → exigir pull request antes do merge |
| Varredura de segredos | Repositório → Settings → Code security (Secret scanning) |
| Arquivos ignorados | `.gitignore` em cada projeto |
| Política de segurança | Arquivo `SECURITY.md` na raiz |

### Boas práticas
- Princípio do menor privilégio: dar a cada pessoa só a permissão necessária.
- Revisar periodicamente quem tem acesso.
- Se uma credencial vazar, revogá-la na hora e trocar; apagar o commit não basta.
- Manter e-mail de recuperação e códigos de backup do 2FA em local seguro.

### Modelo de `SECURITY.md`
```markdown
# Política de Segurança

Se encontrar uma falha ou dado sensível exposto neste repositório,
avise pelo e-mail gabriel.g.ramos1711@gmail.com antes de divulgar publicamente.
```

---

## 4. Compartilhamento e controle de acesso com GitHub

### Visibilidade
- **Público:** site e projetos de demonstração, que servem para recrutadores.
- **Privado:** rascunhos, anotações e qualquer coisa que não deva ser exibida.

### Fluxo de colaboração (controle de versão)
```bash
git checkout -b minha-alteracao
# editar arquivos
git add .
git commit -m "Descreve a alteração"
git push -u origin minha-alteracao
```
Depois, no GitHub: **Compare & pull request** → revisar → **Merge**.

### Modelo de `CONTRIBUTING.md`
```markdown
# Como colaborar

1. Crie uma branch a partir da `main`.
2. Faça commits pequenos, com mensagens claras.
3. Abra um pull request descrevendo a mudança.
4. Aguarde revisão antes do merge.
```

### Documentar o processo
Registrar no README do hub: como o ambiente foi configurado, quem tem acesso e como contribuir.

---

## 5. Finalização da integração e testes

### Checklist de lançamento
- [ ] Todos os links do site abrem (GitHub, LinkedIn, e-mail, projetos)
- [ ] CSS e JavaScript carregam (tema claro/escuro funciona)
- [ ] Layout correto no celular e no computador
- [ ] README completo em todos os repositórios
- [ ] Sem trechos provisórios no site
- [ ] 2FA ativo e `main` protegida
- [ ] Repositório clonado em outra pasta abre sem erro
- [ ] Link do site no LinkedIn (Contato e Destaques) e no currículo

### Preparação para uso real
- Conferir o site em `https://gabrielgramos1711.github.io` com Ctrl+F5 depois de cada atualização.
- Registrar a data do lançamento e os próximos passos (novos projetos, melhorias).

---

