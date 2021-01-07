import React, { FC } from 'react';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import style from './check-boxes.module.scss';
import { RootState } from '../../store';
import { changeActiveCategories } from '../../store/filter/actions';

interface Props {
  options: string[];
}

export const CheckBoxes: FC<Props> = ({ options }) => {
  const checkedCategories = useSelector((state: RootState) => {
    return state.filter.categories;
  });

  const dispatch = useDispatch();

  const checkBoxClickHandler = (name: string) => {
    if (checkedCategories.includes(name.toUpperCase())) {
      const index = checkedCategories.findIndex((category) => category === name.toUpperCase());
      checkedCategories.splice(index, 1);
    } else {
      checkedCategories.push(name.toUpperCase());
    }
    dispatch(changeActiveCategories(checkedCategories));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>ATLASI PĒC KATEGORIJAS</div>
      <div className={style.checkboxesWrapper}>
        {options.map((option) => {
          return (
            <React.Fragment key={v4()}>
              <input
                className={style.checkbox}
                type="checkbox"
                name={option}
                id={option}
                value={option}
                checked={checkedCategories.includes(option.toUpperCase())}
                onChange={() => checkBoxClickHandler(option)}
              />
              <label className={style.label} htmlFor={option}>{option.toUpperCase()}</label>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
