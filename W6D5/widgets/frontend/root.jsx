import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Root = () => {
  const tabs = [{title: 'One', content: 'First body'},
                {title: 'Two', content: 'Second body'},
                {title: 'Three', content: 'Third body'}];
  const names = ['Abba', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah'];
  return (
    <div>
      <Clock />
      <Tabs tabs={tabs} />
      <Weather />
      <Autocomplete names={names} />
    </div>
  );
};

export default Root;
