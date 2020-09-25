#
# Образ ноды с докерхаба
FROM node:latest
#Установили рабочую директорию
WORKDIR /app
#
ENV PATH /app/node_modules/.bin:$PATH
# Все зависимости установлены
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g --silent

# Копируем все файлы в папку
COPY . ./

# Указываем команду при запуске
CMD ["npm", "start"]