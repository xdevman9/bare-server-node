import { createServer } from 'bare-server-node';

export const onRequest = async (context) => {
  const server = createServer();
  return server.handle(context.request);
};
