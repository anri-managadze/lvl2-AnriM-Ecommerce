import React from 'react';
import FirstBannerFooter from "../component footer/FirstBannerFooter";
import {Box} from "@material-ui/core";
import SecondBannerFooter from "../component footer/SecondBannerFooter";
import ThirdBannerFooter from "../component footer/ThirdBannerFooter";



const Footer = () => {

    return (
        <Box>
            <FirstBannerFooter />
            <SecondBannerFooter />
            <ThirdBannerFooter />
        </Box>
    );
};

export default Footer;