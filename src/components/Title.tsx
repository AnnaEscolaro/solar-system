import React from 'react';

type HeadLineProps = {
  headline: string;
};

function Title({ headline } : HeadLineProps) {
  return (
    <h2>{headline}</h2>
  );
}

export default Title;
