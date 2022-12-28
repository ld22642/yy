<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pageNo"
      :page-sizes="PAGE_SIZES"
      :page-size="page.limit"
      :layout="LAYOUT"
      :total="page.total"
    >
    </el-pagination>
  </div>
</template>
<script>
import { pageMixin } from "@/mixins/pageMixin";
export default {
  mixins: [pageMixin],
  data() {
    return {
      page: {
        total: 10,
      },
    };
  },
  mounted() {},
  methods: {
    queryList() {
      this.page.total += 10;
    },
  },
};
</script>
