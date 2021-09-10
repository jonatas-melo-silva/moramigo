import React, { memo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 6000);
  }, []);

  return (
    <div>
      <div>
      <h1>Ooooops!</h1>
      <h2>Essa página não pode ser encontrada</h2>
      <p>
        <Link href="/">
          <a>Volte para página inicial</a>
        </Link>
      </p>
      </div>
    </div>
  );
};

export default memo(NotFound);
