import React, { useContext } from 'react'
import { Aside, H1, H2, StyleLink, Ul, UlList } from './AsideBar.style';
import "./AsideBar.css";

// // Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ThemeContext } from '../../Context/ThemeContext';

const AsideBar = () => {
  const { theme, dispatch } = useContext(ThemeContext);
  

  return (
    <Aside variate={theme}>
        <H1 variate={theme}>Zura</H1>
        <div>

          <div>
            <H2>Main</H2>
            <Ul>
              <UlList variate={theme}><StyleLink variate={theme} to=""><DashboardOutlinedIcon className="mui-icon"/>Dashboard</StyleLink></UlList>
            </Ul>
          </div>

          <div>
            <H2>LISTS</H2>
            <Ul>
              <UlList variate={theme}><StyleLink variate={theme} to=""><Person3OutlinedIcon className="mui-icon"/>Users</StyleLink></UlList>
              <UlList variate={theme}><StyleLink variate={theme} to=""><HomeOutlinedIcon className="mui-icon"/>Products</StyleLink></UlList>
              <UlList variate={theme}><StyleLink variate={theme} to=""><BookOutlinedIcon className="mui-icon"/>Bookings</StyleLink></UlList>
              <UlList variate={theme}><StyleLink variate={theme} to=""><LocalShippingOutlinedIcon className="mui-icon"/>Delivery</StyleLink></UlList>
            </Ul>
          </div>

          <div>
            <H2>USEFUL</H2>
            <Ul>
              <UlList variate={theme}><StyleLink variate={theme} to=""><BarChartOutlinedIcon className="mui-icon"/>Service</StyleLink></UlList>
              <UlList variate={theme}><StyleLink variate={theme} to=""><NotificationsNoneOutlinedIcon className="mui-icon"/>Notifications</StyleLink></UlList>
            </Ul>
          </div>

          <div>
            <H2>SERVICE</H2>
            <div>
              <Ul>
                <UlList variate={theme}><StyleLink variate={theme} to=""><DirectionsRunOutlinedIcon className="mui-icon"/>System Health</StyleLink></UlList>
                <UlList variate={theme}><StyleLink variate={theme} to=""><AcUnitOutlinedIcon className="mui-icon"/>Logs</StyleLink></UlList>
                <UlList variate={theme}><StyleLink variate={theme} to=""><SettingsOutlinedIcon className="mui-icon"/>System setting</StyleLink></UlList>
              </Ul>
            </div>
          </div>

          <div>
            <H2>USER</H2>
            <div>
              <Ul>
                <UlList variate={theme}><StyleLink variate={theme} to=""><FolderSharedOutlinedIcon className="mui-icon"/>Profile</StyleLink></UlList>
                <UlList variate={theme}><StyleLink variate={theme} to=""><LogoutOutlinedIcon className="mui-icon"/>Logout</StyleLink></UlList>
              </Ul>
            </div>
          </div>

        </div>
    </Aside>
  )
}

export default React.memo(AsideBar);
