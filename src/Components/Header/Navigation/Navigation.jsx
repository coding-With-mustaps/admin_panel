import React, { useContext } from 'react'
import { Form, Input, Ul, Li, Img, Nav, SpanDigit, ToggleButton } from './Navigation.style';
import userImage from "../../../Assets/images/mustapha.jpg";
import "./Navigation.css";

// icons 
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Search } from '@mui/icons-material';
import { ThemeContext } from '../../../Context/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const Navigation = () => {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleToggleBottom = () => {
    if(theme === "light") {
      dispatch({type: "DARK"});
      localStorage.setItem("theme", "dark");
    } else {
      dispatch({type: "LIGHT"});
       localStorage.setItem("theme", "light");
    }
  };

  const iconsStyle = {
    color: "white",
  }

  return (
    <Nav variate={theme}>
        <Form>
          <Input 
            type="text"
            placeholder="Search"
          />
          <Search  style={{color: "black"}} className="search_icon"/>
        </Form>

        <Ul>
          <Li>
            <LanguageOutlinedIcon style={theme === "dark" ? iconsStyle : {color: "black"}}/>
            <span style={theme === "dark" ? iconsStyle : {color: "black"}}>English</span>
          </Li>
          <ToggleButton onClick={handleToggleBottom}>
            { theme === "light" ? <DarkModeIcon style={theme === "dark" ? iconsStyle : {color: "black"}}/> : <NightlightIcon style={theme === "dark" ? iconsStyle : {}}/>}
          </ToggleButton>
          <Li>
            <NotificationsNoneOutlinedIcon style={theme === "dark" ? iconsStyle : {color: "black"}}/>
            <SpanDigit>0</SpanDigit>
          </Li>
          <Li>
            <ModeCommentOutlinedIcon style={theme === "dark" ? iconsStyle : {color: "black"}}/>
            <SpanDigit>0</SpanDigit>
          </Li>
          <Img width="30" height="30" src={userImage} alt="" />
          <Li>
            <SettingsOutlinedIcon style={theme === "dark" ? iconsStyle : {color: "black"}}/>
          </Li>
        </Ul>
    </Nav>
  )
}

export default React.memo(Navigation);
