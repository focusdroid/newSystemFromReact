/*const menuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
      },
      {
        title: '弹框',
        key: '/ui/modals',
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        title: '全局Message',
        key: '/ui/messages',
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/reg',
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      }
    ]
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order',
    btnList: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '车辆地图',
    key: '/bikeMap'
  },
  {
    title: '图标',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      },
    ]
  },
  {
    title: '权限设置',
    key: '/permission'
  },
];*/

const menuList = [
  {
    title: '待办事项',
    key: '/backlog',
    icon: 'snippets',
    children: [{title: '待办事项', key: '/backlog/backlog'}]
  },
  {
    title: '数据可视化',
    key: '/serviceappli',
    icon: 'user',
    children: [
      {title: '服务申请', key: '/serviceappli/serviceappli'},
      {title: '服务审批', key: '/serviceappli/serviceappros'},
      {title: '服务分诊', key: '/serviceappli/servicediag'},
      {title: '实时访问数据', key: '/serviceappli/servicetrack'},
      {title: '豆瓣电影实时数据', key: '/serviceappli/reimburseapp'},
      {title: '服务报销审批', key: '/serviceappli/reimburseapproval'},
    ]
  },
  {
    title: '服务查询区',
    key: '/searchselfapply',
    icon: 'search',
    children: [
      {title: '申请综合查询', key: '/searchselfapply/searchselfapply'},
      {title: '申请综合查询', key: '/searchselfapply/searchselfreim'}
    ]
  }
]
export default menuList;
