import { useRouter } from 'next/router';

function useQuery() {
    const router = useRouter();
  
    const hasQueryParams =
      /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
    const ready = !hasQueryParams || Object.keys(router.query).length > 0;
  
    if (!ready) return null;
  
    return router.query;
}

export { useQuery }