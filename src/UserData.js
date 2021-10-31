import React, { Component } from 'react'

 class UserData extends Component{
     constructor(){
         super();
         console.log("Constructor Called [UserData.js]")
     }
   state = {
    userData : []
   }


     getUserData = async()=>{
         const response = await fetch("https://jsonmock.doselect.com/api/domestic_flights/domestic_flights");
         const data = await response.json();


         //console.log(UserData);
        this.setState({userData: data})
     }
     componentDidMount(){
            console.log("Component Did Mount [UserData.js]");
            this.getUserData();
     }
     render() {
         console.log("Render Methode Called [UserData.js]");
         return (
             <div>
                 <h2> Flight Data Table</h2>
                 <table className="table">
                     <thead>
                     <th>Id</th>
                     <th>Takeoff</th>
                     <th>landing</th>
                     <th>Duration</th>
                     <th>departure</th>
                     <th>arrival</th>
                     <th>price</th>
                     </thead>
                     <tbody>
                         {this.state.userData.map((user)=>(
                             <tr>
                                 <td>{user.id}</td>
                                 <td>{user.takeoff_timestamp}</td>
                                 <td>{user.landing_timestamp}</td>
                                 <td>{user.duration}</td>
                                 <td>{user.departure_from}</td>
                                 <td>{user.arrival_at}</td>
                                 <td>{user.flight_ticket_price}</td>
                                 </tr>
                         ))
                         }
                     </tbody>
                 </table>
             </div>
         )
     }
 }

export default UserData

