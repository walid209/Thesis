"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { DataGrid } from '@mui/x-data-grid'; 
import { TiDeleteOutline } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const Owner = () => {
  const router = useRouter();
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    axios
      .get('http://localhost:4000/api/owner/getOwner')
      .then((response) => {
        setOwners(response.data);
        console.log('data', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOwners();
  }, []);

  const deleteOwner = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this owner?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:4000/api/owner/del/${id}`)
        .then(() => {
          setOwners((prevOwners) => prevOwners.filter(owner => owner.id !== id));
          toast.success('Owner deleted successfully!');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Failed to delete owner.');
        });
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'username', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'status',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => (
        <button
          onClick={() => deleteOwner(params.row.id)}
          className="deleteButton"
        >
          <TiDeleteOutline />
        </button>
      ),
    },
  ];

  return (
    <div className="ownerContainer">
      <ToastContainer />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={owners}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Owner;
