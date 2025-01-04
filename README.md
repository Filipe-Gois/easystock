# EasyStock - Gerenciador de Estoque

---

## 🚀 Sobre o Projeto

**EasyStock** é um gerenciador de estoque desenvolvido com o objetivo de explorar as funcionalidades do **Supabase**, **Server Actions**, **Server Components**, e **Docker** em uma aplicação **Next.js** com **TypeScript**.

O sistema permite:

- Gerenciamento de **produtos**, **categorias** e **usuários**.
- **Autenticação** via Google, GitHub ou com email e senha.

---

## 🛠 Tecnologias Utilizadas

- **Next.js**
- **TypeScript**
- **Supabase**
- **TailwindCSS** (Estilização)
- **Docker** (Ambiente isolado e deployment)
- **Shadcn** (Componentes de UI)
- **React Query** (Gerenciamento de estado assíncrono)

---

## 📦 Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Filipe-Gois/easystock.git
   cd easystock
   ```

2. **Configure as variáveis de ambiente:**  
   Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute a aplicação em ambiente de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **(Opcional) Rodar com Docker:**
   - **Build da imagem:**
     ```bash
     docker build -t easystock .
     ```
   - **Executar o container:**
     ```bash
     docker run -p 3000:3000 easystock
     ```

---

## 🎨 Funcionalidades

- **Gerenciamento de Produtos:**  
  Criação, edição e exclusão de produtos no estoque.
- **Categorias:**  
  Organização dos produtos em categorias.
- **Gerenciamento de Usuários:**  
  Controle e listagem de usuários cadastrados.
- **Autenticação Segura:**  
  Login via Google, GitHub ou email/senha utilizando o **Supabase Auth**.

---

## 🌐 Estilo e UI

- Utilizando **TailwindCSS** para estilização rápida e responsiva.
- **Shadcn** para componentes de design consistentes e reutilizáveis.

---

## 🔄 Requisições Assíncronas

Requisições e gerenciamento de dados são implementados de forma híbrida utilizando:

- **Server Components** para buscar e renderizar dados diretamente no servidor, otimizando o carregamento inicial.
- **React Query** para gerenciamento de estado assíncrono no cliente, garantindo:
  - Cache inteligente.
  - Experiência otimizada com carregamentos instantâneos e atualização em tempo real.

---

## 📖 Roadmap

- [ ] Adicionar relatórios para análise do estoque.
- [ ] Integração com APIs externas para cálculo automático de preços.

---

## 🤝 Contribuições

Contribuições são bem-vindas!

1. Faça um fork do repositório.
2. Crie uma branch para sua feature/bugfix:
   ```bash
   git checkout -b minha-feature
   ```
3. Envie um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 📧 Contato

Para dúvidas ou sugestões:

- Email: [filipeogois@gmail.com](mailto:filipeogois@gmail.com)
- LinkedIn: [Filipe Góis](https://www.linkedin.com/in/filipe-góis)
