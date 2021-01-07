import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './search.module.scss';
import { RootState } from '../../store';
import { changeSearchKey } from '../../store/filter/actions';

export const Search: FC = () => {
  const searchKey = useSelector((state: RootState) => {
    return state.filter.searchKey;
  });

  const dispatch = useDispatch();

  return (
    <input
      className={style.input}
      type="text"
      placeholder="Meklēt..."
      value={searchKey}
      onChange={(e) => dispatch(changeSearchKey(e.target.value))}
    />
  );
};
