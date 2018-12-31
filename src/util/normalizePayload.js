import {normalize} from 'normalizr';

export default (schema) => (action, state, res) => res.json().then(json => normalize(json, schema));