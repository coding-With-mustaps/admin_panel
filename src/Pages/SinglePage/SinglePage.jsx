

import React from 'react';
import "./SinglePage.scss";
import { InnerDiv, SinglePage, Header2 } from "./SinglePage.style";
import image from "../../Assets/images/mustapha.jpg";
import { Img } from '../../Components/User/AddUser/AddUser.style';
import { Link } from 'react-router-dom';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const SingleUserPage = () => {
  return (
    <SinglePage className="singlePage">
      <Header2>User details</Header2>
      <Link className="edit_user" to="">edit</Link>
      <InnerDiv className="singlePageInnerDiv">
        <div className="profileImageContainer">
          <Img src={image} alt="" />
          <div>
            <label htmlFor='profile'>Change Profile <FileUploadOutlinedIcon /></label>
            <input 
              type="file"
              accept='image/*'
              id="profile"
            />
          </div>
        </div>
        <div className="detailsContainer">
          <div>
            <span>Name: </span>
            <span>Mustapha</span>
          </div>
          <div>
            <span>Country: </span>
            <span>Ghana</span>
          </div>
          <div>
            <span>City: </span>
            <span>Sunyani</span>
          </div>
          <div>
            <span>Address: </span>
            <span>Kumasi - Sunyani road, Sunyani, UENR</span>
          </div>
          <div>
            <span>Email: </span>
            <span>mus@gmail.com</span>
          </div>
          <div>
            <span>Phone: </span>
            <span>+23325689469</span>
          </div>
          <div>
            <span>Age: </span>
            <span>20</span>
          </div>
          <div>
            <span>user type: </span>
            <span>Ordinary user</span>
          </div>
        </div>
      </InnerDiv>
    </SinglePage>
  )
}

export default React.memo(SingleUserPage)
