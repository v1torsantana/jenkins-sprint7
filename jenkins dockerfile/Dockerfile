FROM jenkins/jenkins:lts

USER root

# Instala dependências básicas + Docker CLI + Node.js
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    lsb-release \
    docker.io \
    git \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Instala Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*


# Permite que o usuário Jenkins use Docker
RUN usermod -aG docker jenkins

USER root

