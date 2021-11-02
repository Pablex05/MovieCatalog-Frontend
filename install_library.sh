#!/bin/bash

echo "instalar node"
sudo apt install npm
npm install -g npm@latest
npm cache clean --force
echo "creamos el proyecto"
npx create-react-app proyecto-nuevo
cd proyecto-nuevo
echo "instalamos librerias"
npm install yet
nvm install 16.13.0
nvm use 16.13.0
npm install --save react-native
npm install --save bootstrap
npm install --save react-router-dom
npm install --save axios




