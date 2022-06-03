import * as d from 'date-fns';
import * as dtz from 'date-fns-tz';
import * as dot from 'dot';
import pino from 'pino';

const OUT_TEMPLATE = dot.template('Tomorrow in Helsinki it is: {{=it.output}}');

export async function exec(): Promise<string> {
  const date = new Date();
  const timeZone = 'Europe/Helsinki';
  const zonedDate = dtz.utcToZonedTime(date, timeZone);
  const targetDate = d.addDays(zonedDate, 1);

  return OUT_TEMPLATE({ output: d.format(targetDate, 'GG yyyy-MMM-dd cccc') });
}

(async () => {
  const logger = pino();
  logger.info(await exec());
})();
