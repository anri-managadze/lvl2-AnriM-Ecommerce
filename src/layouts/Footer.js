import React from 'react';
import FirstBannerFooter from "../footer-component/FirstBannerFooter";
import {Box} from "@material-ui/core";
import SecondBannerFooter from "../footer-component/SecondBannerFooter";
import ThirdBannerFooter from "../footer-component/ThirdBannerFooter";



const Footer = () => {

    return (
        <Box >
            <FirstBannerFooter  />
            <SecondBannerFooter />
            <ThirdBannerFooter />
        </Box>
    );
};

export default Footer;