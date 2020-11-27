import React from 'react';
import { Row, Column } from '../grid';
import Text from '../text';

const WelcomePage = () => (
  <>
    <Row>
      <Column>
        <Text
          text="Welcome you are logged in"
          theme="white"
          cursive="cursive"
          type="uppercase"
          size="extra-big"
          bold="bold"
        />
      </Column>
    </Row>
  </>
);

export default WelcomePage;
