import IMAGES_ACCOUNT from './Account';
import IMAGES_COMMON from './COMMON';
import IMAGES_FORM from './FORM';
import IMAGES_HOME from './HOME';
import IMAGES_LOGIN from './LOGIN';
import IMAGE_ORDER from './ORDER';
import IMAGES_PROFILE from './PROFILE';
import IMAGES_WORK_SHEET from './WORKSHEET';
import IMAGES_SETTING from './SETTING';


const IMAGES = {
  COMMON: {
    ...IMAGES_COMMON,
  },
  LOGIN: {
    ...IMAGES_LOGIN,
  },
  FORM: {
    ...IMAGES_FORM,
  },
  PROFILE: {
    ...IMAGES_PROFILE,
  },
  HOME: {
    ...IMAGES_HOME,
  },
  WORK_SHEET: {
    ...IMAGES_WORK_SHEET,
  },
  ACCOUNT: {
    ...IMAGES_ACCOUNT,
  },
  ORDER: {
    ...IMAGE_ORDER,
  },
  SETTING: {
    ...IMAGES_SETTING,
  }
};

export default IMAGES;
