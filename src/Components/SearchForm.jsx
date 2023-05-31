// import React, { useState } from 'react';
// import {
//     Box,
//     Input,
//     Button,
//     Flex,
//     Select,
//     Stack,
//     Text,
//     VStack,
// } from '@chakra-ui/react';
// import axios from 'axios';

// const SearchForm = () => {
//     const [status, setStatus] = useState('');
//     const [launch, setLaunch] = useState('');
//     const [type, setType] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     const pageSize = 5; // Number of records to display per page

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(
//                 'https://api.spacexdata.com/v3/capsules',
//                 {
//                     params: {
//                         status,
//                         original_launch: launch,
//                         type,
//                     },
//                 }
//             );
//             const data = response.data;
//             setSearchResults(data);
//             setCurrentPage(1); // Reset to the first page when new results are loaded
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = startIndex + pageSize;

//     const currentPageData = searchResults.slice(startIndex, endIndex);

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNextPage = () => {
//         const maxPage = Math.ceil(searchResults.length / pageSize);
//         if (currentPage < maxPage) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     return (
//         <Box p={4} textAlign="center">
//             <form onSubmit={handleSubmit}>
//                 <VStack spacing={4}>
//                     <Select
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                         size="sm"
//                     >
//                         <option value="">Select Status</option>
//                         <option value="active">Active</option>
//                         <option value="retired">Retired</option>
//                         <option value="unknown">Unknown</option>
//                     </Select>
//                     <Input
//                         type="text"
//                         placeholder="Enter original launch"
//                         value={launch}
//                         onChange={(e) => setLaunch(e.target.value)}
//                         size="sm"
//                     />
//                     <Input
//                         type="text"
//                         placeholder="Enter type"
//                         value={type}
//                         onChange={(e) => setType(e.target.value)}
//                         size="sm"
//                     />
//                     <Button type="submit" colorScheme="blue" size="lg" width="120px">
//                         Search
//                     </Button>
//                 </VStack>
//             </form>

//             <Box mt={4}>
//                 <Stack spacing={4}>
//                     {currentPageData.map((result) => (
//                         <Box
//                             key={result.id}
//                             p={4}
//                             borderWidth="1px"
//                             borderRadius="md"
//                             boxShadow="md"
//                         >
//                             <Text fontWeight="bold" fontSize="lg">
//                                 Status: {result.status}
//                             </Text>
//                             <Text fontWeight="bold" fontSize="sm">
//                                 Original Launch: {result.original_launch}
//                             </Text>
//                             <Text fontWeight="bold" fontSize="sm">
//                                 Landings: {result.landings}
//                             </Text>
//                             <Text fontWeight="bold" fontSize="sm">
//                                 Type: {result.type}
//                             </Text>
//                             <Text fontWeight="bold" fontSize="sm">
//                                 Reuse Count: {result.reuse_count}
//                             </Text>
//                             <Text fontWeight="bold" fontSize="sm">
//                                 Capsule Serial: {result.capsule_serial}
//                             </Text>
//                             <Text fontWeight="bold" fontSize="sm">
//                                 Capsule ID: {result.capsule_id}
//                             </Text>
//                         </Box>
//                     ))}
//                 </Stack>
//             </Box>

//             <Flex mt={4} justify="center" align="center">
//                 <Button
//                     colorScheme="blue"
//                     size="lg"
//                     onClick={handlePrevPage}
//                     disabled={currentPage === 1}
//                     width="120px"
//                 >
//                     Previous
//                 </Button>
//                 <Text mx={4} fontSize="sm">
//                     Page {currentPage}
//                 </Text>
//                 <Button
//                     colorScheme="blue"
//                     size="lg"
//                     onClick={handleNextPage}
//                     disabled={currentPage === Math.ceil(searchResults.length / pageSize)}
//                     width="120px"
//                 >
//                     Next
//                 </Button>
//             </Flex>
//         </Box>
//     );
// };

// export default SearchForm;

import React, { useState } from 'react';
import {
    Box,
    Input,
    Button,
    Flex,
    Select,
    Stack,
    Text,
    VStack,
    Grid,
} from '@chakra-ui/react';
import axios from 'axios';

const SearchForm = () => {
    const [status, setStatus] = useState('');
    const [launch, setLaunch] = useState('');
    const [type, setType] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 6; // Number of records to display per page

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'https://api.spacexdata.com/v3/capsules',
                {
                    params: {
                        status,
                        original_launch: launch,
                        type,
                    },
                }
            );
            const data = response.data;
            setSearchResults(data);
            setCurrentPage(1); // Reset to the first page when new results are loaded
        } catch (error) {
            console.error(error);
        }
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const currentPageData = searchResults.slice(startIndex, endIndex);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        const maxPage = Math.ceil(searchResults.length / pageSize);
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Box p={4} textAlign="center">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <Select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        size="sm"
                    >
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="retired">Retired</option>
                        <option value="unknown">Unknown</option>
                    </Select>
                    <Input
                        type="text"
                        placeholder="Enter original launch"
                        value={launch}
                        onChange={(e) => setLaunch(e.target.value)}
                        size="sm"
                    />
                    <Input
                        type="text"
                        placeholder="Enter type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        size="sm"
                    />
                    <Button type="submit" colorScheme="blue" size="lg" width="120px">
                        Search
                    </Button>
                </VStack>
            </form>

            <Box mt={4}>
                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    {currentPageData.map((result) => (
                        <Box
                            key={result.id}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow="md"
                        >
                            <Text fontWeight="bold" fontSize="lg">
                                Status: {result.status}
                            </Text>
                            <Text fontWeight="bold" fontSize="sm">
                                Original Launch: {result.original_launch}
                            </Text>
                            <Text fontWeight="bold" fontSize="sm">
                                Landings: {result.landings}
                            </Text>
                            <Text fontWeight="bold" fontSize="sm">
                                Type: {result.type}
                            </Text>
                            <Text fontWeight="bold" fontSize="sm">
                                Reuse Count: {result.reuse_count}
                            </Text>
                            <Text fontWeight="bold" fontSize="sm">
                                Capsule Serial: {result.capsule_serial}
                            </Text>
                            <Text fontWeight="bold" fontSize="sm">
                                Capsule ID: {result.capsule_id}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Box>

            <Flex mt={4} justify="center" align="center">
                <Button
                    colorScheme="blue"
                    size="lg"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    width="120px"
                >
                    Previous
                </Button>
                <Text mx={4} fontSize="sm">
                    Page {currentPage}
                </Text>
                <Button
                    colorScheme="blue"
                    size="lg"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(searchResults.length / pageSize)}
                    width="120px"
                >
                    Next
                </Button>
            </Flex>
        </Box>
    );
};

export default SearchForm;
