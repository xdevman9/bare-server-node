export function createServer() {
  return {
    handle: async (request) => {
      
      const url = new URL(request.url);
      
      
      if (url.pathname === '/') {
        return new Response('Welcome to bare-server-node on Cloudflare!', { status: 200 });
      } else if (url.pathname === '/hello') {
        return new Response('Hello World!', { status: 200 });
      }

      return new Response('404 Not Found', { status: 404 });
    }
  };
}
