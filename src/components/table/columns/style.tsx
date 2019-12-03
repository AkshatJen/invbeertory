import React from 'react';
import { Beer } from '../../../types';
import { inObject } from '../../../utils';
import { left } from '../style.module.scss';

const barrelAged = (beer: Beer): string => (beer.barrelAged ? 'Barrel Aged ' : '');

const brewedIn = (beer: Beer): string =>
  inObject('barrelType', beer) ? `in ${beer.barrelType} Barrels ` : '';

const brewedWith = (beer: Beer): string =>
  inObject('brewedWith', beer) ? ` with ${beer.brewedWith}` : '';

const formatStyle = (beer: Beer): string =>
  barrelAged(beer) + brewedIn(beer) + beer.style + brewedWith(beer);

export const style = ({ row }: { row: Beer }) => {
  return <div className={left}>{formatStyle(row)}</div>;
};