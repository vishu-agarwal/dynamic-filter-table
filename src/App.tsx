import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import TableFilters from './components/TableFilters';
import TableComponent from './components/TableComponent';

import data from './utils/data.json';
import { DataItem } from './utils/types';
import { filterKeys } from './utils/config';

const App = () => {

  const [tableData, setTableData] = useState<DataItem[]>(data);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const handleFilterChange = (newFilters: { [key: string]: string[] }) => {
    setFilters(newFilters);
    filterData(newFilters);
  };

  const filterData = (filters: { [key: string]: string[] }) => {
    let filteredData = data;
    Object.keys(filters).forEach(key => {
      if (filters[key].length > 0) {
        filteredData = filteredData.filter(item => filters[key].includes(item[key as keyof DataItem] as string));
      }
    });
    setTableData(filteredData);
  };

  useEffect(() => {
    filterData(filters);
  }, [filters]);

  return (
    <Box sx={{margin:3}}>
      <TableFilters data={data} onFilterChange={handleFilterChange} filterKeys={filterKeys} />
      <TableComponent data={tableData} />
    </Box>
  );
};

export default App;
