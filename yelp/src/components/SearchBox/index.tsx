import { ReactElement, useRef } from "react";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';

type SearchBoxProps = {
  onChange: (text: string) => void;
  className?: string;
};
const defaultProps = {
  onChange: () => {},
};


const SearchBox = ({ onChange, className }: SearchBoxProps): ReactElement => {
  const [searchString, setSearchString] = useState('');


  return (

    <div className="App">
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </div>
      
  );
};

SearchBox.defaultProps = defaultProps;

export default SearchBox;
