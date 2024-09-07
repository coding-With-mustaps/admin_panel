import React, { useContext } from "react";
import { CircularContainer, Progress, ProgressInner } from "./ProgressBar.style";
import { CircularProgressbar } from 'react-circular-progressbar';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import 'react-circular-progressbar/dist/styles.css';
import { H2 } from "../AreaChart/AreaChart.style";
import "./ProgressStyle.scss";
import { ThemeContext } from "../../../Context/ThemeContext";

const ProgressBar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Progress variate={theme}>
            <ProgressInner>
                <H2>Total Revenue (Gh&cent;)</H2>
                <CircularContainer>
                    <CircularProgressbar strokeWidth={10} value={64} text={"64%"}/>
                </CircularContainer>
                <div>
                    <H2>Total sales made today</H2>
                    <H2>GH&cent; 2 500.50</H2>
                    <div className="prev-sales-made">
                        <div>
                            <H2>Target</H2>
                            <p style={{color: "green"}}>
                                <span><ExpandLessOutlinedIcon /></span>
                                <span>5.3k</span>
                            </p>
                        </div>
                        <div>
                            <H2>Last Week</H2>
                            <p style={{color: "green"}}>
                                <span><ExpandLessOutlinedIcon /></span>
                                <span>7.3k</span>
                            </p>
                        </div>
                        <div>
                            <H2>Last Month</H2>
                            <p style={{color: "red"}}>
                                <span><ExpandMoreOutlinedIcon /></span>
                                <span>3.3k</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ProgressInner>
        </Progress>
    )
};

export default React.memo(ProgressBar);