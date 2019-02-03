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

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
          <div className="label">Template</div>
          <div className="template-select">
            <select className="form-control">
              <option>Default Template</option>
            </select>
          </div>
          <div className="label">Name</div>
          <div className="name">
            <input
              type="text"
              className="form-control"
              placeholder="John"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="label">Company</div>
          <div className="company">
            <input
              type="text"
              className="form-control"
              placeholder="Google"
              name="company"
              onChange={this.handleChange}
            />
          </div>
          <div className="label">Job</div>
          <div className="job">
            <input
              type="text"
              className="form-control"
              placeholder="Full Stack developer roles"
              name="job"
              onChange={this.handleChange}
            />
          </div>
          <div className="label">Signature</div>
          <div className="signature">
            <input
              className="form-check-input"
              type="checkbox"
              id="signatureName"
              checked
            />
          </div>
          <div className="label" />
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
