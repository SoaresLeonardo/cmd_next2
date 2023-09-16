import { useEffect, useState } from 'react';

export const Avatar = ({ name }: { name: string }) => {
  const [userName, setUserName] = useState(name);
  useEffect(() => {
    setUserName(name);

    console.log(userName);
  }, [name, userName]);
  return (
    <>
      <h1>Avatar</h1>
    </>
  );
};
