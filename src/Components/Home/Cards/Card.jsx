
import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddIcon from '@mui/icons-material/Add';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

import { FlexDiv, MainCard } from "./Card.style";
import "./CardContainer.css";
import { ThemeContext } from "../../../Context/ThemeContext";

const Card = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <MainCard variate={theme}>
        <div className="col_1">
            <h3>USERS</h3>
            <p>3909</p>
            <Link to="">See all users</Link>
        </div>
        <div className="col_2">
            <div style={{display: "flex"}}>
                <span><ExpandMoreOutlinedIcon /></span>
                <FlexDiv>
                    <span><AddIcon fontSize="small" /></span>
                    <span className="progress_per_i">2.3%</span>
                </FlexDiv>
            </div>
            <PersonIcon className="card_image-i"/>
        </div>
    </MainCard>
  )
}

export default React.memo(Card);
