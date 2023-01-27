import React, { Component } from "react";
import ExportFile from "./ExportFile";
import UserDetails from "./UserDetails";

// Class Component
class AllUserList extends Component {
    state = {
        name: "Shashi",
    };

    allUsers = [
        {
            name: "John",
            email: "john@gmail.com",
            phone: "+91 58974547150",
        },
        {
            name: "Shreyas",
            email: "shreyas@gmail.com",
            phone: "+91 5976925724852",
        },
        {
            name: "Himani",
            email: "himani@gmail.com",
            phone: "+91 771747554852",
        },
    ];

    // return (
    //     <div>
    //         <UserDetails user={allUsers[0]} />
    //         <UserDetails user={allUsers[1]} />
    //         <UserDetails user={allUsers[2]} />
    //     </div>
    // );

    render() {
        setTimeout(() => {
            this.setState({ name: "Shashi Balu" });
        }, 5000);
        return (
            <div>
                <h1>{this.state.name}</h1>

                {this.allUsers.map((userName, index) => (
                    <UserDetails key={index} user={userName} />
                ))}
            </div>
        );
    }
}

//Functional Component

// const AllUserList = () => {
//     let allUsers = [
//         {
//             name: "John",
//             email: "john@gmail.com",
//             phone: "+91 58974547150",
//         },
//         {
//             name: "Shreyas",
//             email: "shreyas@gmail.com",
//             phone: "+91 5976925724852",
//         },
//         {
//             name: "Himani",
//             email: "himani@gmail.com",
//             phone: "+91 771747554852",
//         },
//     ];

// return (
//     <div>
//         <UserDetails user={allUsers[0]} />
//         <UserDetails user={allUsers[1]} />
//         <UserDetails user={allUsers[2]} />
//     </div>
// );

// return (
//     <div>
//         {allUsers.map((userName, index) => (
//             <UserDetails key={index} user={userName} />
//         ))}
//     </div>
// );
// };

export default AllUserList;
