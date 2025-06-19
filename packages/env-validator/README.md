# @fintrail/env-validator

`@fintrail/env-validator` is a utility library for validating environment variables in Node.js applications using [Zod](https://github.com/colinhacks/zod) schemas. It ensures that all required environment variables are present and conform to the expected types and formats, providing clear error messages and logging for easier debugging.

## Usage

```typescript
import { z } from 'zod';
import { validateEnv } from '@fintrail/env-validator';

const envSchema = z.object({
  PORT: z.string(),
  API_KEY: z.string(),
});

const env = validateEnv(envSchema);
// env.PORT and env.API_KEY are now validated and typed
```
