import React from "react";
import { Button, Card, Form, Input, Select } from "antd";

const { Option, OptGroup } = Select;

const Contact = () => {
  const onFinish = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <section className="contact extra-margin">
        <div className="section_padding"></div>
        <div className="container">
          <div className="row box_contact">
            <div className="col-lg-6 col-md-6 col-sm-6 picture_area">
              <img
                src="/source/images/contact_us_image.png"
                className="img-fluid"
                alt="plan_images"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 cont_area my-auto">
              <div className="form_card">
                <h3 className="section-title text-center mb-2 mb-lg-4 mb-sm-2 mb-md-2 mt-2 mt-lg-0 mt-sm-2 mt-md-2 brown-color">
                  CONTACT US
                </h3>
                <Card
                  className="form-card-width glass"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 8,
                  }}
                >
                  <Form onFinish={onFinish}>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter valid name",
                          pattern: /^[A-Za-z\s\b]+$/,
                        },
                      ]}
                    >
                      <Input placeholder="Your Name" onc />
                    </Form.Item>
                    <Form.Item
                      name="mobile"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter valid Mobile",
                          pattern: /^[0-9]{10}$/,
                        },
                      ]}
                    >
                      <Input placeholder="Your Mobile" />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter valid email",
                          pattern: /^[A-Za-z0-9._-]+@[A-Za-z]+.[A-Za-z]+$/,
                        },
                      ]}
                    >
                      <Input placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item>
                      <Select
                        showSearch
                        placeholder="Intrested In Which Scheme"
                      >
                        <OptGroup label="Residential">
                          <Option value="Siddhi">Kala Siddhi</Option>
                          <Option value="Samartheshwar">
                            Kala Samartheshwar
                          </Option>
                          <Option value="Skyz">KalaSagar Skyz</Option>
                          <Option value="Skies">KalaSagar Skies</Option>
                          <Option value="Premium">Kalatirth Premium</Option>
                          <Option value="Kunj">Kala Kunj</Option>
                          <Option value="Dham">Kala Dham</Option>
                          <Option value="Square">Kala Square</Option>
                        </OptGroup>
                        <OptGroup label="Commercial">
                          <Option value="Siddhi">Kala Siddhi</Option>
                          <Option value="Skies">KalaSagar Skies</Option>
                        </OptGroup>
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" className="btn btn-color" block>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2483699426075!2d72.494282!3d23.0513542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bd110a006b7%3A0x8c213bd2db920eee!2sTIMES%20CORPORATE%20PARK!5e0!3m2!1sen!2sin!4v1718029268870!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <h3 className="section-title pb-3 brown-color mt-4 mt-lg-0">
                LOCATION
              </h3>
              <div className="contact_details">
                <a href="https://maps.app.goo.gl/eZgcZF8PmCDNLmRj6" target="_blank">
                  <p>
                    <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                    Kala Group of companies 17 Times
                    corporate park behind sidhu bhavan road
                    Thaltej Ahmedabad


                  </p>
                </a>
              </div>

              <div className="numbers">
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-12 pt-2 pt-md-0">
                    <b>Contact&nbsp;number:</b>&nbsp;
                    <a href="tel:+91 79-269 23423" className="number">
                      079-26923423
                    </a>
                    /
                    <a href="tel:+91 79-2692 4564" className="number">
                      +91 9409560460
                    </a>
                    /
                    <a href="tel:+91 94260 01681" className="number">
                      +91-9426001681
                    </a>
                  </div>

                  {/* <div className="col-lg-6 col-md-11 col-sm-12">
                   
                  </div> */}
                  {/* <div className="col-lg-2"></div> */}
                  {/* <div className="col-lg-3 col-md-4"></div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    {" "}
                    
                  </div> */}
                </div>
              </div>
              <br />
              <div>
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">
                    Email Address:&nbsp;&nbsp;
                  </span>
                  <a href="mailto:kala_projects@yahoo.co.in" className="email">
                    kala_projects@yahoo.co.in
                  </a>
                </p>
              </div>

              <div>
                <p className="justify">
                  <span class="pt-2 pt-md-0 fw-bold">
                    Office Hours:&nbsp;&nbsp;
                  </span>
                  10:00 am to 07:00 pm.
                  <br />
                  You can also visit us on site during office hours.
                </p>
              </div>
              <a
                href="https://maps.app.goo.gl/eZgcZF8PmCDNLmRj6"
                target="blank"
              >
                <button size="lg" className="btn btn-color mt-3">
                  Location on map
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Contact;
