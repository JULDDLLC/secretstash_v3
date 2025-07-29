export type SecretCategory = 'api-keys' | 'passwords' | 'domains' | 'databases' | 'certificates' | 'tokens';

export interface Secret {
  id: string;
  name: string;
  category: SecretCategory;
  value: string;
  description?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SecretFormData {
  name: string;
  category: SecretCategory;
  value: string;
  description: string;
  tags: string;
}