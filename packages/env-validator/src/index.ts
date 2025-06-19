import * as z from 'zod/v4/core';
import { logger } from '@fintrail/logger';

import { ERROR_MESSAGES, MODULE_NAME } from './constants/error.js';

/**
 * Validates environment variables against a Zod schema.
 *
 * @template T - Extends Zod schema type
 * @param {T} schema - Zod schema to validate environment variables against
 * @returns {z.output<T>} Parsed and validated environment variables
 * @throws {Error} When environment variables fail validation
 *
 * @example
 * ```typescript
 * const envSchema = z.object({
 *   PORT: z.string(),
 *   API_KEY: z.string()
 * });
 *
 * const env = validateEnv(envSchema);
 * ```
 */
export const validateEnv = <T extends z.$ZodType>(schema: T): z.output<T> => {
  const parsedEnv = z.safeParse(schema, process.env);

  if (parsedEnv.success) {
    return parsedEnv.data;
  }

  logger.error({
    module: MODULE_NAME,
    message: ERROR_MESSAGES.ENV_VALIDATION_FAILED,
    details: z.prettifyError(parsedEnv.error),
  });

  throw new Error(ERROR_MESSAGES.ENV_VALIDATION_FAILED);
};
