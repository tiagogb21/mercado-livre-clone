import React, { useEffect } from 'react'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { actionCreators, RootState, useAppDispatch } from '../../redux';
import { bindActionCreators } from 'redux';
import { getCategories } from '../../services/api';

interface ICategorie {
  id: string;
  name: string;
}

function Categories() {
  const dispatch = useAppDispatch();

  const { addCategories } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const getDataCategories = async () => {
      const data = await getCategories();
      addCategories(data);
    };
    getDataCategories();
  }, []);

  const useSelectorCategories: TypedUseSelectorHook<RootState>  = useSelector;

  const handleClick = (e: any) => {
    const optionTarget = e.target.options[e.target.selectedIndex];
    return {
      id: optionTarget.id,
      value: optionTarget.value,
    };
  };

  const setCategories = useSelectorCategories((state) => console.log(state));

  return (
    <article className="dropdown">
      <p className="categories-title">Categorias</p>
      <ul onClick={handleClick} className="menu">
        {
          setCategories?.categories?.map((categorie:ICategorie) => (
            <li key={categorie.id} id={categorie.id}>
              {categorie.name}
            </li>
          ))}
      </ul>
    </article>
  )
}

export default Categories;
