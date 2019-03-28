class Prices extends React.Component{
    state = {
        currency: "USD"
    }

    render(){
        let apiCurrency;

        switch(this.state.currency){
            case "USD":
                apiCurrency = this.props.bpi.bpi.USD;
                break;
            case "GBP":
                apiCurrency = this.props.bpi.bpi.GBP;
                break;
            case "EUR":
                apiCurrency = this.props.bpi.bpi.EUR;
                break;
            default:
                apiCurrency = this.props.bpi.bpi.USD; //redundancy tho ;p
            break;
        }

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                    Bitcoin rate for {apiCurrency.description} : 
                    <span className="badge badge-primary">{apiCurrency.code}</span>
                    <strong>{apiCurrency.rate}</strong>
                    </li>
                </ul>
                <br/>
                <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        );
    }
}
export default Prices;