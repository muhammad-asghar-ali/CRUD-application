import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { getUsers, deleteUser } from '../services/api'
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: "90%",
        margin: "50px 0 0 50px"
    },
    thead: {
        '& > * ':{
            background:'#000000',
            color: '#FFFFFF',
            fontSize: '18px'
        }
    },
    row: {
        '& > * ':{
            fontSize: '18px'
        }
    } 
})

const AllUser = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () =>{
        const {data} =  await getUsers();
        console.log(data);
        setUsers(data);
    } 

    const deleteUserData = async (id) => {
        await deleteUser(id)
        getAllUsers();
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/edit/${user.id}`} variant="contained" color="primary" style={{marginRight:10}}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete </Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUser;

