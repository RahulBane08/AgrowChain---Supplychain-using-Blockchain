import RegisterDistributer from '../components/Form/RegisterDistributor';
import RegisterFarmer from '../components/Form/RegisterFarmer';
import RegisterManufac from '../components/Form/RegisterManufac';
import RegisterRetailer from '../components/Form/RegisterRetailer';

export const extractForm = formName => {
    switch (formName) {
        case 'FARMER': {
            return <RegisterFarmer />;
        }

        case 'MANUFACTURER': {
            return <RegisterManufac />;
        }

        case 'DISTRIBUTOR': {
            return <RegisterDistributer />;
        }
        case 'RETAILER': {
            return <RegisterRetailer />;
        }

        default:
            return null;
    }
};
