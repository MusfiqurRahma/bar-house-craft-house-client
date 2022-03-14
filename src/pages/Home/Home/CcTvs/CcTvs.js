import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import CcTv from '../CcTv/CcTv';

const CcTvs = () => {
    const [ccTvs, setccTvs] = useState([]);
    
    useEffect(() => {
        fetch('https://stormy-wave-87937.herokuapp.com/ccTv')
            .then(res => res.json())
            .then(data => setccTvs(data));
    },[])
    return (
        <div>
             <Navigation></Navigation>
            <Container sx={{ flexGrow: 1,p:5,mt:5}}>
                <h2 style={{fontFamily: 'Playfair Display, sans-serif',paddingBottom:'25px',fontWeight:'900'}}>Our Available CCTV Items</h2>
            <Grid container spacing={2}>
                {
                    ccTvs.map(ccTv => <CcTv
                        ccTv={ccTv}
                        key={ccTv.img}></CcTv>)
                }
            </Grid>
            </Container>
          <Footer></Footer>
        </div>
    );
};

export default CcTvs;