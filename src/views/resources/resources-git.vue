<template>
  <div class="resources-git">
    <el-descriptions direction="vertical" :column="1" border>
      <el-descriptions-item label="名字">gitee</el-descriptions-item>
      <el-descriptions-item label="官网">
        <el-link href="https://gitee.com/" target="_blank" type="primary"
          >https://gitee.com/</el-link
        >
      </el-descriptions-item>
      <el-descriptions-item label="Git 的特点">
        <div class="titleBox" v-for="item in characteristicList" :key="item.id">
          <span class="title"></span> {{ item.title }}
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="Git 的常用代码">
        <div class="titleBox" v-for="item in commonUserList" :key="item.id">
          <span class="title"></span> {{ item.title }}
        </div>
        <el-link
          href="https://blog.csdn.net/qq_38111015/article/details/84885809"
          target="_blank"
          type="primary"
          >查看更多命令</el-link
        >
      </el-descriptions-item>
      <el-descriptions-item label="Git 与 SVN 区别">
        <div class="titleBox" v-for="item in distinctionList" :key="item.id">
          <span class="title"></span> {{ item.title }}
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="Git 的作用"
        >Git 是用于 Linux 内核开发的版本控制工具。与常用的版本控制工具 CVS,
        Subversion
        等不同，它采用了分布式版本库的方式，不必服务器端软件支持（wingeddevil
        注：这得分是用什么样的服务端，使用 http 协议或者 git
        协议等不太一样。并且在 push 和 pull
        的时候和服务器端还是有交互的。），使源代码的发布和交流极其方便。 Git
        的速度很快，这对于诸如 Linux kernel 这样的大项目来说自然很重要。 Git
        最为出色的是它的合并跟踪（merge tracing）能力。</el-descriptions-item
      >
      <el-descriptions-item label="Git 的缺点">
        <div class="titleBox" v-for="item in defectList" :key="item.id">
          <span class="title"></span> {{ item.title }}
        </div>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characteristicList: [
        {
          id: 1,
          title: "分支更快、更容易。",
        },
        {
          id: 2,
          title: "支持离线工作；本地提交可以稍后提交到服务器上。",
        },
        {
          id: 3,
          title:
            "Git 提交都是原子的，且是整个项目范围的，而不像 CVS 中一样是对每个文件的。",
        },
        {
          id: 4,
          title: "Git 中的每个工作树都包含一个具有完整项目历史的仓库。",
        },
      ],
      distinctionList: [
        {
          id: 1,
          title: "GIT 是分布式的，SVN 不是",
        },
        {
          id: 2,
          title: "GIT 把内容按元数据方式存储，而 SVN 是按文件",
        },
        {
          id: 3,
          title: "GIT 分支和 SVN 的分支不同",
        },
        {
          id: 4,
          title: "GIT 没有一个全局的版本号，而 SVN 有",
        },
        {
          id: 5,
          title: "GIT 的内容完整性要优于 SVN",
        },
      ],
      defectList: [
        {
          id: 1,
          title: "学习资料少。",
        },
        {
          id: 2,
          title: "学习周期相对而言比较长。",
        },
        {
          id: 3,
          title: "不符合常规思维。",
        },
        {
          id: 4,
          title: "代码保密性差。",
        },
      ],
      commonUserList: [
        {
          id: 1,
          title: "git init // 初始化 在工作路径上创建主分支",
        },
        {
          id: 2,
          title: "git clone 地址 // 克隆远程仓库",
        },
        {
          id: 3,
          title: "git clone -b 分支名 地址 // 克隆分支的代码到本地",
        },
        {
          id: 4,
          title: "git status // 查看状态",
        },
        {
          id: 5,
          title: "git add 文件名 // 将某个文件存入暂存区",
        },
        {
          id: 6,
          title:
            "git checkout -- file // 撤销工作区的修改 例如git checkout -- readMe.txt 将本次readMe.txt在工作区的修改撤销掉",
        },
        {
          id: 7,
          title: "git add b c //把b和c存入暂存区",
        },
        {
          id: 8,
          title: "git add . // 将所有文件提交到暂存区",
        },
        {
          id: 9,
          title: "git add -p 文件名 // 一个文件分多次提交",
        },
        {
          id: 10,
          title:
            "git stash -u -k // 提交部分文件内容 到仓库 例如本地有3个文件 a b c 只想提交a b到远程仓库 git add a b 然后 git stash -u -k 再然后git commit -m '备注信息' 然后再push push之后 git stash pop 把之前放入堆栈的c拿出来 继续下一波操作",
        },
        {
          id: 11,
          title: "git commit -m '提交的备注信息'  // 提交到仓库",
        },
        {
          id: 12,
          title: "git pull  // 拉取远程仓库代码",
        },
        {
          id: 13,
          title: "git push  // 推送本地代码到远程仓库",
        },
        {
          id: 14,
          title: "git merge '分支名字'  // 合并分支代码",
        },
        {
          id: 15,
          title: "git checkout '分支名字'  // 切换分支",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.resources-git {
  // height: 80%;
  .titleBox {
    display: flex;
    align-items: center;
    .title {
      display: inline-block;
      background: #000;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      margin-right: 5px;
      opacity: 0.7;
    }
  }
}
</style>
