import {schema} from 'normalizr';

export default new schema.Entity('heroes', {}, {idAttribute: 'fileId'});
