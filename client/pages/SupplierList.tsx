import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Space,
  Input,
  Select,
  Tag,
  Avatar,
  Row,
  Col,
  Statistic,
  ConfigProvider,
  Tooltip,
} from "antd";
import {
  UserAddOutlined,
  SearchOutlined,
  DownloadOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  TeamOutlined,
  DollarOutlined,
  StopOutlined,
  BankOutlined,
  RiseOutlined,
  FallOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import NewSupplierModal from "../components/NewSupplierModal";
import antdTheme from "../config/antdTheme";

const { Option } = Select;

interface Supplier {
  id: string;
  name: string;
  shortCode: string;
  code: string;
  address: string;
  contact: string;
  status: "Active" | "In Progress" | "Blocked";
}

const suppliers: Supplier[] = [
  {
    id: "1",
    name: "PT Setroom Indonesia",
    shortCode: "STRM",
    code: "61000012",
    address: "Jakarta, Indonesia",
    contact: "Albert Einstein",
    status: "Active",
  },
  {
    id: "2",
    name: "PT Suka Suka",
    shortCode: "SKSK",
    code: "41000013",
    address: "Bandung, Indonesia",
    contact: "James Lee",
    status: "In Progress",
  },
  {
    id: "3",
    name: "PT Angin Ribut",
    shortCode: "ARIB",
    code: "41000014",
    address: "Denpasar, Indonesia",
    contact: "Maria Chen",
    status: "Blocked",
  },
];

export default function SupplierList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Active");
  const [showNewSupplierModal, setShowNewSupplierModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "green";
      case "In Progress":
        return "orange";
      case "Blocked":
        return "red";
      default:
        return "default";
    }
  };

  const columns: ColumnsType<Supplier> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 60,
      render: (_, __, index) => index + 1,
    },
    {
      title: "Supplier Info",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: Supplier) => (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Avatar icon={<BankOutlined />} size="small" />
            <div>
              <div style={{ fontWeight: "bold" }}>{text}</div>
              <div style={{ fontSize: "12px", color: "#4285F4" }}>
                {record.shortCode} {record.code}{" "}
                <span style={{ color: "#999" }}>
                  [{record.name.split(" ")[1]}]
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      responsive: ["lg"],
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
      responsive: ["lg"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      width: 80,
      render: (_, record: Supplier) => (
        <Button
          type="link"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/supplier/${record.id}`);
          }}
        >
          View
        </Button>
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
        {/* New Supplier Modal */}
        <NewSupplierModal
          isOpen={showNewSupplierModal}
          onClose={() => setShowNewSupplierModal(false)}
        />

        {/* Page Header */}
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
              Supplier List
            </h2>
            <Button
              type="primary"
              icon={<UserAddOutlined />}
              size="large"
              onClick={() => setShowNewSupplierModal(true)}
            >
              New Supplier
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Total Supplier"
                value={1869}
                prefix={<TeamOutlined style={{ color: "#4285F4" }} />}
                suffix={
                  <span style={{ fontSize: "12px", color: "#52c41a" }}>
                    <RiseOutlined /> 8%
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="New Supplier"
                value={27}
                prefix={<UserAddOutlined style={{ color: "#52c41a" }} />}
                suffix={
                  <span style={{ fontSize: "12px", color: "#52c41a" }}>
                    <RiseOutlined /> 1%
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Avg Cost per Supplier"
                value="Rp 320.3M"
                prefix={<DollarOutlined style={{ color: "#faad14" }} />}
                suffix={
                  <span style={{ fontSize: "12px", color: "#ff4d4f" }}>
                    <FallOutlined /> 1%
                  </span>
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Blocked Supplier"
                value={31}
                prefix={<StopOutlined style={{ color: "#ff4d4f" }} />}
                suffix={
                  <span style={{ fontSize: "12px", color: "#52c41a" }}>
                    <FallOutlined /> 4%
                  </span>
                }
              />
            </Card>
          </Col>
        </Row>

        {/* Search and Filter Bar */}
        <Card style={{ marginBottom: "24px" }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={8}>
              <Input
                placeholder="Search Customer"
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                allowClear
              />
            </Col>
            <Col xs={24} md={4}>
              <Select
                value={statusFilter}
                onChange={setStatusFilter}
                style={{ width: "100%" }}
              >
                <Option value="Active">Active</Option>
                <Option value="In Progress">In Progress</Option>
                <Option value="Blocked">Blocked</Option>
                <Option value="All">All</Option>
              </Select>
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <Button icon={<DownloadOutlined />}>Export</Button>
                <Tooltip title="Grid View">
                  <Button icon={<AppstoreOutlined />} />
                </Tooltip>
                <Tooltip title="List View">
                  <Button icon={<UnorderedListOutlined />} type="primary" />
                </Tooltip>
              </div>
            </Col>
          </Row>
        </Card>

        {/* Suppliers Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={suppliers}
            rowKey="id"
            pagination={{
              total: suppliers.length,
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
            }}
            onRow={(record) => ({
              onClick: () => navigate(`/supplier/${record.id}`),
              style: { cursor: "pointer" },
            })}
            scroll={{ x: 800 }}
          />
        </Card>
      </div>
    </ConfigProvider>
  );
}
