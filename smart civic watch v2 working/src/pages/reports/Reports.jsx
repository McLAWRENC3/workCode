import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  TablePagination
} from '@mui/material';
import { 
  FiFilter, 
  FiDownload, 
  FiEye, 
  FiEdit, 
  FiTrash2,
  FiPlus 
} from 'react-icons/fi';

const Reports = () => {
  // Sample data - replace with API call
  const [reports, setReports] = useState([
    {
      id: 1,
      title: "Pothole on Main St",
      category: "Infrastructure",
      status: "Pending",
      date: "2023-05-15",
      priority: "High"
    },
    {
      id: 2,
      title: "Broken Streetlight",
      category: "Public Safety",
      status: "In Progress",
      date: "2023-05-10",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Garbage Accumulation",
      category: "Sanitation",
      status: "Resolved",
      date: "2023-05-01",
      priority: "Low"
    }
  ]);

  // Table pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Status color mapping
  const statusColors = {
    Pending: "warning",
    "In Progress": "info",
    Resolved: "success",
    Rejected: "error"
  };

  return (
    <Box>
      {/* Header and Action Bar */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3
      }}>
        <Typography variant="h4">Reports Management</Typography>
        <Button 
          variant="contained" 
          startIcon={<FiPlus />}
          sx={{ textTransform: 'none' }}
        >
          New Report
        </Button>
      </Box>

      {/* Filters */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2,
        mb: 3
      }}>
        <TextField
          label="Search reports"
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
        />
        <Button
          variant="outlined"
          startIcon={<FiFilter />}
          sx={{ textTransform: 'none' }}
        >
          Filters
        </Button>
        <Button
          variant="outlined"
          startIcon={<FiDownload />}
          sx={{ textTransform: 'none', ml: 'auto' }}
        >
          Export
        </Button>
      </Box>

      {/* Reports Table */}
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((report) => (
              <TableRow key={report.id}>
                <TableCell>#{report.id}</TableCell>
                <TableCell>{report.title}</TableCell>
                <TableCell>{report.category}</TableCell>
                <TableCell>
                  <Chip 
                    label={report.status} 
                    color={statusColors[report.status] || "default"}
                    size="small"
                  />
                </TableCell>
                <TableCell>{report.date}</TableCell>
                <TableCell>{report.priority}</TableCell>
                <TableCell>
                  <IconButton size="small">
                    <FiEye />
                  </IconButton>
                  <IconButton size="small">
                    <FiEdit />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <FiTrash2 />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={reports.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>
    </Box>
  );
};

export default Reports;