import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';

import React, { useEffect } from 'react';

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();
  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/login');
  }, [status]);

  if (status === 'authenticated') {
    return (
      <div>
        {JSON.stringify(data.user, null, 2)} you are {status}
      </div>
    );
  }
  return <div>Loading</div>;
};

export default Protected;
