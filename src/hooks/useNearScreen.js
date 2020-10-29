import { useEffect, useState } from 'react';

export default function useNearScreen({ distance = '100px', refElement } = {}) {
  const [isNearScreen, setShow] = useState(false);

  useEffect(() => {
    let observer;

    const element = refElement?.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      } else {
        setShow(false);
      }
    };

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen };
}
