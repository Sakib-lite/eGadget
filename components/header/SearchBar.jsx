import React, { Fragment } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from '../../utils/styles';
export default function SearchBar() {
  return (
    <Fragment>
      <Search className="mx-auto dark:bg-gray-700 bg-gray-400">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Fragment>
  );
}
