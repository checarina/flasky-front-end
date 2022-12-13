import PropTypes from 'prop-types'

import "./Bike.css";

function Bike( { id, name, size, type, price } ){

    const bikeName = name;
    const bikeId = id;
    const bikeSize = size;
    const bikeType = type;
    const bikePrice = price;

    return(
        <div>
            <h2 className="bike__name">{bikeName}</h2>
            <ul>
                <li>{bikeId}</li>
                <li>{bikeSize}</li>
                <li>{bikeType}</li>
                <li>{bikePrice}</li>
            </ul>
            
        </div>
    );
}

Bike.propTypes = {
    id: PropTypes.number.isRequired,
}
export default Bike;