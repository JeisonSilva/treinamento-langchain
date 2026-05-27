# Treinamento LangChain — UNIPDS

Repositório de estudos práticos do curso UNIPDS sobre LangChain e LangGraph com TypeScript. Cada projeto em `src/` é um exercício independente que explora um conceito diferente da stack.

---

## Projetos

| Projeto | Conceito principal |
|---|---|
| `eco-inteligente` | Chat básico com LangGraph (StateGraph linear) |
| `classificador-suporte` | Roteamento condicional com grafos (conditional edges) |
| `chat-memory` | Agente com memória de conversação |

---

## Stack

- **TypeScript**
- **LangChain** (`@langchain/core`, `@langchain/openai`)
- **LangGraph** (`@langchain/langgraph`)
- **OpenRouter** como proxy para modelos LLM
- **Vitest** para testes

---

## Estrutura

```
treinamento-langchain/
├── src/
│   ├── eco-inteligente/       ← chat simples com StateGraph
│   ├── classificador-suporte/ ← roteador de intenções com edges condicionais
│   └── chat-memory/           ← agente com memória de histórico
└── wiki/                      ← documentação do projeto (mantida por LLM)
```

---

## Como executar

Cada projeto tem seu próprio ambiente. Entre na pasta e siga os passos:

```bash
cd src/<projeto>
cp .env.example .env   # configure OPEN_ROUTER_API_KEY e demais variáveis
npm install
npm test
```

---

## Pré-requisitos

- Node.js 20+
- Chave de API do [OpenRouter](https://openrouter.ai/)
