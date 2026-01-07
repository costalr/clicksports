# ClickSports 🏃🏽‍♀️🏃🏻‍♂️

Plataforma de e-commerce focada em **eventos esportivos e desafios virtuais**, onde o usuário pode escolher um evento, adquirir um kit (camisa, medalha, etc.) e participar no seu próprio ritmo.

Este repositório contém a **estrutura inicial do frontend**, desenvolvida com foco em:
- boa arquitetura
- responsividade (desktop + mobile)
- experiência de usuário
- suporte a tema claro/escuro

---

## 🧠 Visão Geral

O ClickSports foi pensado como um **catálogo direto de eventos** já na página inicial, evitando fluxos desnecessários e reduzindo fricção para o usuário.

Principais características atuais:
- Navbar responsiva (desktop e mobile)
- Menu lateral mobile (off-canvas)
- Catálogo de eventos na home
- Cards reutilizáveis de eventos
- Tema claro / escuro via CSS variables
- Base preparada para integração com backend (Django)

---

## 🛠️ Stack Atual

### Frontend
- **React** (Vite)
- **CSS puro** (sem framework, com tokens via CSS variables)
- Componentização clara (Navbar, EventCard, MobileMenu)

### Backend (planejado)
- **Django**
- **API REST** para eventos, usuários, pedidos e pagamentos

---

## 📁 Estrutura do Projeto

```txt
src/
├── assets/              # Imagens e logos
│
├── components/          # Componentes reutilizáveis
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── MobileMenu.jsx
│   ├── MobileMenu.css
│   ├── EventCard.jsx
│   └── EventCard.css
│
├── data/
│   └── fakeEvents.js    # Dados mockados para desenvolvimento
│
├── pages/
│   ├── Home.jsx
│   └── Home.css
│
├── App.jsx              # Componente raiz
├── App.css              # Tema global e variáveis de design
└── main.jsx
