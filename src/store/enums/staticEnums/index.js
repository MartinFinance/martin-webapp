const staticEnums = {
  // yes or no
  yesOrNo: [
    {
      value: 0,
      label: '否',
    },
    {
      value: 1,
      label: '是',
    },
  ],

  // 启用禁用
  onOrOff: [
    {
      value: false,
      label: '停用',
    },
    {
      value: true,
      label: '启用',
    },
  ],

  valueType: [
    {
      value: 'FLOAT',
      label: '浮点数',
    },
    {
      value: 'INT',
      label: '整数',
    },
    {
      value: 'BOOLEAN',
      label: '布尔型',
    },
    {
      value: 'STRING',
      label: '字符串',
    },
    {
      value: 'ENUM',
      label: '枚举类型',
    },
  ],
};

export default staticEnums;
