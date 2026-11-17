// Aggregated Python Full Course Curriculum Data (30 Lessons across 6 Modules)
import { MODULES_DATA } from "./modulesData.js";
import { MODULE_1_LESSONS } from "./module1.js";
import { MODULE_2_LESSONS } from "./module2.js";
import { MODULE_3_LESSONS } from "./module3.js";
import { MODULE_4_LESSONS } from "./module4.js";
import { MODULE_5_LESSONS } from "./module5.js";
import { MODULE_6_LESSONS } from "./module6.js";

export { MODULES_DATA };

export const LESSONS_DATA = [
  ...MODULE_1_LESSONS,
  ...MODULE_2_LESSONS,
  ...MODULE_3_LESSONS,
  ...MODULE_4_LESSONS,
  ...MODULE_5_LESSONS,
  ...MODULE_6_LESSONS,
];
