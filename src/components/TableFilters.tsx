import React, { useState, useEffect } from 'react';
import { Grid, FormControl, FormLabel, FormControlLabel, Checkbox } from '@mui/material';
import { DataItem } from '../utils/types';

interface TableFiltersProps {
  data: DataItem[];
  filterKeys: string[];
  onFilterChange: (filters: { [key: string]: string[] }) => void;
};

const TableFilters = ({ data, onFilterChange, filterKeys }: TableFiltersProps) => {

  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});
  const [filterOptions, setFilterOptions] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    
    const calculateFilterOptions = () => {
      const options: { [key: string]: string[] } = {};

      data.forEach(item => {
        filterKeys.forEach(key => {
          if (item[key as keyof DataItem] !== undefined) {
            options[key] = options[key] || [];
            options[key].push(item[key as keyof DataItem] as string);
          }
        });
      });

      Object.keys(options).forEach(key => {
        options[key] = Array.from(new Set(options[key]));
      });

      setFilterOptions(options);
    };

    calculateFilterOptions();
  }, [data, filterKeys]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const { name, checked } = e.target;
    const newFilters = { ...filters, [name]: checked ? [...(filters[name] || []), value] : filters[name]?.filter(v => v !== value) || [] };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      {Object.keys(filterOptions).map(field => (
        <Grid item xs={12} sm={6} md={4} key={field}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{field.charAt(0).toUpperCase() + field.slice(1)}</FormLabel>
            {filterOptions[field].map(value => (
              <FormControlLabel
                key={value}
                control={<Checkbox checked={filters[field]?.includes(value) || false} onChange={(e) => handleChange(e, value)} name={field} />}
                label={value}
              />
            ))}
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default TableFilters;