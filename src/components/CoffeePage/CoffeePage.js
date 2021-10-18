import Filter from './Filter/Filter';
import About from './About/About';
import './CoffeePage.scss';

const CoffeePage = (props) => {
    return (
        <div className="coffee-page">
            <About />
            <Filter onClickHeader={props.onClickHeader} goods={props.goods} goodItemFill={props.goodItemFill}/>
        </div>
    );
}

export default CoffeePage;