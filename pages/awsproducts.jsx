import React from 'react'
import Layout from "../components/layout/Layout";
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Authenticator   } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
import ProductCardCollection  from '../src/ui-components/ProductCardCollection.jsx';
Amplify.configure(awsExports);


function awsproducts() {
  return (
    <Layout noBreadcrumb="d-none">
          <ProductCardCollection gap="1.5rem"
              isPagniated itemsPerpage={10 } />
    </Layout>
  )
}

export default awsproducts
