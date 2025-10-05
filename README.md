# 👧📚 Aninha e suas Historinhas 🎬✨

Uma linda landing page para apresentar vídeos educativos do YouTube voltados para crianças de 3 a 6 anos!

## 🌟 Características

- **🎯 Público-alvo**: Crianças de 3 a 6 anos
- **🎨 Design Infantil**: Cores alegres, emojis e animações divertidas
- **📱 Responsivo**: Funciona perfeitamente em celulares, tablets e desktops  
- **🔒 Seguro**: Links diretos para vídeos educativos selecionados do YouTube
- **🚀 Moderno**: Construído com React, TypeScript e Tailwind CSS

## 📋 Histórias Disponíveis

1. **🐷 Os Três Porquinhos** - Lição sobre perseverança e planejamento
2. **👧🔴 Chapeuzinho Vermelho** - Aventura clássica pela floresta
3. **🐔🎵 A Galinha Pintadinha** - Músicas e diversão para os pequenos
4. **🧜‍♀️ A Pequena Sereia** - Mundo mágico do fundo do mar
5. **🐻👱‍♀️ Goldilocks e os Três Ursos** - Lição sobre respeito e curiosidade
6. **🦆💛 O Patinho Feio** - Sobre aceitação e amor próprio
7. **🌱☁️ João e o Pé de Feijão** - Aventura nas alturas
8. **🐰🐢 A Lebre e a Tartaruga** - "Devagar e sempre" vence a corrida
9. **🤥👦 Pinóquio** - A importância da honestidade

## 🚀 Como Rodar o Projeto

**Pré-requisitos:** Node.js

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o projeto:
   ```bash
   npm run dev
   ```

3. Abra no navegador: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
├── components/
│   ├── Header.tsx          # Cabeçalho com logo e navegação
│   ├── HeroSection.tsx     # Seção principal com call-to-action
│   ├── StorybookGallery.tsx # Galeria de histórias
│   ├── StorybookCard.tsx   # Card individual de cada história
│   └── Footer.tsx          # Rodapé com informações
├── public/
│   └── images/             # Imagens das capas dos livros
├── App.tsx                 # Componente principal
├── constants.ts            # Dados das histórias
└── types.ts               # Definições de tipos TypeScript
```

## 🎨 Personalização

Para adicionar novas histórias, edite o arquivo `constants.ts`:

```typescript
{
  id: 10,
  title: 'Nova História',
  description: '📖 Descrição da história com emojis!',
  thumbnailUrl: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
}
```

## 🔒 Segurança

- Todos os vídeos são cuidadosamente selecionados
- Links direcionam para o YouTube em nova aba
- Conteúdo apropriado para faixa etária 3-6 anos
- Recomendamos sempre o acompanhamento dos pais

## 💖 Feito com Amor

Este projeto foi criado pensando na alegria e desenvolvimento das crianças, proporcionando:
- 🧠 **Estímulo cognitivo** através de histórias clássicas
- 🎵 **Desenvolvimento musical** com canções infantis  
- 🌈 **Experiência visual** colorida e atrativa
- 👨‍👩‍👧‍👦 **Momentos em família** compartilhando histórias
