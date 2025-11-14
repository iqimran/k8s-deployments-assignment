# Zero Downtime Kubernetes Deployments

## What is included
- Simple Node.js web app that prints version
- Docker images: yourhubuser/webapp:v1 and :v2
- Kubernetes manifests:
  - manifests/blue-green/
  - manifests/rolling/
  - manifests/canary/

## How to run (Minikube)
1. Build & push images to Docker Hub (or load into minikube)
2. kubectl apply -f manifests/blue-green
3. port-forward: kubectl port-forward svc/webapp 8080:80
4. curl watch - test zero downtime while switching

## How zero downtime is achieved
- Blue-Green: service selector switched only after green pods are Ready
- Rolling: maxUnavailable: 0 and readiness probes ensure at least N pods are available
- Canary: stepwise traffic shift using Argo Rollouts
