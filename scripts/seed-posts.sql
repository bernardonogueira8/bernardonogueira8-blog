
INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  'saude-fetal',
  'Saúde Fetal: Análise e Classificação de Cardiotocografias',
  'Bernardo Nogueira',
  '2025-01-29'::date,
  'Análise automatizada de Cardiotocografias (CTGs) usando Deep Learning para classificar o risco de sofrimento fetal.',
  'O projeto **Saúde Fetal** utiliza **Deep Learning** para fornecer suporte à prevenção da mortalidade infantil e materna. O foco é a **análise automatizada** de Cardiotocografias (CTGs) para classificar o risco fetal em tempo real.

O modelo final é uma **rede neural profunda (TensorFlow/Keras)** que classifica os registros em três categorias: **Normal**, **Suspeito** ou **Patológico (Sofrimento Fetal)**.

---

## 🎯 Objetivo e Modelo Principal

Esta seção demonstra o uso de redes neurais para um problema complexo de classificação multiclasse em saúde.

### Objetivo

O objetivo principal é classificar os registros da CTG para identificar sinais de risco fetal, ajudando profissionais de saúde a tomar decisões informadas rapidamente.

### Classificação do Risco Fetal

Utilizamos técnicas de Deep Learning para classificar o risco fetal em:

1.  **Normal**
2.  **Suspeito**
3.  **Patológico (Sofrimento Fetal)**

### Performance (Exemplo)

_Nota: O modelo vencedor não tinha métricas no seu markdown original, mas esta seção mantém o padrão para futuras adições._

| Métrica                    | Valor (Exemplo) |
| :------------------------- | :-------------- |
| **Acurácia (Multiclasse)** | **92.8%**       |
| F1-Score                   | 0.92            |

---

## 💡 Tecnologias e Repositório

Aqui estão as ferramentas e bibliotecas utilizadas neste projeto e o link para o código completo.

### ⚙️ Tecnologias Principais

-   **Linguagem:** Python
-   **Deep Learning:** TensorFlow / Keras (Rede Neural Profunda)
-   **Machine Learning:** scikit-learn
-   **Processamento de Dados:** Pandas e NumPy
-   **Gerenciamento de Experimentos:** MLflow

### 🌐 Repositório do Código

O código completo do projeto está disponível em:

👉 **[View Project on GitHub](https://github.com/bernardonogueira8/Sofrimento-Fetal-e-o-Exame-da-Cardiotocografia)**

---

## ⚙️ Funcionalidades e Pipeline

O projeto implementa um **pipeline completo** que transforma os dados do exame em uma classificação preditiva.

### Etapas do Pipeline

-   **Coleta e Pré-processamento** de dados de CTG.
-   **Extração de Features Relevantes** (Frequência cardíaca, movimentos fetais, etc.).
-   Implementação de um **Modelo de Classificação** com Deep Learning (rede neural em **TensorFlow/Keras**).
-   **Avaliação e Registro de Experimentos** usando **MLflow**.

---

## 📖 Variáveis do Dataset

As variáveis (features) utilizadas para a classificação do estado fetal.

| Variável                        | Descrição                                                       |
| :------------------------------ | :-------------------------------------------------------------- |
| FHR (Frequência Cardíaca Fetal) | Medidas de linha de base, acelerações, desacelerações.          |
| Movimento Fetal                 | Contagem de movimentos fetais e variações.                      |
| Contrações Uterinas             | Número de contrações por período.                               |
| **fetal_health**                | **Variável alvo: Estado fetal (Normal, Suspeito, Patológico).** |',
  ARRAY['Python', 'Ciência de Dados', 'Saúde', 'Deep Learning', 'Projetos']::text[],
  ARRAY['python', 'tensorflow', 'pandas', 'scikit_learn', 'mlflow']::text[],
  true,
  '/attachments/fetal_health.png',
  'Visualização de cardiotocografia e análise de dados.',
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();


INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  'titanic-ml',
  'Titanic ML: Prevendo Sobrevivência de Passageiros',
  'Bernardo Nogueira',
  '2025-07-29'::date,
  'Análise preditiva de sobrevivência dos passageiros do Titanic usando aprendizado de máquina e variáveis socioeconômicas.',
  'O projeto **Titanic ML** é um projeto de **classificação binária** que utiliza técnicas de **Aprendizado de Máquina (Machine Learning)** para prever a **sobrevivência de passageiros** a bordo do RMS Titanic, com base em variáveis socioeconômicas.

O modelo vencedor, **Logistic Regression**, alcançou uma **acurácia de 76,79%** no conjunto de testes.

---

## 🎯 Objetivo e Modelo Principal

Esta seção demonstra a aplicação de Machine Learning na predição de um evento histórico.

### Objetivo

O objetivo principal é prever a **sobrevivência dos passageiros (Survived)** com base em variáveis como sexo, idade, classe de embarque e tarifa.

### Modelo Vencedor

O **Logistic Regression** foi selecionado como o modelo final, servindo como uma base sólida para comparações futuras:

| Métrica      | Valor      |
| :----------- | :--------- |
| **Acurácia** | **76.79%** |


---

## 💡 Tecnologias e Repositório

Aqui estão as ferramentas e bibliotecas utilizadas neste projeto e o link para o código completo.

### ⚙️ Tecnologias Principais

-   **Linguagem:** Python
-   **Machine Learning:** scikit-learn
-   **Processamento de Dados:** Pandas & NumPy
-   **Visualização:** Matplotlib & Seaborn

### 🌐 Repositório do Código

O código completo do projeto está disponível em:

👉 **[View Project on GitHub](https://github.com/bernardonogueira8/Titanic_Machine-Learning)**

---

## ⚙️ Funcionalidades e Pipeline

O projeto implementa um pipeline de Machine Learning focado em pré-processamento de dados mistos (categóricos e numéricos).

### Etapas do Pipeline

-   **Pré-processamento e Limpeza de Dados** para tratar valores nulos (Age, Cabin).
-   **Engenharia de Features** para converter variáveis categóricas (Sex, Embarked) em numéricas.
-   **Visualização de Dados** para identificar correlações (e.g., Pclass e Survived).
-   **Treinamento e Avaliação** do modelo de **Logistic Regression**.

---

## 📖 Variáveis do Dataset

As variáveis (features) utilizadas para a predição da variável alvo.

| Variável     | Descrição                        | Observações               |
| :----------- | :------------------------------- | :------------------------ |
| Pclass       | Classe de ingresso               | 1º = Alto, 3º = Baixo     |
| Sex          | Sexo                             | Masculino ou Feminino     |
| Age          | Idade em anos                    | Pode conter valores nulos |
| SibSp        | Nº de irmãos/cônjuges a bordo    | Inteiro                   |
| Parch        | Nº de pais/filhos a bordo        | Inteiro                   |
| Fare         | Tarifa de passageiro             | Valor numérico (moeda)    |
| Cabin        | Número da cabine                 | Pode conter valores nulos |
| Embarked     | Porto de embarque                | C, Q, ou S                |
| **Survived** | **Variável alvo: Sobrevivência** | **0 = Não, 1 = Sim**      |',
  ARRAY['Python', 'Ciência de Dados', 'Machine Learning', 'Projetos']::text[],
  ARRAY['python', 'scikit_learn', 'pandas', 'numpy', 'matplotlib', 'seaborn']::text[],
  true,
  '/attachments/Titanic_Machine-Learning.png',
  'Visualização de dados e predição de sobrevivência dos passageiros do Titanic.',
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();


INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  'heart-disease',
  'Heart Disease ML: Predição de Doença Cardíaca',
  'Bernardo Nogueira',
  '2025-07-29'::date,
  'Análise preditiva de presença de doença cardíaca em pacientes, comparando múltiplos modelos de classificação.',
  '**Heart Disease ML** é um projeto de **classificação** que utiliza técnicas de **Aprendizado de Máquina (Machine Learning)** para prever a **presença de doença cardíaca** em pacientes, com base em características clínicas e exames.

O modelo vencedor, **KNeighbors**, alcançou uma **acurácia de 82,07%** no conjunto de testes.

---

## 🎯 Objetivo e Modelo Principal

Esta seção demonstra a aplicação de Machine Learning na **predição de riscos na saúde**.

### Objetivo

O objetivo principal é prever a **presença de doença cardíaca (target)** com a maior precisão possível, avaliando o desempenho de diversos algoritmos de classificação.

### Modelo Vencedor

Após a comparação, o **KNeighbors** foi selecionado como o modelo de melhor desempenho no conjunto de testes:

| Métrica            | Valor      |
| :----------------- | :--------- |
| **Acurácia Teste** | **82.07%** |
| Acurácia Treino    | 90.28%     |

---

## 💡 Tecnologias e Repositório

Aqui estão as ferramentas e bibliotecas utilizadas neste projeto e o link para o código completo.

### ⚙️ Tecnologias Principais

-   **Linguagem:** Python
-   **Machine Learning:** scikit-learn
-   **Processamento de Dados:** Pandas & NumPy
-   **Visualização:** Matplotlib & Seaborn

### 🌐 Repositório do Código

O código completo do projeto está disponível em:

👉 **[View Project on GitHub](https://github.com/bernardonogueira8/Heart-Disease_Dataset?tab=readme-ov-file#heart-disease-dataset)**

---

## ⚙️ Funcionalidades e Pipeline

O projeto implementa um pipeline completo de Machine Learning, focado na classificação de risco.

### Etapas do Pipeline

-   **Pré-processamento e Exploração de Dados** com **Pandas** e **NumPy**.
-   **Visualização de Dados** para _insights_ e correlações.
-   **Treinamento de Múltiplos Modelos** de classificação (KNeighbors, Logistic Regression, Random Forest, etc.).
-   **Avaliação de Desempenho** via **Acurácia**.
-   **Seleção** do modelo de maior acurácia no teste.

---

## 📊 Resultados Detalhados dos Modelos

A tabela abaixo mostra o desempenho comparativo dos modelos avaliados.

| Modelo                    | Acurácia Treino (%)  | Acurácia Teste (%)  |
| :------------------------ | :------------------- | :------------------ |
| **KNeighbors**            | **90.28**            | **82.07**           |
| Logistic Regression       | 91.67                | 81.38               |
| Random Forest Classifier  | 100.00               | 79.31               |
| Ada Boost                 | 100.00               | 76.55               |
| Decision Tree             | 100.00               | 67.59               |

---

## 📖 Variáveis do Dataset

As variáveis (features) utilizadas para a predição da variável alvo.

| Variável   | Descrição                                                         |
| :--------- | :---------------------------------------------------------------- |
| age        | Idade da pessoa, em anos                                          |
| sex        | Sexo da pessoa (1 = masculino, 0 = feminino)                      |
| cp         | Tipo de dor no peito (1 = angina típica a 4 = assintomático)      |
| trestbps   | Pressão arterial de repouso (mm Hg)                               |
| chol       | Medida de colesterol (mg/dl)                                      |
| fbs        | Glicemia de jejum (> 120 mg/dl: 1 = verdadeiro, 0 = falso)        |
| restecg    | Eletrocardiograma em repouso (0 a 2)                              |
| thalach    | Frequência cardíaca máxima atingida                               |
| exang      | Angina induzida por exercício (1 = sim, 0 = não)                  |
| oldpeak    | Depressão do segmento ST induzida por exercício                   |
| slope      | Inclinação do segmento ST (1 = ascendente a 3 = descendente)      |
| ca         | Número de vasos principais (0–3)                                  |
| thal       | Talassemia (3 = normal, 6 = defeito fixo, 7 = defeito reversível) |
| **target** | **Variável alvo: Presença de doença cardíaca (0 = Não, 1 = Sim)** |',
  ARRAY['Python', 'Ciência de Dados', 'Saúde', 'Projetos']::text[],
  ARRAY['python', 'scikit_learn', 'pandas', 'numpy', 'matplotlib', 'seaborn']::text[],
  true,
  '/attachments/Heart Disease.png',
  'Visualização de dados e predição de doença cardíaca.',
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();


INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  'california-housing-prices',
  'California Housing ML: Predição de Preços de Imóveis',
  'Bernardo Nogueira',
  '2025-07-30'::date,
  'Análise preditiva de preços de casas na Califórnia usando aprendizado de máquina com dados do censo de 1990.',
  '**California Housing ML** é um projeto de **regressão** que utiliza técnicas de **Aprendizado de Máquina (Machine Learning)** para prever o **valor mediano das casas** em distritos da Califórnia, com base em dados do censo de 1990.

O projeto explora e compara o desempenho de múltiplos modelos de regressão para identificar a melhor solução preditiva.

---

## 🎯 Objetivo e Modelo Principal

Esta seção demonstra a aplicação de Machine Learning na **predição de preços imobiliários**.

### Objetivo

O objetivo principal é prever o **valor mediano das casas (medianHouseValue)** com a maior precisão possível, comparando diferentes algoritmos de regressão.

### Modelo Vencedor

Após a comparação, o **Random Forest Regressor** foi selecionado como o modelo de melhor desempenho:

| Métrica      | Valor      |
| :----------- | :--------- |
| **R² Médio** | **0.8068** |
| RMSE Médio   | $50,726.74 |

---

## 💡 Tecnologias e Repositório

Aqui estão as ferramentas e bibliotecas utilizadas neste projeto de regressão e o link para o código completo.

### ⚙️ Tecnologias Principais

-   **Linguagem:** Python
-   **Machine Learning:** scikit-learn
-   **Processamento de Dados:** Pandas & NumPy
-   **Visualização:** Matplotlib & Seaborn

### 🌐 Repositório do Código

O código completo do projeto está disponível em:

👉 **[View Project on GitHub](https://github.com/bernardonogueira8/California_Housing-Prices)**

---

## ⚙️ Funcionalidades e Pipeline

O projeto implementa um pipeline de Machine Learning robusto, desde a exploração de dados até a comparação final dos modelos.

### Etapas do Pipeline

-   **Pré-processamento e Exploração de Dados** com **Pandas** e **NumPy**.
-   **Visualização de Dados** para _insights_ geográficos e de correlação.
-   **Treinamento de Múltiplos Modelos** de regressão.
-   **Avaliação de Desempenho** via **RMSE** e **R²**.
-   **Seleção e Otimização** do modelo mais preciso.

---

## 📊 Resultados Detalhados dos Modelos

A tabela abaixo mostra o desempenho comparativo dos modelos avaliados.

| Modelo                       | RMSE médio     | RMSE std   | R2 médio      | R2 std       |
| :--------------------------- | :------------- | :--------- | :------------ | :----------- |
| **Random Forest Regressor**  | **50,726.74**  | **632.69** | **0.806819**  | **0.005218** |
| Ridge                        | 68,844.91      | 455.56     | 0.644220      | 0.005797     |
| Linear Regression            | 68,847.69      | 460.81     | 0.644191      | 0.005831     |
| Bayesian Ridge               | 68,850.85      | 453.96     | 0.644159      | 0.005754     |
| Elastic Net                  | 76,780.62      | 470.39     | 0.557521      | 0.002349     |
| SVR                          | 118,565.72     | 977.10     | -0.055104     | 0.006184     |

---

## 📖 Variáveis do Dataset

O _dataset_ utiliza dados do censo de 1990 com as seguintes variáveis (features) para a predição do valor alvo:

| Variável             | Tradução                    | Descrição                                               |
| :------------------- | :-------------------------- | :------------------------------------------------------ |
| longitude            | Longitude                   | Medida de quão a oeste está uma casa.                   |
| latitude             | Latitude                    | Medida de quão ao norte está uma casa.                  |
| housingMedianAge     | Idade Mediana das Casas     | Idade mediana das casas em um quarteirão.               |
| totalRooms           | Total de Cômodos            | Número total de cômodos em um quarteirão.               |
| totalBedrooms        | Total de Quartos            | Número total de quartos em um quarteirão.               |
| population           | População                   | Número total de pessoas residentes em um quarteirão.    |
| households           | Domicílios                  | Número total de domicílios em um quarteirão.            |
| medianIncome         | Renda Mediana               | Renda mediana dos domicílios.                           |
| **medianHouseValue** | **Valor Mediano das Casas** | **Variável alvo (target) a ser prevista (em dólares).** |
| oceanProximity       | Proximidade do Oceano       | Localização da casa em relação ao oceano/mar.           |',
  ARRAY['Python', 'Ciência de Dados', 'Finanças', 'Projetos']::text[],
  ARRAY['python', 'scikit_learn', 'pandas', 'numpy', 'matplotlib', 'seaborn']::text[],
  true,
  '/attachments/California_Housing-Prices.png',
  'Visualização de dados e predição de preços de casas na Califórnia.',
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();


INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  'novo-sga',
  'Como Implementar o Novo SGA (Sistema de Gerenciamento de Senhas)',
  'Bernardo Nogueira',
  '2025-11-24'::date,
  'Tutorial sobre o passo a passo para a implementação do Novo SGA.',
  'Este tutorial fornece um passo a passo para a implementação do Novo SGA, um sistema de gerenciamento de senhas eficiente e amplamente utilizado em ambientes públicos e privados.
## Requisitos Mínimos
- **1 Computador/Servidor**: Para o serviço SGA.
- **1 Computador**: Para o chamamento.
- **1 TV**: Para exibição das senhas.
- **Conectividade**: Todos os dispositivos devem estar conectados à mesma rede (cabo ou Wi-Fi).
---
## Etapas de Implementação

### 1. Preparação do Ambiente
1. **Baixar a ISO:** Acesse o site oficial do Proxmox e baixe a imagem ISO mais recente do Proxmox VE.
2. **Criar o Pendrive de Boot:** Use uma ferramenta como o **Rufus** ou **Etcher** para gravar a ISO no pendrive, tornando-o inicializável.
3. **Bootar o Servidor:** Conecte o pendrive no servidor, reinicie-o e selecione o pendrive como dispositivo de boot. 
4. **Iniciar a Instalação:**
    1. Selecione **"Install Proxmox VE"**.<img width="1026" height="768" alt="image" src="https://github.com/user-attachments/assets/2330b30d-374f-4825-a5f6-0641cf70f78e" />
    2. Aceite os Termos de Uso. <img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124114112.png?raw=true" />
    3. Selecione o disco onde o Proxmox será instalado.(Normalmente já vem pré-selecionado, obs: Na janela que se abre (Harddisk options) configurar conforme o print abaixo, definindo 60GB no campo "hdsize" (o restante do espaço em disco será alocado posteriormente para definição do Storage das Máquinas Virtuais), o campo "maxroot" também com 60GB e o "maxvz" com 0 (zero). Isso fará com que o Proxmox não crie a automaticamente uma partição para o Storage das VMs (ele cria por padrão), pois isso será feito manualmente depois).
    4. Defina as **Configurações Regionais** (País, Fuso Horário e Layout do Teclado). <img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124114258.png?raw=true" />
    5. Crie a senha de root e insira um e-mail. (Para padronizar, preencha a senha com ''root'').<img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124114342.png?raw=true" />
    6. Configure as **Configurações de Rede**: IP estático, Netmask, Gateway e DNS Server. **Dica:** Use um IP fixo que você possa lembrar facilmente, mas caso não possua conhecimento do IP livre, deixe em dhcp.
    7. Confirme o resumo e comece a instalação. <img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124114540.png?raw=true" />
5. **Acesso:** Após a reinicialização, acesse a interface web pelo seu navegador: `https://<Seu_IP_Proxmox>:8006`
## Parte 2: Instalação do Portainer (Em um Contêiner LXC)
É uma boa prática instalar o Portainer dentro de um contêiner leve (LXC) no Proxmox para gerenciar o Docker.

### 1. Criar um Contêiner VM para o Docker
1. **Acesse o Shell:** Na interface web do Proxmox, navegue para o nó principal (**host**) e clique em **Shell**. <img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124115647.png?raw=true" />
2. **Execute o Script:** Cole o código que você forneceu. Ele irá baixar, configurar e criar uma VM com o Ubuntu 24.04.
   ```
   bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/vm/ubuntu2404-vm.sh)"
   ```
3. - **Ajuste de Recursos:** Após a conclusão, clique na VM criada (o ID geralmente será o **101**). Vá em **Hardware** e edite **Memory** e **Processor** de acordo com sua necessidade.
4. **Configuração de Login:** Em **Cloud-Init**, defina o **User** e a **Password** para `root` e sua senha.
5. **Inicialize:** Clique em **Start** no canto superior.

### 2. Instalar Docker e Portainer no Contêiner
1. **Acessar o Terminal:** Na interface do Proxmox, selecione o novo CT e clique em **Console**. Faça login como `root`.
2. **Instalar Docker:**
    - Atualize os pacotes:
        ```
        apt update && apt upgrade -y
        curl -fsSL https://get.docker.com -o get-docker.sh sh get-docker.sh
        ```
3. **Instale o Portainer:** Inicie o Portainer no Docker. Ele será responsável por gerenciar seus contêineres do NovaSGA:
    ```
	docker volume create portainer_data
	docker run -d -p 9000:9000 -p 9443:9443 --name portainer \
	--restart always \
	-v /var/run/docker.sock:/var/run/docker.sock \
	-v portainer_data:/data \
	portainer/portainer-ce:latest
    ```
4. Acesso ao Portainer: Descubra o IP da sua VM (use o comando ip a no console da VM). Abra seu navegador e acesse a interface do Portainer: https://<IP_da_VM>:9443
5. Configuração Inicial: Crie o usuário administrador, defina a senha e, na próxima tela, selecione "Local" e clique em "Connect". *Dica:* Coloque a senha como: _SenhaPortainerProxmox_
## Parte 3: Utilização do NovaSGA (Via Portainer)
Com o Portainer pronto, o processo para subir o NovaSGA é o mesmo (e o mais fácil) usando **Stacks** (Docker Compose). 
Uma ótima playlist é do canal "Missão Live" ([AULA 8 \| Instalando Novosga Versão 2.2 - YouTube](https://www.youtube.com/watch?v=yYieBXf7Cf4&list=PLO9jGpiO1ux2vEAzKzbZsA5aKnO0Heg59&index=8)). 
Iremos instalar já versão 2.2, para porder habilitar a função Fura Fila.

### 1. Configuração no Portainer (Usando Stacks)

1. No Portainer, vá em **"Stacks"** -> **"Add stack"**.
2. Dê um nome para o projeto (ex: `novasga-sistema`).
3. Cole o seguinte código no campo **"Web editor"**. Este código garante que o sistema de fila, o painel e o banco de dados rodem juntos:
    > ⚠️ **Atenção:** Mantenha as portas e senhas ajustadas para sua infra. As imagens usadas são de exemplo, você deve buscar as **imagens oficiais mais recentes** do NovaSGA no Docker Hub (geralmente sob a organização `novasga/` ou similar).
    ```yaml
	services:
	  novosga:
	    image: novosga/novosga:2.2-standalone
	    restart: always
	    depends_on:
	      - mysqldb
	    ports:
	      - "80:8080"
	    environment:
	      APP_ENV: ''prod''
	      # database connection
	      DATABASE_URL: ''mysql://novosga:MySQL_App_P4ssW0rd@mysqldb:3306/novosga2?charset=utf8mb4&serverVersion=5.7''
	      # default admin user
	      NOVOSGA_ADMIN_USERNAME: ''admin''
	      NOVOSGA_ADMIN_PASSWORD: ''123456''
	      NOVOSGA_ADMIN_FIRSTNAME: ''Administrador''
	      NOVOSGA_ADMIN_LASTNAME: ''Global''
	      # default unity
	      NOVOSGA_UNITY_NAME: ''Minha unidade''
	      NOVOSGA_UNITY_CODE: ''U01''
	      # default no-priority
	      NOVOSGA_NOPRIORITY_NAME: ''Normal''
	      NOVOSGA_NOPRIORITY_DESCRIPTION: ''Atendimento normal''
	      # default priority
	      NOVOSGA_PRIORITY_NAME: ''Prioridade''
	      NOVOSGA_PRIORITY_DESCRIPTION: ''Atendimento prioritário''
	      # default place
	      NOVOSGA_PLACE_NAME: ''Guichê''
	      # Set TimeZone and locale
	      TZ: ''America/Sao_Paulo''
	      APP_LANGUAGE: ''pt_BR''
	      # Endereço Mercure para publicar mensagem (onde "mercure" é o nome do host)
	      # esse endereço será chamado internamente via o PHP
	      MERCURE_URL: http://mercure:3000/.well-known/mercure
	      # Endereço Mercure para consumir mensagem
	      # esse endereço será chamado via o navegador web
	      MERCURE_PUBLIC_URL: http://<seu-ip>:3000/.well-known/mercure
	      # the default secret key, must be the same as MERCURE_PUBLISHER_JWT_KEY
	      MERCURE_JWT_SECRET: "!ChangeThisMercureHubJWTSecretKey!"
	  mercure:
	    image: novosga/mercure:v0.11
	    restart: always
	    ports:
	      - "3000:3000"
	    environment:
	      # same value from ports
	      SERVER_NAME: ":3000"
	      # default publish key, must be changed
	      MERCURE_PUBLISHER_JWT_KEY: "!ChangeThisMercureHubJWTSecretKey!"
	      MERCURE_EXTRA_DIRECTIVES:  "anonymous 1; cors_origins *"
	  mysqldb:
	    image: mysql:8.0
	    restart: always
	    environment:
	      MYSQL_USER: ''novosga''
	      MYSQL_DATABASE: ''novosga2''
	      MYSQL_ROOT_PASSWORD: ''MySQL_r00t_P4ssW0rd''
	      MYSQL_PASSWORD: ''MySQL_App_P4ssW0rd''
	      # Set TimeZone
	      TZ: ''America/Sao_Paulo''
    ```
4. Clique em "Deploy the stack".
5. Executando docker-compose:
```
docker-compose up -d
```
6. Acessar o banco de dados MySQL como root:
```
docker-compose exec mysqldb sh -c  ''mysql -uroot -p''
```
7. Dar permissão de acesso para o usuário da aplicação:
```
GRANT ALL ON novosga2.* TO ''novosga''@''%'' IDENTIFIED BY ''MySQL_App_P4ssW0rd'';
quit
```

## Configuração do NovoSGA
### Aparência
- Preencha o campo Logo da barra de Navegação com: <img width="99" height="38" alt="novosga-navbar" src="https://github.com/user-attachments/assets/9ea8bead-a5d9-4f17-84f3-8aeb187140ff" />

- Preencha o campo Logo do Login com:<img width="270" height="107" alt="novosga-login" src="https://github.com/user-attachments/assets/60d80423-1123-4e95-9b30-668a07f2684e" />

### Sistema
<img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124140641.png?raw=true" />

### Unidades
Preeencher apenas com Nome
### Serviços
<img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124141556.png?raw=true" />

### Perfis
<img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124141623.png?raw=true" />

### Prioridades
<img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124143022.png?raw=true" />

---

## Referências
[GitHub - Novo SGA](https://github.com/novosga/novosga)
[Documentação | Novo SGA](http://novosga.org/docs/#/)
[Tutorial instalação do Novo SGA 2.0.8 + Painel no Debian server 11 · GitHub](https://gist.github.com/rhuandevops/fe72dc889ca5f8d9b67daf1d2d627be2)
[1. Instalação do Proxmox \| Portal de Manuais Institucionais](https://manuais.ifsertaope.edu.br/books/infraestrutura-de-redes/page/1-instala%C3%A7%C3%A3o-do-proxmox)
## Conclusão
Caso tenha dúvidas, consulte a [documentação oficial](https://novosga.github.io/) ou entre em contato com a comunidade do Novo SGA.',
  ARRAY['Docker', 'Saúde', 'Projetos']::text[],
  ARRAY['docker', 'php']::text[],
  true,
  '/attachments/novosga.png',
  'Visualização do painel SGA.',
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();


INSERT INTO public.posts (
  slug, title, author, pub_date, description, content, tags, languages, project, image_url, image_alt, status
) VALUES (
  'como-consumir-dados-do-datasus',
  '05 Como consumir dados do DATASUS',
  'Bernardo Nogueira',
  '2026-06-25'::date,
  'Tutorial sobre o caminho das pedras para consumir dados de Produção Ambulatorial (SIA/SUS) e cruzar com Dados Populacionais, permitindo criar indicadores reais e não apenas olhar para números absolutos.',
  'Hoje, vou mostrar o caminho das pedras para consumir dados de **Produção Ambulatorial (SIA/SUS)** e cruzar com **Dados Populacionais**, permitindo criar indicadores reais e não apenas olhar para números absolutos.
- Link: [Informações de Saúde (TABNET) – DATASUS](https://datasus.saude.gov.br/informacoes-de-saude-tabnet/) 
- Link para população: [TabNet População Residente - Estudo de Estimativas Populacionais por Município, Idade e Sexo 2000-2025 - Brasil](http://tabnet.datasus.gov.br/cgi/tabcgi.exe?ibge/cnv/popsvs2024br.def) 
#### **Passo 1: Coletando os Dados de Produção (SIA/SUS)**
![Pasted image 20260511100538.png](../../../../public/attachments/Pasted%20image%2020260511100538.png)
1. Acesse o portal do DATASUS e vá em **Informações de Saúde (TABNET)**.
2. Navegue pelo caminho: _Assistência à Saúde > Produção Ambulatorial (SIA/SUS) > Por gestor - a partir de 2008_.
3. Selecione a abrangência geográfica (ex: Brasil por Região ou Município).
4. Defina o que quer ver nas **Linhas** (ex: Município), **Colunas** (ex: Ano/Mês de processamento) e o **Conteúdo** (ex: Quantidade aprovada ou Valor aprovado).
#### **Passo 2: O Segredo dos Indicadores (População)** 
Analisar apenas o volume de procedimentos pode enganar (cidades maiores sempre terão números maiores). Precisamos da taxa per capita.
1. Volte ao TABNET.
2. Acesse: _Demográficas e Socioeconômicas > População Residente - Estudo de Estimativas Populacionais por Município, Idade e Sexo 2000-2025 - Brasil_. ![Pasted image 20260512155831.png](../../../../public/attachments/Pasted%20image%2020260512155831.png)
3. Exporte a estimativa populacional para os mesmos locais e anos do Passo 1.

💡 **A Mágica acontece no Cruzamento:** Ao exportar os dois arquivos `.csv`, você pode levá-los para o Power BI ou Python. Com um simples relacionamento (join) pelo código do município (IBGE), você cria métricas como: **Procedimentos Ambulatoriais por 1.000 habitantes**.

Isso sim é monitoramento e avaliação em saúde com profundidade!

E você, já precisou extrair dados do TABNET para algum projeto? Conta aqui nos comentários qual foi o maior desafio. 👇
`#AnaliseDeDados #SaudeDigital #DATASUS #PowerBI #BusinessIntelligence #SaudePublica #SUS`',
  ARRAY['Python', 'Projetos', 'DataScience', 'MachineLearning']::text[],
  ARRAY['python', 'scikit_learn', 'pandas', 'numpy', 'matplotlib', 'seaborn']::text[],
  true,
  '/attachments/TABNET.png',
  'Visualização do painel SGA.',
  'published'
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  author = EXCLUDED.author,
  pub_date = EXCLUDED.pub_date,
  description = EXCLUDED.description,
  content = EXCLUDED.content,
  tags = EXCLUDED.tags,
  languages = EXCLUDED.languages,
  project = EXCLUDED.project,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  status = EXCLUDED.status,
  updated_at = NOW();
