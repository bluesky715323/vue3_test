<script setup lang="ts">
import { reactive } from "vue";
import menuImage1 from "@/assets/images/folder.png";
import menuImage2 from "@/assets/images/heart.png";
import menuImage3 from "@/assets/images/edit.png";
import menuImage4 from "@/assets/images/service.png";
import userAvatar from "@/assets/images/avatar.png";
import memberAvatar1 from "@/assets/images/avatar_1.png";
import memberAvatar2 from "@/assets/images/avatar_2.png";

const menuList = [
  { img: menuImage1, text: "健康档案", bgColor: "#EAFEFA" },
  { img: menuImage2, text: "健康记录", bgColor: "#FFF4E6" },
  { img: menuImage3, text: "签约信息", bgColor: "#E9F1FF" },
  { img: menuImage4, text: "服务记录", bgColor: "#FFF7DA" },
];

let personInfo = reactive({
  avatar: userAvatar,
  name: "翟枫君",
  isSigned: true,
  mainInfo: {
    idCard: "334526489542563345",
    sex: 0,
    age: 26,
    phone: "13800138000",
    address: "广东省佛山市南海区大沥镇五一村3号",
    source: "医生建档",
    issues: ["高血压", "低血糖"],
  },
  memberInfo: [
    {
      avatar: memberAvatar1,
      name: "韦栋",
      age: 58,
      sex: 0,
      relationship: "母亲",
    },
    {
      avatar: memberAvatar2,
      name: "布馨昭",
      age: 60,
      sex: 1,
      relationship: "父亲",
    },
  ],
});
</script>

<template>
  <!-- background -->
  <div class="top-bg" />

  <div class="container">
    <!-- back button -->
    <my-ui-back color="#fff" />
    <div class="vseperator-box-100" />
    <!-- avatar & menu -->
    <div class="card">
      <my-ui-avatar
        class="user-avatar"
        style="top: -40px"
        :width="80"
        :height="80"
        borderWidth="4px"
        :src="personInfo.avatar"
      />
      <div class="user-name">{{ personInfo.name }}</div>
      <van-tag
        :class="`tag ${personInfo.isSigned ? 'tag-green' : 'tag-red'}`"
        plain
        >{{ personInfo.isSigned ? "已签约" : "未签约" }}</van-tag
      >
      <div class="vseperator-box-20" />
      <!-- menu items -->
      <van-grid
        style="width: 100%"
        direction="horizontal"
        :column-num="4"
        :border="false"
      >
        <van-grid-item v-for="(item, index) in menuList" :key="index">
          <my-ui-menu
            :icon="item.img"
            :name="item.text"
            :bgColor="item.bgColor"
          />
        </van-grid-item>
      </van-grid>
    </div>

    <!-- personal info list -->
    <div class="section">
      <div class="section-title">个人信息</div>
      <div class="section-container">
        <div>
          <my-ui-info-row name="身份证号" :value="personInfo.mainInfo.idCard" />
          <div style="margin: 0 16px; height: 1px; background: #ddd" />
        </div>
        <div>
          <my-ui-info-row name="性别" :value="personInfo.mainInfo.sex" />
          <div style="margin: 0 16px; height: 1px; background: #ddd" />
        </div>
        <div>
          <my-ui-info-row name="年龄" :value="personInfo.mainInfo.age" />
          <div style="margin: 0 16px; height: 1px; background: #ddd" />
        </div>
        <div>
          <my-ui-info-row name="联系电话" :value="personInfo.mainInfo.phone" />
          <div style="margin: 0 16px; height: 1px; background: #ddd" />
        </div>
        <div>
          <my-ui-info-row name="现居地" :value="personInfo.mainInfo.address" />
          <div style="margin: 0 16px; height: 1px; background: #ddd" />
        </div>
        <div>
          <my-ui-info-row name="居民来源" :value="personInfo.mainInfo.source" />
          <div style="margin: 0 16px; height: 1px; background: #ddd" />
        </div>
        <div>
          <my-ui-info-row name="病史">
            <van-space wrap>
              <van-tag
                v-for="(item, index) in personInfo.mainInfo.issues"
                :key="`issues_${index}`"
                :class="`tag ${index === 0 ? 'tag-green' : 'tag-red'}`"
                plain
                >{{ item }}</van-tag
              >
            </van-space>
          </my-ui-info-row>
        </div>
      </div>
    </div>

    <!-- member list -->
    <div class="section">
      <div class="section-title">家庭成员</div>
      <div class="section-container">
        <div class="section-main">
          <van-grid
            style="width: 100%"
            direction="horizontal"
            :column-num="2"
            :border="false"
          >
            <van-grid-item v-for="(item, index) in personInfo.memberInfo" :key="`member_${index}`">
              <member-panel
                style="flex: 1"
                :name="item.name"
                :age="item.age"
                :sex="item.sex"
                :relationship="item.relationship"
                :avatar="item.avatar"
              />
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
    <div class="vseperator-box-60" />

    <!-- bottom button -->
    <van-button type="primary" block>添加服务</van-button>
  </div>
</template>

<style lang="less" scoped>
.top-bg {
  width: 750px;
  height: 350px;
  background: var(--theme-primary-color);
  position: fixed;
  top: 0;
}
.container {
  position: relative;
  margin: 40px 20px;
  .card {
    position: relative;
    background: #fff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 0 30px;
    .user-name {
      font-size: 32px;
      line-height: 2;
    }
    .user-avatar {
      position: absolute;
    }
  }
  .section {
    margin: 40px 0 0;
    .section-title {
      margin-bottom: 20px;
    }
    .section-container {
      background: #fff;
      border-radius: 16px;
      .section-main {
        padding: 24px;
      }
    }
  }

  .tag {
    font-size: 22px;
    padding: 12px 16px;
    border-radius: 8px;
  }
  .tag-green {
    color: #49b9ad;
    background: #eafefa;
  }
  .tag-red {
    color: #fb7f54;
    background: #fff2e8;
  }
}
.van-button--block {
  font-size: 30px;
  height: 80px;
  border: none;
  border-radius: 16px;
  background: var(--theme-primary-color);
}
</style>
