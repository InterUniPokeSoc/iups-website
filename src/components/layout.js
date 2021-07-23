import React from 'react';
import Header from '../components/header';
// import Footer from '../components/footer';
// import '../styles/reset.scss';
// import '../styles/general.scss';
// import '../styles/images.scss';
import * as layoutStyles from './layout.module.scss';

function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;