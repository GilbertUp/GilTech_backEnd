import chai from "chai";
import chaiHttp from "chai-http";
import express from "express";
import app from "../index.js"

// assertion style
chai.should();

chai.use(chaiHttp);

describe('User TEST', () => {
    /**
     * TEST THE GET ROUTE
     */
describe("GET /api/v1/messages", () =>{
    it("it should get all messages", (done) =>{
        chai.request(app)
        .get("api/v1/messages")
        .end((err, response) => {
           
        done();

        });
    });
});
    /**
     * TEST THE GET message BY ID
     */
     describe("GET /api/v1/messages:id", () =>{
        it("it should get message by ID", (done) =>{
            chai.request(app)
            .get("api/v1/messages:id")
            .end((err, response) => {
            done();
    
            });
        });
    });
});
/**
     * TEST THE POST ROUTE
     */
 describe("POST  /api/v1/message", () =>{
    it("it should post message", (done) =>{
        chai.request(app)
        .post("api/v1/messages")
        .end((err, response) => { 
        done();

        });
    });
});



/**
 * TEST THE DELETE ROUTE
 */
 describe("DELETE  /api/v1/messages", () =>{
    it("it should DELETE message by ID", (done) =>{
        chai.request(app)
        .delete(" api/v1/messages:id")
        .end((err, response) => {
        done();

        });
    });
});

describe("patch  /api/v1/messages", () =>{
    it("it should update message by ID", (done) =>{
        chai.request(app)
        .delete(" api/v1/messages:/id")
        .end((err, response) => {
        done();

        });
    });
});