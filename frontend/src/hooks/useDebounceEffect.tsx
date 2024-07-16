import { useEffect, useRef } from 'react';

export function useDebounceEffect(
  effect: () => void,
  delay: number,
  deps: ReadonlyArray<any>
) {
  const callback = useRef(effect);

  useEffect(() => {
    callback.current = effect;
  }, [effect]);

  useEffect(() => {
    if (delay === 0) {
      return;
    }

    const handler = setTimeout(() => {
      callback.current();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [...deps, delay]);
}
