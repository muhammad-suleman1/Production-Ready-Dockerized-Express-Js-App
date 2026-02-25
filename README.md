# Production-Ready Dockerized Microservice on AWS EC2

## 📌 Project Overview

This project demonstrates a production-style deployment of a containerized Express.js microservice on AWS EC2 with:

- Docker containerization
- Nginx reverse proxy
- IAM role-based access
- Blue-Green deployment strategy
- CI/CD using GitHub Actions
- Centralized monitoring using Prometheus and Grafana

The goal of this project is to simulate a real-world DevOps production environment and demonstrate end-to-end infrastructure deployment and monitoring.

---

## 🏗 Architecture

```
Internet
   ↓
AWS EC2 (Ubuntu)
   ↓
Nginx (Reverse Proxy)
   ↓
Docker Container (Express.js App)
   ↓
Prometheus (Metrics Collection)
   ↓
Grafana (Monitoring Dashboard)
```

---

## 🛠 Technologies Used

- Node.js (Express.js)
- Docker
- AWS EC2
- AWS IAM Role
- Nginx
- Prometheus
- Grafana
- GitHub Actions (CI/CD)

---

## 🚀 Features

- Containerized microservice using Docker
- Reverse proxy configuration with Nginx
- Blue-Green deployment model for zero-downtime updates
- Automated deployment pipeline using GitHub Actions
- Infrastructure monitoring with Prometheus
- Visualization dashboards with Grafana
- Health check endpoint (`/health`) for service validation

---

## 📂 Project Structure

```
production-dockerized-microservice/
│
├── app/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── nginx/
│   └── default.conf
│
├── monitoring/
│   └── prometheus.yml
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
└── README.md
```

---

## 🐳 Running the Application Locally

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2️⃣ Build Docker Image

```
docker build -t my-microservice .
```

### 3️⃣ Run Container

```
docker run -d -p 3000:3000 my-microservice
```

Visit:

```
http://localhost:3000
```

Health Check:

```
http://localhost:3000/health
```

---

## ☁️ Deployment on AWS EC2

### Steps Performed

1. Launched Ubuntu EC2 instance
2. Configured Security Groups for ports:
   - 22 (SSH)
   - 80 (HTTP)
   - 3000 (App)
   - 9090 (Prometheus)
   - 3001 (Grafana)
3. Installed Docker and Nginx
4. Attached IAM Role to EC2 for secure access
5. Deployed Docker container
6. Configured Nginx as reverse proxy
7. Implemented Blue-Green deployment approach
8. Integrated CI/CD using GitHub Actions

---

## 🔄 Blue-Green Deployment Strategy

- Blue version runs on one port
- Green version runs on another port
- Nginx switches traffic between versions
- Enables zero-downtime deployment
- Allows safe rollback if new version fails

---

## 📊 Monitoring Setup

### Prometheus (To be added later)
- Scrapes metrics from:
  - Node Exporter (EC2 metrics)
  - Docker containers
- Configured using `prometheus.yml`

Access:
```
http://<EC2_PUBLIC_IP>:9090
```

### Grafana (To be added later)

- Connected to Prometheus as data source
- Imported Node Exporter dashboard (ID: 1860)
- Displays:
  - CPU usage
  - Memory usage
  - Disk usage
  - Network metrics

Access:
```
http://<EC2_PUBLIC_IP>:3001
```

Default login:
```
admin / admin
```

---

## 🔐 Security Implementation

- IAM Role attached to EC2
- No hardcoded AWS credentials
- Security groups restrict traffic to required ports
- Reverse proxy prevents direct container exposure

---

## 🧠 Troubleshooting Example

Resolved a 404 error caused by default Nginx static configuration by replacing it with a reverse proxy configuration:

```
location / {
    proxy_pass http://127.0.0.1:3000;
}
```

---

## 📌 Key Learnings

- Docker container networking
- Reverse proxy configuration with Nginx
- Production debugging methodology
- Prometheus scraping configuration
- CI/CD automation with GitHub Actions
- Blue-Green deployment principles
- Cloud security best practices using IAM Roles

---

## 📷 Screenshots (Add These)

- Running application in browser
- Prometheus Targets page
- Grafana dashboard view
- GitHub Actions successful deployment
- EC2 instance configuration

---

## 📈 Future Improvements

- Push Docker images to AWS ECR
- Add HTTPS using Let’s Encrypt
- Implement Auto Scaling
- Use Terraform for Infrastructure as Code
- Add alerting (Slack/Email notifications)

---

## 👨‍💻 Author

Muhammad Suleman 
DevOps Production Project – Feb 25, 2026