import React from 'react'
import { Form, Input, Ul, Li, Img, Nav } from './Navigation.style';
import userImage from "../../../Assets/images/mustapha.jpg";
import "./Navigation.css";

// icons 
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Search } from '@mui/icons-material';

const Navigation = () => {
  return (
    <Nav>
        <Form>
          <Input 
            type="text"
            placeholder="Search"
          />
          <Search className="search_icon"/>
        </Form>

        <Ul>
          <Li>
            <LanguageOutlinedIcon />
            <span>English</span>
          </Li>
          <Li>
            <DarkModeOutlinedIcon />
          </Li>
          <Li>
            <NotificationsNoneOutlinedIcon />
          </Li>
          <Li>
            <ModeCommentOutlinedIcon />
          </Li>
          <Img width="30" height="30" src={userImage} alt="" />
          <Li>
            <SettingsOutlinedIcon />
          </Li>
        </Ul>
    </Nav>
  )
}

export default React.memo(Navigation);
