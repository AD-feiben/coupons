<template>
  <p v-if="msg" class="official-tip">{{ msg }}</p>

  <!-- profile卡片 -->
  <div
    class="appmsg_card_context wx_profile_card js_wx_profile_card"
    data-id="MzIyMDQyNTc3OA=="
    data-isban="0"
    data-index="0"
    @click="openOfficial"
  >
    <div class="wx_profile_card_bd">
      <div class="wx_profile weui-flex">
        <div class="wx_profile_hd">
          <img class="wx_profile_avatar" src="/img/avatar.png" alt="前端develop" />
        </div>
        <div class="wx_profile_bd weui-flex weui-flex__item">
          <div class="weui-flex__item">
            <strong class="wx_profile_nickname">前端develop</strong>
            <div class="wx_profile_desc">技术分享，Not only front-end!</div>
            <div class="wx_profile_tips">
              <span class="wx_profile_tips_meta">35篇原创内容</span>
            </div>
          </div>
          <i class="weui-icon-arrow"></i>
        </div>
      </div>
    </div>
    <div class="wx_profile_card_ft">公众号</div>
  </div>
</template>

<script lang="ts">
import { isWeixin } from '@/utils'
import { Dialog } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {
      openOfficial: () => {
        if (isWeixin) {
          location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIyMDQyNTc3OA==&subscene=0#wechat_redirect'
          return
        }
        Dialog.confirm({
          title: '请在微信内打开',
          showCancelButton: false,
          confirmButtonColor: '#1989fa'
        })
      }
    }
  }
})
</script>

<style scoped lang="scss">
.official-tip {
  margin-bottom: 0;
}

.wx_profile_card {
  margin: 10px 0 20px;
  line-height: 1.4;
  text-align: left;
  text-decoration: none;
}

.appmsg_card_context {
  position: relative;
  background-color: var(--background-color);
  border-radius: 8px;
  // box-shadow: 0 0 20px 5px var(--shadow-color);
}

.wx_profile {
  padding: 20px 16px;
}

.wx_profile_hd {
  display: flex;
  padding-right: 10px;

  .wx_profile_avatar {
    width: 44px;
    height: 44px !important;
    border-radius: 100%;
  }
}

.wx_profile_bd {
  align-items: center;

  & > .weui-flex__item {
    padding-right: 16px;
  }
}

.weui-flex__item {
  flex: 1;
  min-width: 0;
}

.wx_profile_nickname {
  display: block;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: rgba(0, 0, 0, 0.9);
  font-size: 17px;
  font-weight: 500;
  line-height: 1.2;

  @include dark {
    color: rgba(255, 255, 255, 0.8);
  }
}

.wx_profile_desc {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  margin-top: 4px;

  @include dark {
    color: rgba(255, 255, 255, 0.5);
  }
}
.wx_profile_tips {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  margin-top: 4px;

  @include dark {
    color: rgba(255, 255, 255, 0.5);
  }
}
.weui-flex {
  display: flex;
}

.weui-icon-arrow,
.weui-icon-arrow-bold {
  color: rgba(0, 0, 0, 0.3);

  @include dark {
    color: rgba(255, 255, 255, 0.3);
  }
}

.weui-icon-arrow {
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 24px;
  -webkit-mask-position: 50% 50%;
  mask-position: 50% 50%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100%;
  mask-size: 100%;
  background-color: currentColor;
  -webkit-mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
  mask-image: url(data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M2.454%206.58l1.06-1.06%205.78%205.779a.996.996%200%20010%201.413l-5.78%205.779-1.06-1.061%205.425-5.425-5.425-5.424z%22%20fill%3D%22%23B2B2B2%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E);
}

.wx_profile_card_ft {
  padding: 8px 16px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  position: relative;
  color: rgba(0, 0, 0, 0.3);
  font-size: 14px;

  @include dark {
    color: rgba(255, 255, 255, 0.3);
  }

  &::before {
    content: "";
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 16px;
    right: 16px;

    @include dark {
      border-top-color: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>