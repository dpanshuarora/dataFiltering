import {expect} from 'chai';
import sinon from 'sinon';
import {getData, filterBy, filterByTypeAndSubject, getCountOfUniqueSubjects} from '../src/json';

describe('filter data processed by Promises', () => {

    before = () => {
        data = [ {"name":"Cell Structure","id":"cell-structure","type":"apps","exec":{"command":"cell-structure","args":[]},"subject":"Biology","keywords":["",""]},
            {"name":"Human Atlas","id":"human-atlas","type":"apps","exec":{"command":"human-atlas","args":[]},"subject":"Biology","keywords":["",""]},
            {"name":"K Geography","id":"kgeography","type":"apps","exec":{"command":"kgeography","args":[]},"subject":"social","audio":"/audio/kgeography.wav","keywords":["",""]},
            {"name":"Pulleys","id":"pulleys","exec":{"command":"pulleys","args":[]},"subject":"physics","keywords":["",""],"type":"apps"}]
    }

    it('should filter by specified key and its value', () => {
        let stub = sinon.stub(getData).resolves(JSON.stringify(data))
        return filterBy('type', 'apps').then( function(result) {
            expect(result).to.equal(data);
        });
    });

})