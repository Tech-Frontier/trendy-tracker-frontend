'use server';

import { requestTTAPI } from '@/utils/request';

export async function createTechStack({ techName }: { techName: string }) {
  return requestTTAPI<{ msg?: string; error?: string }>({
    pathname: '/api/tech/stack/create',
    method: 'POST',
    params: {
      tech: techName,
    },
  });
}
