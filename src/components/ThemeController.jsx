import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../features/themeSlice';
import { useEffect } from 'react';

const ThemeController = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // 테마 적용
  }, [theme]);

  return (
    <select
      className='select select-bordered select-sm'
      value={theme}
      onChange={handleChange}
    >
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
      <option value='cupcake'>Cupcake</option>
    </select>
  );
};

export default ThemeController;
