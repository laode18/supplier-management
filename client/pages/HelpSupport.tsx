import React, { useState } from "react";
import {
  Card,
  Tabs,
  Input,
  Select,
  Collapse,
  Button,
  Row,
  Col,
  Form,
  Table,
  Tag,
  ConfigProvider,
  Space,
  Avatar,
} from "antd";
import {
  SearchOutlined,
  MessageOutlined,
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
  PlayCircleOutlined,
  DownloadOutlined,
  LinkOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import antdTheme from "../config/antdTheme";

const { Option } = Select;
const { TextArea } = Input;

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface SupportTicket {
  id: string;
  title: string;
  status: "Open" | "In Progress" | "Resolved";
  priority: "High" | "Medium" | "Low";
  createdAt: string;
  category: string;
}

export default function HelpSupport() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "How do I add a new supplier to the system?",
      answer:
        "To add a new supplier, go to the Supplier List page and click the 'New Supplier' button. Fill in the required information including company details, contact information, and upload necessary documents.",
      category: "Supplier Management",
    },
    {
      id: "2",
      question: "What is the supplier approval process?",
      answer:
        "The supplier approval process consists of several stages: Initial Review, Documentation Check, Legal Review, and Final Approval. Each stage has specific requirements and timelines.",
      category: "Approval Process",
    },
    {
      id: "3",
      question: "How can I track supplier performance?",
      answer:
        "Use the Performance Ratings section in the supplier detail page to track metrics like price competitiveness, delivery time, and quality. Historical data is available for trend analysis.",
      category: "Performance Tracking",
    },
    {
      id: "4",
      question: "What documents are required for supplier onboarding?",
      answer:
        "Required documents include: Company Registration, Tax Certificate (NPWP), Business License, Financial Statements, and relevant certifications for your industry.",
      category: "Documentation",
    },
    {
      id: "5",
      question: "How do I configure approval workflows?",
      answer:
        "Go to Configurations > Workflows to set up custom approval stages, assign reviewers, and define SLA timelines for each stage of the supplier onboarding process.",
      category: "Configuration",
    },
  ];

  const supportTickets: SupportTicket[] = [
    {
      id: "TICK-001",
      title: "Unable to upload supplier documents",
      status: "In Progress",
      priority: "High",
      createdAt: "2025-01-15",
      category: "Technical Issue",
    },
    {
      id: "TICK-002",
      title: "Request for additional approval stage",
      status: "Open",
      priority: "Medium",
      createdAt: "2025-01-14",
      category: "Feature Request",
    },
    {
      id: "TICK-003",
      title: "Performance report not generating",
      status: "Resolved",
      priority: "Low",
      createdAt: "2025-01-13",
      category: "Bug Report",
    },
  ];

  const categories = [
    "All",
    "Supplier Management",
    "Approval Process",
    "Performance Tracking",
    "Documentation",
    "Configuration",
  ];

  const filteredFAQs = faqItems.filter((faq) => {
    const matchesSearch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <WarningOutlined style={{ color: "#ff4d4f" }} />;
      case "In Progress":
        return <ClockCircleOutlined style={{ color: "#faad14" }} />;
      case "Resolved":
        return <CheckCircleOutlined style={{ color: "#52c41a" }} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "red";
      case "In Progress":
        return "orange";
      case "Resolved":
        return "green";
      default:
        return "default";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "green";
      default:
        return "default";
    }
  };

  const ticketColumns: ColumnsType<SupportTicket> = [
    {
      title: "Ticket ID",
      dataIndex: "id",
      key: "id",
      render: (text: string) => (
        <Button type="link" style={{ padding: 0, color: "#4285F4" }}>
          {text}
        </Button>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Space>
          {getStatusIcon(status)}
          <Tag color={getStatusColor(status)}>{status}</Tag>
        </Space>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority: string) => (
        <Tag color={getPriorityColor(priority)}>{priority}</Tag>
      ),
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: <MessageOutlined style={{ fontSize: "32px", color: "#4285F4" }} />,
      buttonText: "Start Chat",
      buttonType: "primary" as const,
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: <PhoneOutlined style={{ fontSize: "32px", color: "#52c41a" }} />,
      buttonText: "Call Now",
      buttonType: "default" as const,
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: <MailOutlined style={{ fontSize: "32px", color: "#faad14" }} />,
      buttonText: "Send Email",
      buttonType: "default" as const,
    },
  ];

  const resources = [
    {
      title: "User Manual",
      description: "Complete guide to using ALISA system",
      icon: <FileTextOutlined style={{ fontSize: "32px", color: "#4285F4" }} />,
      action: "Download PDF",
      actionIcon: <DownloadOutlined />,
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: (
        <PlayCircleOutlined style={{ fontSize: "32px", color: "#52c41a" }} />
      ),
      action: "Watch Videos",
      actionIcon: <LinkOutlined />,
    },
    {
      title: "Community Forum",
      description: "Connect with other users",
      icon: <MessageOutlined style={{ fontSize: "32px", color: "#722ed1" }} />,
      action: "Join Forum",
      actionIcon: <LinkOutlined />,
    },
  ];

  const tabItems = [
    {
      key: "faq",
      label: "FAQ",
      children: (
        <div>
          {/* Search and Filter */}
          <Card style={{ marginBottom: "24px" }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={16}>
                <Input
                  placeholder="Search frequently asked questions..."
                  prefix={<SearchOutlined />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  allowClear
                />
              </Col>
              <Col xs={24} md={8}>
                <Select
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  style={{ width: "100%" }}
                >
                  {categories.map((category) => (
                    <Option key={category} value={category}>
                      {category}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Card>

          {/* FAQ List */}
          <Collapse
            ghost
            items={filteredFAQs.map((faq) => ({
              key: faq.id,
              label: (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>{faq.question}</span>
                  <Tag color="blue" style={{ marginLeft: "8px" }}>
                    {faq.category}
                  </Tag>
                </div>
              ),
              children: (
                <p style={{ color: "#666", lineHeight: "1.6" }}>{faq.answer}</p>
              ),
            }))}
          />
        </div>
      ),
    },
    {
      key: "contact",
      label: "Contact Support",
      children: (
        <div>
          {/* Contact Options */}
          <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
            {contactOptions.map((option, index) => (
              <Col xs={24} md={8} key={index}>
                <Card style={{ textAlign: "center", height: "100%" }}>
                  <div style={{ marginBottom: "16px" }}>{option.icon}</div>
                  <h3 style={{ marginBottom: "8px" }}>{option.title}</h3>
                  <p style={{ color: "#666", marginBottom: "16px" }}>
                    {option.description}
                  </p>
                  <Button type={option.buttonType} block>
                    {option.buttonText}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Support Form */}
          <Card title="Submit a Support Request">
            <Form layout="vertical">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[
                      { required: true, message: "Please enter a subject" },
                    ]}
                  >
                    <Input placeholder="Brief description of your issue" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                      { required: true, message: "Please select a category" },
                    ]}
                  >
                    <Select placeholder="Select category">
                      <Option value="technical">Technical Issue</Option>
                      <Option value="feature">Feature Request</Option>
                      <Option value="bug">Bug Report</Option>
                      <Option value="general">General Question</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Priority"
                name="priority"
                rules={[{ required: true, message: "Please select priority" }]}
              >
                <Select placeholder="Select priority">
                  <Option value="low">Low</Option>
                  <Option value="medium">Medium</Option>
                  <Option value="high">High</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please enter a description" },
                ]}
              >
                <TextArea
                  rows={5}
                  placeholder="Please provide detailed information about your issue..."
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" size="large">
                  Submit Request
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      ),
    },
    {
      key: "tickets",
      label: "My Tickets",
      children: (
        <Card title="Your Support Tickets">
          <Table
            columns={ticketColumns}
            dataSource={supportTickets}
            rowKey="id"
            pagination={false}
          />
        </Card>
      ),
    },
    {
      key: "resources",
      label: "Resources",
      children: (
        <div>
          {/* Quick Links */}
          <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
            {resources.map((resource, index) => (
              <Col xs={24} md={8} key={index}>
                <Card style={{ textAlign: "center", height: "100%" }}>
                  <div style={{ marginBottom: "16px" }}>{resource.icon}</div>
                  <h3 style={{ marginBottom: "8px" }}>{resource.title}</h3>
                  <p style={{ color: "#666", marginBottom: "16px" }}>
                    {resource.description}
                  </p>
                  <Button type="link" icon={resource.actionIcon}>
                    {resource.action}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Release Notes */}
          <Card title="Latest Updates">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "16px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <Avatar
                  size="small"
                  style={{ backgroundColor: "#4285F4", flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h4 style={{ margin: 0, fontWeight: "500" }}>
                      Version 2.1.0 - Enhanced Approval Workflow
                    </h4>
                    <span style={{ color: "#666", fontSize: "12px" }}>
                      Jan 15, 2025
                    </span>
                  </div>
                  <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                    New features include bulk supplier actions, improved
                    notification system, and enhanced reporting capabilities.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "16px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                }}
              >
                <Avatar
                  size="small"
                  style={{ backgroundColor: "#52c41a", flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <h4 style={{ margin: 0, fontWeight: "500" }}>
                      Version 2.0.5 - Performance Improvements
                    </h4>
                    <span style={{ color: "#666", fontSize: "12px" }}>
                      Jan 10, 2025
                    </span>
                  </div>
                  <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
                    Faster loading times, bug fixes, and improved mobile
                    responsiveness.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider theme={antdTheme}>
      <div
        style={{
          padding: "24px",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {/* Page Header */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
            Help & Support
          </h1>
          <p style={{ color: "#666", fontSize: "16px", margin: "8px 0 0 0" }}>
            We're here to help you get the most out of ALISA
          </p>
        </div>

        {/* Tabs */}
        <Card>
          <Tabs defaultActiveKey="faq" items={tabItems} />
        </Card>
      </div>
    </ConfigProvider>
  );
}
