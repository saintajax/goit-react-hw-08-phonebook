import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contact by name
      <Input
        name="filter"
        onChange={e => {
          dispatch(changeFilter(e.target.value));
        }}
      ></Input>
    </Label>
  );
};
