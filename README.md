# Weather Time ⛅️

Aplicativo feito com React + TypeScript + Vite que consome a API do OpenWeather para exibir o clima de uma cidade e usa a API do Unsplash para exibir uma imagem de fundo relacionada à cidade pesquisada.

## Updates / Atualizações

### v2.0.0 - 14/08/2025
- Implementado fundo dinâmico no Weather Time usando Chakra UI
- Correção do problema de input com `hasError`
- Melhorias visuais no formulário de busca
- Ajustes no layout responsivo com Chakra UI

### v1.0.0 - 07/07/2025
- Primeira versão estável do projeto

## 🌍 Tecnologias Utilizadas

- **React**

- **Vite**

- **TypeScript**

- **Axios**

- **Chakra UI**

- **OpenWeather**

- **Unsplash**


## 🎨 Demonstração do Projeto

![Image01](./public/imgs/Img(01).png)

<hr/>

![Image02](./public/imgs/Img(02).png)

<hr/>

![Image03](./public/imgs/Img(03).png)

<hr/>

![weather-time.gif](./public//imgs//weather-time.gif)


## ⚙️ Como executar o projeto

### Instale as dependências

- Node.js
- npm ou yarn

### Passos

1. Clone o repositório:
   ```bash
   https://github.com/Filipe-Mamed/weather-time.git
   ```

2. Navegue até o diretório do projeto: 
    ```bash
     cd weather-time
    ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   
5. Inicie o projeto::
    ```bash
    npm run dev
    ```

## 📂 Variáveis de ambiente

### Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```bash
# OpenWeather
VITE_BASE_URL_OPENWEATHER=SUA_CHAVE_OPENWEATHER

VITE_API_KEY_OPENWEATHER=URL_DA_OPENWEATHER

# Unsplash
VITE_BASE_URL_UNSPLASH=SUA_CHAVE_UNSPLASH

VITE_API_KEY_UNSPLASH=URL_DA_UNSPLASH
```


## 📄 Sobre

Projeto desenvolvido para fins de aprendizado com foco em consumo de APIs externas e práticas com React e TypeScript.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
