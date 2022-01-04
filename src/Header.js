import React from 'react'
import "./Header.css";
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import IconButton from '@mui/material/IconButton';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { Link, useNavigate } from "react-router-dom";
function Header() {
    return (
        <div className="header">
                <Link to="/master">
                    <IconButton>
                        <KeyIcon className="header_icon" fontSize="large"/>
                    </IconButton>
                </Link>
                <Link to="/student">
                    <IconButton>
                        <PersonIcon className="header_icon" fontSize="large"/>
                    </IconButton>
                </Link>
                <Link to="/scale">
                    <IconButton>
                        <CompareArrowsIcon className="header_icon" fontSize="large"/>
                    </IconButton>
                </Link>
                <Link to="score">
                <IconButton>
                        <SportsScoreIcon className="header_icon" fontSize="large"/>
                    </IconButton>
                </Link>            
        </div>
        // <div className = "header">
        //     {back ?(
        //         <IconButton  onClick={() => navigate(back)}>
        //             <ArrowLeftIcon fontSize="large" className="back"/>
        //         </IconButton>
        //     ) :(
        //         <IconButton>
        //             <AssignmentIndIcon className="header_icon" fontSize="large"/>
        //         </IconButton>
        //     )}
            
        //     <Link to="/">
        //         <img 
        //         className = "header_logo"
        //         src="https://previews.123rf.com/images/julos/julos1607/julos160722846/
        //         80593222-cartoon-frog-with-sunglasses.jpg" alt="logo"/>
        //     </Link>
            
        //     <Link to="/chats">
        //         <IconButton>
        //             <NewspaperIcon className="header_icon"/>
        //         </IconButton>
        //     </Link>
            
        // </div>
    );
}

export default Header
