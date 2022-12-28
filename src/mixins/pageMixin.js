export const pageMixin = {
  data() {
    return {
      page: {
        // 分页信息
        pageNo: 1, // 当前页
        limit: 10, // 每页行数
        total: 0, // 列表总数量
      },
      tableList: [], // 列表数据
      loading: false, // 加载列表数据的Loading
      PAGE_SIZES: [5, 10, 20, 30, 50, 100], // 每页行数列表,用于切换每页行数
      LAYOUT: "total, sizes, prev, pager, next, jumper", // Element表格组件中使用的功能
    };
  },
  methods: {
    // 查询列表数据
    queryList() {},
    // 修改当前页
    handleCurrentChange(pageNo) {
      this.page.pageNo = pageNo;
      this.queryList();
    },
    // 修改每页行数
    handleSizeChange(limit) {
      this.page.pageNo = 1;
      this.page.limit = limit;
      this.queryList();
    },
  },
};
