//import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { deleteUser, getUsers } from "../data/http.service";
import { setUserData } from "../shared/slicers/UserSlice";
import type { Users } from "../shared/models/UserModel";

const Grid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const [usersData, setUsersData] = useState<Users[]>([]);


    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        retry: 3,
        refetchInterval: 600000
    });

    // useEffect(() => {
    //    getUsers().then(data => setUsersData(data));
    // }, [])


    const onViewClick = (user: Users) => {
        dispatch(setUserData(user));
        navigate('/view');
    }

    const onDeleteClick = async (user: Users) => {
        await deleteUser(user.id);
    }

    const onUpdateClick = (user: Users) => {
        dispatch(setUserData(user));
        navigate('/update');
    }


    return (
        <>
            <section className="flex flex-col justify-center place-items-baseline p-10">
                <Button variant="outlined" onClick={() => navigate('/create')}>Create User</Button>
                <TableContainer component={Paper} className="border border-purple-500 bg-lime-100 rounded-lg p-5 m-5 w-[90%]">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className="text-xl font-semibold bg-lime-200">Name</TableCell>
                                <TableCell align="center" className="text-xl font-semibold bg-lime-200">Email</TableCell>
                                <TableCell align="center" className="text-xl font-semibold bg-lime-200">Phone</TableCell>
                                <TableCell align="center" className="text-xl font-semibold bg-lime-200">Website</TableCell>
                                <TableCell align="center" className="text-xl font-semibold bg-lime-200">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data && data.map((userData:Users, index:number) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{userData.name}</TableCell>
                                            <TableCell align="center">{userData.email}</TableCell>
                                            <TableCell align="center">{userData.phone}</TableCell>
                                            <TableCell align="center">{userData.website}</TableCell>
                                            <TableCell align="center" className="flex flex-row justify-center items-center gap-5">
                                                <Button variant="outlined" onClick={() => onViewClick(userData)}>View</Button>
                                                <Button variant="outlined" onClick={() => onUpdateClick(userData)}>Update</Button>
                                                <Button variant="outlined" onClick={() => onDeleteClick(userData)}>Delete</Button>
                                            </TableCell>
                                        </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </>
    )
};

export default Grid;