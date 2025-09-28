# Koishi Plugin Stream Notify

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A Koishi framework-based live streaming notification plugin that supports multi-platform live streaming status monitoring and notification features.

## Features

- 🎯 **Multi-platform Support**: Monitor multiple live streaming platforms
- 🔔 **Real-time Notifications**: Real-time push notifications for live start/end events
- 📊 **Subscription Management**: Support channel subscription and unsubscribe functionality
- 🗄️ **Data Persistence**: Store subscriptions and notification configurations using database
- ⚡ **Event-driven**: Efficient architecture based on Koishi event system

## Project Structure

```
koishi-plugin-stream-notify/
├── packages/
│   └── core/                 # Core plugin package
├── libs/
│   ├── database/            # Database models and configuration
│   ├── event/               # Event type definitions
│   └── export/              # Module exports
└── ...
```

## Installation

### Using pnpm (Recommended)

```bash
pnpm install
```

### Using npm

```bash
npm install
```

### Using yarn

```bash
yarn install
```

## Development

### Start Development Server

```bash
pnpm dev
```

### Project Setup

```bash
pnpm setup
```

## TODO

- [ ] Complete plugin configuration options
- [ ] Implement live streaming status monitoring functionality
- [ ] Add support for more live streaming platforms
- [ ] Improve subscription management system
- [ ] Add notification template configuration
- [ ] Implement scheduled task functionality
- [ ] Add data statistics functionality
- [ ] Improve error handling mechanism
- [ ] Complete usage documentation
- [ ] Complete event system documentation
- [ ] Complete database table structure documentation
- [ ] Complete development guide

## Dependencies

### Core Dependencies

- [Koishi](https://koishi.chat/) - Chatbot framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

### Development Dependencies

- [esbuild](https://esbuild.github.io/) - Fast build tool
- [yakumo](https://github.com/koishijs/yakumo) - Project build tool

## License

This project is licensed under the [Apache-2.0](LICENSE) license.

## Contributing

Issues and Pull Requests are welcome to help improve this project.

## Changelog

### v1.0.0

- Initial release
- Basic live streaming notification functionality
- Multi-platform monitoring architecture implementation
- Database persistence support added

## Support

If you encounter any issues while using this plugin, please:

1. Check the [Koishi official documentation](https://koishi.chat/)
2. Submit an [Issue](https://github.com/your-repo/koishi-plugin-stream-notify/issues)
3. Join the [Koishi community](https://github.com/koishijs/koishi/discussions)

---

**Note**: This is a plugin under development, and the API may change in future versions.
