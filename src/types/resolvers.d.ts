declare module '@hookform/resolvers/zod' {
  import type { Resolver } from 'react-hook-form';
  import type { ZodTypeAny, infer as Infer } from 'zod';
  export function zodResolver<T extends ZodTypeAny>(schema: T): Resolver<Infer<T>>;
}
