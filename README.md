# website

## Instruções git

![branches](https://zepel.io/blog/content/images/2020/05/feature-branch-with-develop-git-workflow-2.png)

O **master** tem sempre a versão de produção.

O **develop** é sempre a versão estável mais recente.

Por cada feature que queiram fazer devem criar um branch a partir do develop para terem versão paralelas do projecto.

### Mudar de branch

```bash
git checkout develop # neste caso para o develop
```

### Criar branch a partir do branch atual

```bash
git checkout -b <nome_do_feature> # deve ser sempre feito quando estão no branch develop
```

### Guardar alterações para mudar de branch e colocar alterações lá

```bash
git stash # guardar
git checkout <nome_do_branch> # muda o branch
git stash pop # aplicar as últimas alterações guardadas
```

Pode também acontecer alguém dar um commit no vosso branch e quererem atualiza-lo sem perderem o vosso progresso. O procedimento é igual.

```bash
git stash # guardar
git pull # vai buscar as últimas alterações publicadas no branch
git stash pop # aplicar as últimas alterações guardadas
```

### Juntar branchs

**NOTA**: Quando quiserem juntar branches, mais vale pedir-me porque quase de certeza que vai haver conflitos.

Imaginando que têm o branch `featureA` e querem juntar ao develop:

1. Fazer push para o branch featureA com todas as alterações pretendidas
2. Mudar para o branch develop
3. Fazer `git merge featureA`
