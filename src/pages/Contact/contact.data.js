// === Xingzhu Technology - Contact Page Data ===

export const FORM_FIELDS = [
  {
    name: 'name',
    label: '姓名',
    type: 'text',
    placeholder: '请输入您的姓名',
    autoComplete: 'name',
  },
  {
    name: 'company',
    label: '公司',
    type: 'text',
    placeholder: '请输入您所在的公司',
    autoComplete: 'organization',
  },
  {
    name: 'email',
    label: '邮箱',
    type: 'email',
    placeholder: '请输入您的邮箱地址',
    autoComplete: 'email',
  },
  {
    name: 'phone',
    label: '电话',
    type: 'tel',
    placeholder: '请输入您的联系电话',
    autoComplete: 'tel',
  },
  {
    name: 'message',
    label: '需求描述',
    type: 'textarea',
    placeholder: '请简要描述您的需求或问题...',
    autoComplete: 'off',
    rows: 4,
  },
]

export const CONTACT_METHODS = [
  {
    icon: 'Mail',
    title: '电子邮箱',
    value: 'contact@xingzhu.tech',
    href: 'mailto:contact@xingzhu.tech',
    description: '我们会在24小时内回复您的邮件',
  },
  {
    icon: 'Phone',
    title: '联系电话',
    value: '021-5888-6688',
    href: 'tel:+862158886688',
    description: '工作日 9:00 - 18:00',
  },
  {
    icon: 'MapPin',
    title: '公司地址',
    value: '上海市浦东新区张江高科技园区',
    description: '碧波路888号华虹科技园2号楼3层',
  },
]

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: '星筑科技主要提供哪些服务？',
    answer: '星筑科技专注于通过AI技术重构建材供应链，主要服务包括：智能采购管理系统、供应商智能匹配、建材质量AI检测、供应链金融风控、以及全链路数字化解决方案。我们帮助建材企业实现从采购到交付的全流程智能化升级。',
  },
  {
    id: 'faq-2',
    question: '合作流程是怎样的？',
    answer: '合作流程分为四步：首先通过网站表单或电话与我们取得联系，我们的商务团队会在24小时内与您对接；其次进行需求调研与方案设计，深入了解您的业务场景；然后进行系统部署与定制化配置；最后提供持续的运维支持与迭代升级服务。',
  },
  {
    id: 'faq-3',
    question: '技术支持和售后服务的周期是多久？',
    answer: '我们提供标准的一年免费技术支持和运维服务，包含系统故障排查、功能优化咨询和紧急问题响应。同时提供可选的长期运维服务包，客户可根据实际需求选择按年续约。紧急问题我们承诺4小时内响应，常规问题24小时内响应。',
  },
]

export const OFFICE_LOCATIONS = [
  {
    city: '上海（总部）',
    address: '上海市浦东新区张江高科技园区碧波路888号华虹科技园2号楼3层',
    phone: '021-5888-6688',
    hours: '工作日 9:00 - 18:00',
  },
  {
    city: '北京（分公司）',
    address: '北京市海淀区中关村软件园二期E栋8层',
    phone: '010-8260-6688',
    hours: '工作日 9:00 - 18:00',
  },
]
