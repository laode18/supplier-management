import React, { useState } from "react";
import {
  Card,
  Table,
  Button,
  Input,
  Row,
  Col,
  Badge,
  ConfigProvider,
  Space,
} from "antd";
import {
  SearchOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  AuditOutlined,
  StopOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import antdTheme from "../config/antdTheme";

interface ProcessItem {
  id: string;
  processName: string;
  customerId: string;
  customerName: string;
  stageFlow: string;
  status: string;
}

export default function ReviewApprovals() {
  const [searchTerm, setSearchTerm] = useState("");

  const processItems: ProcessItem[] = [
    {
      id: "1",
      processName: "Supplier Creation",
      customerId: "1001",
      customerName: "PT Suka Suka",
      stageFlow: "01-02-03-05",
      status: "02: Procurement",
    },
    {
      id: "2",
      processName: "Supplier Assessment",
      customerId: "1001",
      customerName: "PT Suka Suka",
      stageFlow: "06/04/02",
      status: "2 of 3",
    },
    {
      id: "3",
      processName: "Block / Unblock Supplier",
      customerId: "1002",
      customerName: "PT Angin Ribut",
      stageFlow: "01-04-06",
      status: "04: Accounting",
    },
  ];

  const processTypes = [
    {
      title: "Supplier Creation",
      icon: <UserAddOutlined style={{ fontSize: "24px", color: "#4285F4" }} />,
      count: 1,
      description: "New supplier registration requests",
    },
    {
      title: "Supplier Assessment",
      icon: <AuditOutlined style={{ fontSize: "24px", color: "#52c41a" }} />,
      count: 1,
      description: "Supplier evaluation and assessment",
    },
    {
      title: "Block / Unblock Supplier",
      icon: <StopOutlined style={{ fontSize: "24px", color: "#ff4d4f" }} />,
      count: 1,
      description: "Supplier blocking/unblocking requests",
    },
  ];

  const columns: ColumnsType<ProcessItem> = [
    {
      title: "Process Name",
      dataIndex: "processName",
      key: "processName",
      render: (text: string) => (
        <Button type="link" style={{ padding: 0, fontWeight: "500" }}>
          {text}
        </Button>
      ),
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      render: (text: string) => <strong>{text}</strong>,
    },
    {
      title: "Stage / Flow",
      dataIndex: "stageFlow",
      key: "stageFlow",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span style={{ color: "#4285F4", fontWeight: "500" }}>{status}</span>
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
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
            Review & Approvals
          </h2>
        </div>

        {/* Process Type Cards */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          {processTypes.map((process, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card hoverable style={{ textAlign: "center" }}>
                <div style={{ marginBottom: "16px" }}>{process.icon}</div>
                <h3 style={{ marginBottom: "8px", fontSize: "16px" }}>
                  {process.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    marginBottom: "16px",
                  }}
                >
                  {process.description}
                </p>
                <Badge
                  count={process.count}
                  style={{ backgroundColor: "#4285F4" }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Search and Filter Bar */}
        <Card style={{ marginBottom: "24px" }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Input
                placeholder="Search Supplier"
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                allowClear
              />
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <Button icon={<AppstoreOutlined />} />
                <Button icon={<UnorderedListOutlined />} type="primary" />
              </div>
            </Col>
          </Row>
        </Card>

        {/* Process Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={processItems}
            rowKey="id"
            pagination={{
              total: processItems.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }}
            onRow={(record) => ({
              onClick: () =>
                console.log("Process clicked:", record.processName),
              style: { cursor: "pointer" },
            })}
          />
        </Card>
      </div>
    </ConfigProvider>
  );
}
