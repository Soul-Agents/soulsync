'use client';

import { PrivyProvider } from '@privy-io/react-auth';

export function PrivyAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env['NEXT_PUBLIC_PRIVY_APP_ID'] || ''}
      config={{
        loginMethods: ['twitter'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
} 