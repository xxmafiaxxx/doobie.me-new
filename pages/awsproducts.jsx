import React from 'react'
import Layout from "../components/layout/Layout";
import ProductCardCollection  from '../src/ui-components/ActionCardCollection';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Authenticator,AmplifyProvider   } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';

Amplify.configure(awsExports);


function awsproducts() {
  return (
    <AmplifyProvider>
    <Layout noBreadcrumb="d-none">
          <ProductCardCollection gap="1.5rem"
              ispagniated="true" />
      </Layout>
      </AmplifyProvider>
  )
}

export default awsproducts
