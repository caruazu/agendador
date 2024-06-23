# agendador

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Django](https://img.shields.io/badge/django-092e20?style=for-the-badge&logo=Django)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) 

## Sobre

> Uma ferramenta digital para agendamento otimizado de consultas entre profissionais e clientes.

Este projeto foi criado em um final de semana para mostrar meus conhecimentos básicos com as tecnologias usadas. Não há intenção de utilizar esse código em qualquer aplicação comercial, e nem em futuras manutenções.

## Instalação

### Dependências

Esta aplicação foi construída com:

- linux kernel: 5.15
- linux Mint: 21
- pipenv: 2024.0.1
- python: 3.10
- node.js: 20
- npm: 10


### Configuração

Utilize o arquivo `.env.exemple` em `backend/agendadorBackend` como exemplo para suas variáveis locais da API. Além disso, use o arquivo `.env.exemple` em `frontend/agendadorFrontend` como exemplo para suas variáveis locais do frontend. 

Altere o nome destes arquivos para `.env`, ponha os dados de sua implementação.

#### Banco de dados local

Caso não tenha um ambiente com banco de dados, use o banco de dados `sqlite3`, modificando o arquivo `/backend/agendadorBackend/agendadorBackend/settings.py` e comentando o atual parâmetro `DATABASES` banco e descomentando que está comententado.

### Inicialização


#### Backend

```bash
pip install -r backend/agendadorBackend/requirements.txt
```

```bash
python backend/agendadorBackend/manage.py makemigrations
```

```bash
python backend/agendadorBackend/manage.py makemigrations agendadorAPI
```

```bash
python backend/agendadorBackend/manage.py migrate
```

```bash
python backend/agendadorBackend/manage.py runserver
```

#### Frontend

```bash
npm install frontend/agendadorFrontend/
```

```bash
npm run build --prefix frontend/agendadorFrontend
```

```bash
npm run preview --prefix frontend/agendadorFrontend
```

## Implementação

Esse projeto foi disponibilizado via a núvem gratuita da [Render](https://render.com/). Seu demo está disponível [aqui](https://agendador-gskh.onrender.com/register).
