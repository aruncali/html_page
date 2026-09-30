FROM nginx:apline
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g", "damemod off;"]
