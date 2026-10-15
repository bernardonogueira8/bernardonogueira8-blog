---
layout: /src/layouts/MarkdownPostLayout.astro
title: 05 Como consumir dados do DATASUS
author: Bernardo Nogueira
pubDate: 2026-06-25
tags:
  - Python
  - Projetos
  - DataScience
  - MachineLearning
project: true
languages:
  - python
  - scikit_learn
  - pandas
  - numpy
  - matplotlib
  - seaborn
image:
  url: /attachments/TABNET.png
  alt: Visualização do painel SGA.
description: Tutorial sobre o caminho das pedras para consumir dados de Produção Ambulatorial (SIA/SUS) e cruzar com Dados Populacionais, permitindo criar indicadores reais e não apenas olhar para números absolutos.
---
Hoje, vou mostrar o caminho das pedras para consumir dados de **Produção Ambulatorial (SIA/SUS)** e cruzar com **Dados Populacionais**, permitindo criar indicadores reais e não apenas olhar para números absolutos.
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
`#AnaliseDeDados #SaudeDigital #DATASUS #PowerBI #BusinessIntelligence #SaudePublica #SUS`