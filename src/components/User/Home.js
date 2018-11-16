import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Home extends Component {

    constructor(props) {

        super(props);

    }

    componentDidMount() {

        // Call api function

    }

    render() {

        return (
            <div>
                <div className="banner-sec">
                    <div className="row m-0">
                        <div className="col-3 col-md-3 col-lg-3 col-xl-3 p-0">
                            <div className="banner-home home-left"></div>
                        </div>
                        <div className="col-9 col-md-9 col-lg-9 col-xl-9 p-0">
                            <div className="banner-home relative">
                                <img className="banner_right_img" src="assets/img/slider-img1 /.jpg"
                                srcSet="assets/img/slider-img1 /.jpg 1x,
                                        assets/img/slider-img1 /.jpg 1.5x,
                                        assets/img/slider-img1 /.jpg 2x" alt="banner img" />
                                <div className="banner_right_overlay"></div>
                            </div>   
                        </div>
                    </div>
                    <div className="banner-content">
                        <div className="banner-text-centeralign">
                            <div>
                                <h1 className="banner_video_title">troll hunters</h1>
                                <h4 className="banner_video_text">an ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.</h4>
                                <div className="banner-btn-sec">
                                    <Link to="#" className="btn btn-grey"><i className="fas fa-play mr-2"></i>play</Link>
                                    <Link to="#" className="btn btn-grey"><i className="fas fa-plus mr-2"></i>my list</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main p-40">
                    <div className="main-slidersec">
                        <h3>recently viewed<i className="fas fa-angle-right ml-2"></i></h3>
                        <section className="mylist-slider home-slider slider">
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-play-sec">
                                    <div>
                                        <Link to="#">
                                            <div className="slider-play-sec-outline">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb2.jpg"
                                srcSet="assets/img/thumb2.jpg 1x,
                                        assets/img/thumb2.jpg 1.5x,
                                        assets/img/thumb2.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb7.jpg"
                                srcSet="assets/img/thumb7.jpg 1x,
                                        assets/img/thumb7.jpg 1.5x,
                                        assets/img/thumb7.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-play-sec">
                                    <div>
                                        <Link to="#">
                                            <div className="slider-play-sec-outline">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb3.jpg"
                                srcSet="assets/img/thumb3.jpg 1x,
                                        assets/img/thumb3.jpg 1.5x,
                                        assets/img/thumb3.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb6.jpg"
                                srcSet="assets/img/thumb6.jpg 1x,
                                        assets/img/thumb6.jpg 1.5x,
                                        assets/img/thumb6.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb4.jpg"
                                srcSet="assets/img/thumb4.jpg 1x,
                                        assets/img/thumb4.jpg 1.5x,
                                        assets/img/thumb4.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb5.jpg"
                                srcSet="assets/img/thumb5.jpg 1x,
                                        assets/img/thumb5.jpg 1.5x,
                                        assets/img/thumb5.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb5.jpg"
                                srcSet="assets/img/thumb5.jpg 1x,
                                        assets/img/thumb5.jpg 1.5x,
                                        assets/img/thumb5.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb4.jpg"
                                srcSet="assets/img/thumb4.jpg 1x,
                                        assets/img/thumb4.jpg 1.5x,
                                        assets/img/thumb4.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb6.jpg"
                                srcSet="assets/img/thumb6.jpg 1x,
                                        assets/img/thumb6.jpg 1.5x,
                                        assets/img/thumb6.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb3.jpg"
                                srcSet="assets/img/thumb3.jpg 1x,
                                        assets/img/thumb3.jpg 1.5x,
                                        assets/img/thumb3.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb7.jpg"
                                srcSet="assets/img/thumb7.jpg 1x,
                                        assets/img/thumb7.jpg 1.5x,
                                        assets/img/thumb7.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb2.jpg"
                                srcSet="assets/img/thumb2.jpg 1x,
                                        assets/img/thumb2.jpg 1.5x,
                                        assets/img/thumb2.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="main-slidersec">
                        <h3>Recent uploads<i className="fas fa-angle-right ml-2"></i></h3>
                        <section className="recent-slider home-slider slider">
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-play-sec">
                                    <div>
                                        <Link to="#">
                                            <div className="slider-play-sec-outline">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb2.jpg"
                                srcSet="assets/img/thumb2.jpg 1x,
                                        assets/img/thumb2.jpg 1.5x,
                                        assets/img/thumb2.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb7.jpg"
                                srcSet="assets/img/thumb7.jpg 1x,
                                        assets/img/thumb7.jpg 1.5x,
                                        assets/img/thumb7.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-play-sec">
                                    <div>
                                        <Link to="#">
                                            <div className="slider-play-sec-outline">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb3.jpg"
                                srcSet="assets/img/thumb3.jpg 1x,
                                        assets/img/thumb3.jpg 1.5x,
                                        assets/img/thumb3.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb6.jpg"
                                srcSet="assets/img/thumb6.jpg 1x,
                                        assets/img/thumb6.jpg 1.5x,
                                        assets/img/thumb6.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb4.jpg"
                                srcSet="assets/img/thumb4.jpg 1x,
                                        assets/img/thumb4.jpg 1.5x,
                                        assets/img/thumb4.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb5.jpg"
                                srcSet="assets/img/thumb5.jpg 1x,
                                        assets/img/thumb5.jpg 1.5x,
                                        assets/img/thumb5.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb5.jpg"
                                srcSet="assets/img/thumb5.jpg 1x,
                                        assets/img/thumb5.jpg 1.5x,
                                        assets/img/thumb5.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb4.jpg"
                                srcSet="assets/img/thumb4.jpg 1x,
                                        assets/img/thumb4.jpg 1.5x,
                                        assets/img/thumb4.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb6.jpg"
                                srcSet="assets/img/thumb6.jpg 1x,
                                        assets/img/thumb6.jpg 1.5x,
                                        assets/img/thumb6.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb3.jpg"
                                srcSet="assets/img/thumb3.jpg 1x,
                                        assets/img/thumb3.jpg 1.5x,
                                        assets/img/thumb3.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb7.jpg"
                                srcSet="assets/img/thumb7.jpg 1x,
                                        assets/img/thumb7.jpg 1.5x,
                                        assets/img/thumb7.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb2.jpg"
                                srcSet="assets/img/thumb2.jpg 1x,
                                        assets/img/thumb2.jpg 1.5x,
                                        assets/img/thumb2.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div style="height: 100px;"></div>
                    
                    <div className="slider-content">
                        <div className="row m-0">
                            <div className="col-3 col-md-3 col-lg-3 col-xl-3 p-0">
                                <div className="banner-home home-left"></div>
                            </div>
                            <div className="col-9 col-md-9 col-lg-9 col-xl-9 p-0">
                                <div className="banner-home relative">
                                    <img className="banner_right_img" src="assets/img/slider-img1 /.jpg"
                                    srcSet="assets/img/slider-img1 /.jpg 1x,
                                            assets/img/slider-img1 /.jpg 1.5x,
                                            assets/img/slider-img1 /.jpg 2x" alt="slider-img" />
                                    <div className="banner_right_overlay"></div>
                                </div>   
                            </div>
                        </div>

                        <div className="slider-content-tabsec">
                            <ul className="nav nav-pills" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-toggle="pill" to="#overview">overview</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="pill" to="#episode">episodes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="pill" to="#trailers">trailers & more</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="pill" to="#more_link">more like this</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="pill" to="#details">details</Link>
                                </li>
                            </ul>
                        </div> 

                        <div className="slider-content-tabcontent">
                            <div className="tab-content">
                                <div id="overview" className="tab-pane active">
                                    <div className="slider-topbottom-spacing">
                                        <div className="overview-content">
                                            <div>
                                                <h1 className="banner_video_title">frozen</h1>
                                                <h4 className="banner_video_details">
                                                    <span className="green-clr">Aug 2018</span>
                                                    <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                                    <span>1h 26m</span>
                                                    <span className="small yellow-clr ml-1">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </span>
                                                </h4>
                                                <h4 className="banner_video_details">
                                                    <span><i className="far fa-thumbs-up"></i></span>
                                                    <span className="mr-2">50</span>
                                                    <span><i className="far fa-thumbs-down"></i></span>
                                                    <span className="mr-2">40</span>
                                                </h4>
                                                <h4 className="slider_video_text">an ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.</h4>
                                                <div className="banner-btn-sec">
                                                    <Link to="#" className="btn btn-danger btn-right-space br-0"><i className="fas fa-play mr-2"></i>play</Link>
                                                    <Link to="#" className="btn btn-outline-secondary btn-right-space"><i className="fas fa-plus mr-2"></i>my list</Link>
                                                    <Link to="#" className="btn express-btn mr-2"><i className="far fa-thumbs-up"></i></Link>
                                                    <Link to="#" className="btn express-btn btn-right-space"><i className="far fa-thumbs-down"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="episode" className="tab-pane fade">
                                    <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
                                        <div className="pr-4per pl-4per">
                                            <h1 className="banner_video_title">frozen</h1>
                                            <form>
                                                <div className="custom-select" style="width:200px;">
                                                    <select>
                                                        <option value="0">season 1</option>
                                                        <option value="1">season 2</option>
                                                        <option value="2">season 3</option>
                                                        <option value="3">season 4</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <section className="episode-slider slider">
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb1.jpg"
                                                            srcSet="assets/img/thumb1.jpg 1x,
                                                                    assets/img/thumb1.jpg 1.5x,
                                                                    assets/img/thumb1.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="episode-number">1</div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8">
                                                                <h4 className="episode-content-head">eye of the beholder</h4>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4">
                                                                <h4 className="episode-content-head text-right">52m</h4>
                                                            </div>
                                                        </div>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb2.jpg"
                                                            srcSet="assets/img/thumb2.jpg 1x,
                                                                    assets/img/thumb2.jpg 1.5x,
                                                                    assets/img/thumb2.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="episode-number">2</div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8">
                                                                <h4 className="episode-content-head">eye of the beholder</h4>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4">
                                                                <h4 className="episode-content-head text-right">52m</h4>
                                                            </div>
                                                        </div>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb3.jpg"
                                                            srcSet="assets/img/thumb3.jpg 1x,
                                                                    assets/img/thumb3.jpg 1.5x,
                                                                    assets/img/thumb3.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="episode-number">3</div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8">
                                                                <h4 className="episode-content-head">eye of the beholder</h4>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4">
                                                                <h4 className="episode-content-head text-right">52m</h4>
                                                            </div>
                                                        </div>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb4.jpg"
                                                            srcSet="assets/img/thumb4.jpg 1x,
                                                                    assets/img/thumb4.jpg 1.5x,
                                                                    assets/img/thumb4.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="episode-number">4</div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8">
                                                                <h4 className="episode-content-head">eye of the beholder</h4>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4">
                                                                <h4 className="episode-content-head text-right">52m</h4>
                                                            </div>
                                                        </div>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb5.jpg"
                                                            srcSet="assets/img/thumb5.jpg 1x,
                                                                    assets/img/thumb5.jpg 1.5x,
                                                                    assets/img/thumb5.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="episode-number">5</div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8">
                                                                <h4 className="episode-content-head">eye of the beholder</h4>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4">
                                                                <h4 className="episode-content-head text-right">52m</h4>
                                                            </div>
                                                        </div>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb6.jpg"
                                                            srcSet="assets/img/thumb6.jpg 1x,
                                                                    assets/img/thumb6.jpg 1.5x,
                                                                    assets/img/thumb6.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="episode-number">6</div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <div className="row">
                                                            <div className="col-xl-8 col-lg-8">
                                                                <h4 className="episode-content-head">eye of the beholder</h4>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-4">
                                                                <h4 className="episode-content-head text-right">52m</h4>
                                                            </div>
                                                        </div>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div id="trailers" className="tab-pane fade">
                                    <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
                                        <div className="pr-4per pl-4per">
                                            <h1 className="banner_video_title">frozen</h1>
                                        </div>
                                        <div>
                                            <section className="trailer-slider slider">
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb8.jpg"
                                                            srcSet="assets/img/thumb8.jpg 1x,
                                                                    assets/img/thumb8.jpg 1.5x,
                                                                    assets/img/thumb8.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">eye of the beholder</h4>		
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb9.jpg"
                                                            srcSet="assets/img/thumb9.jpg 1x,
                                                                    assets/img/thumb9.jpg 1.5x,
                                                                    assets/img/thumb9.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">eye of the beholder</h4>		
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb1.jpg"
                                                            srcSet="assets/img/thumb1.jpg 1x,
                                                                    assets/img/thumb1.jpg 1.5x,
                                                                    assets/img/thumb1.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">eye of the beholder</h4>		
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb4.jpg"
                                                            srcSet="assets/img/thumb4.jpg 1x,
                                                                    assets/img/thumb4.jpg 1.5x,
                                                                    assets/img/thumb4.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">eye of the beholder</h4>		
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb5.jpg"
                                                            srcSet="assets/img/thumb5.jpg 1x,
                                                                    assets/img/thumb5.jpg 1.5x,
                                                                    assets/img/thumb5.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">eye of the beholder</h4>		
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb6.jpg"
                                                            srcSet="assets/img/thumb6.jpg 1x,
                                                                    assets/img/thumb6.jpg 1.5x,
                                                                    assets/img/thumb6.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">eye of the beholder</h4>		
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div id="more_link" className="tab-pane fade">
                                    <div className="slider-topbottom-spacing pl-0 pr-0 slider-overlay">
                                        <div className="pr-4per pl-4per">
                                            <h1 className="banner_video_title">frozen</h1>
                                        </div>
                                        <div>
                                            <section className="more-like-slider slider">
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb1.jpg"
                                                            srcSet="assets/img/thumb1.jpg 1x,
                                                                    assets/img/thumb1.jpg 1.5x,
                                                                    assets/img/thumb1.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                            <div className="add-to-wishlist">
                                                                <Link to="#"><i className="fas fa-plus-circle"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">
                                                            <span>2018</span>&nbsp;
                                                            <span className="grey-box pt-0 pb-0">7 <i className="fas fa-plus small"></i> / 25 <small>Views</small></span>&nbsp;
                                                            <span>1h 36m</span>&nbsp;
                                                        </h4>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb2.jpg"
                                                            srcSet="assets/img/thumb2.jpg 1x,
                                                                    assets/img/thumb2.jpg 1.5x,
                                                                    assets/img/thumb2.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                            <div className="add-to-wishlist">
                                                                <Link to="#"><i className="fas fa-plus-circle"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">
                                                            <span>2018</span>&nbsp;
                                                            <span className="grey-box pt-0 pb-0">7 <i className="fas fa-plus small"></i> / 25 <small>Views</small></span>&nbsp;
                                                            <span>1h 36m</span>&nbsp;
                                                        </h4>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb3.jpg"
                                                            srcSet="assets/img/thumb3.jpg 1x,
                                                                    assets/img/thumb3.jpg 1.5x,
                                                                    assets/img/thumb3.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                            <div className="add-to-wishlist">
                                                                <Link to="#"><i className="fas fa-plus-circle"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">
                                                            <span>2018</span>&nbsp;
                                                            <span className="grey-box pt-0 pb-0">7 <i className="fas fa-plus small"></i> / 25 <small>Views</small></span>&nbsp;
                                                            <span>1h 36m</span>&nbsp;
                                                        </h4>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb4.jpg"
                                                            srcSet="assets/img/thumb4.jpg 1x,
                                                                    assets/img/thumb4.jpg 1.5x,
                                                                    assets/img/thumb4.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                            <div className="add-to-wishlist">
                                                                <Link to="#"><i className="fas fa-plus-circle"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">
                                                            <span>2018</span>&nbsp;
                                                            <span className="grey-box pt-0 pb-0">7 <i className="fas fa-plus small"></i> / 25 <small>Views</small></span>&nbsp;
                                                            <span>1h 36m</span>&nbsp;
                                                        </h4>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb5.jpg"
                                                            srcSet="assets/img/thumb5.jpg 1x,
                                                                    assets/img/thumb5.jpg 1.5x,
                                                                    assets/img/thumb5.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                            <div className="add-to-wishlist">
                                                                <Link to="#"><i className="fas fa-plus-circle"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">
                                                            <span>2018</span>&nbsp;
                                                            <span className="grey-box pt-0 pb-0">7 <i className="fas fa-plus small"></i> / 25 <small>Views</small></span>&nbsp;
                                                            <span>1h 36m</span>&nbsp;
                                                        </h4>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="relative">
                                                        <img className="trailers-img" src="assets/img/thumb6.jpg"
                                                            srcSet="assets/img/thumb6.jpg 1x,
                                                                    assets/img/thumb6.jpg 1.5x,
                                                                    assets/img/thumb6.jpg 2x" alt="episode-img" />
                                                        <div className="trailers-img-overlay">
                                                            <Link to="#">
                                                                <div className="thumbslider-outline">
                                                                    <i className="fas fa-play"></i>
                                                                </div>
                                                            </Link>
                                                            <div className="add-to-wishlist">
                                                                <Link to="#"><i className="fas fa-plus-circle"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="episode-content">
                                                        <h4 className="episode-content-head">
                                                            <span>2018</span>&nbsp;
                                                            <span className="grey-box pt-0 pb-0">7 <i className="fas fa-plus small"></i> / 25 <small>Views</small></span>&nbsp;
                                                            <span>1h 36m</span>&nbsp;
                                                        </h4>
                                                        <h4 className="episode-content-desc">During their search for the escaped Dagur the Deranged, Hiccup and the Dragon Riders discover a mysterious object -- one that holds their destiny.</h4>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div id="details" className="tab-pane fade">
                                    <div className="slider-topbottom-spacing slider-overlay">
                                        <h1 className="banner_video_title">frozen</h1>
                                        <div className="row">
                                            <div className="col-lg-2 col-xl-2">
                                                <h4 className="detail-head">cast</h4>
                                                <ul className="detail-list">
                                                    <li><Link to="#">jason</Link></li>
                                                    <li><Link to="#">jhon krasinski</Link></li>
                                                    <li><Link to="#">david cross</Link></li>
                                                    <li><Link to="#">joe ksandar</Link></li>
                                                    <li><Link to="#">kevin r</Link></li>
                                                    <li><Link to="#">constance wu</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-2 col-xl-2">
                                                <h4 className="detail-head">genres</h4>
                                                <ul className="detail-list">
                                                    <li><Link to="#">Action Comedies</Link></li>
                                                    <li><Link to="#">Children & Family Films</Link></li>
                                                    <li><Link to="#">Films for ages 8 to 10</Link></li>
                                                    <li><Link to="#">family features</Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-8 col-xl-8">
                                                <h4 className="detail-head">description</h4>
                                                <p className="details-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="height: 100px;"></div>
                </div>
            </div>
        );

    }

}


export default Home;

