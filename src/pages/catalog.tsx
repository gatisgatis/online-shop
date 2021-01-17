/* eslint-disable @typescript-eslint/indent */
import React, { FC, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CardCatalog } from '../components/card-catalog/card-catalog';
import { DropdownFilter } from '../components/dropdown-filter/dropdown-filter';
import { CheckBoxes } from '../components/check-boxes/check-boxes';
import { Search } from '../components/search/search';
import { RootState } from '../store';
import {
  sorts,
  CHEAPEST,
  EXPENSIVE,
  DISCOUNT,
  NEWEST,
  POPULAR,
  ALFABETIC,
} from '../data/sort-orders';

const Catalog: FC = () => {
  const checkedCategories = useSelector((state: RootState) => {
    return state.filter.categories;
  });

  const items = useSelector((state: RootState) => {
    return state.items;
  });

  const searchKey = useSelector((state: RootState) => {
    return state.filter.searchKey;
  });

  const sortOrder = useSelector((state: RootState) => {
    return state.filter.sortOrder;
  });

  const uniqueCategories = useRef<string[]>(['VISAS']);

  // šo funkciju vajadzētu likt useCallback hookā?
  items.forEach((item) => {
    if (!uniqueCategories.current.includes(item.category.toUpperCase())) {
      uniqueCategories.current.push(item.category.toUpperCase());
    }
  });

  const itemPassSearchKey = (name: string, category: string): boolean => {
    if (searchKey.length < 3) return true;
    if (name.toLowerCase().includes(searchKey.toLowerCase())) return true;
    if (category.toLowerCase().includes(searchKey.toLowerCase())) return true;
    return false;
  };

  const itemMatchCheckedCategories = (itemCategory: string) => {
    if (checkedCategories.length === 0) return true;
    if (checkedCategories.includes('VISAS')) return true;
    if (checkedCategories.includes(itemCategory.toUpperCase())) return true;
    return false;
  };

  // šo funkciju vajadzētu likt hookā
  switch (sortOrder) {
    case POPULAR: {
      items.sort((prev, next) => {
        if (next.likes > prev.likes) return 1;
        return -1;
      });
      break;
    }
    case NEWEST: {
      items.sort((prev, next) => {
        if (next.addedDate > prev.addedDate) return 1;
        return -1;
      });
      break;
    }
    case CHEAPEST: {
      items.sort((prev, next) => {
        if (next.price < prev.price) return 1;
        return -1;
      });
      break;
    }
    case EXPENSIVE: {
      items.sort((prev, next) => {
        if (next.price > prev.price) return 1;
        return -1;
      });
      break;
    }
    case ALFABETIC: {
      items.sort((prev, next) => {
        if (prev.name.toUpperCase() > next.name.toUpperCase()) return 1;
        return -1;
      });
      break;
    }
    case DISCOUNT: {
      items.sort((prev, next) => {
        if (next.discount > prev.discount) return 1;
        return -1;
      });
      break;
    }
    default:
      break;
  }

  return (
    <>
      <section>
        <div className="container margin-bottom--20">
          <div className="row">
            <div className="col-xs-12 col-md-3 center-xs">
              <div>Sākums/Katalogs</div>
              <Search />
            </div>
            <div className="col-xs-12 col-md-6 center-xs">
              <CheckBoxes options={uniqueCategories.current} />
            </div>
            <div className="col-xs-12 col-md-3 center-xs">
              <DropdownFilter options={sorts} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row ">
            {items.map((item) => {
              return (
                itemMatchCheckedCategories(item.category) &&
                itemPassSearchKey(item.name, item.category) && (
                  <div key={item.id} className="col-xs-12 col-sm-4 col-md-3 margin-bottom--10">
                    <CardCatalog item={item} />
                  </div>
                )
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
