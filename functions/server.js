import { createServer } from '../lib/bare-server-node.js';

export const onRequest = async (context) => {
  const server = createServer();
  return server.handle(context.request);
};
