# Portfolio API - Backend com NestJS e PostgreSQL

![NestJS](https://img.shields.io/badge/NestJS-%23E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%233178C6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-E0234E?style=for-the-badge)

## 📋 Descrição

Esta é a API RESTful para o projeto "Plataforma de Portfólios". Desenvolvida com **NestJS** e **TypeScript**, esta API oferece um conjunto completo de endpoints para o gerenciamento de portfólios profissionais (CRUD). A persistência de dados é feita em um banco de dados **PostgreSQL**, que é orquestrado via **Docker** para garantir um ambiente de desenvolvimento consistente e fácil de configurar.

## ✨ Funcionalidades

- **CRUD completo** para a entidade `Portfolio`.
- **Validação de dados** de entrada usando `class-validator` e DTOs.
- **Documentação interativa** da API gerada automaticamente com **Swagger (OpenAPI)**.
- Arquitetura modular e escalável seguindo as melhores práticas do NestJS.
- Gerenciamento de configurações e segredos através de variáveis de ambiente (`.env`).

## 📖 Documentação da API

Com o projeto em execução, a documentação completa e interativa da API está disponível em:

**`http://localhost:3000/api-docs`**

Lá é possível visualizar todos os endpoints, seus schemas e testá-los diretamente pelo navegador.

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js (v18+)
* npm
* Docker Desktop

### Passos para a Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/](https://github.com/)[SEU-USUARIO]/[NOME-DO-REPOSITORIO].git
    cd [NOME-DO-REPOSITORIO]
    ```

2.  **Configurar Variáveis de Ambiente:**
    Crie uma cópia do arquivo `.env.example` e renomeie para `.env`.
    ```bash
    cp .env.example .env
    ```
    *O arquivo `.env` já vem com as credenciais padrão para o banco de dados Docker. Você não precisa alterá-lo.*

3.  **Iniciar o Banco de Dados com Docker:**
    Certifique-se de que o Docker Desktop está em execução. Em seguida, rode o comando para iniciar o contêiner do PostgreSQL:
    ```bash
    docker run --name portfolio-db -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=myuser -e POSTGRES_DB=portfoliodb -p 5432:5432 -d postgres
    ```
    *Nota: Se o contêiner `portfolio-db` já existir, remova-o primeiro com `docker rm -f portfolio-db`.*

4.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

5.  **Rode a Aplicação:**
    ```bash
    npm run start:dev
    ```

6.  O servidor estará rodando em `http://localhost:3000`.
