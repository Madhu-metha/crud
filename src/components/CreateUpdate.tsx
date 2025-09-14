import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import type { Users } from "../shared/models/UserModel";
import { createUser, updateUser } from "../data/http.service";

const CreateUpdate = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<Users>();

    const location = useLocation();
    const userData: Users = useSelector((state: any) => state.User);

    useEffect(() => {
        if (location.pathname === '/update') {
            reset(userData);
        }
    }, [])

    const onSubmit = async (userData: Users) => {
        if (location.pathname === '/update') {
            await updateUser(userData);
        } else if (location.pathname === '/create') {
            await createUser(userData);
        }
    }

    return (
        <>
            <section className="flex justify-center items-center w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-purple-500 bg-amber-100 rounded-lg p-5 m-5 w-[50%]">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('name', {
                                            required: 'Name is required',
                                            minLength: {
                                                value: 5,
                                                message: 'Name should be minimum of 5 characters'
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: 'Name should not exceed 50 characters'
                                            }
                                        })} className="w-full" label="Name" variant="outlined" />
                                        <span className="text-red-500 italic">{errors.name && errors.name.message}</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: 'Email is invalid'
                                            }
                                        })} className="w-full" label="Email" variant="outlined" />
                                        <span className="text-red-500 italic">{errors.email && errors.email.message}</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Phone</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('phone', { required: 'Phone is required' })} className="w-full" label="Phone" variant="outlined" />
                                        <span className="text-red-500 italic">{errors.phone && errors.phone.message}</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Website</TableCell>
                                    <TableCell align="right">
                                        <TextField {...register('website')} className="w-full" label="Website" variant="outlined" />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2} align="right">
                                        <Button className="mr-5" type="button" variant="outlined" onClick={() => { reset() }}>Reset Form</Button>
                                        <Button type="submit" variant="outlined">{location.pathname === '/update' ? 'Update' : 'Create'} User</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
            </section>
        </>
    )
};

export default CreateUpdate;