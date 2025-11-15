FROM jenkins/jenkins:lts

USER root

# Dependências básicas + Docker CLI
RUN apt-get update && apt-get install -y \
    git \
    curl \
    docker.io \
    build-essential \
    gnupg \
    lsb-release

# Node.js 20.x + npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Permite Jenkins usar Docker
RUN usermod -aG docker jenkins

USER jenkins
