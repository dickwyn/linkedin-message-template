import React, { Component } from 'react';
import '../../styles/template.scss';

class Template extends Component {
  state = {
    template: 'Default',
    name: 'dickwyn',
    company: 'testorange',
    job: 'full stack developer roles',
    signature: true,
  };

  onChange = () => {
    this.setState({});
  };

  render() {
    const { template, name, company, job, signature } = this.state;

    return (
      <div className="template">
        <div className="title">
          <h1>{template} template</h1>
        </div>
        <div className="message">
          Hi {name}, I came across your profile through the alumni search. I
          will be graduating ASU this December with a CS degree. I'm looking to
          apply for {job}within {company}. I would like to have a chat with you
          to get some pointers when applying for a role at {company}. Go Devils!
        </div>
        <div className="form">
          <div className="template-select">
            <label className="form-label">Template</label>
            <div className="col-sm-10" id="templateName">
              <select className="form-control">
                <option>Default Template</option>
              </select>
            </div>
          </div>
          <div className="name">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="personName"
              placeholder="John"
            />
          </div>
          <div className="company">
            <label className="form-label">Company</label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Google"
            />
          </div>
          <div className="job">
            <label className="form-label">Job</label>
            <input
              type="text"
              className="form-control"
              id="jobName"
              placeholder="Full Stack developer roles"
            />
          </div>
          <div className="signature">
            <input
              className="form-check-input"
              type="checkbox"
              id="signatureName"
              checked
            />
            <label className="form-check-label">Signature</label>
          </div>
          <div className="copy-button">
            <button
              type="button"
              className="btn btn-outline-primary btn-block"
              data-clipboard-target="#copyMessage"
            >
              Copy Text
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
