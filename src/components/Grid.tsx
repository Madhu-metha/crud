import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { getUsers } from "../data/http.service";
import { setUserData} from "../shared/slicers/UserSlice";
import type { Users } from "../shared/models/UserModel";

const Grid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [usersData, setUsersData] = useState<Users[]>([]);

    
    useEffect(() => {
        getUsers().then(data => setUsersData(data));
    }, [])


    const onViewClick = (user:Users) => {
        dispatch(setUserData(user));
        navigate('/view');
    }


    return (
        <>
            <section className="flex justify-center items-center">
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
                                usersData.map((data, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align="center">{data.name}</TableCell>
                                            <TableCell align="center">{data.email}</TableCell>
                                            <TableCell align="center">{data.phone}</TableCell>
                                            <TableCell align="center">{data.website}</TableCell>
                                            <TableCell align="center" className="flex flex-row justify-center items-center gap-5">
                                                <Button variant="outlined" onClick={() => onViewClick(data)}>View</Button>
                                                <Button variant="outlined">Update</Button>
                                                <Button variant="outlined">Delete</Button>
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