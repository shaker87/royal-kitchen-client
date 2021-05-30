import './LeftNavbar.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';

import {Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LeftNavbar = () => {
    //const [data,setData]=useContext(UserContext)
    const generalService=['Order', 'Add Foods', 'Foods List','Review', 'Make Admin']
    //const adminService=['Service list', 'Add Service', 'Make Admin']
    //const history=useHistory()

    const logoutHandler=()=>{
        // setData({user:null})
        // sessionStorage.removeItem('token')
        // history.replace('/')
    }
    return (
        <div className='left-navbar'>
            <div className='pt-4 pb-5 pl-2'>
                <Link to='/'>
                    {/* <img style={{width:'120px'}} src="" alt=""/> */}
                </Link>
            </div>
            <div>
                {/* {
                   adminService.map((item,index)=>{
                        return(
                        <Link key={index} style={{color:`${window.location.pathname=='/dashboard/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                             to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
                            <div className='d-flex ml-3'>
                            {index==0 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                            {index==1 && <AddOutlinedIcon></AddOutlinedIcon>}
                            {index==2 && <PersonAddOutlinedIcon></PersonAddOutlinedIcon>}
                            
                            <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>{item}</p>
                        </div>
                        </Link>
                        )
                    })
                } */}
                {
                     generalService.map((item,index)=>{
                        return(
                        <Link key={index+3} style={{color:`${window.location.pathname==='/dashboard/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                             to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
                            <div className='d-flex ml-3'>
                            {index===0 && <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>}
                            {index===1 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                            {index===2 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                            {index===3 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                            {index===4 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                            {index===5 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                         
                           
                            <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>{item}</p>
                        </div>
                        </Link>
                        )
                    })
                }
                <div onClick={logoutHandler} className='d-flex ml-3 logout' style={{cursor:'pointer'}}>
                    <ExitToAppIcon></ExitToAppIcon>
                    <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>Logout</p>
                </div>
            </div>

        </div>
    );
};

export default LeftNavbar;