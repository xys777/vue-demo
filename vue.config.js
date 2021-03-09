module.exports = {
//     devServer: {
//       open: false,
//     host: '0.0.0.0',
//     port: 8080,
//     https: false,
//     hotOnly: false,
//       //配置代理
//       proxy: {
//         //以'/api'开头的接口会转接到下面的target的ip
//         '/api': {
//           target: 'http://127.0.0.1:5000', // target host
//           changeOrigin: true, // needed for virtual hosted sites
//           ws: false, // proxy websockets
//           pathRewrite: {
//             //路径重写
//             '^/api': '/api/', // rewrite path
//           },
//           logLevel: 'debug'
//         },
//         '/socket.io': {
//           target: 'http://localhost:4000', // target host
//           changeOrigin: true, // needed for virtual hosted sites
//           logLevel: 'debug'
//         }
//       }
//     }
  }