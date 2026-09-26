import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_ONE_EVENT } from './100-meter/1';
import { RUN_100M_CATEGORY_TWO_EVENT } from './100-meter/2';
import { RUN_100M_CATEGORY_THREE_EVENT } from './100-meter/3';
import { RUN_100M_CATEGORY_FOUR_EVENT } from './100-meter/4';
import { RUN_100M_CATEGORY_FIVE_EVENT } from './100-meter/5';
import { RUN_100M_CATEGORY_SIX_EVENT } from './100-meter/6';
import { RUN_100M_CATEGORY_SEVEN_EVENT } from './100-meter/7';
import { RUN_1KM_CATEGORY_ONE_EVENT } from './1-km/1';
import { RUN_1KM_CATEGORY_TWO_EVENT } from './1-km/2';
import { RUN_1KM_CATEGORY_THREE_EVENT } from './1-km/3';
import { RUN_1KM_CATEGORY_FOUR_EVENT } from './1-km/4';
import { RUN_1KM_CATEGORY_FIVE_EVENT } from './1-km/5';
import { RUN_1KM_CATEGORY_SIX_EVENT } from './1-km/6';
import { RUN_1KM_CATEGORY_SEVEN_EVENT } from './1-km/7';


/**
 * سجل الأقسام: كل اختبار رياضي في التطبيق.
 * لإضافة رياضة جديدة: أنشئ مجلداً لها تحت lib/sports باسم الرياضة،

 * ثم أضف الحدث المُصدَّر منه إلى هذه القائمة فقط.
 */
export const SPORT_EVENTS: SportEvent[] = [ 
  RUN_100M_CATEGORY_ONE_EVENT,
  RUN_100M_CATEGORY_TWO_EVENT,
  RUN_100M_CATEGORY_THREE_EVENT,
  RUN_100M_CATEGORY_FOUR_EVENT,
  RUN_100M_CATEGORY_FIVE_EVENT,
  RUN_100M_CATEGORY_SIX_EVENT,
  RUN_100M_CATEGORY_SEVEN_EVENT,
  RUN_1KM_CATEGORY_ONE_EVENT,
  RUN_1KM_CATEGORY_TWO_EVENT,
  RUN_1KM_CATEGORY_THREE_EVENT,
  RUN_1KM_CATEGORY_FOUR_EVENT,
  RUN_1KM_CATEGORY_FIVE_EVENT,
  RUN_1KM_CATEGORY_SIX_EVENT,
  RUN_1KM_CATEGORY_SEVEN_EVENT
]

export function getSportEvent(eventId: string): SportEvent | undefined {
  return SPORT_EVENTS.find((event) => event.id === eventId)
}
