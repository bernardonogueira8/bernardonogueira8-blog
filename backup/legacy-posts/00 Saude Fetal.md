---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Saúde Fetal: Análise e Classificação de Cardiotocografias"
author: Bernardo Nogueira
pubDate: 2025-01-29
description: "Análise automatizada de Cardiotocografias (CTGs) usando Deep Learning para classificar o risco de sofrimento fetal."
tags: ["Python", "Ciência de Dados", "Saúde", "Deep Learning", "Projetos"]
project: true
languages: ["python", "tensorflow", "pandas", "scikit_learn", "mlflow"]
image:
    url: "/attachments/fetal_health.png"
    alt: "Visualização de cardiotocografia e análise de dados."
---

O projeto **Saúde Fetal** utiliza **Deep Learning** para fornecer suporte à prevenção da mortalidade infantil e materna. O foco é a **análise automatizada** de Cardiotocografias (CTGs) para classificar o risco fetal em tempo real.

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
| **fetal_health**                | **Variável alvo: Estado fetal (Normal, Suspeito, Patológico).** |
