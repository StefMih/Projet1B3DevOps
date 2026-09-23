# Projet 1 B3 DevOps

[![Build, Test and Deploy](https://github.com/StefMih/Projet1B3DevOps/actions/workflows/docker-ci.yml/badge.svg)](https://github.com/StefMih/Projet1B3DevOps/actions/workflows/docker-ci.yml)

Pipeline CI/CD complet automatisé avec GitHub Actions, conteneurisation Docker, analyse de vulnérabilités et déploiement continu sur VPS avec rollback automatique.

---

## 🔄 Cycle DevOps (CI/CD Pipeline)

```mermaid
flowchart LR
    %% Styles
    classDef dev fill:#238636,stroke:#2ea043,stroke-width:2px,color:#fff;
    classDef center fill:#1f6feb,stroke:#388bfd,stroke-width:2px,color:#fff;
    classDef ops fill:#8957e5,stroke:#a371f7,stroke-width:2px,color:#fff;
    classDef alert fill:#da3633,stroke:#f85149,stroke-width:2px,color:#fff;

    %% Boucle DEV (CI)
    subgraph CI ["Boucle CI (GitHub Actions)"]
        A[Code Git] --> B[Lint HTMLHint]
        B --> C[Build Docker]
        C --> D[Sec Scan Trivy]
    end

    %% Carrefour central
    D --> E((Push GHCR))

    %% Boucle OPS (CD & Run)
    subgraph CD ["Boucle CD (VPS & Monitoring)"]
        E --> F[SSH Deploy VPS]
        F --> G[Tag Backup & Run]
        G --> H{Smoke Test curl}
        H -- Succès --> I[Production en ligne]
        H -- Échec --> J[Rollback Automatique]
        J --> I
        I --> K[Monitoring Uptime]
    end

    %% Rebouclage vers le code
    K -. Feedback & Correctifs .-> A
    J -. Alerte incident .-> A

    %% Assignation des styles
    class A,B,C,D dev;
    class E center;
    class F,G,H,I,K ops;
    class J alert;
