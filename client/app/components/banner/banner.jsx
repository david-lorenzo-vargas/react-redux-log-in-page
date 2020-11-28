import React from 'react';
import Text from '../text';
import Logo from '../logo';

const Banner = () => (
  <>
    <Logo size="small" />
    <Text
      text="blue vera"
      bold="bold"
      theme="blue"
      size="extra-big"
      type="uppercase"
    />
    <Text
      text="Here for you"
      theme="blue"
      size="big"
    />
    <Text
      // text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      text="Terms and Conditions"
      size="extra-small"
      cursive="italic"
      link="link"
    />
  </>
);

export default Banner;
