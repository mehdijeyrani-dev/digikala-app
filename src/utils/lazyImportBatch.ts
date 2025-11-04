import { lazyImport } from "@/utils/lazyImport";
import type { AppSection } from "@/utils/lazyImport";

export const lazyImportBatch = <
  const T extends readonly string[],
  Section extends AppSection
>(
  section: Section,
  pageNames: T
): Record<T[number], ReturnType<typeof lazyImport>> => {
  return pageNames.reduce((acc, name) => {
    (acc as Record<T[number], ReturnType<typeof lazyImport>>)[
      name as T[number]
    ] = lazyImport({ section, name });
    return acc;
  }, {} as Record<T[number], ReturnType<typeof lazyImport>>);
};
