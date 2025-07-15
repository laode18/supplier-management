import type { ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    // Primary colors to match ALISA design
    colorPrimary: "#4285F4", // ALISA blue
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1890ff",

    // Typography
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,

    // Layout
    borderRadius: 6,
    colorBgContainer: "#ffffff",
    colorBgLayout: "#f5f5f5",

    // Components
    controlHeight: 32,
    controlHeightSM: 24,
    controlHeightLG: 40,

    // Border
    lineWidth: 1,
    lineType: "solid",
    colorBorder: "#d9d9d9",
    colorBorderSecondary: "#f0f0f0",

    // Shadow
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    boxShadowSecondary: "0 1px 4px rgba(0, 0, 0, 0.12)",

    // Motion
    motionDurationFast: "0.1s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s",
  },
  components: {
    // Button customization
    Button: {
      primaryShadow: "0 2px 4px rgba(66, 133, 244, 0.3)",
      algorithm: true,
    },

    // Table customization
    Table: {
      headerBg: "#fafafa",
      headerColor: "#595959",
      borderColor: "#f0f0f0",
      rowHoverBg: "#f5f5f5",
    },

    // Card customization
    Card: {
      headerBg: "transparent",
      headerHeight: 56,
      headerHeightSM: 48,
    },

    // Input customization
    Input: {
      colorBorder: "#d9d9d9",
      borderRadius: 6,
    },

    // Tag customization
    Tag: {
      borderRadiusSM: 4,
    },

    // Modal customization
    Modal: {
      borderRadiusLG: 8,
      headerBg: "#ffffff",
    },

    // Menu customization (for potential future use)
    Menu: {
      itemBg: "transparent",
      itemHoverBg: "#f0f2ff",
      itemSelectedBg: "#e6f4ff",
      itemSelectedColor: "#4285F4",
    },
  },
  algorithm: [], // Use default algorithm
};

export default antdTheme;
