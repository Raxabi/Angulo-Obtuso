import { Routes } from '@angular/router';
import { Ch1 }    from '@app/pages/ch1/ch1';
import { Ch2 }    from '@app/pages/ch2/ch2';
import { Ch3 }    from '@app/pages/ch3/ch3';
import { Ch21 }   from '@app/pages/ch2-1/ch2-1';
import { Ch23 }   from '@app/pages/ch2-3/ch2-3';
import { Ch22 }   from '@app/pages/ch2-2/ch2-2';

export const routes: Routes = [
  { path: 'ch1', component: Ch1 },
  { path: 'ch2', component: Ch2, children: [
    { path: 'ch2-1', component: Ch21 },
    { path: 'ch2-2', component: Ch22 },
    { path: 'ch2-3', component: Ch23 },
  ]},
  { path: 'ch3', component: Ch3 }
];
