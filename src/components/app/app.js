import React from 'react';
import Main from '../Main/Main';
import GoodsPage from '../GoodsPage/GoodsPage';
import CoffeePage from '../CoffeePage/CoffeePage';
import CoffeeItemPage from '../CoffeeItemPage/CoffeeItemPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './app.scss';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            goods: [
                {name: 'AROMISTICO', country: 'Brazil', price: '6.99$', weight: '1kg', key: 1},
                {name: 'AROMISTICO', country: 'Kenya', price: '7.99$', weight: '1kg', key: 2},
                {name: 'AROMISTICO', country: 'Columbia', price: '10$', weight: '1kg', key: 3},
                {name: 'Solimo Coffee Beans', country: 'Columbia', price: '15$', weight: '2kg', key: 4, best: true},
                {name: 'Solimo Coffee Beans', country: 'Kenya', price: '12.5$', weight: '2kg', key: 5, best: true},
                {name: 'Solimo Coffee Beans', country: 'Brazil', price: '11$', weight: '2kg', key: 6, best: true},
            ],
            good: {}
        };
    }

    pageChanger = (current) => {
        switch(current) {
            case 'main':
                return <Main onClickHeader={this.onClickHeader} goods={this.state.goods.filter(item => item.best === true)} goodItemFill={this.goodItemFill}/>;
            case 'our':
                return  <CoffeePage onClickHeader={this.onClickHeader} goods={this.state.goods} goodItemFill={this.goodItemFill}/>;
            case 'pleasure':
                return <GoodsPage onClickHeader={this.onClickHeader} goods={this.state.goods} goodItemFill={this.goodItemFill}/>;
            case 'item':
                return <CoffeeItemPage good={this.state.good}/>;
            default:
                return <Main onClickHeader={this.onClickHeader} goods={this.state.goods.filter(item => item.best === true)} goodItemFill={this.goodItemFill}/>;
        }
    }

    goodItemFill = ({name, country, price, weight, key}) => {
        this.setState(({good}) => ({
            good: {
                name: name,
                country: country,
                price: price,
                weight: weight,
                key: key
            }
        }));
    }

    onClickHeader = (data) => {
        this.setState(({current}) => ({
            current: data
        }));
    }

    render() {
        return (
            <div className="app">
                <Header onClickHeader={this.onClickHeader} currentPage={this.state.current}/>
                {this.pageChanger(this.state.current)}
                <Footer onClickHeader={this.onClickHeader}/>
            </div>
        );
    }
}

export default App;