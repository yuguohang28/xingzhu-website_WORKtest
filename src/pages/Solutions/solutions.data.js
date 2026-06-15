// === 星筑科技 - Solutions Page Data ===

export const heroFeatures = [
  {
    icon: 'Search',
    title: '智能寻源匹配',
    desc: '覆盖300+建材品类，自动匹配优质供应商资源',
  },
  {
    icon: 'BarChart3',
    title: '价格趋势预测',
    desc: '基于市场数据的价格走势模型，精准把握采购时机',
  },
  {
    icon: 'ShieldCheck',
    title: '全链路追溯',
    desc: '从原材料到工地交付，完整数字化追溯链条',
  },
  {
    icon: 'Route',
    title: '物流路径优化',
    desc: '实时路况与运力数据驱动，动态规划配送路线',
  },
]

export const solutionCategories = [
  {
    id: 'procurement',
    label: '智能采购',
    description: 'AI驱动的采购决策引擎，覆盖寻源、比价、签约全流程智能化',
    icon: 'Search',
    features: [
      {
        isHero: true,
        icon: 'Search',
        title: 'AI智能询价比价',
        description: '基于NLP的采购需求解析，从5000+供应商库中自动匹配最优报价方案',
        highlights: [
          'NLP自动解析PDF/Excel询价单，提取关键参数',
          '覆盖水泥、钢材、砂石等300+建材品类',
          '实时多轮比价，平均降低采购成本8%-15%',
          '比价结果自动生成对比报表，辅助决策',
        ],
      },
      {
        icon: 'TrendingUp',
        title: '需求预测采购',
        description:
          '基于历史消耗数据与项目施工进度，利用时序预测模型推算未来材料需求，提前锁定采购窗口',
      },
      {
        icon: 'UserCheck',
        title: '供应商智能评估',
        description:
          '从质量合格率、交付准时率、价格稳定性等多维度建立动态评分体系，持续优化供应商结构',
      },
      {
        icon: 'FileText',
        title: '合同智能管理',
        description:
          'AI自动提取合同关键条款与履约节点，到期续签与异常变更主动预警推送',
      },
    ],
  },
  {
    id: 'supply-chain',
    label: '供应链优化',
    description: '全链路协同优化，打通采购、物流、库存各环节的信息壁垒',
    icon: 'RefreshCw',
    features: [
      {
        isHero: true,
        icon: 'Route',
        title: '物流路径智能规划',
        description:
          '结合实时交通路况、车辆载重与工地时间窗口，动态规划最优配送路线与调度方案',
        highlights: [
          '实时接入城市交通数据，智能规避拥堵路段',
          '多目标优化算法平衡运输成本与配送时效',
          '自动匹配回程货源，有效降低空驶率',
        ],
      },
      {
        icon: 'Layers',
        title: '库存动态调配',
        description:
          '基于项目消耗速率与在途库存数据，动态计算安全库存阈值并触发自动补货',
      },
      {
        icon: 'Globe',
        title: '多方协同平台',
        description:
          '采购方、供应商、物流商、工地四方实时在线协作，任务状态全程透明可追踪',
      },
      {
        icon: 'AlertTriangle',
        title: '异常预警与处置',
        description:
          '延迟发货、交通堵塞、质量异常等场景自动识别，实时推送预警并推荐替代方案',
      },
    ],
  },
  {
    id: 'traceability',
    label: '质量追溯',
    description: '全生命周期质量数字化管理，从源头到工地全程可追溯',
    icon: 'ShieldCheck',
    features: [
      {
        isHero: true,
        icon: 'Eye',
        title: '全生命周期追溯',
        description:
          '从原材料出厂检验到工地验收，全链路数字档案记录每一步质量数据，扫码即查',
        highlights: [
          '一物一码唯一身份标识，扫码即查完整溯源信息',
          '检验数据自动上链存证，防篡改可审计',
          '问题批次一键定位涉及范围，精准追溯与召回',
        ],
      },
      {
        icon: 'Camera',
        title: 'AI视觉质检',
        description:
          '基于计算机视觉的自动化外观检测，快速识别裂纹、色差、尺寸偏差等表面缺陷',
      },
      {
        icon: 'FileSearch',
        title: '证书与报告管理',
        description:
          '质检报告、合格证书的电子化归档与智能核验，临期自动预警提醒',
      },
      {
        icon: 'CheckCircle',
        title: '质量问题闭环',
        description:
          '发现问题自动生成整改工单，追踪处理进度直至关闭，形成管理闭环',
      },
    ],
  },
  {
    id: 'analytics',
    label: '数据洞察',
    description: '多维数据驱动的决策支持，让供应链管理可量化、可预测',
    icon: 'BarChart3',
    features: [
      {
        isHero: true,
        icon: 'LineChart',
        title: '价格趋势分析',
        description:
          '基于建材价格指数、市场供需与历史成交价的多因素趋势预测模型，辅助采购时机决策',
        highlights: [
          '覆盖20+品类价格指数，实时更新市场行情',
          '支持周/月/季度多时间维度趋势分析',
          '价格异动自动预警，辅助精准把握采购时机',
        ],
      },
      {
        icon: 'PieChart',
        title: '供应商画像分析',
        description:
          '整合交易、履约、评价等多源数据，全方位输出供应商综合能力评估报告',
      },
      {
        icon: 'LayoutDashboard',
        title: '运营效率看板',
        description:
          '采购周期、库存周转率、物流准时率等核心KPI可视化监控，异常波动实时下钻',
      },
      {
        icon: 'AlertTriangle',
        title: '风险预警中心',
        description:
          '供应商经营异常、市场价格异动、物流延误等风险自动识别与分级推送',
      },
    ],
  },
]

export const architectureLayers = [
  {
    id: 'data',
    label: '数据层',
    description: '多源数据采集与融合',
    labelColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    itemColor: 'bg-blue-500/10 border-blue-500/20 text-slate-300',
    items: [
      'IoT设备实时数据采集',
      'ERP系统对接',
      '建材市场价格指数',
      '历史交易与供应商档案',
    ],
  },
  {
    id: 'ai',
    label: 'AI引擎层',
    description: '核心算法与模型',
    labelColor: 'text-accent-400 bg-accent-500/10 border-accent-500/20',
    itemColor: 'bg-accent-500/10 border-accent-500/20 text-slate-300',
    items: [
      'NLP采购需求解析',
      'LSTM时序预测模型',
      '计算机视觉质检',
      '供应链知识图谱',
    ],
  },
  {
    id: 'app',
    label: '应用层',
    description: '业务功能模块',
    labelColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    itemColor: 'bg-emerald-500/10 border-emerald-500/20 text-slate-300',
    items: [
      '智能采购管理平台',
      '供应链协同系统',
      '质量追溯控制台',
      '数据决策看板',
    ],
  },
  {
    id: 'ui',
    label: '用户交互层',
    description: '多终端访问入口',
    labelColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    itemColor: 'bg-purple-500/10 border-purple-500/20 text-slate-300',
    items: [
      'Web端管理后台',
      '移动端APP',
      '开放API平台',
      '大屏数据可视化',
    ],
  },
]

export const comparisonData = {
  sectionTitle: '为什么选择星筑科技',
  sectionDesc: '传统建材供应链管理模式与AI驱动解决方案的对比',
  before: {
    title: '传统供应链模式',
    items: [
      '人工电话询价，单次采购耗时3-5天',
      '价格信息滞后，常在价格高位时采购',
      '质检报告纸质存档，追溯需翻阅大量档案',
      '采购、物流、工地三方数据割裂，信息不对称',
      '异常事件被动应对，缺乏预警机制',
    ],
  },
  after: {
    title: '星筑科技解决方案',
    items: [
      'AI自动匹配供应商并实时报价，采购周期缩短至4小时',
      '价格趋势模型精准预测，智能推荐采购窗口',
      '一物一码全链路数字化追溯，定位问题不到2分钟',
      '供应链全角色在线协同，数据实时贯通',
      '风险自动识别与分级预警，变被动为主动',
    ],
  },
}
