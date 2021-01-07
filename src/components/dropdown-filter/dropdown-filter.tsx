import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeSortOrder } from '../../store/filter/actions';
import style from './dwopdown-filter.module.scss';

interface Props {
  options: string[];
}

export const DropdownFilter: FC<Props> = ({ options }) => {
  const sortOrder = useSelector((state: RootState) => {
    return state.filter.sortOrder;
  });

  const dispatch = useDispatch();

  const changeDropdownHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSortOrder(event.target.value));
  };

  return (
    <div className={style.wrapper}>
      <label htmlFor="sort_by" className={style.label}>
        KĀRTOT PĒC:
        <select
          className={style.select}
          name="sort_by"
          id="sort_by"
          value={sortOrder}
          onChange={(e) => changeDropdownHandler(e)}
        >
          {options.map((option, index) => {
            return (
              <option key={index.toString()} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};
