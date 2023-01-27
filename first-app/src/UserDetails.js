import React, { Component } from "react";

//Functional Components
// // const UserDetails = ({ user = {} }) => {
// const UserDetails = (props) => {
//     // let {user} = props;
//     let user = props.user;
//     return (
//         <div>
//             <h3>{user.name}</h3>

//             <h5>
//                 Email: {user.email}
//                 <br />
//                 Phone: {user.phone}
//             </h5>
//         </div>
//     );
// };

//Class Components

class UserDetails extends Component {
    user = this.props.user;

    render() {
        return (
            <div>
                <h3>{this.user.name}</h3>

                <h5>
                    Email: {this.user.email}
                    <br />
                    Phone: {this.user.phone}
                </h5>
            </div>
        );
    }
}

export default UserDetails;
