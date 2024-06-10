import React from "react";
import { Button, Card, Form, Input } from "antd";

export const Formss = () => {
  const onFinish = (formData) => {
    console.log(formData);
  };
  return (
    <section className="contactusss">
      <Card
        className="form-card-width glass"
        style={{
          backgroundColor: "white",
          borderRadius: 8,
        }}
      >
        <h5 className="text-center mb-4 brown-color fs-2">Inquiry Form</h5>
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
            <Input placeholder="Your Name" className="p-2" onc />
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
            <Input placeholder="Your Email" className="p-2" />
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
            <Input placeholder="Your Mobile" className="p-2" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Please Enter valid Message",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Your Message"
              rows={5}
              style={{
                resize: "none",
              }}
              className="p-2"
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              className="btn btn-color"
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
};

export default Formss;
