import React, { Component } from 'react';

const initData = {
    pre_heading: "Exclusive Assets",
    heading: "Explore",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: "/img/auction_1.jpg",
        title: "nereus Card",
        owner: "nereus",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "2",
        img: "/img/auction_2.jpg",
        title: "Domain Names",
        owner: "nereus",
        price: "2.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "3",
        img: "/img/auction_3.jpg",
        title: "Trading Cards",
        owner: "nereus",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "4",
        img: "/img/auction_4.jpg",
        title: "Industrial Revolution",
        owner: "nereus",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "5",
        img: "/img/auction_5.jpg",
        title: "Utility",
        owner: "nereus",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "6",
        img: "/img/auction_6.jpg",
        title: "Sports",
        owner: "nereus",
        price: "1.9 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "7",
        img: "/img/auction_7.jpg",
        title: "Cartoon Heroes",
        owner: "nereus",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "8",
        img: "/img/auction_8.jpg",
        title: "Gaming Chair",
        owner: "nereus",
        price: "0.69 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "9",
        img: "/img/auction_9.jpg",
        title: "Photography",
        owner: "nereus",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "10",
        img: "/img/auction_10.jpg",
        title: "Zed Run",
        owner: "nereus",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "11",
        img: "/img/auction_11.jpg",
        title: "Rare Tyres",
        owner: "nereus",
        price: "2.2 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "12",
        img: "/img/auction_12.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "13",
        img: "/img/auction_13.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "14",
        img: "/img/auction_14.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "15",
        img: "/img/auction_15.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "16",
        img: "/img/auction_16.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "17",
        img: "/img/auction_17.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "18",
        img: "/img/auction_18.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "19",
        img: "/img/auction_19.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "20",
        img: "/img/auction_20.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "21",
        img: "/img/auction_21.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "22",
        img: "/img/auction_22.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "23",
        img: "/img/auction_23.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "24",
        img: "/img/auction_24.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    },
    {
        id: "25",
        img: "/img/auction_25.jpg",
        title: "nereus Cards",
        owner: "nereus",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Place a Bid"
    }
]

class ExploreOne extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/explore-3">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </a>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/author">
                                                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/login"><i className="icon-handbag mr-2" />{item.btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{this.state.initData.btn_2}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreOne;