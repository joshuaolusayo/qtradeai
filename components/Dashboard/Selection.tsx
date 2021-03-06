import { useState, useEffect } from 'react';
import Referrals from './Referrals';
import Brokers from './Brokers';
import Rewards from './Rewards';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Selection(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState('my-referrals');

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {}, [selectedOption]);

  return (
    <>
      <div className="my-10 selection">
        <div>
          <FormControl className="w-full mb-3">
            <InputLabel id="demo-controlled-open-select-label" className="w-full">
              Choose
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={selectedOption}
              onChange={handleChange}
              defaultValue="my-referrals"
              className="py-1 px-4 bg-purple rounded"
            >
              <MenuItem value={'my-referrals'} className="text-purple">
                My referrals
              </MenuItem>
              <MenuItem value={'brokers'} className="text-purple">
                Brokers
              </MenuItem>
              <MenuItem value={'rewards'} className="text-purple">
                Rewards
              </MenuItem>
            </Select>
          </FormControl>
          {selectedOption === 'my-referrals' ? (
            <Referrals />
          ) : selectedOption === 'brokers' ? (
            <Brokers />
          ) : selectedOption === 'rewards' ? (
            <Rewards />
          ) : (
            <></>
          )}
        </div>
      </div>

      <style jsx>{`
        .input {
          color: #fff !important;
        }
      `}</style>
    </>
  );
}
