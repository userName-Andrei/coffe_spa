import React from 'react';
import './Filter.scss';
import imgItem from './img/img-item.png';

class Filter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.goods.map(item => {
                return (<div 
                    className="filter-item"
                    data-page="item"
                    data-country={item.country}
                    key={item.key}
                    onClick={(e) => {
                        this.props.onClickHeader(e.currentTarget.getAttribute('data-page'));
                        this.props.goodItemFill({
                            name: item.name,
                            country: item.country,
                            price: item.price,
                            weight: item.weight,
                            key: item.key
                        });
                    }}>
                        <div className="filter-item_wrap">
                            <img src={imgItem} alt="" />
                            <p>{item.name}</p>
                            <p>{item.country}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>);
            }),
            active: ''
        }
    }

    renderItems = (goods) => {

        this.setState({
            items: goods.map(item => {
                return (<div 
                    className="filter-item"
                    data-page="item"
                    data-country={item.country}
                    key={item.key}
                    onClick={(e) => {
                        this.props.onClickHeader(e.currentTarget.getAttribute('data-page'));
                        this.props.goodItemFill({
                            name: item.name,
                            country: item.country,
                            price: item.price,
                            weight: item.weight,
                            key: item.key
                        });
                    }}>
                        <div className="filter-item_wrap">
                            <img src={imgItem} alt="" />
                            <p>{item.name}</p>
                            <p>{item.country}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>);
            })
        });
    }

    filter = (e) => {

        let arr = this.props.goods.filter(item => item.country === e.target.dataset.country);

        this.setState({
            active: e.target.dataset.country
        });
        this.renderItems(arr);
    }

    search = (e) => {

        let term = e.target.value;

        if(term.length === 0) {
            this.renderItems(this.props.goods);
        }

        this.renderItems(this.props.goods.filter(item => {
            return item.name.indexOf(term) > -1 || item.country.indexOf(term) > -1;
        }));
    }
    
    render() {
        let {active, items} = this.state;

        return (
            <div className="filter">
                <div className="filter_nav">
                    <div className="search">
                        <label htmlFor="search">Looking for</label>
                        <input 
                        type="text" 
                        name="search" 
                        placeholder="start typing here..." 
                        onChange={this.search}/>
                    </div>
                    <div className="filter-btns">
                        <span>Or filter</span>
                        <div className="filter-btns_btns">
                            <button 
                            className={active ===  'Brazil' ? 'filter_btn active' : 'filter_btn'}
                            data-country='Brazil'
                            onClick={this.filter}
                            >Brazil</button>
                            <button 
                            className={active ===  'Kenya' ? 'filter_btn active' : 'filter_btn'}
                            data-country='Kenya'
                            onClick={this.filter}
                            >Kenya</button>
                            <button 
                            className={active ===  'Columbia' ? 'filter_btn active' : 'filter_btn'}
                            data-country='Columbia'
                            onClick={this.filter}
                            >Columbia</button>
                        </div>
                    </div>
                </div>
                <div className="filter-items">
                    {items}
                </div>
            </div>
        );
    }
}

export default Filter;