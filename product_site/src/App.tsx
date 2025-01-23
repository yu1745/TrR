
function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">TrR · 三轴并联飞机杯</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://taobao.com"
                className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                rel="noreferrer noopener"
              >
                淘宝购买
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="flex-1 overflow-y-auto pt-16 snap-y snap-mandatory scroll-smooth h-screen scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 产品介绍 */}
          <section className="h-screen flex items-center justify-center snap-start">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src="/运动能力展示.gif"
                    alt="产品发货清单"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">一个线性轴，行程90mm</h2>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">两个旋转轴，旋转20度</h2>
                </div>
              </div>
            </div>
          </section>

          {/* 性能展示 */}
          <section className="h-screen flex items-center justify-center snap-start">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-8 text-center">无极变速</h2>
              <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:gap-8">
                <div className="w-full">
                  <p className="text-center text-gray-600 mb-2 text-lg md:text-xl">高速高至每秒3次往复</p>
                  <img
                    src="/上下行程最快速.gif"
                    alt="三轴无极变速高速展示"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full">
                  <p className="text-center text-gray-600 mb-2 text-lg md:text-xl">低速低至8秒1次往复</p>
                  <img
                    src="/上下行程最慢速.gif"
                    alt="三轴无极变速低速展示"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 静音设计 */}
          <section className="h-screen flex items-center justify-center snap-start">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">铝中壳长寿命舵机</h2>
              <p className="text-center text-gray-500 text-sm mb-4 -mt-6">*使用400g(常见飞机杯重量)负载测得</p>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src="/servo.webp"
                    alt="静音铝中壳舵机展示"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">噪音更小</h3>
                  <p className="text-gray-600 mb-6">降噪齿轮组设计，低速噪音低于41分贝</p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">温度更低</h3>
                  <p className="text-gray-600 mb-6">铝合金外壳散热优异，持续工作1小时温度低于45℃</p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">寿命更长</h3>
                  <p className="text-gray-600">长寿命电位器设计，使用寿命超10000小时</p>
                </div>
              </div>
            </div>
          </section>

          {/* 低噪音设计 */}
          <section className="h-screen flex items-center justify-center snap-start">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">整体噪音优化</h2>
              <p className="text-center text-gray-500 text-sm mb-4 -mt-6">*使用A加权，房间背景噪音35分贝测得(测试设备: 德力西A/C权分贝仪)</p>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <p className="text-center text-gray-600 mb-2 text-xl">高速运行噪音</p>
                  <img
                    src="/分贝仪快速.gif"
                    alt="高速运行噪音测试"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-center text-gray-600 mb-2 text-xl">低速运行噪音</p>
                  <img
                    src="/分贝仪慢速.gif"
                    alt="低速运行噪音测试"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 可编程功能 */}
          <section className="h-screen flex items-center justify-center snap-start">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center w-full">完全可编程, 自由更换内胆</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src="/更换内胆.jpg"
                    alt="可更换内胆展示"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">动作脚本编程</h3>
                  <p className="text-gray-600 mb-6">
                    编写
                    <a href="https://funscript.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">funscript</a>
                    脚本使其完全按照你的想法运动
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">视频联动</h3>
                  <p className="text-gray-600 mb-6">
                    支持VR/普通视频联动，设备随视频内容实时运动
                    <a href="https://xtp.wangyu.buzz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">(了解更多)</a>
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">海量脚本资源</h3>
                  <p className="text-gray-600">
                    <a href="https://discuss.eroscripts.com/c/scripts/5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">eroscripts论坛</a>800+页脚本视频
                  </p>
                  <p className="text-gray-600">
                    <a href="https://faptap.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">faptap</a>数百页脚本视频等
                  </p>
                  <p className="text-gray-600">
                    <a href="https://intiface.com/central/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Intiface® Central</a>支持连接多种游戏
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">更换不同内胆，每天都有新体验</h3>
                  <p className="text-gray-600">
                    小号杯架支持65mm以下直径内胆<br />
                    大号杯架支持90mm以下内胆
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 功能展示 */}
          <section className="h-screen flex flex-col justify-center snap-start">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">便捷连接</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 text-left">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h4 className="text-xl font-semibold mb-4">多模连接</h4>
                      <p className="text-gray-600">支持有线/WiFi/蓝牙三模连接
                        <a href="https://xtp.wangyu.buzz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">(了解更多)</a>
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h4 className="text-xl font-semibold mb-4">多端支持</h4>
                      <p className="text-gray-600">兼容电脑、手机、VR等多种设备
                        <a href="https://xtp.wangyu.buzz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">(了解更多)</a>
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h4 className="text-xl font-semibold mb-4">便携设计</h4>
                      <p className="text-gray-600">PD协议供电，充电头/充电宝均可，适合户内/户外场景
                        <span className="text-xs text-gray-500 block mt-1">*要求支持PD协议20V挡位</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src="/播放脚本.gif"
                    alt="便捷连接功能展示"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 穿戴/固定两用 */}
          <section className="h-screen flex flex-col items-center justify-center snap-start">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center gap-8">
                <div className="w-full max-w-2xl">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">穿戴/固定两用</h2>
                  <p className="text-gray-600 mb-4 text-center">创新设计，满足不同使用场景</p>
                  <ul className="list-disc pl-5 text-gray-600 mb-8">
                    <li>穿戴模式：解放双手，体验更沉浸</li>
                    <li>固定模式：稳定可靠，适合长时间使用</li>
                  </ul>
                </div>
                <div className="w-full max-w-2xl">
                  <img
                    src="/穿戴演示.gif"
                    alt="穿戴/固定两用展示"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 促销信息 & 联系方式 */}
          <section className="h-screen flex flex-col justify-center snap-start">
            <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
              {/* 促销信息和联系方式 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* 促销信息 */}
                <div className="flex flex-col gap-8 w-full">
                  {/* 整机套装卡片 */}
                  <div className="bg-white px-4 py-4 rounded-lg shadow text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">整机套装</h3>
                    <div className="space-y-4">
                      <p className="text-3xl font-bold text-red-600">¥299 <span className="text-gray-400 line-through">¥499</span></p>
                      <p className="text-gray-600">到手开箱即用</p>
                    </div>
                    <a className="block mt-4 px-8 py-3 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      立即购买
                    </a>
                  </div>

                  {/* 控制盒+五金包卡片 */}
                  <div className="bg-white px-4 py-4 rounded-lg shadow text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">控制盒+五金包</h3>
                    <div className="space-y-4">
                      <p className="text-3xl font-bold text-red-600">¥150 <span className="text-gray-400 line-through">¥249</span></p>
                      <p className="text-gray-600">自行打印结构件+组装</p>
                      <p className="text-gray-500 text-sm">* 适合有3d打印机和动手能力的diy玩家</p>
                    </div>
                    <a className="block mt-2 px-8 py-3 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      立即购买
                    </a>
                  </div>
                </div>

                {/* 联系方式 */}
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">了解更多</h3>
                  <p className="text-gray-600 mb-4">加群交流，获取更多信息：</p>
                  <p className="text-gray-600">
                    QQ群：
                    <a
                      href="https://qm.qq.com/q/RZFlpUsYay"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      516840073
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm mt-2">* 群内提供结构图纸，支持自行DIY</p>
                </div>
              </div>

              {/* 发货清单图片 */}
              <div className="w-full max-w-2xl">
                <img
                  src="/发货清单.jpg"
                  alt="发货清单"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
