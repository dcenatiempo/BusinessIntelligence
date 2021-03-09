import { useRef, useEffect } from 'react';

function useIsMounted() {
  const isMountRef = useRef(false);
  useEffect(() => {
    isMountRef.current = true;
  }, []);
  return isMountRef.current;
}

export { useIsMounted };
