# @fintrail/logger

`@fintrail/logger` provides a pre-configured [Pino](https://getpino.io/) logger for use across Fintrail projects. It supports pretty-printing in development and structured logs in production, with log level and formatting controlled by environment variables.

## Usage

```typescript
import { logger } from '@fintrail/logger';

logger.info('Application started');
logger.error({ err }, 'An error occurred');
```

## Configuration

- `LOG_LEVEL`: Set the minimum log level (e.g., info, debug, error). Defaults to **silent** if not set.
- Pretty-printing is enabled automatically when running in a TTY (interactive terminal).
