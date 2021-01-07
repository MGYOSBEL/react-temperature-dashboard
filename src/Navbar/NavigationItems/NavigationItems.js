import React from 'react';
import entries from './navigationItemEntries';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return entries.map(entry => (
        <NavigationItem link={entry.link} label={entry.label} key={entry.label}/>
    ));
}

export default navigationItems;