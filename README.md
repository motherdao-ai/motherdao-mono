# MotherDAO Monorepo

This monorepo contains all the services and applications for the MotherDAO platform.

## Project Structure

```
motherdao/
├── apps/
│   ├── frontend/          # Next.js user interface
│   └── agent-portal/      # Agent development dashboard
├── packages/
│   ├── core/              # Shared core utilities
│   ├── contracts/         # Smart contracts for AVS
│   └── sdk/               # Agent Development Kit
├── services/
│   ├── registration/      # Agent registration service
│   ├── avs/              # Actively Validated Service
│   ├── graph/            # Agent Graph service
│   ├── context/          # Shared Context Layer
│   └── payments/         # Payment infrastructure
└── infrastructure/
    ├── deployment/       # Deployment configurations
    └── monitoring/       # Observability setup
```

## Prerequisites

- Node.js 20.x or later
- PNPM 8.x or later
- Docker and Docker Compose
- Git

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build all packages:
   ```bash
   pnpm build
   ```

3. Start development servers:
   ```bash
   pnpm dev
   ```

Alternatively, use Docker Compose for development:
```bash
docker-compose up
```

## Development Workflow

### Package Management

- Add a dependency to a workspace:
  ```bash
  pnpm add <package> --filter <workspace-name>
  ```

- Add a development dependency:
  ```bash
  pnpm add -D <package> --filter <workspace-name>
  ```

### Common Commands

- `pnpm build`: Build all packages and applications
- `pnpm dev`: Start development servers
- `pnpm test`: Run tests across all packages
- `pnpm lint`: Lint all packages
- `pnpm clean`: Clean build artifacts

### Working on Services

Each service can be developed independently:

1. Navigate to the service directory
2. Run `pnpm dev` to start the service
3. Service will be available on its designated port:
   - Frontend: http://localhost:3000
   - Registration Service: http://localhost:3001
   - AVS Service: http://localhost:3002
   - Graph Service: http://localhost:3003

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## Docker Support

Each service includes a Dockerfile and can be built individually:

```bash
docker build -f services/registration/Dockerfile .
```

For local development with all services:

```bash
docker-compose up
```

## Documentation

- [Frontend Documentation](./apps/frontend/README.md)
- [SDK Documentation](./packages/sdk/README.md)
- [Service Documentation](./services/README.md)

## License

ISC
