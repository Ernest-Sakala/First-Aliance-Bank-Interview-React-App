
import React, {Component} from 'react';
import axios from 'axios';


class Accounts extends Component{

    baseUrl = " https://mighty-retreat-02281.herokuapp.com/api/accounts";
    data = null; 

    constructor(props){
        super(props);
        this.state = {accounts : []}
    }

    componentDidMount(){

        this.getAccounts();
    }


    getAccounts(){
        axios.get(this.baseUrl).then((response) => {
            this.setState({accounts:response.data})
            console.table(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    render(){

        return(
        <div className = "accounts"> 

            <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">Account ID</th>
                <th scope="col">Internet</th>
                <th scope="col">Approved</th>
                <th scope="col">Approved Date</th>
                <th scope="col">Visa</th>
                <th scope="col">Branch</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Email</th>
                <th scope="col">Customer Mobile</th>
                <th scope="col">Customer Photo</th>
                </tr>
            </thead>
            <tbody>

                {this.state.accounts.map((account) => 

                        <tr key = {account.accountId}>
                        <th scope="row">{account.accountId}</th>
                        <td>{account.internet}</td>
                        <td>{account.approved}</td>
                        <td>{account.approvedDate}</td>
                        <td>{account.visa}</td>
                        <td>{account.branch.branchName}</td>
                        <td>{account.customer.customerName}</td>
                        <td>{account.customer.customerEmail}</td>
                        <td>{account.customer.customerMobile}</td>

                        
                    
                        <td> <img width = '50' height = '50' src = {"data:image/jpg;base64," + account.customer.customerPhoto} alt = ""/> </td>
                        </tr>
                )}
               
               
            </tbody>
            </table>
    
        
         </div>) 
    }


}


export default Accounts;