# ♻️ Brechó Online — Moda Renovável

Projeto de e-commerce de roupas usadas, com a proposta de um brechó moderno e acessível. O objetivo é promover a **moda renovável**, incentivando o consumo consciente e a reutilização de peças, gerando impacto positivo tanto no bolso dos consumidores quanto no meio ambiente.

---

## 🧭 Sobre o Projeto

Este site simula a experiência de compra em um brechó online. As peças são coletadas presencialmente com clientes e disponibilizadas na plataforma digital.

A estética e estrutura refletem o conceito de que **as mulheres têm liberdade para se vestir de acordo com o que sentem**. As coleções representam diferentes moods e estilos de vida: do casual ao corporativo, do campo à praia.

---

## 🖼️ Estrutura do Site

### 📌 Página Inicial (Home)

- **Header:** logotipo clicável + menu com dropdowns:
  - **Produtos:** Roupas, Bolsas, Sapatos, etc.
  - **Coleções:** Casual, Corporativo, Praia, Campo
- **Ícone de Carrinho:** acesso rápido à página do carrinho
- **Carrossel/Banner:** destaques clicáveis por coleção
- **Grade de Produtos:** exibição de todos os itens com botões de:
  - Adicionar ao Carrinho
  - Ver Similares (por categoria)
- **Vídeo de respiro:** reforça a identidade da marca
- **Newsletter:** layout com convite ao cadastro (não funcional)
- **Rodapé:** elementos visuais, créditos e referências

### 🛒 Página do Carrinho

- Lista de itens adicionados com suas informações
- Cálculo automático do total da compra
- Manipulação dinâmica via JavaScript

### 🛍️ Página de Produtos

- Produtos exibidos conforme o caminho de acesso:
  - Por **categoria** (menu ou "ver similares")
  - Por **coleção** (banner ou menu suspenso)
- Opção de adicionar ao carrinho

### 🧾 Página de Checkout

- Formulário de dados pessoais e de entrega
- Validação dos campos via JavaScript

### 💸 Página de Pagamento (Pix)

- Simulação de pagamento via QR Code fictício
- Contador regressivo de 1 minuto
- Botão “Já paguei” para finalizar o fluxo

### ✅ Página de Sucesso

- Mensagem de finalização de compra
- Código de rastreio fictício + aviso de nota fiscal

---

## 🧰 Tecnologias Utilizadas

- **HTML:** estruturação das páginas
- **CSS:** estilização, responsividade e animações
- **JavaScript:**
  - Manipulação do DOM
  - Filtros por categoria/coleção
  - Validação de formulários
  - Controle dinâmico do carrinho
  - Simulação de pagamento com timer

> Algumas funcionalidades foram além do conteúdo abordado em aula, exigindo pesquisas externas e aplicação prática de novos conhecimentos.

---

## 🚀 Como Rodar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Site-Fisalis-site-interativo-PFE-ADSB.git

# Acesse a pasta
cd Site-Fisalis-site-interativo-PFE-ADSB

# Abra o arquivo index.html no navegador
```

> *Este projeto não utiliza backend ou banco de dados — tudo é feito no front-end.*

---

## 🙋‍♀️ Como Contribuir

1. Fork este repositório
2. Crie uma branch: `git checkout -b sua-feature`
3. Faça suas alterações e dê commit: `git commit -m 'Minha contribuição'`
4. Push na sua branch: `git push origin sua-feature`
5. Abra um Pull Request

---

## 📌 Status do Projeto

✅ Finalizado (simulação completa de fluxo de compra, sem integração real com APIs de pagamento ou back-end).

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---