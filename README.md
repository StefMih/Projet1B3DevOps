# Projet 1 B3 DevOps

<p align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/infinite-loop.gif" alt="DevOps Infinity Loop" width="480"/>
</p>

<p align="center">
  Pipeline CI/CD complet automatise avec GitHub Actions, conteneurisation Docker, Trivy et deploiement sur VPS avec rollback automatique.
</p>

---

## Statut du pipeline

| Composant | Description | Statut |
| :--- | :--- | :--- |
| Pipeline Global | Workflow complet (CI/CD) | [![Build, Test and Deploy](https://github.com/StefMih/Projet1B3DevOps/actions/workflows/docker-ci.yml/badge.svg)](https://github.com/StefMih/Projet1B3DevOps/actions/workflows/docker-ci.yml) |
| Linter | Validation syntaxique du code web | HTMLHint |
| Securite | Audit des vulnerabilites de l'image | Trivy |
| Registre | Stockage de l'image Docker | GitHub Packages (ghcr.io) |
| Rollback | Restauration automatique sur incident | Image locale :backup |
| Environnement | Serveur de production | Port 20000 |

---

## Flux d'execution du pipeline

```mermaid
flowchart TD
    subgraph CI [Integration Continue]
        A[Git Push] --> B[Verification HTMLHint]
        B --> C[Construction image Docker]
        C --> D[Audit vulnerabilites Trivy]
        D --> E[Publication vers ghcr.io]
    end

    subgraph CD [Deploiement Continu]
        E --> F[Connexion SSH et telechargement de l'image]
        F --> G[Tag de l'ancienne version en :backup]
        G --> H[Demarrage du conteneur :latest]
        H --> I{Smoke Test curl}
        I -- Succes --> J[Production active]
        I -- Echec --> K[Rollback vers :backup]
        K --> J
    end
