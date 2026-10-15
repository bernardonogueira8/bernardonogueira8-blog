---
layout: /src/layouts/MarkdownPostLayout.astro
title: "Como Implementar o Novo SGA (Sistema de Gerenciamento de Senhas)"
author: Bernardo Nogueira
pubDate: 2025-11-24
description: "Tutorial sobre o passo a passo para a implementação do Novo SGA."
tags: ["Docker", "Saúde", "Projetos"]
project: true
languages: ["docker", "php"]
image:
    url: "/attachments/novosga.png"
    alt: "Visualização do painel SGA."
---
Este tutorial fornece um passo a passo para a implementação do Novo SGA, um sistema de gerenciamento de senhas eficiente e amplamente utilizado em ambientes públicos e privados.
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
    5. Crie a senha de root e insira um e-mail. (Para padronizar, preencha a senha com 'root').<img width="1026" height="768" alt="image" src="https://github.com/bernardonogueira8/bernardonogueira8.github.io/blob/main/public/attachments/Pasted%20image%2020251124114342.png?raw=true" />
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
	      APP_ENV: 'prod'
	      # database connection
	      DATABASE_URL: 'mysql://novosga:MySQL_App_P4ssW0rd@mysqldb:3306/novosga2?charset=utf8mb4&serverVersion=5.7'
	      # default admin user
	      NOVOSGA_ADMIN_USERNAME: 'admin'
	      NOVOSGA_ADMIN_PASSWORD: '123456'
	      NOVOSGA_ADMIN_FIRSTNAME: 'Administrador'
	      NOVOSGA_ADMIN_LASTNAME: 'Global'
	      # default unity
	      NOVOSGA_UNITY_NAME: 'Minha unidade'
	      NOVOSGA_UNITY_CODE: 'U01'
	      # default no-priority
	      NOVOSGA_NOPRIORITY_NAME: 'Normal'
	      NOVOSGA_NOPRIORITY_DESCRIPTION: 'Atendimento normal'
	      # default priority
	      NOVOSGA_PRIORITY_NAME: 'Prioridade'
	      NOVOSGA_PRIORITY_DESCRIPTION: 'Atendimento prioritário'
	      # default place
	      NOVOSGA_PLACE_NAME: 'Guichê'
	      # Set TimeZone and locale
	      TZ: 'America/Sao_Paulo'
	      APP_LANGUAGE: 'pt_BR'
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
	      MYSQL_USER: 'novosga'
	      MYSQL_DATABASE: 'novosga2'
	      MYSQL_ROOT_PASSWORD: 'MySQL_r00t_P4ssW0rd'
	      MYSQL_PASSWORD: 'MySQL_App_P4ssW0rd'
	      # Set TimeZone
	      TZ: 'America/Sao_Paulo'
    ```
4. Clique em "Deploy the stack".
5. Executando docker-compose:
```
docker-compose up -d
```
6. Acessar o banco de dados MySQL como root:
```
docker-compose exec mysqldb sh -c  'mysql -uroot -p'
```
7. Dar permissão de acesso para o usuário da aplicação:
```
GRANT ALL ON novosga2.* TO 'novosga'@'%' IDENTIFIED BY 'MySQL_App_P4ssW0rd';
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
Caso tenha dúvidas, consulte a [documentação oficial](https://novosga.github.io/) ou entre em contato com a comunidade do Novo SGA.

