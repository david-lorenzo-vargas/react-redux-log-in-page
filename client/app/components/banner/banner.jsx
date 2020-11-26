import React from 'react';
import Logo from '../logo';
import Text from '../text';

const Banner = () => (
  <>
    <Logo size="medium" />
    <Text
      text="blue vera"
      bold="bold"
      theme="blue"
      size="extra-big"
      type="uppercase"
    />
    <Text
      text="Log in"
      theme="blue"
      size="big"
    />
    <Text
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      size="extra-small"
      cursive="italic"
    />
  </>
);

export default Banner;
