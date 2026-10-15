---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Titanic ML: Prevendo Sobrevivência de Passageiros"
author: Bernardo Nogueira
pubDate: 2025-07-29
description: "Análise preditiva de sobrevivência dos passageiros do Titanic usando aprendizado de máquina e variáveis socioeconômicas."
tags: ["Python", "Ciência de Dados", "Machine Learning", "Projetos"]
project: true
languages: ["python", "scikit_learn", "pandas", "numpy", "matplotlib", "seaborn"]
image:
    url: "/attachments/Titanic_Machine-Learning.png"
    alt: "Visualização de dados e predição de sobrevivência dos passageiros do Titanic."
---

O projeto **Titanic ML** é um projeto de **classificação binária** que utiliza técnicas de **Aprendizado de Máquina (Machine Learning)** para prever a **sobrevivência de passageiros** a bordo do RMS Titanic, com base em variáveis socioeconômicas.

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
| **Survived** | **Variável alvo: Sobrevivência** | **0 = Não, 1 = Sim**      |
