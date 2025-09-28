# Koishi Plugin Stream Notify

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

一个基于 Koishi 框架的直播通知插件，支持多平台直播状态监控和通知功能。

## 功能特性

- 🎯 **多平台支持**: 支持多个直播平台的监控
- 🔔 **实时通知**: 直播开始/结束实时推送通知
- 📊 **订阅管理**: 支持频道订阅和取消订阅功能
- 🗄️ **数据持久化**: 使用数据库存储订阅和通知配置
- ⚡ **事件驱动**: 基于 Koishi 事件系统的高效架构

## 项目结构

```
koishi-plugin-stream-notify/
├── packages/
│   └── core/                 # 核心插件包
├── libs/
│   ├── database/            # 数据库模型和配置
│   ├── event/               # 事件类型定义
│   └── export/              # 模块导出
└── ...
```

## 安装

### 使用 pnpm (推荐)

```bash
pnpm install
```

### 使用 npm

```bash
npm install
```

### 使用 yarn

```bash
yarn install
```

## 开发

### 启动开发服务器

```bash
pnpm dev
```

### 项目设置

```bash
pnpm setup
```

## TODO

- [ ] 完善插件配置选项
- [ ] 实现直播状态监控功能
- [ ] 添加更多直播平台支持
- [ ] 完善订阅管理系统
- [ ] 添加通知模板配置
- [ ] 实现定时任务功能
- [ ] 添加数据统计功能
- [ ] 完善错误处理机制
- [ ] 完善使用方法文档
- [ ] 完善事件系统文档
- [ ] 完善数据库表结构文档
- [ ] 完善开发指南

## 依赖项

### 核心依赖

- [Koishi](https://koishi.chat/) - 聊天机器人框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript

### 开发依赖

- [esbuild](https://esbuild.github.io/) - 快速构建工具
- [yakumo](https://github.com/koishijs/yakumo) - 项目构建工具

## 许可证

本项目采用 [Apache-2.0](LICENSE) 许可证。

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 更新日志

### v1.0.0

- 初始版本发布
- 支持基本的直播通知功能
- 实现多平台监控架构
- 添加数据库持久化支持

## 支持

如果你在使用过程中遇到问题，请：

1. 查看 [Koishi 官方文档](https://koishi.chat/)
2. 提交 [Issue](https://github.com/your-repo/koishi-plugin-stream-notify/issues)
3. 加入 [Koishi 社区](https://github.com/koishijs/koishi/discussions)

---

**注意**: 这是一个开发中的插件，API 可能会在后续版本中发生变化。
