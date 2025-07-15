import React from "react";
import {
  Card,
  Row,
  Col,
  Statistic,
  Avatar,
  List,
  Tag,
  Button,
  Space,
  ConfigProvider,
} from "antd";
import {
  UserOutlined,
  TeamOutlined,
  DollarOutlined,
  StopOutlined,
  RiseOutlined,
  FallOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  BankOutlined,
  FileTextOutlined,
  WarningOutlined,
  UserAddOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import antdTheme from "../config/antdTheme";

export default function Dashboard() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const recentSuppliers = [
    {
      id: "1",
      name: "PT Setroom Indonesia",
      status: "Active",
      addedDate: "2025-01-15",
    },
    {
      id: "2",
      name: "PT Suka Suka",
      status: "In Progress",
      addedDate: "2025-01-14",
    },
    {
      id: "3",
      name: "PT Angin Ribut",
      status: "Blocked",
      addedDate: "2025-01-13",
    },
  ];

  const pendingApprovals = [
    {
      id: "1",
      type: "Supplier Creation",
      supplier: "PT Digital Indonesia",
      requestedBy: "User Sales",
      daysWaiting: 2,
    },
    {
      id: "2",
      type: "Supplier Assessment",
      supplier: "PT Tech Solutions",
      requestedBy: "User Marketing",
      daysWaiting: 1,
    },
    {
      id: "3",
      type: "Block/Unblock",
      supplier: "PT Legacy Corp",
      requestedBy: "User Legal",
      daysWaiting: 5,
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
        {/* Welcome Header */}
        <Card
          style={{
            background: "linear-gradient(135deg, #4285F4 0%, #1d4ed8 100%)",
            marginBottom: "24px",
            border: "none",
          }}
        >
          <div style={{ color: "white" }}>
            <h1
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Welcome to ALISA Dashboard
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "4px" }}>
              {currentDate}
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}>
              Manage your supplier relationships efficiently
            </p>
          </div>
        </Card>

        {/* Key Metrics Grid */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Total Suppliers"
                value={1869}
                prefix={<TeamOutlined style={{ color: "#4285F4" }} />}
                suffix={
                  <span style={{ fontSize: "14px", color: "#52c41a" }}>
                    <RiseOutlined /> 8%
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Active Suppliers"
                value={1807}
                prefix={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
                suffix={
                  <span style={{ fontSize: "14px", color: "#52c41a" }}>
                    <RiseOutlined /> 5%
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Pending Approvals"
                value={12}
                prefix={<ClockCircleOutlined style={{ color: "#faad14" }} />}
                suffix={
                  <span style={{ fontSize: "14px", color: "#faad14" }}>
                    3 urgent
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Avg Cost per Supplier"
                value="Rp 320M"
                prefix={<DollarOutlined style={{ color: "#ff4d4f" }} />}
                suffix={
                  <span style={{ fontSize: "14px", color: "#ff4d4f" }}>
                    <FallOutlined /> 1%
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>

        {/* Content Grid */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} lg={12}>
            <Card
              title="Recent Suppliers"
              extra={
                <Button type="link" icon={<ArrowRightOutlined />}>
                  View All
                </Button>
              }
            >
              <List
                itemLayout="horizontal"
                dataSource={recentSuppliers}
                renderItem={(supplier) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          icon={<BankOutlined />}
                          style={{ backgroundColor: "#f0f2ff" }}
                        />
                      }
                      title={supplier.name}
                      description={`Added ${supplier.addedDate}`}
                    />
                    <Tag
                      color={
                        supplier.status === "Active"
                          ? "green"
                          : supplier.status === "In Progress"
                            ? "orange"
                            : "red"
                      }
                    >
                      {supplier.status}
                    </Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              title="Pending Approvals"
              extra={
                <Button type="link" icon={<ArrowRightOutlined />}>
                  View All
                </Button>
              }
            >
              <List
                itemLayout="horizontal"
                dataSource={pendingApprovals}
                renderItem={(approval) => (
                  <List.Item
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      console.log("Navigate to approval:", approval.id)
                    }
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          icon={
                            approval.daysWaiting > 3 ? (
                              <WarningOutlined />
                            ) : (
                              <FileTextOutlined />
                            )
                          }
                          style={{
                            backgroundColor:
                              approval.daysWaiting > 3 ? "#fff2f0" : "#fff7e6",
                            color:
                              approval.daysWaiting > 3 ? "#ff4d4f" : "#faad14",
                          }}
                        />
                      }
                      title={approval.type}
                      description={`${approval.supplier} • By ${approval.requestedBy}`}
                    />
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          color:
                            approval.daysWaiting > 3 ? "#ff4d4f" : "#faad14",
                          fontWeight: "bold",
                        }}
                      >
                        {approval.daysWaiting} days
                      </div>
                      <div style={{ color: "#999", fontSize: "12px" }}>
                        waiting
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Card title="Quick Actions">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Button
                type="default"
                icon={<UserAddOutlined />}
                size="large"
                block
              >
                Add New Supplier
              </Button>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Button
                type="default"
                icon={<FileTextOutlined />}
                size="large"
                block
              >
                Review Approvals
              </Button>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Button type="default" icon={<BankOutlined />} size="large" block>
                Supplier Reports
              </Button>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Button type="default" icon={<TeamOutlined />} size="large" block>
                Manage Users
              </Button>
            </Col>
          </Row>
        </Card>
      </div>
    </ConfigProvider>
  );
}
