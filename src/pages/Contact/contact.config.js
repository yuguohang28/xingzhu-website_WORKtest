// === Xingzhu Technology - Contact Page Configuration ===

export const FORM_CONFIG = {
  INITIAL_STATE: {
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  },

  VALIDATION: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      message: {
        required: '请输入您的姓名',
        minLength: '姓名至少需要2个字符',
        maxLength: '姓名不能超过50个字符',
      },
    },
    company: {
      required: false,
      maxLength: 100,
      message: {
        maxLength: '公司名称不能超过100个字符',
      },
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: {
        required: '请输入您的邮箱地址',
        pattern: '请输入有效的邮箱地址',
      },
    },
    phone: {
      required: false,
      pattern: /^1[3-9]\d{9}$|^0\d{2,3}-\d{7,8}$/,
      message: {
        pattern: '请输入有效的电话号码（如 13800138000 或 021-58886688）',
      },
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 2000,
      message: {
        required: '请简要描述您的需求',
        minLength: '需求描述至少需要10个字符',
        maxLength: '需求描述不能超过2000个字符',
      },
    },
  },

  SUBMIT_DURATION: 1500,

  RESPONSE_TIME_TEXT: '我们会在24小时内与您联系，请耐心等待',

  SUCCESS_TITLE: '提交成功',
  SUCCESS_DESCRIPTION:
    '感谢您的咨询！我们的商务团队将在24小时内通过您留下的联系方式与您对接。',
  SUCCESS_BUTTON_TEXT: '重新填写',

  REQUIRED_FIELDS: ['name', 'email', 'message'],
}

export const PAGE_META = {
  TITLE: '联系我们 - 星筑科技',
  DESCRIPTION:
    '与星筑科技取得联系，了解AI建材供应链解决方案如何助力您的业务升级',
}
