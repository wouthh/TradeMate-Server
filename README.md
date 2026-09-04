# TradeMate-Server

> **Historical project**
>
> This repository is preserved as the backend component of an earlier trading-system experiment. It is unmaintained and not intended for production deployment.
>
> Current configuration is supplied through required environment variables. External services, dependencies, and current compatibility have not been verified.

TradeMate bot server used for trading. Made with NodeJS.

## Configuration

Copy `.env.example` to an untracked `.env` file for local configuration. Supply `MONGO_URI` and `PASSPORT_SECRETKEY`, and replace the example signing value with a local development secret. Do not use production credentials with this project.

User registration remains disabled unless `REGISTRATION_MASTER_PASSWORD` is set. It is intentionally omitted from `.env.example` so copying the example does not enable registration; only set a separate local-development value when inspecting registration in an isolated environment.
