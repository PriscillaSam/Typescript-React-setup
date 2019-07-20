import * as React from 'react';
import { string } from 'prop-types';

interface IProps {
  text: string;
}
const Welcome = (props: IProps) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

export default Welcome;
