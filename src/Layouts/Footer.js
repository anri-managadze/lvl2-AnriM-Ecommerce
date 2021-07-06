import React from 'react';
import FirstBannerFooter from "../ComponentFooter/FirstBannerFooter";
import {Box} from "@material-ui/core";
import SecondBannerFooter from "../ComponentFooter/SecondBannerFooter";
import ThirdBannerFooter from "../ComponentFooter/ThirdBannerFooter";



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