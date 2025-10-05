# 🎨 Como Personalizar as Imagens das Histórias

## 📋 Instruções para Adicionar Suas Próprias Capas

### 1. Preparação das Imagens

**Especificações Recomendadas:**
- **Formato**: JPG, PNG ou WebP
- **Dimensões**: 400x600 pixels (proporção 2:3)
- **Qualidade**: Boa resolução, mas não muito pesada (máx 200KB)
- **Conteúdo**: Apropriado para crianças de 3-6 anos

### 2. Salvando as Imagens

Salve suas imagens na pasta `public/images/` com os seguintes nomes:

```
public/images/
├── story-1.jpg    # Os Três Porquinhos
├── story-2.jpg    # Chapeuzinho Vermelho
├── story-3.jpg    # A Galinha Pintadinha
├── story-4.jpg    # A Pequena Sereia
├── story-5.jpg    # Goldilocks e os Três Ursos
├── story-6.jpg    # O Patinho Feio
├── story-7.jpg    # João e o Pé de Feijão
├── story-8.jpg    # A Lebre e a Tartaruga
└── story-9.jpg    # Pinóquio
```

### 3. Atualizando o Código (Opcional)

Se quiser usar suas imagens como principal (ao invés das thumbnails do YouTube), 
edite o arquivo `constants.ts` e substitua as URLs:

```typescript
thumbnailUrl: './images/story-1.jpg',  // Ao invés da URL do YouTube
```

### 4. Testando

1. Adicione suas imagens na pasta
2. Reinicie o servidor (`Ctrl+C` e depois `npm run dev`)
3. As imagens aparecerão automaticamente como fallback

## 🎯 Dicas para Criar Boas Capas

### Elementos Visuais Atraentes:
- **Cores vivas e alegres** 🌈
- **Personagens carismáticos** 👧🐷🐺
- **Fontes grandes e legíveis** 📝
- **Elementos decorativos** ⭐🌟✨

### Ferramentas Recomendadas:
- **Canva** - Templates prontos
- **Figma** - Design profissional
- **GIMP** - Gratuito e completo
- **Photoshop** - Profissional

### Exemplo de Layout:
```
┌─────────────────────┐
│        ⭐ TÍTULO ⭐        │
│                     │
│    [PERSONAGEM]     │ 
│       PRINCIPAL     │
│                     │
│  [ELEMENTOS FOFOS]  │
│    🌟 🎭 🌈 🎪     │
└─────────────────────┘
```

## 📺 Substituindo Vídeos do YouTube

Para trocar os vídeos, edite `constants.ts`:

```typescript
{
  id: 1,
  title: 'Minha História Personalizada',
  description: '🎬 Descrição da sua história!',
  thumbnailUrl: 'https://img.youtube.com/vi/SEU_VIDEO_ID/maxresdefault.jpg',
  youtubeUrl: 'https://www.youtube.com/watch?v=SEU_VIDEO_ID',
}
```

### Como pegar o ID do vídeo:
- URL: `https://www.youtube.com/watch?v=ABC123XYZ`
- ID: `ABC123XYZ`

## 🚀 Próximos Passos

1. **Adicione suas imagens personalizadas**
2. **Teste em diferentes dispositivos**  
3. **Compartilhe com outras famílias**
4. **Colete feedback das crianças**
5. **Continue adicionando mais histórias!**

---

**💡 Lembre-se:** O mais importante é criar uma experiência divertida e segura para as crianças!