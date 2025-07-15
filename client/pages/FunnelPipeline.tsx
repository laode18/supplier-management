import React, { useState } from "react";
import {
  Card,
  Table,
  Button,
  Space,
  Input,
  Select,
  Tag,
  Progress,
  Row,
  Col,
  Statistic,
  ConfigProvider,
  Tooltip,
} from "antd";
import {
  PlusOutlined,
  SearchOutlined,
  DownloadOutlined,
  FilterOutlined,
  MoreOutlined,
  TeamOutlined,
  RiseOutlined,
  WarningOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import antdTheme from "../config/antdTheme";

const { Option } = Select;

interface FunnelStage {
  id: string;
  name: string;
  count: number;
  percentage: number;
  color: string;
}

interface FunnelItem {
  id: string;
  supplierName: string;
  currentStage: string;
  daysInStage: number;
  priority: "High" | "Medium" | "Low";
  assignedTo: string;
  nextAction: string;
  progress: number;
}

export default function FunnelPipeline() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("All");

  const funnelStages: FunnelStage[] = [
    {
      id: "1",
      name: "Lead Generation",
      count: 45,
      percentage: 100,
      color: "#1890ff",
    },
    {
      id: "2",
      name: "Initial Assessment",
      count: 32,
      percentage: 71,
      color: "#52c41a",
    },
    {
      id: "3",
      name: "Documentation Review",
      count: 24,
      percentage: 53,
      color: "#faad14",
    },
    {
      id: "4",
      name: "Legal Review",
      count: 18,
      percentage: 40,
      color: "#fa8c16",
    },
    {
      id: "5",
      name: "Final Approval",
      count: 12,
      percentage: 27,
      color: "#722ed1",
    },
    {
      id: "6",
      name: "Onboarded",
      count: 8,
      percentage: 18,
      color: "#389e0d",
    },
  ];

  const funnelItems: FunnelItem[] = [
    {
      id: "1",
      supplierName: "PT Digital Solutions",
      currentStage: "Initial Assessment",
      daysInStage: 3,
      priority: "High",
      assignedTo: "John Smith",
      nextAction: "Schedule assessment call",
      progress: 25,
    },
    {
      id: "2",
      supplierName: "PT Tech Innovation",
      currentStage: "Documentation Review",
      daysInStage: 7,
      priority: "Medium",
      assignedTo: "Sarah Wilson",
      nextAction: "Review compliance documents",
      progress: 45,
    },
    {
      id: "3",
      supplierName: "PT Global Services",
      currentStage: "Legal Review",
      daysInStage: 12,
      priority: "High",
      assignedTo: "Mike Johnson",
      nextAction: "Legal team review",
      progress: 65,
    },
    {
      id: "4",
      supplierName: "PT Smart Systems",
      currentStage: "Final Approval",
      daysInStage: 2,
      priority: "Low",
      assignedTo: "Lisa Brown",
      nextAction: "Management approval",
      progress: 85,
    },
    {
      id: "5",
      supplierName: "PT Innovation Hub",
      currentStage: "Lead Generation",
      daysInStage: 1,
      priority: "Medium",
      assignedTo: "Alex Chen",
      nextAction: "Initial contact",
      progress: 10,
    },
  ];

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

  const filteredItems = funnelItems.filter((item) => {
    const matchesSearch = item.supplierName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStage =
      selectedStage === "All" || item.currentStage === selectedStage;
    return matchesSearch && matchesStage;
  });

  const columns: ColumnsType<FunnelItem> = [
    {
      title: "Supplier Name",
      dataIndex: "supplierName",
      key: "supplierName",
      render: (text: string) => <strong>{text}</strong>,
    },
    {
      title: "Current Stage",
      dataIndex: "currentStage",
      key: "currentStage",
    },
    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progress: number) => (
        <Progress percent={progress} size="small" />
      ),
    },
    {
      title: "Days in Stage",
      dataIndex: "daysInStage",
      key: "daysInStage",
      render: (days: number) => (
        <Space>
          <ClockCircleOutlined />
          {days} days
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
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
      responsive: ["lg"],
    },
    {
      title: "Next Action",
      dataIndex: "nextAction",
      key: "nextAction",
      responsive: ["xl"],
    },
    {
      title: "Actions",
      key: "actions",
      width: 80,
      render: () => (
        <Tooltip title="More actions">
          <Button type="text" icon={<MoreOutlined />} size="small" />
        </Tooltip>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "16px",
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
                Pipeline Management
              </h1>
              <p style={{ color: "#666", margin: "4px 0 0 0" }}>
                Manage and track supplier onboarding pipeline
              </p>
            </div>
            <Space>
              <Button type="primary" icon={<PlusOutlined />} size="large">
                Add Supplier
              </Button>
              <Button icon={<DownloadOutlined />} size="large">
                Export
              </Button>
            </Space>
          </div>
        </div>

        {/* Summary Cards */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Total in Pipeline"
                value={139}
                prefix={<TeamOutlined style={{ color: "#4285F4" }} />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="This Week"
                value={28}
                prefix={<RiseOutlined style={{ color: "#52c41a" }} />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="At Risk"
                value={5}
                prefix={<WarningOutlined style={{ color: "#ff4d4f" }} />}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Avg. Cycle Time"
                value="18d"
                prefix={<ClockCircleOutlined style={{ color: "#faad14" }} />}
              />
            </Card>
          </Col>
        </Row>

        {/* Pipeline Visualization */}
        <Card
          title="Supplier Pipeline Overview"
          style={{ marginBottom: "24px" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {funnelStages.map((stage, index) => (
              <div
                key={stage.id}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontWeight: "500" }}>{stage.name}</span>
                    <span style={{ color: "#666" }}>
                      {stage.count} suppliers ({stage.percentage}%)
                    </span>
                  </div>
                  <Progress
                    percent={stage.percentage}
                    strokeColor={stage.color}
                    showInfo={false}
                  />
                </div>
                {index < funnelStages.length - 1 && (
                  <ArrowRightOutlined style={{ color: "#d9d9d9" }} />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Pipeline Items */}
        <Card
          title="Pipeline Items"
          extra={
            <Space>
              <Input
                placeholder="Search suppliers..."
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: 200 }}
                allowClear
              />
              <Select
                value={selectedStage}
                onChange={setSelectedStage}
                style={{ width: 150 }}
              >
                <Option value="All">All Stages</Option>
                {funnelStages.map((stage) => (
                  <Option key={stage.id} value={stage.name}>
                    {stage.name}
                  </Option>
                ))}
              </Select>
              <Button icon={<FilterOutlined />} />
              <Button icon={<DownloadOutlined />} />
            </Space>
          }
        >
          <Table
            columns={columns}
            dataSource={filteredItems}
            rowKey="id"
            pagination={{
              total: filteredItems.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }}
            scroll={{ x: 1000 }}
          />
        </Card>
      </div>
    </ConfigProvider>
  );
}
