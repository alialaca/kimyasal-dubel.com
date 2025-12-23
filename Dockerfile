FROM steebchen/nginx-spa:stable
WORKDIR /app
COPY ./dist ./
EXPOSE 80
CMD ["nginx"]