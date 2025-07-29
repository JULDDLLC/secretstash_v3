import { Secret } from '@/types/secret';

export const sampleSecrets: Omit<Secret, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Stripe API Key',
    category: 'api-keys',
    value: 'sk_test_51234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    description: 'Production Stripe API key for payment processing',
    tags: ['stripe', 'payments', 'production']
  },
  {
    name: 'Database Password',
    category: 'passwords',
    value: 'MySecureP@ssw0rd123!',
    description: 'Production database password for main application',
    tags: ['database', 'production', 'mysql']
  },
  {
    name: 'AWS Access Key',
    category: 'api-keys',
    value: 'AKIAIOSFODNN7EXAMPLE',
    description: 'AWS access key for S3 bucket operations',
    tags: ['aws', 's3', 'cloud']
  },
  {
    name: 'SSL Certificate',
    category: 'certificates',
    value: '-----BEGIN CERTIFICATE-----\nMIIDXTCCAkWgAwIBAgIJAKoK/OvD...\n-----END CERTIFICATE-----',
    description: 'SSL certificate for example.com domain',
    tags: ['ssl', 'certificate', 'domain']
  },
  {
    name: 'JWT Secret',
    category: 'tokens',
    value: 'your-256-bit-secret-key-here-make-it-long-and-random',
    description: 'JWT signing secret for authentication tokens',
    tags: ['jwt', 'auth', 'security']
  },
  {
    name: 'Redis Connection',
    category: 'databases',
    value: 'redis://username:password@redis-server.com:6379',
    description: 'Redis connection string for caching',
    tags: ['redis', 'cache', 'database']
  }
];