import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';

const DataGrid = () => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v3/capsules');
                const data = response.data;
                setSearchResults(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box p={4}>
            <SimpleGrid columns={3} spacing={4}>
                {searchResults.map((result) => (
                    <Box key={result.id} borderWidth="1px" borderRadius="md" p={4}>
                        <p>{result.column1}</p>
                        <p>{result.column2}</p>
                        <p>{result.column3}</p>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default DataGrid;
