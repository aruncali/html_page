# 🚀 HTML Web Page CI/CD with GitHub Actions, Docker & AWS EC2

A simple **HTML/CSS/JavaScript web application** deployed using an automated CI/CD pipeline.

## 🛠️ Technologies

* Git & GitHub
* GitHub Actions
* Docker
* Docker Hub
* AWS EC2
* Linux
* Nginx
* Docker Network
* SSH

## 🔄 CI/CD Pipeline

```text
Developer
   ↓
Git Push
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Docker Build
   ↓
Docker Hub
   ↓
SSH → AWS EC2
   ↓
Docker Container
   ↓
Nginx
   ↓
Live Website
```

## ⚙️ Workflow

1. Push code to the `main` branch.
2. GitHub Actions automatically starts.
3. Checkout the source code.
4. Build the Docker image.
5. Push the image to Docker Hub.
6. Connect to AWS EC2 using SSH.
7. Pull the latest Docker image.
8. Replace the old container.
9. Start the updated website.

## 🐳 Docker

The application uses **Nginx Alpine** to serve the static website.

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## ☁️ AWS EC2

The Docker container runs on an Ubuntu EC2 instance.

```bash
docker ps
docker images
docker network ls
```

Website:

```text
http://EC2_PUBLIC_IP:8080
```

## 🔐 Security

Docker Hub credentials and EC2 SSH credentials are stored using **GitHub Actions Variables and Secrets** instead of being hard-coded in the workflow.

## 📌 Project Outcome

This project demonstrates an end-to-end **CI/CD workflow from Git push to a live application running inside a Docker container on AWS EC2**.

## 👨‍💻 Author

**Arun**
