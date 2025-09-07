import { useSelector } from "react-redux";
import type { Users } from "../shared/models/UserModel";


const View = () => {

    const userData: Users = useSelector((state: any) => state.User);

    return (
        <>
            <section className="flex flex-col justify-center items-center">
                <div className="w-[60%] flex flex-col gap-8 border border-blue-600 p-6 m-10">
                    <span>Name : {userData.name}</span>
                    <span>Phone : {userData.phone}</span>
                    <span>Email : {userData.email}</span>
                    <span>Website : {userData.website}</span>
                </div>
            </section>
        </>
    )
};

export default View;