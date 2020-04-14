import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Demo from "../views/Demo.vue";
import Layout from "../views/Basic/Layout.vue";
import Icon from "../views/Basic/Icon.vue";
import Button from "../views/Basic/Button.vue";
import Radio from "../views/Form/Radio.vue";
import Checkbox from "../views/Form/Checkbox.vue";
import Input from "../views/Form/Input.vue";
import Select from "../views/Form/Select.vue";
import DatePicker from "../views/Form/DatePicker.vue";
import TimePicker from "../views/Form/TimePicker.vue";
import Switch from "../views/Form/Switch.vue";
import DateTimePicker from "../views/Form/DateTimePicker.vue";
import Form from "../views/Form/Form.vue";
import Table from "../views/Data/Table.vue";
import Pagination from "../views/Data/Pagination.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "/basic/layout",
        component: Layout
      },
      {
        path: "/basic/icon",
        component: Icon
      },
      {
        path: "/basic/button",
        component: Button
      },
      {
        path: "/form/radio",
        component: Radio
      },
      {
        path: "/form/checkbox",
        component: Checkbox
      },
      {
        path: "/form/input",
        component: Input
      },
      {
        path: "/form/select",
        component: Select
      },
      {
        path: "/form/timepicker",
        component: TimePicker
      },
      {
        path: "/form/datepicker",
        component: DatePicker
      },
      {
        path: "/form/datetimepicker",
        component: DateTimePicker
      },
      {
        path: "/form/switch",
        component: Switch
      },
      {
        path: "/form/form",
        component: Form
      },
      {
        path: "/data/table",
        component: Table
      },
      {
        path: "/data/pagination",
        component: Pagination
      },
      {
        path: "/demo",
        component: Demo
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
