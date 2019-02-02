import React, { Component } from 'react';
import '../../styles/template.scss';

class Template extends Component {
  render() {
    return (
      <div className="template">
        <div className="title">Default template</div>
        <div className="message">
          <div className="card">
            <div className="card-body">
              <p className="lead" id="copyMessage">
                Hi <span id="name" />,
                <br />
                <br />I came across your profile through the alumni search. I
                will be graduating ASU this December with a CS degree. I'm
                looking to apply for <span id="job" /> within{' '}
                <span id="company" />. I would like to have a chat with you to
                get some pointers when applying for a role at{' '}
                <span id="company" />.<span id="signature" />
                <span id="txtAge">
                  <br />
                  <br />
                  Go Devils!
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="inputs">
          <div className="select">
            <label htmlFor="templateName" className="col-sm-2 col-form-label">
              Template
            </label>
            <div className="col-sm-10" id="templateName">
              <select className="form-control">
                <option>Default Template</option>
                <option>Template #1</option>
                <option>Templete #2</option>
              </select>
            </div>
          </div>
          <div className="name">
            <label htmlFor="personName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="personName"
                placeholder="John"
              />
            </div>
          </div>
          <div className="company">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">
              Company
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Google"
              />
            </div>
          </div>
          <div className="job">
            <label htmlFor="jobName" className="col-sm-2 col-form-label">
              Job
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="jobName"
                placeholder="Full Stack developer roles"
              />
            </div>
          </div>
          <div className="signature">
            <label htmlFor="jobName" className="col-sm-2 col-form-label" />
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="signatureName"
                  checked
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Signature
                </label>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-block"
            data-clipboard-target="#copyMessage"
          >
            Copy Text
          </button>
        </div>
      </div>
    );
  }
}

export default Template;
