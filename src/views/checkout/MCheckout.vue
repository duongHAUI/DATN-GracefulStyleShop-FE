<template>
  <div class="checkout">
    <div class="co-address">
      <h1>Địa Chỉ Nhận Hàng</h1>
      <div class="co-info">
        <div class="co-st">
          <div>Nguyễn Văn Dương</div>
          <div>0328669614</div>
        </div>
        <div class="co-address-detail">
          Cty Tnhh Changchun Vina, lô b, Đường D 1, Cụm Cn An Ngãi, Xã An Ngãi,
          Huyện Long Điền, Bà Rịa - Vũng Tàu
        </div>
        <div class="co-address-btn">Thay đổi</div>
      </div>
    </div>
  </div>

  <m-pop-up :isShow="true" minWidth="600px">
    <template #header>
      <h4>Địa chỉ của bạn</h4>
      <hr>
    </template>
    <div class="" v-if="formMode == 0">
      <div class="address-customer">
        <div class="radio-default">
          <m-radio-button :checked="true" />
        </div>
        <div class="body-address">
          <div class="i-f-address">
            nguyen avan duogn<span>0328669614</span>
          </div>
          <div class="i-f-address-detail">
            Cty Tnhh Changchun Vina, lô b, Đường D 1, Cụm Cn An Ngãi
          </div>
          <div class="btn-default-address">mặc định</div>
        </div>
        <div class="acction-address">Cập nhật</div>
      </div>
      <div class="address-customer">
        <div class="radio-default">
          <m-radio-button :checked="true" />
        </div>
        <div class="body-address">
          <div class="i-f-address">
            nguyen avan duogn<span>0328669614</span>
          </div>
          <div class="i-f-address-detail">
            Cty Tnhh Changchun Vina, lô b, Đường D 1, Cụm Cn An Ngãi
          </div>
          <div class="btn-default-address">mặc định</div>
        </div>
        <div class="acction-address">Cập nhật</div>
      </div>
      <div class="address-customer">
        <div class="radio-default">
          <m-radio-button :checked="false" />
        </div>
        <div class="body-address">
          <div class="i-f-address">
            nguyen avan duogn<span>0328669614</span>
          </div>
          <div class="i-f-address-detail">
            Cty Tnhh Changchun Vina, lô b, Đường D 1, Cụm Cn An Ngãi
          </div>
          <div class="btn-default-address">mặc định</div>
        </div>
        <div class="acction-address">Cập nhật</div>
      </div>
      <div class="address-customer">
        <div class="radio-default">
          <m-radio-button :checked="false" />
        </div>
        <div class="body-address">
          <div class="i-f-address">
            nguyen avan duogn<span>0328669614</span>
          </div>
          <div class="i-f-address-detail">
            Cty Tnhh Changchun Vina, lô b, Đường D 1, Cụm Cn An Ngãi
          </div>
          <div class="btn-default-address">mặc định</div>
        </div>
        <div class="acction-address">Cập nhật</div>
      </div>
      <div class="add-address" @click="formMode = 1">
        <div class="icon-add"></div>
        Thêm địa chỉ
      </div>
    </div>
    <div class="m__e-form" v-else-if="formMode == 1">
      <div class="form__row" style="width: 100%">
        <div class="form__row f-bw" style="width: 48%">
          <MInput
            textField="Họ và tên"
            v-model="formData.Receiver"
            :required="true"
            ref="Receiver"
            name="Receiver"
            :tabIndex="1"
            :errorMsg="errorMsgObject?.Receiver"
            :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|100`]"
            @message-error-input="handleBindMessageInput"
          />
        </div>
        <div class="form__col" style="width: 48%">
          <MInput
            textField="Số điện thoại"
            v-model="formData.Phone"
            :required="true"
            ref="Phone"
            name="Phone"
            :tabIndex="2"
            :errorMsg="errorMsgObject?.Phone"
            type="number"
            :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|20`]"
            @message-error-input="handleBindMessageInput"
          />
        </div>
      </div>
      <div class="form__row" style="width: 100%">
        <div class="form__row f-bw" style="width: 32%">
          <MCombobox
            :data="Provinces"
            v-model="ProvinceID"
            ref="ProvinceID"
            propName="RegionName"
            propValue="RegionID"
            :rules="[rules.NOT_EMPTY]"
            name="Provinces"
            textField="Tỉnh"
            :tabIndex="6"
            :required="true"
            :errorMsg="errorMsgObjectInput?.ProvinceID"
            @message-error-input="handleBindMessageInput"
          />
        </div>
        <div class="form__row f-bw" style="width: 32%">
          <MCombobox
            :data="Districts"
            v-model="DistrictID"
            ref="DistrictID"
            propName="RegionName"
            propValue="RegionID"
            :rules="[rules.NOT_EMPTY]"
            name="Districts"
            textField="Huyện"
            :tabIndex="6"
            :required="true"
            :errorMsg="errorMsgObjectInput?.DistrictID"
            @message-error-input="handleBindMessageInput"
          />
        </div>
        <div class="form__row f-bw" style="width: 32%">
          <MCombobox
            :data="Wards"
            v-model="WardID"
            ref="WardID"
            propName="RegionName"
            propValue="RegionID"
            :rules="[rules.NOT_EMPTY]"
            name="Wards"
            textField="Xã"
            :tabIndex="6"
            :required="true"
            :errorMsg="errorMsgObjectInput?.WardID"
            @message-error-input="handleBindMessageInput"
          />
        </div>
      </div>
      <div class="m-t-20"></div>
      <MInput
        textField="Địa chỉ cụ thể"
        v-model="formData.Address"
        :required="true"
        ref="Address"
        name="Address"
        :tabIndex="2"
        :errorMsg="errorMsgObject?.Address"
        :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|255`]"
        @message-error-input="handleBindMessageInput"
      />
    </div>
    <template #footer>
      <hr />
      <div class="m-f-bw">
        <div @click="isPopUpDelete = false">
          <m-button typeBtn="close" v-if="formMode == 0">Hủy</m-button>
          <m-button typeBtn="close" v-if="formMode == 1" @click="formMode = 0"
            >Trở lại</m-button
          >
        </div>
        <div>
          <m-button backgroundColor="red" v-if="formMode == 0"
            >Cập nhật</m-button
          >
          <m-button backgroundColor="blue" v-if="formMode == 1">Thêm</m-button>
        </div>
      </div>
    </template>
  </m-pop-up>
</template>
<script>
import MPopUp from "@/components/pop-up/MPopUp.vue";
import MButton from "@/components/button/MButton.vue";
import MRadioButton from "@/components/radio-button/MRadioButton.vue";
import resources from "@/common/resource";
import MInput from "@/components/input/MInput.vue";
import MCombobox from "@/components/combobox/MCombobox.vue";
import mixinForm from "@/mixins/mixinForm.js";
import regionApi from "@/api/regionApi";
export default {
  name: "MCheckout",
  components: {
    MPopUp,
    MButton,
    MRadioButton,
    MInput,
    MCombobox,
  },
  created: async function () {
    // eslint-disable-next-line no-debugger
    debugger;
    var data = await this.api.getRegionByParentId(234);
    this.Provinces = data ? data : [];
  },
  mixins: [mixinForm],
  data() {
    return {
      formData: {},
      rules: resources.FORM_RULES, // Rules validate
      formMode: 0, // 0 chọn dịa chỉ , 1 là thêm địa chỉ
      Provinces: [],
      Districts: [],
      Wards: [],
      ProvinceID: 0,
      DistrictID: 0,
      WardID: 0,
      api: new regionApi(),
    };
  },
  watch: {
    ProvinceID: async function () {
      this.DistrictID = 0;
      var data = await this.api.getRegionByParentId(this.ProvinceID);
      this.Districts = data ? data : [];
    },
    DistrictID: async function () {
      this.WardID = 0;
      var data = await this.api.getRegionByParentId(this.DistrictID);
      this.Wards = data ? data : [];
    },
  },
};
</script>
<style scoped>
.header,
.footer {
  display: none !important;
}
.co-address {
  margin-top: 20px;
  background-color: white;
  padding: 20px;
}
.co-address h1 {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: #ee4d2d;
  margin-bottom: 20px;
  text-transform: capitalize;
  flex: 1 1 auto;
}
.co-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.co-st {
  flex-basis: 20%;
  font-weight: bold;
}
.co-address-detail {
  flex-basis: 70%;
  text-align: center;
}
.co-address-btn {
  flex-basis: 10%;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
}
.m-pop-up__main{
  max-height: 200px !important; 
}
.address-customer {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bcbaba;
  padding:8px 0 12px 0 ;
}
.i-f-address {
  font-weight: 600;
}
.i-f-address span {
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid #a7a4a4;
  font-weight: 400;
}
.acction-address {
  color: rgb(29, 76, 244);
}
.i-f-address-detail {
  padding: 8px 0;
}
.btn-default-address {
  padding: 4px 8px;
  border: 1px solid #d57373;
  width: max-content;
  font-size: 12px;
  color: red;
  border-radius: 4px;
}
.add-address {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border: 1px solid var(--input-primary);
  width: max-content;
  cursor: pointer;
  border-radius: 4px;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
}
.add-address .icon-add {
  margin-right: 8px;
}
</style>
