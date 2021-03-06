
/*

Cheers - Profile Settings Page
Last Updated: Dec. 30, 2021
Tolentino, Francis James S.

*/

import React from "react";
import Head from "next/head";


interface AccountSettingsProps {}


const AccountSettings: React.FC<AccountSettingsProps> = () => {


  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>

      <main className='py-16 container mx-auto'>
        <h1>Settings</h1>
      </main>
    </>
  );
};

export default AccountSettings;
