import React, { useState } from 'react';
import { connect } from 'react-redux';
import { isFetchingAC } from '../../redux/fetching_reducer';
import s from './news.module.css';
import axios from 'axios';

const News = (props) => {


    return (
        <div>
            <div className={s.news}>
                <img src="https://region-news.kr.ua/wp-content/uploads/2020/07/23.jpg" alt="News" />
            </div>
        </div>
    )
};



const mapDispatchToProps = (dispatch) => {
    return {
        isFetching: (fetching) => dispatch(isFetchingAC(fetching))
    }
}
export default connect(null, mapDispatchToProps)(News); 

