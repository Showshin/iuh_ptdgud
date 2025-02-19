import React from "react";
class DisplayInfor extends React.Component {
  render() {
   const listUser = this.props.listUser;
    console.log(listUser);
    return (
      <>
        <div>
          {listUser.map((user) => {
            return (
              <>
              <div key={user.id} className= { user.Age < 18 ? "red" : "blue"}>
                    <p>My name is : {user.Name}</p>
                    <p>My age is : {user.Age}</p>
                </div><hr />  
              </>         
            );
          })}
        </div>
      </>
    );
  }
}
export default DisplayInfor;
