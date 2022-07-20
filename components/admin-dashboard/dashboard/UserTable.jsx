import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';

export default function UserTable() {
  const [users, setUsers] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/users');
      setUsers(data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper} className='bg-gray-600 '>
      <Table sx={{ minWidth: 400 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='text-gray-200'>Image</TableCell>
            <TableCell align='center' className='text-gray-200'>Name</TableCell>
            <TableCell align='center' className='text-gray-200'>Email</TableCell>
            <TableCell align='center' className='text-gray-200'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  src={`/users/${item.image}`}
                />
              </TableCell>
              <TableCell align='center' className='text-gray-200'>{item.name}</TableCell>
              <TableCell align='center' className='text-gray-200'>{item.email}</TableCell>
              <TableCell align='center' className='text-gray-200'><span className="bg-green-600 rounded-2xl px-1">{item.status || 'active'}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
