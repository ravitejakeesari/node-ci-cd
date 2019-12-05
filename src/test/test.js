const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();

chai.use(chaiHttp);

describe('/getapi', () => {
    it('it should return message with Status code 200', (done) => {
        chai.request(app)
            .get('/getMessage')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    })
})