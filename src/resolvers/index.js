import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  return 'Hello from Codegeist 2026 👋';
});

export const handler = resolver.getDefinitions();
