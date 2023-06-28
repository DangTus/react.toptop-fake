import axios from 'axios';
import PropTypes from 'prop-types';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data.data;
};

get.propTypes = {
    path: PropTypes.string,
    options: PropTypes.object,
};

export default httpRequest;
